import React, { Component } from 'react';
import { connect } from 'react-redux';
import {booksActions} from '../../actions';
import { bindActionCreators } from 'redux';
import {getBooks} from "./../../selectors/booksSelector";


export class BooksPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {books} =this.props;
        return (
            <div className="container">
                {
                    books.map(book => <div>{book}</div>)
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        books: getBooks(state)
    };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(booksActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksPage);
