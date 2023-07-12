import React, { useState } from 'react';
import employees from './employlist';
import './App.css';

function App1() {
    const [ischecked, setisChecked] = useState([]);
    const [allselect,setAllselect] = useState(false);

    const handlerClick = (e,id) => {
        let check = e.target.checked;
        console.log(check)
        if(check)
        {
            setisChecked([...ischecked, id]);
        }else{
           setisChecked( ischecked.filter((employeesID) =>employeesID !== id))
           setAllselect(false)
        }
        setAllselect(employees.length-1 === ischecked.length);
    }

    const handlerSelectAll = () =>{
        if(allselect)
        {
            setAllselect(false)
            setisChecked([])
        }else{
            setAllselect(true)
            setisChecked(employees.map((e) =>e.ID))
        }
    }


    return (
        <>

            <h1>Employes Details</h1>
            
            <li className='selectall'>

               <label >
                <input
                    type='checkbox'
                    onChange={handlerSelectAll}
                    checked={allselect}
                    
                />
                    Select all
                
               
               </label>
            </li>
                
            <ol>
                {employees.map((e) => {
                    return (
                        <li key={e.ID}>
                            <label className={`${ischecked.includes(e.ID) ? 'strikethrough' : ''}`}>
                            
                            <input type='checkbox'
                                onChange={(event) => {handlerClick(event,e.ID) }}
                                checked={ischecked.includes(e.ID)}
                            />
                            {e.Name}
                            </label>
                        </li>


                    )
                })}



            </ol>
        </>


    )

}

export default App1;
