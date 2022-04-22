import "./App.css";

import Planets from "../Planets";
import { Alert, Toast, ToastBody, ToastHeader } from "reactstrap";
import { useEffect, useState } from "react";

const App = () => {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (showToast) {
      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    }
  }, [showToast]);
  return (
    <>
      {showToast && (
        <div className="alert-container">
          <Alert>
            <h4 className="alert-heading">Success!</h4>
            <p>Planet added successfully</p>
          </Alert>
        </div>
      )}
      <div className="App">
        <h1>Star Wars Planets</h1>
        <Planets
          additionalColumns={[
            { label: "residents", type: "number" },
            { label: "films", type: "number" },
          ]}
          setShowToast={setShowToast}
        />
      </div>
    </>
  );
};

export default App;
