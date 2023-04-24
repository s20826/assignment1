import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/header/header";
import Episodes from "./pages/episodes/episodes";

const App: React.FC = () => {
  return (
      <div>
          <Header/>
          <Episodes/>
      </div>
  );
}

export default App;
