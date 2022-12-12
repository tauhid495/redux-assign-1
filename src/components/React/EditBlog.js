import React from 'react';
import { useParams } from 'react-router-dom';

const BlogEdit = () => {
    const { id } = useParams();
    console.log(id);

    return (
        <div>
            blog edit
        </div>
    );
};

export default BlogEdit;