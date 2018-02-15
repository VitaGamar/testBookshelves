import React from 'react';
import { Route, Link } from 'react-router-dom'
import BookshelvesPage from './../bookshelvesPage'
import BooksPage from './../booksPage'
import About from '../about'

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/books">Books</Link>
    </header>

    <main>
      <Route exact path="/" component={BookshelvesPage} />
      <Route exact path="/books" component={BooksPage} />
    </main>
  </div>
)

export default App
