import React from "react";

const PageNotFound = () => {
  return (
    <section>
      Przepraszamy, podana strona: "{window.location.pathname}" nie została
      znaleziona
    </section>
  );
};

export default PageNotFound;
