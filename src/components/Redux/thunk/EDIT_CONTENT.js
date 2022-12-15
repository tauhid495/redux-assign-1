

const editBlogData = (blog, id) => {
    console.log(blog);
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/blog/${id}`, {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                blog
            }),
        });
        const data = await res.json();

        // if (data.acknowladged) {
        //     dispatch(
        //         postBlog(blog)
        //     )
        // }

    };
};

export default editBlogData;