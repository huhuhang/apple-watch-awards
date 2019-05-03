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

const Container = styled.section.attrs({
  id: 'main',
})`
  pointer-events: ${props => (props.isScrolling ? 'none' : 'auto')};
`;

// let ticking = false;
// const ric =
//   typeof requestIdleCallback === 'function'
//     ? requestIdleCallback
//     : f => setTimeout(f, 50);

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

  return (
    <Container id="main">
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
    </Container>
  );
};

export default AwardGallery;
