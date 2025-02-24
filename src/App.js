import './App.css';
import About from './Components/About/About';
import Cover from './Components/Cover/Cover';
import Footer from './Components/Footer/Footer';
import Formylary from './Components/Formulary/Formulary';
import Header from './Components/Header/Header';
import Recipes from './Components/Recipes/Recipes';
import Socials from './Components/Socials/Socials';

function App() {
  return (
    <div className="App">
      <Header />
      <div class="wrapper">
        <div>
          <Cover />
        </div>
      </div>
      <div class="wrapper2">
        <div>
          <Formylary />
          <About />
        </div>
      </div>
      <div class="wrapper3">
        <div>
          <main class="content-container">
            <Recipes />
            <Socials />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
