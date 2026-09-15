import Header from './Header.jsx';
import SideBar from './SideBar.jsx';

function Dashboard() {
  return (
  <div className="dashboard">
    <title>Dashboard</title>
    <SideBar/>
    <div className="dashboard-content">
      <Header/>
      <main className="main-content">
        <h2>Welcome Back</h2>
        <section className="cards">
            <article className="card">
                 <h3>Students</h3>
                 <p>17</p>
            </article>
              <article className="card">
                 <h3>Lessons</h3>
                 <p>200</p>
            </article>
               <article className="card">
                 <h3>Upcomming</h3>
                 <p>4</p>
            </article>

        </section>
        <h3>Recent Students</h3>
        <section className='cards'>
<article className="card student">
                 <h3>Ranim</h3>
                 <p>17</p>
            </article>
            <article className="card student">
                 <h3>Ahmad</h3>
                 <p>17</p>
            </article>
            <article className="card student">
                 <h3>Bady</h3>
                 <p>17</p>
            </article>


        </section>
      </main>
    </div>
  </div>
  );
}

export default Dashboard;