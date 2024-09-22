import React from 'react'
import '../styles/ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
  return (
    <h1 className='titulosPrincipales'>{greeting}</h1>
  )
}

export default ItemListContainer