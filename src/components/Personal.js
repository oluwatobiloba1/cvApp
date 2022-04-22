import React from 'react'

export default function Personal() {
  return (
      <div className='person'>
          <h4>Personal</h4>
          <form className='personal'> 
        <label htmlFor="">Name:
            <input type="text" name="name"/>
        </label>
        <label htmlFor="">Email:
            <input type="email" name="email" id="email" />
        </label>
        <label htmlFor="">Phone number:
            <input type="number" name="phone-number" id="phone-number" />
        </label>
        
    </form>
      </div>
  )
}
