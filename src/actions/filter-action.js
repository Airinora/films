export const CHANGE_WATCHED_ACTIVE_PAGE = 'CHANGE_WATCHED_ACTIVE_PAGE';
export const CHANGE_ACTIVE_PAGE = 'CHANGE_ACTIVE_PAGE';
export const CHANGE_TITLE = 'CHANGE_TITLE';
export const CHANGE_FAVOURITE_ACTIVE_PAGE = 'CHANGE_FAVOURITE_ACTIVE_PAGE';

export function changeActivePage(activePage) {
    return {
        type: CHANGE_ACTIVE_PAGE,
        activePage
    }
}

export function changeTitle(value) {
    return {
        type: CHANGE_TITLE,
        title: value,
        activePage: 1
    }
}

export function changeWatchedActivePage(activePage) {
    return {
        type: CHANGE_WATCHED_ACTIVE_PAGE,
        activePage
    }
}

export function changeFavouriteActivePage(activePage) {
    return {
        type: CHANGE_FAVOURITE_ACTIVE_PAGE,
        activePage
    }
}
