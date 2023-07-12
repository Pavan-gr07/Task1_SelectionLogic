import React, { useState } from 'react';
import employees from './employlist';
import './App.css';

function App() {

  const [checklists,setchecklists] = useState([]);

  const handleChange = (e,id) =>
  {
   const ischeck = e.target.checked;
   if(ischeck)
   {
    console.log(id)
    console.log("checklists Top==>" + checklists)
      setchecklists([...checklists,id])
   }else{
     console.log("checklists==>" + checklists)
    setchecklists(checklists.filter((itemID) => itemID !==id  ));
   }
  }
  const  handleAllChange = (e)=> {
    const ischecked = e.target.checked;
    console.log(ischecked)
    if(ischecked)
    {
      const allIds = employees.map((emp) =>emp.ID)
      setchecklists(allIds)
      console.log(checklists)
    }else{
      setchecklists([])
    }
  }




  return(
    <>
        <h1>Employes:</h1>
        <ul>
          
          {employees.map((emp)=>{
            return(

              
          <li key={emp.ID}>
            <input type="checkbox"
            checked = {checklists.includes(emp.ID)}
            onChange={(e)=>handleChange(e,emp.ID)}
           />
             
            

            <label htmlFor={emp.ID} className={checklists.includes(emp.ID)?"strikethrough" :" "}> {emp.Name}</label>
          </li>
            );
          })}
          <li>
            <input 
            type ="checkbox"
            onChange={(e) =>handleAllChange(e)}
            
            />
            
            
            <label className="">Select all</label>
          </li>
        </ul>
    </>
  )
}

export default App;
