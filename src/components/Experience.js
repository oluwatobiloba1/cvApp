import React from 'react'
import { useState } from 'react';
import Works from './Works'

function Experience() {
    const data=[{"name": "CX", "pos":"junior dev", "desc":"working to build the website","duration":1}]
    const [works, setworks] = useState(data);

  return (
    <div className='experince'>
        <h4>add work experience</h4>
        {works.length >0 && works.map((work) =>(
            <div className='exp-added' key={work.name}>
                <p>{work.name}</p>
                <p>{work.pos}</p>
                <p>{work.desc}</p>
                <p>{work.duration}</p>
            </div>
        ))}
        <Works />
        <button>Add</button>
    </div>
  )
}

export default Experience