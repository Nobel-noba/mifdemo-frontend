import { Card, CardActionArea, CardContent, CardMedia, Container, Typography } from '@mui/material';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import AccountsList from '../components/AccountsList';
import { account, client } from './types';

const Client = () => {
  const baseURL = "https://localhost:5001/api/Clients";
  const [client,setClient] = useState<client>()


  useEffect(()=>{
      const setClientData = async() =>{
        const cli:any=await localStorage.getItem('client')
        axios.get(baseURL+'/'+cli).then(responce => {
          setClient(responce.data)
        })
      }
      setClientData()
      
    },[])
    
return (
  <>
  <Container>
  <h1 className='text-4xl font-bold'>Client Accounts</h1>
    <div className="flex flex-row m-8">
    <div className='basis-3/4'>
        <div className="flex flex-col mr-5">
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
                        Account No
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Original Loan
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Loan Balance
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Amount Paid
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                        {
                          // this one is type guard

                          client?.account instanceof Array ? 
                              client?.account?.map(acct=><tr key={acct.accountNo}><AccountsList account={acct}/></tr>)
                              :<tr><td>null</td></tr>
                        }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className='basis-1/4'>
          <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              className='rounded-full'
              component="img"
              height="140"
              image={require('../res/profile.png')}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {client?.name}
              </Typography>
                <div className="flex flex-row">
                  <div className="basis-3/5">
                    <div className="flex flex-col">
                      is staff
                    </div>
                    <div className="flex flex-col">
                      Age
                    </div>
                    <div className="flex flex-col">
                      Gender
                    </div>
                    <div className="flex flex-col">
                      Activation Date
                    </div>
                    <div className="flex flex-col">
                      Number of Loans
                    </div>
                    <div className="flex flex-col">
                      Active Savings
                    </div>
                    <div className="flex flex-col">
                      Status
                    </div>
                  </div>
                  <div className="basis-2/5">
                    <div className="flex flex-col">
                        {client?.isStaff.toString()}
                      </div>
                      <div className="flex flex-col">
                        {client?.age}
                      </div>
                      <div className="flex flex-col">
                        {client?.gender}
                      </div>
                      <div className="flex flex-col">
                        {client?.activation_Date.substr(0,10)}
                      </div>
                      <div className="flex flex-col">
                        {client?.noOfLoans}
                      </div>
                      <div className="flex flex-col">
                        {client?.activeSavings}
                      </div>
                      <div className="flex flex-col">
                        {client?.status}
                      </div>
                  </div>
                </div>
            </CardContent>
          </CardActionArea>
        </Card>
        </div>
    </div>
  </Container>
  
  </>
  )
}

export default Client