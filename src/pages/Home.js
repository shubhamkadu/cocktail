import React from 'react'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'

function Home() {
    return (
        <main>
            <SearchForm/>
            <CocktailList/>
        </main>
    )
}

export default Home
