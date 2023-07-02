import React from "react";
import {Link} from "react-router-dom";

const SummarizePage=() => (
  <section className="mybody-section summarize-body">
    <h2>Step 3: Summarize Your Research</h2>
    <p>
      With your research results in hand, you should be able to outline the following.
    </p>
    <ul>
      <li>Give the project a descriptive name</li>
      <li>Why is it critical</li>
      <li>How are other developers addressing this topic and what approach will we use?</li>
      <li>How long will this likely take?</li>
      <li>How many people, and what other resources will be needed?</li>
      <li>What will be the benefits of doing this project? Roi</li>
      <li>What are the risks?</li>
      <li>Are there case studies available?</li>

    </ul>

    <p>
      [Form]<br />
      [input: Project Name]<br />
      [textarea: Why it is critical]<br />
      [textarea: Reference sources]<br />
      [textarea: Estimated time of completion]<br />
      [textarea: Resources needed]<br />
      [textarea: Specific deliverables]<br />
      [textarea: etc]<br />
      [button: Preview PDF]<br />
    </p>

    <p>
      <Link to="planExecute" className="btn btn-mybutton btn-lg">
        Step 4
      </Link>
    </p>
  </section>
);

export default SummarizePage;
