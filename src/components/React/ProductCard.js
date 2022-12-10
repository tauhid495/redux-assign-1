import React from 'react';
import { useDispatch } from 'react-redux';
import { addToHistory } from '../Redux/actionCreator/actionCreator';


const ProductCard = ({ blog }) => {

    const dispatch = useDispatch();
    // console.log(blog._id);
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
                <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                <div onClick={() => dispatch(addToHistory(blog))} className='btn btn-primary'>Add to History</div>
            </div>
        </div>
    );
};

export default ProductCard;