
export const FILMS_HAVE_ERRORED = 'FILMS_HAVE_ERRORED';
export const FILMS_ARE_LOADING = 'FILMS_ARE_LOADING';
export const FILMS_FETCH_DATA_SUCCESS = 'FILMS_FETCH_DATA_SUCCESS';

function filmsHaveErrored(message) {
    return {
        type: FILMS_HAVE_ERRORED,
        error: message
    };
}

function filmsAreLoading(bool) {
    return {
        type: FILMS_ARE_LOADING,
        isLoading: bool
    };
}

function filmsFetchDataSuccess(films, total) {
    return {
        type: FILMS_FETCH_DATA_SUCCESS,
        films,
        total
    };
}

export const apiKey = '136694e1';

export function getFilms(title, page) {
    return (dispatch) => {
        dispatch(filmsAreLoading(true));
        window.fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${title}&page=${page}`)
            .then((response) => {
                if (!response.ok) {
                    dispatch(filmsAreLoading(false));
                    window.alert(response.statusText);
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((response) => {
                if (response.Response === "False") {
                    throw response.Error;
                }
                dispatch(filmsAreLoading(false));
                const searchResults = response.Search.map((items) => {
                    const { Title, Year, imdbID } = items;
                    return { Title, Year, imdbID };
                });
                dispatch(filmsFetchDataSuccess(searchResults, response.totalResults));
            })
            .catch((error) => {
                dispatch(filmsAreLoading(false));
                dispatch(filmsHaveErrored(error));
                window.alert(error);
            });
    }
}
