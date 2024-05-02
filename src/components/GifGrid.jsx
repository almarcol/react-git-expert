

import {  useEffect, useState } from "react";

import { GifItens } from "./GifItens";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs"

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);


    return (
        <>

        <h3>{ category }</h3>

        <div className="card-grid">
        
            {
                images.map((image)=>(
                    <GifItens 
                        key={image.id}
                        {...image}
                    />
                ))
            }

        </div>

        </>
    )
}
