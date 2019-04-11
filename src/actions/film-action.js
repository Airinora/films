import { apiKey } from './action'

export const FILM_HAS_ERRORED = 'FILM_HAS_ERRORED';
export const FILM_IS_LOADING = 'FILM_IS_LOADING';
export const FILM_BY_ID = 'FILM_BY_ID';

function filmHasErrored(message) {
    return {
        type: FILM_HAS_ERRORED,
        error: message
    };
}

function filmIsLoading(bool) {
    return {
        type: FILM_IS_LOADING,
        isLoading: bool
    };
}

export function getFilmById(id) {
    return (dispatch) => {
        dispatch(filmIsLoading(true));
        window.fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${id}`)
            .then((response) => {
                if (!response.ok) {
                    dispatch(filmIsLoading(false));
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
                dispatch(filmIsLoading(false));
                dispatch({
                    type: FILM_BY_ID,
                    film: response
                });
            })
            .catch((error) => {
                dispatch(filmIsLoading(false));
                dispatch(filmHasErrored(error));
                window.alert(error);
            });
    }
}