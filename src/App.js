import React from 'react';
import './App.css';
import About from '../src/components/About';
import Contact from '../src/components/Contact'
import Project from '../src/components/Project'
import Header from './components/Header'
import Footer from './components/Footer'
import Resume from './components/Resume'

function App() {
  const [page, setPage] = React.useState('');
  
  const showPage = () => {
    if (page === "about") {
      return <About />
    } else if (page === "contact") {
      return <Contact />
    }else if (page === "portfolio") {
      return <Project /> 
    }else if (page === "resume") {
      return <Resume /> 
    }else {
      return (
        <h1>Home Page</h1>
      )
    }
  }

  return (
    <div> 
        <Header setPage={setPage}/>

      <main>
        {showPage()}
      </main>  
      <Footer/>
    </div>
  );
}
export default App;