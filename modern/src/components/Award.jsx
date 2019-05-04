import React, { Suspense, useMemo, useRef } from 'react';
import styled from 'styled-components';

const AwardImage = ({ src, alt, isInViewport }) => {
  const hadLoad = useRef(false);
  const imgSrc = useMemo(
    () =>
      isInViewport &&
      new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(src);
        img.onerror = err => {
          console.log(err);
          reject('图片加载失败');
        };
        hadLoad.current = true;
      }),
    [src, isInViewport],
  );

  if (!isInViewport) {
    return <div style={{ width: 259, height: 259 }} />;
  }

  if (hadLoad.current) {
    return <img src={src} alt={alt} />;
  } else {
    throw imgSrc;
  }
};

const AwardDescription = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: background-color 0.5s ease, transform 0.5s ease;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1em;
  border-radius: 6px;
  border-bottom: 0;
  color: white;
  text-align: center;

  &:hover {
    color: #202020;
    background-color: rgba(255, 255, 255, 0.8);
    transform: scale(1.1);
  }

  .content {
    transition: max-height 0.5s ease, opacity 0.5s ease;
    width: 100%;
    max-height: 0;
    line-height: 1.5;
    margin-top: 0.35em;
    opacity: 0;
  }
`;

const Award = ({ name, description, src, isInViewport, index }) => {
  return (
    <article
      className="medal"
      data-index={index}
      tabIndex={0}
      aria-hidden={!isInViewport}
    >
      <span className="image">
        <Suspense fallback="Loading…">
          <AwardImage
            isInViewport={isInViewport}
            src={src}
            alt={name + ' ' + description}
          />
        </Suspense>
      </span>
      {isInViewport && (
        <AwardDescription>
          <div className="content">
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </AwardDescription>
      )}
    </article>
  );
};

export default Award;
