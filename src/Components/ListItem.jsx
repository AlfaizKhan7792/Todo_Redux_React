import React from 'react'
import { useDispatch } from 'react-redux'
import { Edit, Remove } from '../features/Todos/TodoSlice'

const ListItem = ({Todo}) => {

    const dispatch = useDispatch()

    const handleRemove = (id) =>{
        dispatch(Remove(id))
    }

    const handleEdit = (Todo) =>{
        dispatch(Edit(Todo))
    }

  return (
    <li className='list-group-item shadow border-dark d-flex'>
      <span className=''>
      <h3>{Todo.title}</h3>
      <p>{Todo.description}</p>
      </span>
      <span className='d-flex flex-column gap-2 ms-auto'>
        <button onClick={() => handleEdit(Todo)} className="btn btn-sm btn-outline-warning">Edit</button>
        <button onClick={() => handleRemove(Todo.id)} className="btn btn-sm btn-outline-danger">Delete</button>
      </span>
    </li>
  )
}

export default ListItem
