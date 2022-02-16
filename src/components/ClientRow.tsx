import React from 'react'
import { Link } from 'react-router-dom'

const ClientRow = ({client}:any) => {
  return (
    <>
      <td className="px-6 py-4 whitespace-nowrap">
          <span className="text-sm text-gray-900">
            {client.id}
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="text-sm text-gray-900">
            {client.name}
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{client.account.map((acc:any) => (
              acc.accountNo
          ))}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            {client.status}
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
            {client.isStaff ?
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Yes</span> :
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-green-800">No</span> }
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <Link to="/client" className="text-indigo-600 hover:text-indigo-900">
            <button onClick={()=>{localStorage.setItem('client',client.id);}}>
              View
            </button> 
          </Link>
        </td>
                      
    </>
  )
}

export default ClientRow