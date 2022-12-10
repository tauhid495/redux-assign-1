import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loadBlogData from '../Redux/thunk/fetchBlogs';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import deleteBlogData from '../Redux/thunk/deleteBlogData';


const BlogLIst = () => {
    const blogs = useSelector((state) => state.blog.blogs)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadBlogData());
    }, []);

    // const state = useSelector((state) => state);
    // console.log(blogs);
    return (
        <div className='flex flex-col justify-center items-center h-full w-full '>
            <div className='w-full max-w-7xl mx-auto rounded-lg  bg-white shadow-lg border border-gray-200'>
                <header className='px-5 py-4 border-b border-gray-100'>
                    <div className='font-semibold text-gray-800'>Products</div>
                </header>

                <div className='overflow-x-auto p-3'>
                    <table className='table-auto w-full'>
                        <thead className='text-xs font-semibold uppercase text-gray-400 bg-gray-50'>
                            <tr>
                                <th></th>
                                <th className='p-2'>
                                    <div className='font-semibold text-left'>Blog Name</div>
                                </th>
                                <th className='p-2'>
                                    <div className='font-semibold text-left'>Author</div>
                                </th>
                                <th className='p-2'>
                                    <div className='font-semibold text-left'>Age Status</div>
                                </th>
                                <th className='p-2'>
                                    <div className='font-semibold text-left'>Edit</div>
                                </th>
                                <th className='p-2'>
                                    <div className='font-semibold text-center'>Action</div>
                                </th>
                            </tr>
                        </thead>

                        <tbody className='text-sm divide-y divide-gray-100'>
                            {blogs.map(({ subject, name, status, _id }) => (
                                <tr>
                                    <td className='p-2'>
                                        <input type='checkbox' className='w-5 h-5' value='id-1' />
                                    </td>
                                    <td className='p-2'>
                                        <div className='font-medium text-gray-800'>{subject}</div>
                                    </td>
                                    <td className='p-2'>
                                        <div className='text-left capitalize'>{name}</div>
                                    </td>
                                    <td className='p-2'>
                                        <div className='text-left'>
                                            {status ? (
                                                <p className='text-green-500 font-medium'>Adult</p>
                                            ) : (
                                                <p className='text-red-500 font-medium'>Child</p>
                                            )}
                                        </div>
                                    </td>
                                    <td className='p-2'>
                                        <div className='text-left font-medium text-indigo-500'>
                                            {_id}
                                            {/* <FaEdit className='w-6 h-6' /> */}
                                        </div>
                                    </td>
                                    <td className='p-2'>
                                        <div className='flex justify-center'>
                                            <button onClick={() => dispatch(deleteBlogData(_id))}>

                                                <FaTrashAlt className='w-6 h-6' />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BlogLIst;