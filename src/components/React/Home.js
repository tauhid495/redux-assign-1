import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loadBlogData from '../Redux/thunk/GET_CONTENT';
import ProductCard from './BlogCard';
import { toggleDateTime, toggleGender, toggleStatus } from '../Redux/actionCreator/filterAction';

const Home = () => {
    const blogs = useSelector((state) => state.blog.blogs);
    const history = useSelector((state) => state.blog.history);
    const filters = useSelector((state) => state.filter)
    const { gender, status, toggleTime } = filters;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadBlogData());
    }, []);

    const activeClass = "btn-active";


    let content;

    if (blogs.length && toggleTime) {
        content = blogs
            .sort(function (a, b) { return b.date - a.date })
            .map((blog) => <ProductCard blog={blog} history={history} key={blog._id} />)
    } else {
        content = blogs
        content = blogs
            .sort(function (a, b) { return a.date - b.date })
            .map((blog) => <ProductCard blog={blog} history={history} key={blog._id} />)
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
                <p className='mr-5 text-xl font-semibold'>Filters :</p>
                <button onClick={() => dispatch(toggleDateTime())} className={`mr-3 btn btn-sm btn-outline btn-primary ${toggleTime ? activeClass : null}`}>Last Upload </button>

                <button onClick={() => dispatch(toggleDateTime())} className={`mr-3 btn btn-sm btn-outline btn-primary ${!toggleTime ? activeClass : null}`}>First Upload </button>

                <button onClick={() => dispatch(toggleGender('male'))} className={`mr-3 btn btn-sm btn-outline btn-primary ${gender.includes('male') ? activeClass : null}`}>Male</button>

                <button onClick={() => dispatch(toggleGender('female'))} className={`mr-3 btn btn-sm btn-outline btn-primary ${gender.includes('female') ? activeClass : null}`}>Female</button>

                <button onClick={() => dispatch(toggleStatus())} className={`mr-3 btn btn-sm btn-outline btn-primary ${status ? activeClass : null}`}>Child</button>
            </div>



            {
                content.length == 0 ?
                    <div className='text-center mt-24'>Please wait. Server is not responding!
                    </div>
                    :
                    <div className='grid grid-cols-2'>
                        {content}
                    </div>
            }

        </div>
    );
};

export default Home;