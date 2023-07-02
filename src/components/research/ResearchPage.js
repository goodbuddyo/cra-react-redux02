import React from "react";
import {Link} from "react-router-dom";

const ResearchPage=() => (
  <section className="mybody-section research-body">
    <h2>Step 2: Research Selected Topic</h2>
    <p>
      After selecting a topic in need of attention, you must turn it into a SMART project - Specific, Measurable, Achievable, Relevant, and Time-bound. To do this, you need to do your research.
    </p>

    <p>
      Other associates and business partners will likely have mny project proposals and be competing for resources needed to complete your project. Projects involving application maintenance are often pushed aside for other projects others may considered of higher priority. Part of your research will involve being prepared to explain the importance and value of your project in terms non developers can understand.
    </p>




    <p>Case studies and examples can help to explain the importance of addressing your selected topic in need of attention. Once you are confident in your understanding, it is time for&nbsp;
      <Link to="documentRepeat">Step 3</Link>  &nbsp;- Summarizing your research.
    </p>
    <p>
      <Link to="summarize" className="btn btn-mybutton btn-lg">
        Step 3
      </Link>
    </p>


  </section>
);

export default ResearchPage;
