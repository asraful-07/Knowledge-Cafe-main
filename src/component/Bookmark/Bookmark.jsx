import PropTypes from "prop-types";
import Book from "../Book/Book";
const Bookmark = ({ bookmark }) => {
    return (
        <div className="w-1/3 bg-slate-100">
            <h1>Bookmark Blog: {bookmark.length}</h1>

            <div>
            {
                bookmark.map((book, idx)=>  <Book key={idx} bookmark={book}></Book>)
            }
            </div>
           
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.array
}

export default Bookmark;