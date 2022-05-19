export const initialState = {
    counters: [],
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_COUNTER':
            return {
                ...state,
                counters: [...state.counters, action.payload],
            };

        case 'REMOVE_COUNTER':
            const index = state.counters.findIndex((item) => item.id === action.payload);
            let newCounters = [...state.counters];

            if (index < 0 ) {
                console.warn(`counter not found`);
                return;
            }

            newCounters.splice(index, 1);

            return {
                ...state,
                counters: newCounters,
            } 

        default:
            return state;
    }
}

export default reducer;