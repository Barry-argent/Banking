import AnimatedCounte from './AnimatedCounte'
import DoughtChart from './DoughtChart'

const TotalBalancebox = ({accounts = [], totalBanks, totalCurrentBalance}: TotlaBalanceBoxProps) => {
  return (
    <div>
       <section className="total-balance w-full">
        <div className="total-balance-chart">
             <DoughtChart accounts={accounts}/>
        </div>
            <div className="flex flex-col gap-6 items-center">
                <h2 className="header-2">
                Bank Accounts: {totalBanks} 
                </h2>
                <div className="flex flex-col gap-2">
                    <p className="total-balance">
                        Total Current balance
                    </p>
                     <div className="total-balance-amount flex-center">
                        <AnimatedCounte
                        amount = {totalCurrentBalance}
                        /> 
                    </div>
                </div>
            </div>
       </section>
    </div>
  )
}

export default TotalBalancebox
