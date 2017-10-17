import * as React from "react";
import { Helmet } from 'react-helmet';

const About = () => (
  <div className="content">
    <Helmet>
      <title>About</title>
    </Helmet>

    <h2 className="title is-2">About</h2>

    <div className="col-12">
      Content
    </div>
  </div>
);

export default About;
