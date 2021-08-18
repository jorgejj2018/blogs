const initialState = {
    blogsAll: [],
    blog:[],
    updateBlog:[],
}

export const Blogs = (state = initialState , action) => {
    switch (action.type) {
        case 'listarBlogs':
        return {...state, blogsAll:action.payload}
        case 'newBlogCreated':
            return {...state, blogsAll:action.payload}
        case 'detailBlogs':
        return {...state, blog:action.payload}
        case 'updateBlogs':
            return {...state, updateBlog:action.payload}
        default:
            return state
    }
};
