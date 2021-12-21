import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import {useGlobalContext} from '../context'

function CocktailList() {
    const {cocktails, loading} = useGlobalContext();


    if(loading){
        return <Loading/>
    }

    if(cocktails.length<1){
        return(
            <h2 className='section-title'>
                No Match Found
            </h2>
        )
    }
    return (
        <section className='section'>
            <h1 className='section-title'>cocktails</h1>
            <div className='cocktails-center'>
                {cocktails.map((item)=>{
                    return <Cocktail key={item.id} {...item}/>
                })}
            </div>
        </section>
    )
}

export default CocktailList
