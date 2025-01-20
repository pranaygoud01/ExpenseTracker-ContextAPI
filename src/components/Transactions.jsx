import React, { useRef } from 'react'
import { useContext } from 'react';
import {TransactionStore} from "../store/TransactionStore"
const Transactions = () => {
   const {addTransaction}=useContext(TransactionStore);
  const purpose=useRef();
  const amount=useRef();
  const spentAmount=()=>{
    addTransaction("spent",purpose.current.value,amount.current.value);
    purpose.current.value=""
    amount.current.value=""
  }
  const incomeAmount=()=>{
    addTransaction("income",purpose.current.value,amount.current.value);
    purpose.current.value=""
    amount.current.value=""
  }
  return (
    <div className='w-full h-fit mt-6'>
        <h1 className='border-b-2 border-neutral-200 pb-1'>Add new transaction</h1>
        <p className='text-sm mt-3'>Purpose</p>
        <input type='text' className='w-full p-2 py-3 text-sm border mt-2' placeholder='Enter purpose' ref={purpose} />
        <p className='text-sm mt-3'>Amount</p>
        <input type='text' className='w-full p-2 py-3 text-sm border mt-2' placeholder='Enter amount' ref={amount} />

        <div className='flex gap-4 mt-5'>
        <button className='py-3 w-[50%] bg-green-500 rounded-md text-white text-sm  font-bold' onClick={incomeAmount}>Income</button>
            <button className='py-3 w-[50%] bg-red-500 rounded-md text-white text-sm  font-bold' onClick={spentAmount}>Spent</button>
           
        </div>
    </div>
  )
}

export default Transactions