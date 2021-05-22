import React, { ReactElement } from "react";
import Header from "../../src/components/Header";
import ImageComponent from "../../src/components/Image";

const LandingPage = (): ReactElement => {
  return (
    <div className="main-page">
      <Header />
      <div className="title">
        <h1>Tour in X is waiting for you!</h1>
      </div>
      <ImageComponent imageUrl={""} />
      <div className="content">
        <p>
          In order to take part in the tours, please make your way to the X
          place!
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
