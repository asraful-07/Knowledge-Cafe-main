import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({handelToBookmark}) => {
    const [blogs, setBlogs] = useState([])

    useEffect( () => {
        fetch('bologs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))

    },[])
    return (
        <div className="w-2/3">
            <h2>Blogs: {blogs.length}</h2>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handelToBookmark={handelToBookmark}></Blog>)
            }
        </div>
    );
};

// Fixing the case of 'propTypes'
Blogs.propTypes = {
    handelToBookmark: PropTypes.func.isRequired 
};

export default Blogs;