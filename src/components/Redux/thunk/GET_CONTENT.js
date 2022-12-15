import { loadBlog } from "../actionCreator/actionCreator";

const loadBlogData = () => {
    return async (dispatch, getState) => {
        const res = await fetch('http://localhost:5000/blogs');
        const data = await res.json();
        if (data.data.length) {
            dispatch(loadBlog(data.data));
        }
        // console.log(data.data);
    };
};

export default loadBlogData;