import React, { Component } from 'react';
import {connect} from "react-redux";
import {getBookshelvesById} from "../../modules/selectors/bookshelves";

export class BookshelfViewForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {bookshelf} = this.props;
        return (
            <div className="container">
                <div>
                    <span>Title</span>
                    <span >{bookshelf.title}</span>
                </div>
                <Link to={`/bookshelves/edit`}>Edit</Link>
                <Link exact to={`/bookshelves`}>Back</Link>
            </div>

        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        bookshelf: getBookshelvesById(state, ownProps.match.params.id)
    };
}


export default connect(mapStateToProps)(BookshelfViewForm);

