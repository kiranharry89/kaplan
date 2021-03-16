import './Books.css'

function Books (props) {
    return (
        <div>
            <h4>All Books</h4>
            <div className="books-list">
            {props.loading && <div className="loading"><span></span>Loading ...</div>}
                {props.books.map((book, index) => (
                <div key={index} className="book">
                    <h5>{book.volumeInfo.title}</h5>
                    <div><span>Authors: </span><span>{book.volumeInfo.authors ? book.volumeInfo.authors[0] : 'NA'}</span></div>
                    <div><span>Publisher: </span><span>{book.volumeInfo.publisher || 'NA'}</span></div>
                    <div><span>Published Date: </span><span>{book.volumeInfo.publishedDate}</span></div>
                </div>
                ))
                }
            </div>
        </div>
    )
}

export default Books