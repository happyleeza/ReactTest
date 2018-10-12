import * as types from '../actions/actionTypes'

const initialState = {
    isReact: true,
    json: []
};

const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.API_REACT: {
            return {
                ...state,
                isReact: true
            };
        }
        case types.API_ANGULAR: {
            return {
                ...state,
                isReact: false
            };
        }

        case types.API_GETUSER:{
            return {
                ...state,
                json: action.json
            }
        }

        default: {
            return state;
        }
    }
}

export default pageReducer;