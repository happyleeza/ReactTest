import * as types from './actionTypes'

export const setFaceBook = () => {
    return (dispatch) => {
        dispatch({ type: types.API_REACT });
    };
}

export const setGoogle = () => {
    return (dispatch) => {
        dispatch({ type: types.API_ANGULAR });
    };
}

export const getUsers  = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            // .then(json => {this.setState({rows:[createUser(json.name)]})})
            // .then(json => {var temp_rows=[];json.map(user => {temp_rows.push(createUser(user.name));}); this.setState({rows:temp_rows});})
            .then(json => {dispatch({ type: types.API_GETUSER, json:json, data:true })})
    };
}


export const getTodos  = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {dispatch({ type: types.API_GETTODOS, json:json, data:false })})
    };
}
