export function selectBook(book) {
    return {
        // selectBook is an action creator, it needs to return an action.
        // An object with type property

        type: 'BOOK_SELECTED',
        payload: book
    };
}