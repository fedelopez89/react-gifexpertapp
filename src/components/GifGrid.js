import React from 'react'
import { GifGridItem } from './GifGridItem';

import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const {data:images, loading} = useFetchGifs(category);
    console.log(loading);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> {category} </h3>

            { loading && <p>Loading</p>}

            <div className='card-grid'>
                {
                    images.map((img) =>
                        <GifGridItem
                            key={img.id}
                            {...img} 
                        />
                    )
                }
            </div>
        </>
    )
}
