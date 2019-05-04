import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import GalleryContainer from './components/GalleryContainer';
import AwardGallery from './components/AwardGallery';
import awards from './configs/awards';

function App() {
  return (
    <div id="wrapper">
      <Header />
      <GalleryContainer>
        <ul>
          {awards.map(awardList => (
            <AwardGallery
              key={awardList.title}
              title={awardList.title}
              awards={awardList.awards}
            />
          ))}
        </ul>
      </GalleryContainer>
      <Footer />
    </div>
  );
}

export default App;
