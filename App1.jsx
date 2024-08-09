import { useEffect } from 'react'
import { useState } from 'react'
import './App1.css'
import axios from 'axios'

function App1() {
  const [employees,setEmployees]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:3000/register')
    .then(response=>{
      setEmployees(response.data)
    })
    .catch(err=>console.log(err))
  },[])
  return (
    <div className='w-100 vh-100 d-flex justify-content-center align-items-center'>
      <div className='w-50'>
      <table className='table'>
        <thead>
          <tr>
            <th>
              Name
            </th>
            <th>
              Email
            </th>
            <th>
              password
            </th>
          </tr>
        </thead>
        <tbody>
          {
            employees.map(user=>{
              return <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default App1
