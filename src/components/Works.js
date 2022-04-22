import React from 'react'

function works() {
  return (
    <form  className='work'>
        <label htmlFor="">Company name:
            <input type="text" name="Company-name"/>
        </label>
        <label htmlFor="">Position:
            <input type="text" name="position"/>
        </label>
        <label htmlFor="">Description:
            <input type="text" id="description" />
        </label>
        <label htmlFor="">Duration:
            <input type="number" id="duration" />
        </label>
        
    </form>
  )
}

export default works