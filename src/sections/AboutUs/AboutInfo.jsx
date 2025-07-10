import React from "react";

export default function AboutInfo({ html }) {
  return (
    <>
      <div
        className="abouttop space-y-6"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </>
  );
}
