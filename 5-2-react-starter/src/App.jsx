import './App.css'
import StudentCard from './components/StudentCard'

function App() {
  return (
    <div className="app">
      <header className="dashboard-header">
        <h1>Student Information Dashboard</h1>
        <p>View and manage student details</p>
      </header>

      <main className="dashboard-main">
        <div className="cards-container">
          <h1>Student Info</h1>

          <StudentCard
            name="Abdulaziz Alguraini"
            id="11"
            dept="Software Engineering"
          />
        </div>
      </main>
    </div>
  );
}

export default App
