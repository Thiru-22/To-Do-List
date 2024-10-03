import React, { useRef } from 'react'
import { FaPlus } from 'react-icons/fa'


export const AddItem = ({newItem,setNewItem,handleSubmit}) => {
  const inputRef=useRef()
  return (
    <form className='addForm'onSubmit={handleSubmit}>
          <label htmlFor="addItem">Add Item</label>
          <input type="text" 
                autoFocus
                ref={inputRef}
                id='addItem'
                placeholder='Add Item'
                required
                value={newItem}
                onChange={(e)=>setNewItem(e.target.value)}
          />
          <button
                type='submit'
                onClick={()=>{inputRef.current.focus()}}
                aria-label='Add Item'>
                <FaPlus/>
            </button>
    </form>
  
  )
}

export default AddItem