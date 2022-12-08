import React from 'react';
import { useForm } from 'react-hook-form';

const Post = () => {

    const { register, handleSubmit } = useForm();
    const Submit = (data) => {
        const product = {
            name: data.name,
            occupation: data.occupation,
            subject: data.subject,
            date: data.date,
            brand: data.brand,
            image:data.image,
            spec: [],
        };

        console.log(product);
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
                    <label className='mb-2' htmlFor='date'>
                        Posting Date
                    </label>
                    <input className='input input-bordered' type='date' id='date' {...register("date")} />
                </div>
                

                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-3' htmlFor='brand'>
                        Brand
                    </label>
                    <select className='input input-bordered' name='brand' id='brand' {...register("brand")}>
                        <option value='amd'>AMD</option>
                        <option value='intel'>Intel</option>
                    </select>
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='image'>
                        Image
                    </label>
                    <input className='input input-bordered' type='text' name='image' id='image' {...register("image")} />
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
                                over 18 years
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
                                under 18 years
                            </label>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-full max-w-xs'></div>
                
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