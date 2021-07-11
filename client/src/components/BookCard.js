import React from 'react'
import { Link } from 'react-router-dom'
import Book from '../containers/Book'

const BookCard= ({books, book, editBook, deleteStudent}) => {

    return (
        <div>
            <div className="row">
                
                <div className='container'>
                    <div className="column">
                        <img src={books.book_cover}/>
                    </div>
                    <div className="column">
                        <Link to={`/books/${books.id}`}><li>{books.title} ~ {books.author}</li></Link>
                        <p className='summary'>{books.summary}</p>
                        <p className='genre-read'>Genre:{books.genre}   |   Read by you: {books.is_read === true ? 'Yes' : 'No'}</p>
                        <div className='buttons container'>
                            <button className="button" onClick={props.userLogout}>EDIT</button> | <button className="button" onClick={props.userLogout}>DELETE</button>
                        </div>
                    </div>
                </div>   
            </div>
            <div className='space'></div>
        </div>
    )
}
export default BookCard

