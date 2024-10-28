export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';
export const DELETE_TODO = 'DELETE_TODO';

const apiLink = 'https://6703edfdab8a8f8927323f9c.mockapi.io/api/todolist';

export const fetchTodos = () => {
    return async (dispatch) => {
        dispatch({ type: FETCH_TODOS_REQUEST });
        try {
            const response = await fetch(apiLink);
            const data = await response.json();
            dispatch({ type: FETCH_TODOS_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: FETCH_TODOS_FAILURE, error: error.message });
        }
    };
};

export const deleteTodo = (id) => {
    return async (dispatch) => {
        await fetch(`${apiLink}/${id}`, { method: 'DELETE' });
        dispatch({ type: DELETE_TODO, payload: id });
    };
};