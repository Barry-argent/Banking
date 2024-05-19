import HeaderBox from "@/components/ui/HeaderBox"

const Home = () => {
  const loggedIn = {firstName: 'Usaamah'}
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
          </header>
        </div>
    </section>
  )
}

export default Home
