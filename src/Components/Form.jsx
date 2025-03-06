import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Add, Update } from '../features/Todos/TodoSlice';

const Form = () => {

    const {Edit} = useSelector((state) => state.Todos)

    const [title , setTitle] = useState()
    const [description, setDescription] = useState("");
    const dispatch = useDispatch()

    const handleSubmit = (e) =>{
        e.preventDefault()
        Edit.isEdit ? dispatch(Update({id:Edit.Todo.id , title:title , description : description})) :
        dispatch(Add({id: crypto.randomUUID(), title : title , description : description}))
        setTitle("")
        setDescription("")
    }

    useEffect(() =>{
setTitle(Edit.Todo.title)
setDescription(Edit.Todo.description)
    },[Edit])

  return (
    <form className='border p-3 shadow border-dark rounded' onSubmit={handleSubmit}>
      <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" className="form-control border-secondary" id="exampleFormControlInput1" placeholder="name@example.com" />
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea onChange={(e) => setDescription(e.target.value)} value={description} className="form-control form-controll border-secondary" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button className="btn btn-lg btn-outline-success w-100">Submit</button>
    </form>
  )
}

export default Form
