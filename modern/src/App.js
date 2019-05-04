import React from 'react';
import AwardGallery from './components/AwardGallery';
import Footer from './components/Footer';
import Header from './components/Header';
import awards from './configs/awards';

function App() {
  return (
    <div id="wrapper">
      <Header />
      {awards.map(awardList => (
        <AwardGallery
          key={awardList.title}
          title={awardList.title}
          awards={awardList.awards}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
