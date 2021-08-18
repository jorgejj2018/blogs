import {Link} from 'react-router-dom'

const BotonDelete = (props) => {
    return (
        <>  
        <button className={"btnDeleteBlog"}>
        <Link to={`/deleteBlog:${props.id}`} >Eliminar</Link>   
        </button>  
        </>
    )
}

export default BotonDelete
