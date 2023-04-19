// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import './index.css'

const ItemDetails = () => {
  const {id} = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(response => response.json())
      .then(data => setItem(data))
      .catch(error => console.log(error))
  }, [id])

  if (!item) {
    return <div>Loading...</div>
  }

  return (
    <div className="content">
      <div className="details">
        <h1>{item.title}</h1>
        <p>{`ID: ${item.id}`}</p>
        <p>{`User ID: ${item.userId}`}</p>
        <p>{`Completed: ${item.completed ? 'Yes' : 'No'}`}</p>
      </div>
    </div>
  )
}

export default ItemDetails
