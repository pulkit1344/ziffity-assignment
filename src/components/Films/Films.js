import "./Films.css";

import Grid from "../Grid";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Spinner } from "reactstrap";

function Films() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const mappedFilms =
    films?.results?.filter((item) =>
      history.location.state.films.includes(item.url)
    ) || [];

  useEffect(() => {
    async function fetchFilms() {
      try {
        setLoading(true);
        let response = await fetch("https://swapi.dev/api/films/");
        response = await response.json();
        setFilms(response);
      } catch (err) {
      } finally {
        setLoading(false);
      }
    }

    fetchFilms();
  }, []);

  const data = {
    header: [
      { label: "title", type: "string" },
      { label: "episode_id", type: "number" },
      { label: "opening_crawl", type: "string" },
      { label: "director", type: "string" },
      { label: "producer", type: "string" },
      { label: "release_date", type: "string" },
    ],
    values: mappedFilms,
    actions: [
      {
        label: "Go to Residents",
        action: (row) => {
          history.push({
            pathname: `/${row.title}/residents`,
            state: { residents: row.characters },
          });
        },
      },
    ],
  };

  return (
    <div className="App">
      <h1>Films</h1>
      {loading ? <Spinner>Loading...</Spinner> : <Grid data={data} />}
    </div>
  );
}

export default Films;
