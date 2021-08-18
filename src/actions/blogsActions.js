  import { firebase , db } from '../firebase/firebaseConfig';


  export const blogsActionsList = () => (dispatch) => {
   db.collection('blogs').get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => {
          const dataDocument = doc.data();
          return { ...dataDocument, id: doc.id };
        });
        //console.log(data)
        dispatch({ type: 'listarBlogs', payload: data });
      });
  };

  export const blogsActionsDetail = (slug) => async (dispatch) => {
    const res = await db.collection('blogs').doc(slug).get()
    const data = await res.data()
        //console.log(data)
        dispatch({ type: 'detailBlogs', payload: data });
  };

  export const blogsActionsId = (id) => async (dispatch) => {
    const res = await db.collection('blogs').doc(id).get()
    const data = await res.data()
          
    dispatch({ type: 'updateBlogs', payload: data });
  };
  


//crear eventos programados "#" cambiar el (db.collection('eventos').add(data)) por la funcion requerida de firebase function 
  export const createNewBlog = (title,description,sitioWeb,gitHub,video,image,textTop,textBottom) => async (dispatch, getState) => {
    try {
        const data = { 
        title,
        description,
        sitioWeb,
        gitHub,
        video,
        image,
        textTop,
        textBottom,
        slug:title.split(" ").join("-"),   
        date:new Date().toLocaleDateString(),   
        }
        db.collection('blogs').add(data);
        dispatch({ type: 'newBlogCreated', payload: { ...data, id: title } });
      }
  
     catch (error) {
      alert('algo salio mal');
      console.log(error);
    }
  
  };

  export const deleteBlog = (id) => async (dispatch) => {
    try {
      await db.collection('blogs').doc(id).delete();
      alert('Sprint eliminado');
      //dispatch({ type: 'deleteSprint', payload: id });
    } catch (error) {
      alert('Sucedió un error');
      console.log(error);
    }
  };