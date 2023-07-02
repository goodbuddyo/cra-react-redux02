import React from "react";
import {Link} from "react-router-dom";

const PlanExecutePage=() => (
  <section className="mybody-section planexecute-body">
    <h2>Step 4: Plan and Execute</h2>
    <p>
      This part you likely already have under control.
      But if you are looking for suggestions, here are some helpful resources.

    </p>
    <ul>
      <li>Resource 1</li>
      <li>Resource 2</li>
      <li>Resource 3</li>
    </ul>
    <p>With the project completed, you can wrap things up with Setp 5</p>

    <p>
      <Link to="documentRepeat" className="btn btn-mybutton btn-lg">
        Step 5
      </Link>
    </p>
  </section>
);

export default PlanExecutePage;
