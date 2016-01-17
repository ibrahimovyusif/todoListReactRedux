import React from 'react';
import { Component } from 'react';

import BookList from '../containers/book_list';
import BookDetail from '../containers/book_detail'
import AddTodoBar from '../containers/add_todo_bar'

export default class App extends Component {
	
  render() {
    return (
      <div>
      	<AddTodoBar />
      	<BookList />
      	<BookDetail />
      </div>
    );
  }
}
