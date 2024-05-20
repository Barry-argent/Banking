import RightSidebar from "@/components/RightSidebar"
import TotalBalancebox from "@/components/TotalBalanceBox"
import HeaderBox from "@/components/ui/HeaderBox"

const Home = () => {
  const loggedIn = {firstName: 'Usaamah', lastName: 'Ishola', email:'isholausaamah@gmail.com' }
  return (
    <section className='home'>
        <div className="home-content">
          <header className="home-header">
               <HeaderBox
                type="greeting"
                title="welcome"
                user= {loggedIn?.firstName || 'guest'}
                subtext = "Access and mange your account and transaction efficiently."
               />
               <TotalBalancebox 
                accounts ={[]}
                totalBanks = {1}
                totalCurrentBalance={1250.35}
               />
          </header>
              RECENT TRANSACTIONS
        </div>
            <RightSidebar
              user={loggedIn}
              transactions={[]}
              banks={[{currentBalance: 123.50},{currentBalance: 500.50}]}
            />
    </section>
  )
}

export default Home
