import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToHistory } from '../Redux/actionCreator/actionCreator';
// import LoadBlogIdData from '../Redux/thunk/LoadBlogbyId';


const ProductCardFull = () => {
    const [blog, setBlog] = useState([]);
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(`http://localhost:5000/blog/${id}`)
            .then(res => res.json())
            .then(data => {
                setBlog(data)
                dispatch(addToHistory(data))
            })

    }, [])

    // console.log(blog.name);

    return (
        <div className='border-2 rounded-2xl m-5 p-5  flex'>
            <div className='w-1/3'>
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src={blog.image} />
                    </div>
                </div>
                <div>{blog.name}</div>
                <div>Gender: {blog.gender}</div>
                <div>{blog.occupation}</div>

            </div>
            <div className="divider divider-horizontal"></div>

            <div className='w-2/3'>
                <div className='font-bold text-xl'>{blog.subject}</div>
                <div>{blog.textarea}</div> <br />

            </div>
        </div>
    );
};

export default ProductCardFull;