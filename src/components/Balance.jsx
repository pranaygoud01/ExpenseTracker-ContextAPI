import React, { useContext } from 'react'
import { TransactionStore } from '../store/TransactionStore'

const Balance = () => {
 const {balance}= useContext(TransactionStore)
  return (
    <div>
            <h1 className="font-semibold text-xl text-center mt-2">Expense Tracker</h1>
            <div className='flex justify-between'>
            <div className="my-6 mt-10">
              <h1 className="font-normal text-sm">YOUR BALANCE :</h1>
               <p className="text-3xl font-semibold">₹{balance.current}</p>
            </div>
            <a href='https://pranayportfolio.vercel.app/about' target='_blank' className='my-6 mt-10 w-[50px] mr-1 hover:scale-105 duration-150'>
               <img src='https://st2.depositphotos.com/3867453/9096/v/450/depositphotos_90960392-stock-illustration-letter-p-logo-icon-design.jpg' className='w-full h-[50px] object-cover rounded-full'/>
            </a>
            </div>
          </div>
  )
}

export default Balance