import React, { ReactElement } from "react";
import Header from "../../src/components/Header";
import ImageComponent from "../../src/components/Image";

const LandingPage = (): ReactElement => {
  return (
    <div className="main-page">
      <Header />
      <div className="title">
        <h1>Tule ja koe X!</h1>
      </div>
      <ImageComponent imageUrl={""} />
      <div className="content">
        <p>Jotta voisit osallistua retkille, saavuthan paikkaan X!</p>
      </div>
    </div>
  );
};

export default LandingPage;
