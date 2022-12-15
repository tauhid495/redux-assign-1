import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import loadBlogData from '../Redux/thunk/fetchBlogs';
import ProductCard from './BlogCard';
import moment from 'moment';
import { toggleGender, toggleStatus } from '../Redux/actionCreator/filterAction';

const Home = () => {
    const blogs = useSelector((state) => state.blog.blogs);
    const history = useSelector((state) => state.blog.history);
    const filters = useSelector((state) => state.filter)
    const { gender, status } = filters;
    console.log(status);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadBlogData());
    }, []);

    const activeClass = "btn-active";

    let content;

    if (blogs.length) {
        content = blogs.map((blog) => <ProductCard blog={blog} history={history} key={blog._id} />)
    }

    if (blogs.length && (status || gender.length)) {
        content = blogs
            .filter((blog) => {
                if (status) {
                    return blog.status === false
                }
                return blog;
            })
            .filter((blog) => {
                if (gender.length) {
                    return gender.includes(blog.gender)
                }
                return blog;
            })
            .map((blog) => <ProductCard blog={blog} history={history} key={blog._id} />)
    }

    return (
        <div>
            <div className='w-full flex items-center justify-end'>
                <button className="mr-3 btn btn-outline btn-sm btn-primary btn-active">Last Posted</button>

                <button onClick={() => dispatch(toggleGender('male'))} className={`mr-3 btn btn-sm btn-outline btn-primary ${gender.includes('male') ? activeClass : null}`}>Male</button>

                <button onClick={() => dispatch(toggleGender('female'))} className={`mr-3 btn btn-sm btn-outline btn-primary ${gender.includes('female') ? activeClass : null}`}>Female</button>

                <button onClick={() => dispatch(toggleStatus())} className={`mr-3 btn btn-sm btn-outline btn-primary ${status ? activeClass : null}`}>Child</button>
            </div>

            <div className='grid grid-cols-2'>
                {/* <div>{now}</div>
            <div>{nowU}</div> */}
                {
                    content
                }
            </div>
        </div>
    );
};

export default Home;