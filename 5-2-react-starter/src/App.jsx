
import './App.css'
import StudentCard from './components/StudentCard'

function App() {
  return (
    <div>
      <header className="dashboard-header">
        <h1>Student Information Dashboard</h1>
        <p>View and manage student details</p>
      </header>

      <main>
        <div className="cards-container">
          <h1>Student Info</h1>
            <StudentCard name="Abdulaziz Alguraini" id="202255320" dept="Software Engineering" />
            <StudentCard name="Abdulelah Alamer"   id="2022XXXXX" dept="Software Engineering" />
        </div>
      </main>
    </div>
  );
}

export default App