import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Award from './Award';

const GalleryTitle = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;

  h2 {
    width: 100%:
  }
`;

let ticking = false;

const AwardGallery = ({ title, awards }) => {
  const [intersectingList, setIntersection] = useState(
    Array(awards.length).fill(false),
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach((entity, index) => {
          if (entity.isIntersecting) {
            setIntersection(list => {
              if (list[index]) {
                observer.unobserve(entity.target);
                return list;
              } else {
                return list.map((status, i) => (i === index ? true : status));
              }
            });
          }
        });
      },
      { threshold: [0, 0.5, 1] },
    );
    (document.querySelectorAll('.medal') || []).forEach(item =>
      observer.observe(item),
    );
  }, []);

  useEffect(() => {
    let timer;
    const container = document.querySelector('#main');

    const onScroll = () => {
      clearTimeout(timer);
      if (!ticking) {
        ticking = true;
        container.classList.add('cant-touch');
        timer = setTimeout(() => {
          container.classList.remove('cant-touch');
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
      <div className="inner">
        <GalleryTitle>
          <h2 className="button primary fit small">{title}</h2>
        </GalleryTitle>
        <section className="tiles">
          {awards.map((award, index) => (
            <Award key={index} startLoad={intersectingList[index]} {...award} />
          ))}
        </section>
      </div>
    </section>
  );
};

export default AwardGallery;
