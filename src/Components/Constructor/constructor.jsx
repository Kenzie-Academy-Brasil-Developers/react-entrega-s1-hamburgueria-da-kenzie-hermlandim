import React from "react";

export const Constructors = ({ children, className, tag, src }) => {
  return (
    <>
      {tag === "img" && <img className={className} src={src} />}
      {tag === "figure" && <figure className={className}>{children}</figure>}
      {tag === "main" && <main className={className}>{children}</main>}
      {tag === "h4" && <h4 className={className}>{children}</h4>}
      {tag === "h5" && <h5 className={className}>{children}</h5>}
      {tag === "h6" && <h6 className={className}>{children}</h6>}
      {tag === "span" && <span className={className}>{children}</span>}
      {tag === "p" && <p className={className}>{children}</p>}
    </>
  );
};
