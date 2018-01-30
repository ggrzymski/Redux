//State is not application state, only the state that reducer is responsible for.
// Reducer is called whenever an action is called
// When our app first boots up, state is going to be null.
// Need to have reasonable default state

export default function(state = null, action) {
    switch(action.type) {
        case 'BOOK_SELECTED':
         return action.payload;
    }
    return state
}