import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loadBlogData from '../Redux/thunk/fetchBlogs';

const BlogLIst = () => {
    const blogs = useSelector((state) => state.blog.blogs)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadBlogData());
    }, []);

    // const state = useSelector((state) => state);
    // console.log(state);
    return (
        <div>
            {
                blogs.map((blog) => <li>{blog.model}</li>)
            }
        </div>
    );
};

export default BlogLIst;