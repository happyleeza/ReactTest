import React from "react";
import {Component} from "react";
import { Route, Link, Redirect } from 'react-router-dom'
import react_logo from "../React.svg";
import google_logo from "../Google.svg"
import compose from 'recompose/compose';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setFaceBook, setGoogle } from '../actions/hubAction'

import '../App.css';

const styles = {
    loading: {
        height: '100%',
        width: '100%',
        display: 'grid',
        position: 'fixed',
        alignItems: 'center',
        justifyContent: 'center'
    },

    root: {
        // display: 'grid'
    },

    facebookButton: {
        // borderStyle: 'solid',
        color:'green',
        gridColumn: 2,
    },

    googleButton: {
        // borderStyle: 'solid',
        color:'red',
        gridColumn: 3,
    },
};

class Main extends Component {
    constructor(props) {
        super(props);
        // this.props.checkPageStatus();
        this.state = {
            isReact: true,
            showPeople : false
        };
    }

    setFaceBook = () => {
        // this.props.setFaceBook();
        this.setState({isReact:true});
    }

    setGoogle = () => {
        // this.props.setGoogle();
        this.setState({isReact:false});
    }

    setDatabase = () => {
        this.setState({showPeople:true})
    }

    render() {
        const {classes, isReact} = this.props;

        const isReactFlag = this.state.isReact;
        const showPeopleFlag = this.state.showPeople;

        if (showPeopleFlag)
        {
            return (<Redirect to="/People" />);
        }
        else {
            return (
                <div className="App">
                    <header className="App-header">
                        {isReactFlag ? <img src={react_logo} className="App-logo" alt="logo"/> :
                            <img src={google_logo} className="App-logo" alt="logo"/>
                        }
                        <p>
                            <Button className={classes.facebookButton} onClick={this.setFaceBook}> Show React </Button>
                            <Button className={classes.googleButton} onClick={this.setGoogle}> Show Google </Button>
                            <Button className={classes.googleButton} onClick={this.setDatabase}> Show Database </Button>
                        </p>
                        {isReactFlag ?
                            <a
                                className="App-link"
                                href="https://reactjs.org"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Learn React
                            </a>
                            :
                            <a
                                className="App-link"
                                href="https://angular.org"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Learn Angular
                            </a>
                        }
                    </header>
                </div>
            );
        }
    }
}

Main.PropTypes = {
    classes: PropTypes.object.isRequired,
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ setFaceBook, setGoogle }, dispatch)
}

const mapStateToProps = state => {
    return {
        isReact: state.pageReducer.isReact,
    };
}

export default compose(
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps),
)(Main);