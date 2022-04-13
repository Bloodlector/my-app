import '../App.css';
import Footer from './Footer';
import Header from './Header';
import Body from './Body';

function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <Header />
        <Body />        
        <Footer />
      </header>
    </div>
  );
}

export default App;
