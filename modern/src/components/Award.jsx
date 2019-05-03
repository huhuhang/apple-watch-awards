import React, { Suspense, useMemo, useRef } from 'react';

const AwardImage = ({ src, name, description }) => {
  const hadLoad = useRef(false);
  const ImgSrc = useMemo(
    () =>
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
    [src],
  );

  if (hadLoad.current) {
    return <img src={src} alt={name + ' ' + description} />;
  } else {
    throw ImgSrc;
  }
};

const Award = ({ name, description, src }) => {
  return (
    <article className="medal">
      <span className="image">
        <Suspense fallback="hhh">
          <AwardImage src={src} name={name} description={description} />
        </Suspense>
      </span>
      {/* TODO: use other tag */}
      <a>
        <div className="content">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </a>
    </article>
  );
};

export default Award;
