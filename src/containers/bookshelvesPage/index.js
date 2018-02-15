import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as bookshelvesActions from '../../modules/actions/bookshelves';
import { bindActionCreators } from 'redux';
import { getBookshelves } from '../../modules/selectors/bookshelves';
import List from '../../components/List/index';

export class BookshelvesPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { bookshelves } = this.props;

        return (
            <div className="container">
                <List items={bookshelves} />
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
    return { actions: bindActionCreators(bookshelvesActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookshelvesPage);
