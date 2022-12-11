import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './BlogCard';

const History = () => {
    const blogs = useSelector((state) => state.blog.history);
    console.log(blogs);
    return (
        <div className=''>
            {
                blogs.map((blog) => <ProductCard key={blog._id} blog={blog} />)
            }
        </div>
    );
};

export default History;