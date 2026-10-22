import './App.css';
import './components/Navbar.js'
import Navbar from "./components/Navbar";
import BookCard from "./components/BookCard";

function App() {
  return (
      <main className="App">
          <Navbar />
        <div >
            <BookCard />
        </div>
      </main>
  );
}

export default App;
