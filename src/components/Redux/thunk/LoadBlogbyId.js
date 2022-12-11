import { loadBlogbyId } from "../actionCreator/actionCreator";


const LoadBlogIdData = (id) => {
    // console.log(id);
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/blog/${id}`);
        const data = await res.json();
        if (data.length) {
            dispatch(loadBlogbyId(data));
        }
        console.log(data);
    };
};

export default LoadBlogIdData;