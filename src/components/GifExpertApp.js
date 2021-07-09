import React, {useState} from 'react'
import { AddCategory } from './AddCategory'
import { GifGrid } from './GifGrid'

export const GifExpertApp = () => {

    const [categories, setCategory] = useState(['Maradona'])

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategory={setCategory}/>
            <hr />
            <ol>
                {
                    categories.map (category => 
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    )
                }
            </ol>
        </>
    )
}
