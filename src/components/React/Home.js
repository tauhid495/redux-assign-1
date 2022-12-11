import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import loadBlogData from '../Redux/thunk/fetchBlogs';
import ProductCard from './BlogCard';

const Home = () => {
    const blogs = useSelector((state) => state.blog.blogs)
    const history = useSelector((state) => state.blog.history)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadBlogData());
    }, []);

    // const state = useSelector((state) => state);
    // console.log(state);

    return (
        <div className='grid grid-cols-2'>
            {
                blogs.map((blog) => <ProductCard blog={blog} history={history} key={blog._id} />)
            }
        </div>
    );
};

export default Home;