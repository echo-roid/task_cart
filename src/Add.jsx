

import { React,useState } from 'react';
import './App.css';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

export function ADD() {
    const [add,setAdd] = useState(0) 
    return (
        <div className='counter'>      
                    <div>
                         <button className='plus_minus' onClick={()=>{setAdd(add+1)}}>
                            <AiOutlinePlus  />
                        </button>
                        <input type="number" value={add} />
                        <button className='plus_minus' onClick={()=>{setAdd(add-1)}}>
                            <AiOutlineMinus />
                        </button>
                    </div>
            
            </div>

            )
  }
