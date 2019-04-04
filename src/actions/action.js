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

export function filmsHaveErrored(bool) {
    return {
        type: FILMS_HAVE_ERRORED,
        hasErrored: bool
    };
}

export function filmsAreLoading(bool) {
    return {
        type: FILMS_ARE_LOADING,
        isLoading: bool
    };
}

export function filmsFetchDataSuccess(films) {
    return {
        type: FILMS_FETCH_DATA_SUCCESS,
        films
    };
}
