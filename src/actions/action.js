export const CLICK_PLUS = 'CLICK_PLUS';
export const CLICK_MINUS = 'CLICK_MINUS';
export const FILMS_HAVE_ERRORED = 'FILMS_HAVE_ERRORED';
export const FILMS_ARE_LOADING = 'FILMS_ARE_LOADING';
export const FILMS_FETCH_DATA_SUCCESS = 'FILMS_FETCH_DATA_SUCCESS';

export function clickPlus() {
    return {
        type: CLICK_PLUS
    }
}
export function clickMinus() {
    return {
        type: CLICK_MINUS
    }
}

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

const apiKey = '136694e1';

export function getFilms(title, page, id) {
    return (dispatch) => {
        dispatch(filmsAreLoading(true));
        window.fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${title}&page=${page}&i=${id}`)
            .then((response) => {
                if (!response.ok) {
                    dispatch(filmsAreLoading(false));
                    // console.log('111');
                    // console.log(response.statusText);
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((response) => {
                if (response.Response === "False") {
                    // console.log('222');
                    // console.log(response.Error);
                    throw response.Error;
                }
                dispatch(filmsAreLoading(false));
                dispatch(filmsFetchDataSuccess(response.Search, response.totalResults));
            })
            .catch((error) => {
                dispatch(filmsHaveErrored(error));
                // console.log('333');
                // console.log(error);
                dispatch(filmsAreLoading(false));
            });
    }
}
