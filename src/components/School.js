import React from 'react'

function School() {
  return (
    <form className='school'>
        <label htmlFor="">School name:
            <input type="text" name="school-name"/>
        </label>
        <label htmlFor="">Level of study:
            <input type="text" name="level"/>
        </label>
        <label htmlFor="">Duration:
            <input type="number" name="phone-number" id="duration" />
        </label>
        
    </form>
  )
}

export default School