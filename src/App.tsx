import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/header/header";
import Episodes from "./pages/episodes/episodes";
import Footer from './components/footer/footer';

const App: React.FC = () => {
  return (
      <div>
          <Header/>
          <Episodes/>
          <Footer/>
      </div>
  );
}

export default App;
