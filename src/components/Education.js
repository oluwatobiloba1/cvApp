import React from 'react'
import { useEffect,useState } from 'react'
import School from './School';

function Education() {
    const [school, setSchool] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:8000/schools')
            .then(res=> res.json())
            .then(data=> {
                setSchool(data)
            })
            .catch((err)=>{
                console.log(err)
            })
    },[])

  return (
    <div className='education'>
        <h4>Add Educational experience</h4>
        {school.length >0 && school.map((e) =>(
            <div className="edu-added" key={e.name}>
                <p>{e.name}</p>
                <p>{e.level}</p>
                <p>{e.duration + ` year${e.duration > 1 ? 's' : ''}`}</p>
            </div>
        ))}
        <School />
        <button>Add</button>
    </div>
  )
}

export default Education