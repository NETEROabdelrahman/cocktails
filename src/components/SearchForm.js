import React from 'react'
import { useGlobalContext } from '../Context'

const SearchForm = () => {

    const { searchTerm, cocktails,setSearchTerm } = useGlobalContext()
    console.log(cocktails)

    const handleSubmit = (e) => {
    e.preventDefault()
}


  return (
    <section className='section search'>
    <form className='search-form' onSubmit={handleSubmit}>
      <div className='form-control'>
        <label htmlFor='name'>search your favorite cocktail</label>
        <input
          type='text'
          name='name'
          id='name'
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
        />
      </div>
    </form>
  </section>
  )
}

export default SearchForm