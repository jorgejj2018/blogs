import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import {createNewBlog} from '../actions/blogsActions'




const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);
  const reset = (newStateForm = initialState) => {
    setValues(newStateForm);
  };
  const handleInputChange = ({ target }) => {
    if (target.type === 'checkbox') {
      setValues({
        ...values,
        [target.name]: target.checked,
      });
    } else {
      setValues({
        ...values,
        [target.name]: target.value,
      });
    }
  };
  return [values, handleInputChange, reset];
};

const AddBlog = () => {
  

  const dispatch = useDispatch()

  const [formValues, handleInputChange, reset] = useForm({
    title: '',
    description:'',
    sitioWeb:'',
    gitHub:'',
    video:'',
    image:'',
    textTop:'',
    textBottom:'',
  });

  const { title,description,sitioWeb,gitHub,video,image,textTop,textBottom} = formValues;

  const handleSubmit = (evento) => {
    evento.preventDefault();
    console.log(formValues);
    dispatch(createNewBlog(title,description,sitioWeb,gitHub,video,image,textTop,textBottom))
  };


  return (
    <div>
      <h1>Crear Nuevo Blog</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Titulo del Blog'
          name='title'
          value={title}
          onChange={handleInputChange}
          required
        />
        <input
          type='text'
          placeholder='breve Descripcion'
          name='description'
          value={description}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="image">subir una imagen</label>
        <input type="file" name="image" id="image" accept="image/*"  value={image} onChange={handleInputChange} />

        <textarea name="textTop" id="textTop" cols="30" rows="10" value={textTop} onChange={handleInputChange}>Texto superior</textarea>
        <textarea name="textBottom" id="textBottom" cols="30" rows="10" value={textBottom} onChange={handleInputChange} >Texto inferior</textarea>

        <input
          type='text'
          placeholder='link del sitio web'
          name='sitioWeb'
          value={sitioWeb}
          onChange={handleInputChange}
        />
        <input
          type='text'
          placeholder='link del GitHub'
          name='gitHub'
          value={gitHub}
          onChange={handleInputChange}
        />
        <input
          type='text'
          placeholder='URL de video'
          name='video'
          value={video}
          onChange={handleInputChange}
        />
        <button type='submit'>Publicar Blog</button>
      </form>
    </div>
  );
};
export default AddBlog;
