import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import icon from './images/noteicon.png';
import { useNavigate } from 'react-router-dom';
import {  useDispatch,useSelector} from 'react-redux'
import {add} from './redux/noteSlice';
import {del} from './redux/noteSlice'
function Notes() {
    let dispatch = useDispatch()
    let data = useSelector((state)=>state.note)
    console.log(data)
  const navigate=useNavigate()
  
  let handleDelete = (index)=>{
    dispatch(del(index))
  }
  let handleEdit=(i)=>{
    navigate(`/edit/${i}`)
  }
  let [title,setTitle]=useState("")
  let [content,setContent]=useState("")
  let handleSave = ()=>{
    dispatch(add({title,content}))
    title,
    content
  }
  
  return <>
     <div className="div1">
        <div className="wrapper">
     <div className="mb-3">
        <h3>Add a Note</h3>
  <label htmlFor="exampleFormControlInput1" className="form-label"></label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Title" onChange={(e)=>setTitle(e.target.value)}/>
</div>
<div className="form-floating">
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}} onChange={(e)=>setContent(e.target.value)}></textarea>
  <label htmlFor="floatingTextarea2">Take a note...</label>
</div>
</div>
&nbsp; &nbsp;<Button onClick={()=>handleSave()}>Add Note</Button>
</div>
<div className="view">
    <div className="mynote"><img className="img1" src={icon}/>&nbsp; &nbsp;MY Notes</div>
    <div className="recent">Recently viewed</div>
    </div>
<div className="row row-cols-1 row-cols-md-3 g-4 div2">
    {
    data.map((e,i)=>{
      return <div key={i}>
      <div className="col">
      <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{e.title}<span><i className="fa-solid fa-pencil" style={{color:"#203562"}} onClick={()=>{handleEdit(i,e.note)
        }}>&nbsp;&nbsp;</i>
        <i className="fa-regular fa-trash-can" style={{color:"#203562"}} onClick={()=>handleDelete(i)}></i></span></h5>
        <p className="card-text">{e.content}</p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondaryclassName">Last updated few mins ago</small>
      </div>
    </div>
    </div>
    </div>
     })
}
  </div>
</>
}

export default Notes