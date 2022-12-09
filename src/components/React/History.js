import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

const History = () => {
    const blogs = useSelector((state) => state.blog.history);
    console.log(blogs);
    return (
        <div>
            {
                blogs.map((blog) => <ProductCard blog={blog} />)
            }
        </div>
    );
};

export default History;