import Balance from "./components/Balance"
import Details from "./components/Details"
import History from "./components/History"
import Transactions from "./components/Transactions"
import { TransactionProvider } from '/src/store/TransactionStore.jsx';


function App() {

  return (
    <TransactionProvider>
    <div className="flex justify-center h-[100vh] py-10 bg-neutral-100 items-center overflow-hidden" >
        <div className="w-[400px] max-lg:w-10/12 h-fit">
          <Balance />
          <Details />
          <History />
          <Transactions/>
        </div>
        </div>
    </TransactionProvider>
  )
}

export default App
