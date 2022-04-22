import "./Residents.css";

import Grid from "../Grid";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Spinner } from "reactstrap";

function Films() {
  const [residents, setResidents] = useState([]);
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  useEffect(() => {
    async function fetchResidents() {
      try {
        setLoading(true);
        await Promise.all(
          history.location.state.residents.map((url) =>
            fetch(url).then((resp) => resp.json())
          )
        ).then((res) => setResidents(res));
      } catch (err) {
      } finally {
        setLoading(false);
      }
    }

    fetchResidents();
  }, []);

  const data = {
    header: [
      { label: "name", type: "string" },
      { label: "height", type: "number" },
      { label: "mass", type: "number" },
      { label: "hair_color", type: "string" },
      { label: "skin_color", type: "string" },
      { label: "eye_color", type: "string" },
      { label: "birth_year", type: "string" },
      { label: "gender", type: "string" },
    ],
    values: residents,
    actions: [{
        label: "Go to Films",
        action: (row) => {
          history.push({
            pathname: `/${row.name}/films`,
            state: { films: row.films },
          });
        },
        hideIfEmpty: "films",
      },],
  };

  return (
    <div className="App">
      <h1>Residents</h1>
      {loading ? <Spinner>Loading...</Spinner> : <Grid data={data} />}
    </div>
  );
}

export default Films;
