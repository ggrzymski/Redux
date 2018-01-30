import React, {Component} from 'react';
import { connect } from "react-redux";
import { selectBook } from "../actions/index";
import {bindActionCreators } from 'redux';

class BookList extends Component{
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                 onClick={() => this.props.selectBook(book)}
                 key={book.title} className="list-group-item">{book.title}</li>
            );
        });
    }
    render() {
        return (
            <ul className="list-group col-sm-4">
              {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps (state) {
    return {
        books: state.books
    };
}

// Anything returned from this function will end up as props on the BookList container. 
function mapDispatchToProps(dispatch) {
    // Whenever selectbook is called, the result should pass to reducers

    return bindActionCreators( { selectBook: selectBook}, dispatch);
}

// Promote book list from a component to container. It needs to know abou the dispatch method.
// Selectbook, make it available as a prop.

export default connect(mapStateToProps,mapDispatchToProps) (BookList);