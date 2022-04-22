import "./PlanetDetails.css";
import { useHistory } from "react-router-dom";

function Films() {
  const history = useHistory();
  const planetData = history.location.state.details;

  return (
    <div className="App">
      <h1>Planet Details</h1>
      <div>
          <p>Planet Name: {planetData?.name}</p>
          <p>Planet Population: {planetData?.population}</p>
          <p>Planet Diameter: {planetData?.diameter}</p>
      </div>
    </div>
  );
}

export default Films;
