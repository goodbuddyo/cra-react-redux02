import React from "react";
import {Link} from "react-router-dom";

const SummarizePage=() => (
  <section className="mybody-section summarize-body">
    <h2>Step 3: Lorem ipsum dolor sit amet</h2>


    <p>
      &quot;But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?&quot;
    </p>

    <p>
      <a href="https://www.lipsum.com/" className="mycarousel-link">
        &nbsp;&nbsp;&nbsp;&nbsp; -- Section 1.10.32 of &quot;de Finibus Bonorum et Malorum&quot; , written by Cicero in 45 BC
      </a>
    </p>

    <p>
      <Link to="planExecute" className="btn btn-mybutton btn-lg">
        Step 4
      </Link>
    </p>
  </section>
);

export default SummarizePage;
