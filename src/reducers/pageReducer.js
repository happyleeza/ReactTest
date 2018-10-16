import * as types from '../actions/actionTypes'

const initialState = {
    isReact: true,
    json: [],
    data: true
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
                json: action.json,
                data: true
            }
        }

        case types.API_GETTODOS:{
            return {
                ...state,
                json: action.json,
                data:false
            }
        }

        default: {
            return state;
        }
    }
}

export default pageReducer;