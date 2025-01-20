import React, { useContext } from 'react'
import { TransactionStore } from '../store/TransactionStore'

const Details = () => {
 const {income,expense}= useContext(TransactionStore);
  return (
    <div className="w-full bg-white h-[90px] grid grid-cols-2">
            <div className="flex justify-center flex-col my-5 items-center border-r border-r-gray-400">
             <h1>INCOME</h1>
             <p className="text-xl text-green-500 font-medium">₹{income.current}</p>
            </div>
            <div className="flex justify-center flex-col items-center ">
             <h1>EXPENSE</h1>
             <p className="text-xl text-red-500 font-medium">₹{expense.current}</p>
            </div>
          </div>
  )
}

export default Details