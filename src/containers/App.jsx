import React, { Fragment } from "react";

import AddNewTask from "../components/task/AddNewTask";
import Todos from "../components/task/Todos";

const App = () => {
  return (
    <Fragment>
      <AddNewTask />
      <div className="d-flex justify-content-center container">
        <div className="col-md-8">
          <div className="card-hover-shadow-2x mb-3 card">
            <Todos />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default App;
