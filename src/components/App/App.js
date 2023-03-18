import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {
  return (
    <body className="page">
    <Header/>
    <Main/>
    <Footer/>

  <template id="template-card">
    <div className="card">
      <button type="submit" className="card__remove-button"></button>
      <img className="card__image" src="#" alt="#"/>
      <div className="card__panel">
        <h2 className="card__title"></h2>
        <div className="card__like-container">
          <button type="submit" className="card__like-button"></button>
          <label className="card__like-number"></label>
        </div>
      </div>
    </div>
  </template>
    </body>
    
  );
}

export default App;
