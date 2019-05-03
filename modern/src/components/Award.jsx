import React, { Suspense, useMemo, useRef } from 'react';

const AwardImage = ({ src, alt, startLoad }) => {
  const hadLoad = useRef(false);
  const ImgSrc = useMemo(
    () =>
      startLoad &&
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
    [src, startLoad],
  );

  if (!startLoad) {
    return null;
  }

  if (hadLoad.current) {
    return <img src={src} alt={alt} />;
  } else {
    throw ImgSrc;
  }
};

const Award = ({ name, description, src, startLoad }) => {
  return (
    <article className="medal">
      <span className="image">
        <Suspense fallback="Loading…">
          <AwardImage
            startLoad={startLoad}
            src={src}
            alt={name + ' ' + description}
          />
        </Suspense>
      </span>
      {/* TODO: use other tag */}
      {startLoad && (
        <a>
          <div className="content">
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </a>
      )}
    </article>
  );
};

export default Award;
