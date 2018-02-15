import React, { Component } from 'react';
import { connect } from 'react-redux';
import {booksActions} from '../../actions';
import { bindActionCreators } from 'redux';
import {getBookshelves} from "../../selectors/bookshelvesSelector";

export class BookshelvesPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {bookshelves} =this.props;
        return (
            <div className="container">
                Bookshelves
                {
                    //bookshelves.map(bookshelf => <div>{bookshelf}</div>)
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        bookshelves: getBookshelves(state)
    };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(booksActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookshelvesPage);
