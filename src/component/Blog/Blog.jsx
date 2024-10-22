import PropTypes from 'prop-types'; 

const Blog = ({blog, handelToBookmark, handelToRead}) => {
    const {id, cover, title, author_img,author, posted_date, reading_time, hashtags} = blog
    return (
        <div className='mr-6'>
         <div>
            <img className='w-full' src={cover} alt="" />
         </div>
         <div className='flex items-center justify-between'>
           <div className='flex items-center gap-2 my-4'>
            <img className='w-14' src={author_img} alt="" />
            <div>
            <h4>{author}</h4>
            <p>{posted_date}</p>
            </div>
           </div>
           <div className='flex items-center gap-4'>
            <span>{reading_time} min read</span>
            <button onClick={() => handelToBookmark(blog)}> <img className='w-6' src="https://img.icons8.com/?size=100&id=19&format=png" alt="" />
            </button>
           </div>
         </div>
       
        <h4 className='text-4xl'>{title}</h4>
        <p className='my-4'>
            {
                hashtags.map( (hash, id) => <span key={id}><a href=''>#{hash}</a></span>)
            }
           </p>
        <button onClick={() => handelToRead (id, reading_time)} className='text-purple-800 underline font-bold m-4'>mark as read</button>
        </div>
    );
};

// Fixing the case of 'propTypes'
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handelToBookmark: PropTypes.func
}

export default Blog;