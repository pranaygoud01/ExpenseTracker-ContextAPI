import React, { createContext, useRef, useState } from "react";

export const TransactionStore = createContext();

export const TransactionProvider = ({ children }) => {
    const balance=useRef(0);
    const income=useRef(0);
    const expense=useRef(0);
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (type, purpose, amount) => {
    if(type==="income"){
        balance.current=balance.current+Number(amount);
        income.current=income.current+Number(amount);
    }
    else{
        balance.current=balance.current-Number(amount);
        expense.current=expense.current+Number(amount);
    }
    setTransactions((prev) => [
      ...prev,
      { type, purpose, amount: Number(amount) },
    ]);
  };

  return (
    <TransactionStore.Provider value={{ transactions, addTransaction,balance,income,expense }}>
      {children}
    </TransactionStore.Provider>
  );
};
