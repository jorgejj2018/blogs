import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect,Route, useParams } from "react-router"
import {deleteBlog} from "../actions/blogsActions"
const DeleteBlog = () => { 
    let { slug } = useParams();
    let id = slug.replace(':','')
    console.log(id)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(deleteBlog(id))
    }, [])
    return (
        <Route exact path="/deleteBlog:*">
        <Redirect to="/" /> 
        </Route>
       
    )
}

export default DeleteBlog
