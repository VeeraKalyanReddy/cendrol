// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

const ItemList = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.log(error))
  }, [])

  const renderItems = () =>
    items.map(item => (
      <li key={item.id}>
        <Link className="lis" to={`/items/${item.id}`}>
          {item.title}
        </Link>
      </li>
    ))

  return <ul>{renderItems()}</ul>
}

export default ItemList
