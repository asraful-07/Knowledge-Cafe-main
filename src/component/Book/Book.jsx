import PropTypes from "prop-types";

const Book = ({ bookmark }) => {
    const {title} = bookmark
    return (
        <div className="m-2 shadow-lg p-4 text-xl border-2 rounded">
           {title}
        </div>
    );
};

// Fixing the case of 'propTypes'
Book.propTypes = {
    bookmark: PropTypes.object
};

export default Book;
