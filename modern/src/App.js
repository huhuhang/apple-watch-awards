import React from 'react';
import AwardGallery from './components/AwardGallery';
import Footer from './components/Footer';
import Header from './components/Header';
import limited from './configs/limited-edition.json';

function App() {
  return (
    <div id="wrapper">
      <Header />
      <AwardGallery title={limited.title} awards={limited.awards} />
      <Footer />
    </div>
  );
}

export default App;
