import React from 'react';
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

const AwardGallery = ({ title, awards }) => {
  return (
    <section id="main">
      <div className="inner">
        <GalleryTitle>
          <h2 className="button primary fit small">{title}</h2>
        </GalleryTitle>
        <section className="tiles">
          {awards.map(award => (
            <Award key={award.name} {...award} />
          ))}
        </section>
      </div>
    </section>
  );
};

export default AwardGallery;
