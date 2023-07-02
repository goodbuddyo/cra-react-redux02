import React from "react";
import {Link} from "react-router-dom";

const TopicsTopPar=() => (
  <section className="mybody-section summarize-body">
    <p>If you already have a maintenance project in mind, you can continue to <Link to="/research">Step 2.</Link>. However, reviewing your site may help identify other priority areas in need of attention.</p>
    <p>Review performance data, usability testing results and user feedback to help identify problem areas. Consider below some topics that may need attention. Additional topics can be added to the below list as you recognize them. </p>
    <p>
      After deciding on a topic that needs attention in your application, proceed to  <Link to="/research">Step 2.</Link>


    </p>
  </section>
);

export default TopicsTopPar;
