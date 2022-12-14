import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import loadBlogData from '../Redux/thunk/fetchBlogs';
import ProductCard from './BlogCard';
import moment from 'moment';

const Home = () => {
    const blogs = useSelector((state) => state.blog.blogs)
    const history = useSelector((state) => state.blog.history)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadBlogData());
    }, []);

    // const state = useSelector((state) => state);
    // console.log(state);
    // const now = moment.unix(1671049759824 / 1000).format('Do-MMM-YY, hh.mm.ss');
    // const nowU = moment.now();

    return (
        <div className='grid grid-cols-2'>
            {/* <div>{now}</div>
            <div>{nowU}</div> */}
            {
                blogs.map((blog) => <ProductCard blog={blog} history={history} key={blog._id} />)
            }
        </div>
    );
};

export default Home;