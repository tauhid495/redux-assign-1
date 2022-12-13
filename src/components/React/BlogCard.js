import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToHistory } from '../Redux/actionCreator/actionCreator';


const ProductCard = ({ blog, history }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlenavigate = (blog) => {

        dispatch(addToHistory(blog))
        navigate(`/blog/${blog._id}`)
    };

    // console.log(blog.image);
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
                <div>{blog.subject}</div>
            </div>
            <div className="divider divider-horizontal"></div>

            <div className='w-2/3'>
                <div>{blog.textarea.slice(0, 300)}...</div> <br />

                {history &&
                    <div onClick={() => handlenavigate(blog)} className='btn btn-sm btn-primary'>Read More</div>
                }
            </div>
        </div>
    );
};

export default ProductCard;