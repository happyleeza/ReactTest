import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import store, {history}  from './store';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import Reboot from '@material-ui/';
// import { Router} from 'react-router';
// import { BrowserRouter, Route, Link } from "react-router-dom";

const theme = createMuiTheme(
    // {
    //     palette: {
    //         primary: "#ff0000",
    //         secondary: "#ff0000",
    //         error: "#ff0000",
    //     },
    // }
);

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider  theme={theme}>
        <ConnectedRouter history={history} >
            <div>
                {/*<Reboot />*/}
                <App />
            </div>
        </ConnectedRouter>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root'));

// ReactDOM.render(
//         <BrowserRouter history={history} >
//             <App />
//         </BrowserRouter>,
//     document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
serviceWorker.register();
