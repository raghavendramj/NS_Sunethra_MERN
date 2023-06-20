
export const mytodoreducer = (state = [], action) => { 
    switch (action.type) {
        case 'add_todo': return [
            ...state,
            {
                id: action.id,
                text: action.text,
                completed: false 
            }
        ]
    }
};
