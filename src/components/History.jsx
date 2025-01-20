import React, { useContext } from "react";
import { TransactionStore } from "../store/TransactionStore";

const History = () => {
  const { transactions } = useContext(TransactionStore);

  if (!transactions) {
    console.error("Transactions are undefined. Check TransactionStore.");
    return <div>Error: Unable to load transactions.</div>;
  }

  return (
    <div className="w-full mt-6 h-fit">
      <h1 className="pb-1 border-b-2 border-neutral-300">History</h1>
      {transactions.length > 0 ? (
        transactions.map((transaction, index) => (
          <div
            key={index}
            className={`w-full h-[40px] bg-white mt-3 border-r-[4px] ${
              transaction.type === "spent" ? "border-red-500" : "border-green-500"
            }`}
          >
            <div className="flex justify-between items-center h-full px-3">
              <h1>{transaction.purpose}</h1>
              <h1>
                {transaction.type === "spent" ? "-" : "+"} ₹{transaction.amount}
              </h1>
            </div>
          </div>
        ))
      ) : (
        <p className="text-sm text-neutral-500 mt-3">No transactions found.</p>
      )}
    </div>
  );
};

export default History;
