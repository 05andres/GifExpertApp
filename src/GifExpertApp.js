import React from "react";
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
 
//import { Fragment } from "react";

const GifExpertApp = () =>{

    //const categories = ['One punch', 'Samurai X', 'Dragon Ball']

    const [categories, setCategories] = useState(['Dragon Ball'])
   /*  const handleAdd = () => {
        setCategories(['Kakaroto',...categories])
        
    } */

    return(
        <>
            <h1>GifExpertApp </h1>
            <AddCategory setCategories={ setCategories }></AddCategory>
            <hr/>
            <ol>
                { 
                    categories.map(category =>( 
                        <GifGrid
                            key={ category } 
                            category={ category } 
                        />
                    ))
                }
            </ol>
        </>
        

    );

}

export default GifExpertApp;