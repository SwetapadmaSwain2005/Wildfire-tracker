import { useEffect, useState } from "react";
import Map from "./Map";
import { fetchWildfires } from "./api";
import "./App.css";

function App() {
  const [fires, setFires] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchWildfires();
        setFires(data);
      } catch (err) {
        setError("Unable to load wildfire data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div className="app">
      <header className="appHeader">
        <div>
          <p className="eyebrow">NASA Wildfire Tracker</p>
          <h1>Live wildfire alerts on a world map</h1>
          <p className="subtitle">
            Real-time wildfire events from NASA EONET. Click a marker for event details.
          </p>
        </div>
      </header>

      {loading ? (
        <div className="status">Loading wildfire data…</div>
      ) : error ? (
        <div className="status error">{error}</div>
      ) : (
        <Map fires={fires} />
      )}

      {!loading && !error && (
        <div className="legend">
          Showing {fires.length} active wildfire event{fires.length === 1 ? "" : "s"}
        </div>
      )}
    </div>
  );
}

export default App;