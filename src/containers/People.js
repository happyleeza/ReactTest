import React from "react";
import {Component} from "react";
import {Api as RestApi} from "rest-api-handler";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles }  from '@material-ui/core/styles';
// import { withStyles } from 'material-ui/styles';
import {getUsers} from '../actions/hubAction'
import {getTodos} from '../actions/hubAction'
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import compose from "recompose/compose";
import connect from "react-redux/es/connect/connect";
import Button from "@material-ui/core/Button/Button";

const api = new RestApi('https://jsonplaceholder.typicode.com');

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    userButton: {
        // borderStyle: 'solid',
        color:'green',
        gridColumn: 2,
    },
   todoButton: {
        // borderStyle: 'solid',
        color:'red',
        gridColumn: 3,
    },
});

class People extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     rows: this.props.users
        // };


    }

    getUsers = () => {
        this.props.getUsers();
    }

    getTodos = () => {
        this.props.getTodos();
    }



    render() {
        const {classes, json, data} = this.props;
        console.log(json);
        return (
            <div className="People">
                <header className="People-header">
                    <p>
                        <Button className={classes.userButton} onClick={this.getUsers}> Show Users </Button>
                        <Button className={classes.todoButton} onClick={this.getTodos}> Show Todos </Button>
                    </p>
                    <a
                        className="People-link"
                       href="https://www.leapagency.com/about/our-experts"
                       target="_blank"
                       rel="noopener noreferrer"
                    >
                        {/*user_content*/}
                    </a>
                    {data?
                    <Table className={classes.table}>
                        <TableHead>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell numeric>ZipCode</TableCell>
                            {/*<TableCell numeric>Carbs (g)</TableCell>*/}
                            {/*<TableCell numeric>Protein (g)</TableCell>*/}
                        </TableHead>
                        <TableBody>
                            {json.map(row => {
                                return (
                                    <TableRow key={row.id}>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell>{row.email}</TableCell>
                                        <TableCell numeric>{row.address.zipcode}</TableCell>
                                        {/*<TableCell numeric>{row.carbs}</TableCell>*/}
                                        {/*<TableCell numeric>{row.protein}</TableCell>*/}
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                        :
                    <Table className={classes.table}>
                        <TableHead>
                            <TableCell>Title</TableCell>
                            <TableCell>Completed</TableCell>
                        </TableHead>
                        <TableBody>
                            {json.map(row => {
                                return (
                                    <TableRow key={row.id}>
                                        <TableCell>{row.title}</TableCell>
                                        <TableCell>{row.completed}?X:Y</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                    }
                </header>
            </div>
        );
    }
}


People.PropTypes = {
    classes: PropTypes.object.isRequired,
}


const mapDispatchToProps = dispatch => {
    return bindActionCreators({ getUsers, getTodos }, dispatch)
}

const mapStateToProps = state => {
    return {
        json: state.pageReducer.json,
        data:state.pageReducer.data
    };
}

export default compose(
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps),
)(People);
