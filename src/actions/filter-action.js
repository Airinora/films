
export const CHANGE_ACTIVE_PAGE = 'CHANGE_ACTIVE_PAGE';
export const CHANGE_TITLE = 'CHANGE_TITLE';

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
