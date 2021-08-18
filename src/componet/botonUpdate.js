import {Link} from 'react-router-dom'

const BotonUpdate = (props) => {
    return (
        <>  
        <button className={"btnUpdateBlog"}>
        <Link to={`/updateBlog${props.id}`} >Actualizar Blog</Link>   
        </button>  
        </>
    )
}

export default BotonUpdate
