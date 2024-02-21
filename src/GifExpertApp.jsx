import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {


  const [categories, setCategories] = useState([]);

  

  const onAddCategory = (NewCategory) => {
    if (categories.includes(NewCategory)) return;
    setCategories([NewCategory, ...categories]);
  }

// Cuerpo del proyecto:
  return (
        <>

        <h1>Gif Expert app</h1>


        <AddCategory onNewCategory = { onAddCategory }/>

      
          {categories.map( (category) => ( 
          <GifGrid key = {category} category={ category } /> ))}
        
        </>

        )
}
