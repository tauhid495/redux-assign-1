import { postBlog } from "../actionCreator/actionCreator";

const postBlogData = (blog) => {
    return async (dispatch, getState) => {
        const res = await fetch('http://localhost:5000/blog', {
            method: "POST",
            body: JSON.stringify(blog),
            headers: {
                "Content-type": "application/json"
            }
        });
        const data = await res.json();

        if (data.acknowladged) {
            dispatch(
                postBlog(blog)
            )
        }

        // console.log(data.data);
    };
}

export default postBlogData;