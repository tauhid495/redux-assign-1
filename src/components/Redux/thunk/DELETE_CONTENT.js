import { deleteBlog } from "../actionCreator/actionCreator";

const deleteBlogData = (id) => {

    return async (dispatch, getState) => {
        const res = await fetch(`https://redux-server.onrender.com/blog/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
            },
        });
        const data = await res.json();

        if (data.acknowledged) {
            dispatch(deleteBlog(id));
        };

        // console.log(data);
    };
};

export default deleteBlogData;