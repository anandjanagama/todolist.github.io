import React,{useState} from 'react'
import {addvalue, deletevalue,deleteallvalues} from './actions/actions';
import {useSelector,useDispatch} from 'react-redux';
import './App.css'

const App = () => {
const dispatch = useDispatch();
  const [inputdata, setinputdata] = useState('')
  const list = useSelector(state => state.reducers.list)
  
  return (
    <>
    <div className="main-div">
      

      <div class="child-div">
        <figure>
  <figcaption>Add your list here 📝</figcaption>
  </figure>
  <div className='addItems' >
<input type="text"  placeholder='enter the items' 
value={inputdata} onChange={(event)=>{setinputdata(event.target.value)}}  />
<i className='fa fa-plus add-btn' onClick={()=>dispatch(addvalue(inputdata), setinputdata('')) } />

  </div>

  <div className='showItems' >
    {
      list.map((elem)=>{
return(
  <div className='eachItem' key={elem.id} >
  <h3>{elem.data}</h3>
  <div>
  <i className='far fa-trash-alt  add-btn' title='deleteitem' onClick={()=>dispatch(deletevalue(elem.id)) } />
      </div>
      </div>
)
      

      }
)
}
  </div>
  <div>
    <button title='deleteall' onClick={()=>dispatch(deleteallvalues()) } >clear all</button>
  </div>
  
          </div>
        </div>
    </>
  )
}

export default App

