import React ,{ useEffect , useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {blogsActionsDetail} from '../actions/blogsActions'
import { Redirect,Route, useParams } from "react-router"
import BotonDelete from '../componet/botonDelete'
import BotonUpdate from '../componet/botonUpdate'


const Blog = ({ match }) => {
/*   const [loader, setLoader] = useState(true)
  const blog = useSelector(state => state.blogs.blog)
  const [blogState, setBlog] = useState(blog)
  const dispatch = useDispatch()
  const slug = match.params.slug;
    const postSlugs = [];
    
    const blogs = useSelector(state => state.blogs.blogsAll)
    blogs.map(el => postSlugs.push(el.slug))
    

    
    const postDoesNotExist = postSlugs.indexOf(slug) === -1;
    if (postDoesNotExist) return <Redirect to="/404" />;
  
   if(loader){ */

    let { slug } = useParams();
    let id = slug.replace(':','')
    console.log(id)
    const dispatch = useDispatch()
  
    useEffect(() => {
      dispatch(blogsActionsDetail(id))
    }, [])

    const blog = useSelector(state => state.blogs.blog)

    console.log(blog)

     

       
      return (
          <>
          <BotonDelete id={id}/>
          <BotonUpdate id={id}/>
          <section key={blog.slug} className="card">
              <img src={blog.image} alt={blog.title} />
              <div className="card-content">
                <h2>
                  {blog.title} &mdash;{" "}
                  <span style={{ color: "#5e5e5e" }}>{blog.date}</span>
                </h2>
                <p>{blog.description}</p>
              </div>
                <p>{blog.textTop}</p>
                <iframe width="560" height="315" src={blog.video} title="YouTube video player"></iframe>
                            
      <p>{blog.textBottom}</p>
            </section>
          </>
      );
   

};

export default Blog;