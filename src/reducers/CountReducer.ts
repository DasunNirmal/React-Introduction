export const initialState = 0;
export function CountReducer (state = initialState, action: {type: string, payload: number}) {
    switch (action.type) {
        case 'ADD':
            return state + action.payload;
        case 'REMOVE':
            return state - action.payload;
        default:
            return state;
    }
}