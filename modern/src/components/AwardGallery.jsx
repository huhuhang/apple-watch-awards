import React from 'react';
import Award from './Award';

const AwardGallery = ({ title, awards }) => {
  return (
    <section>
      <header>
        <h2 className="button primary fit small">{title}</h2>
      </header>
      <section className="tiles">
        {awards.map(award => (
          <Award key={award.name} {...award} />
        ))}
      </section>
    </section>
  );
};

export default AwardGallery;
