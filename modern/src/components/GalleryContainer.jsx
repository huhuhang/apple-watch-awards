import React, { useEffect } from 'react';

const GalleryContainer = ({ children }) => {
  useEffect(() => {
    let timer;
    let isScrolling = false;
    let ticking = false;
    const container = document.querySelector('#main');

    const onScroll = () => {
      clearTimeout(timer);
      if (!ticking) {
        !isScrolling && container.classList.add('cant-touch');
        ticking = true;
        isScrolling = true;
        timer = setTimeout(() => {
          container.classList.remove('cant-touch');
          isScrolling = false;
        }, 200);
        requestAnimationFrame(() => {
          ticking = false;
        });
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="main">
      <div className="inner">{children}</div>
    </section>
  );
};
export default GalleryContainer;
