import moment from 'moment';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import ADD_CONTENT from '../Redux/thunk/ADD_CONTENT';

const Post = () => {

    const dispatch = useDispatch();

    const { register, handleSubmit, reset } = useForm();
    const Submit = (data) => {
        const blog = {
            name: data.name,
            occupation: data.occupation,
            subject: data.subject,
            date: moment.now(),
            gender: data.gender,
            image: data.image,
            textarea: data.textarea,
            status: data.status === "true" ? true : false,

        };
        console.log(blog);
        dispatch(ADD_CONTENT(blog));

        reset();
    };

    return (
        <div className='flex justify-center items-center h-full '>
            <form
                className='bg-white shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between'
                onSubmit={handleSubmit(Submit)}
            >
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='name'>
                        Name
                    </label>
                    <input className='input input-bordered' type='text' id='name' {...register("name")} />
                </div>

                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='occupation'>
                        Occupation
                    </label>
                    <input className='input input-bordered' type='text' id='occupation' {...register("occupation")} />
                </div>

                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='subject'>
                        Blog Subject
                    </label>
                    <input className='input input-bordered' type='text' id='subject' {...register("subject")} />
                </div>

                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-3' htmlFor='gender'>
                        Gender
                    </label>
                    <select className='input input-bordered' name='gender' id='gender' {...register("gender")}>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                    </select>
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='image'>
                        Image
                    </label>
                    <input className='input input-bordered' type='text' name='image' id='image' {...register("image")} />
                </div>

                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='textarea'>
                        Description
                    </label>
                    <textarea className='input input-bordered h-32' type='textarea' id='text' {...register("textarea")} />
                </div>

                <div className='flex text-start w-1/2 '>
                    <h1 className='mb-3'>I am </h1>
                    <div className='flex gap-3 ml-4'>
                        <div>
                            <input
                                type='radio'
                                id='adult'
                                value={true}
                                {...register("status")}
                            />
                            <label className='ml-2 text-lg' htmlFor='adult'>
                                18+ years
                            </label>
                        </div>
                        <div>
                            <input
                                type='radio'
                                id='child'
                                name='status'
                                value={false}
                                {...register("status")}
                            />
                            <label className='ml-2 text-lg' htmlFor='child'>
                                bellow 18 years
                            </label>
                        </div>
                    </div>
                </div>


                <div className='flex justify-between items-center w-full'>
                    <button
                        className='btn btn-primary'
                        type='submit'
                    >
                        Post My Blog
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Post;