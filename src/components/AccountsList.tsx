import { IconButton } from '@mui/material';
import React from 'react'
import { account, client } from '../Pages/types';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Close';
import { green, red } from '@mui/material/colors';

const AccountsList = ({account}:any) => {
  return (
    <>
        <td className="px-6 py-4 whitespace-nowrap">
        <span className="text-sm text-gray-900">
            {account?.accountNo}
        </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
            {account?.originalLoan}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
            {account?.loanBalance}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
            {account?.amountPaid}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
            {account?.status.toString()==="active"? 
                <CheckIcon sx={{color: green[500],fontSize: 30}} fontSize="inherit" />:
                <ClearIcon sx={{color: red[500],fontSize: 30}} fontSize="inherit" />
            }
        </td>
    </>
  )
}

export default AccountsList