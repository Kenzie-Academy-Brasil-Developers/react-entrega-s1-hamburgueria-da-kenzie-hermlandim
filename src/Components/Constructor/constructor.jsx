import React from "react";

export const Constructors = ({ children, className, tag, src, alt }) => {
  return (
    <>
      {tag === "img" && <img className={className} src={src} alt={alt} />}
      {tag === "figure" && <figure className={className}>{children}</figure>}
      {tag === "main" && <main className={className}>{children}</main>}
      {tag === "section" && <section className={className}>{children}</section>}
      {tag === "ul" && <ul className={className}>{children}</ul>}
      {tag === "div" && <div className={className}>{children}</div>}
      {tag === "span" && <span className={className}>{children}</span>}
      {tag === "p" && <p className={className}>{children}</p>}
      {tag === "aside" && <aside className={className}>{children}</aside>}
    </>
  );
};
