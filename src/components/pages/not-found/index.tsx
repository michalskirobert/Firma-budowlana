import React from "react";

const PageNotFound = () => {
  return (
    <section style={{ margin: "0 auto", maxWidth: "1200px" }}>
      Przepraszamy, podana strona: "{window.location.pathname.replace("/", "")}"
      nie została znaleziona
    </section>
  );
};

export default PageNotFound;
