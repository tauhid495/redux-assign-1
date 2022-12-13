import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadBlogbyId } from '../Redux/actionCreator/actionCreator';


const ProductCardFull = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadBlogbyId(id));

    }, [])
    const blog = useSelector((state) => state.blog.blogs[0]);

    // console.log(blog);

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