import { Container } from '@mui/material'
import axios from 'axios';
import { Link, Route, Routes} from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import ClientRow from './ClientRow';

export const ClientsList:React.FunctionComponent = ({children}) => {
  const baseURL = "https://localhost:5001/api/Clients";

  const [clients,setClients] = useState([]);
  const [client,setClient] = useState([]);

    useEffect(()=>{
      const cli:any=localStorage.getItem('client')
      setClient(cli);
      axios.get(baseURL).then((response)=>{
        setClients(response.data);
      });
      
    },[])
  return (
    <>
    <h1 className='text-4xl font-bold'>{children}</h1>
      <Container>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                  <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Client ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      User Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Account Number
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Staff
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {clients.map((client:any) => (
                    <tr key={client.id}>
                      <ClientRow client={client} />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      </Container>
    </>
  )
}
