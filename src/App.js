// import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Section from './components/section/Section';
import Posts from './components/posts/Posts';
import Recent from './components/recent/Recent';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <Posts />
      <Recent />
      <Footer />
    </div>
  );
}

export default App;
