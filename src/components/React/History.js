import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

const History = () => {
    const histories = useSelector((state) => state.blog.history);
    console.log(histories);
    return (
        <div>
            {
                histories.map((product) => <ProductCard product={product} />)
            }
        </div>
    );
};

export default History;