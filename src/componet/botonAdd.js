import {Link} from 'react-router-dom'

const BotonAdd = () => {
    return (
        <>  
        <button className={"btnAddBlog"}>
        <Link to={`/createNewBlog`} >Crear Blog</Link>   
        </button>  
        </>
    )
}

export default BotonAdd
