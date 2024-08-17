import { useEffect, useState } from "react";
// import axios from "axios";
import "./App.css";

function App() {
  const [cursor, setCursor] = useState("");
  const [listOfCursors, setListOfCursors] = useState([]);
  const [flag, setFlag] = useState("");
  const [loading, setIsLoading] = useState(false);
  const TOKEN = "uM0M7uypyeeHZ741XIrs9KsFOUEhxUdtXJA=";
  const BASE_URL = "https://flag-gilt.vercel.app/api/challenge/";

  useEffect(() => {
    async function postData() {
      setIsLoading(true);
      try {
        await fetch(BASE_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,POST,PUT,PATCH,DELETE,OPTIONS",
            "Access-Control-Allow-Headers":
              "Content-Type, X-Auth-Token, Origin",
            Authorization: `Bearer ${TOKEN}`,
          },
          body: JSON.stringify({
            cursor,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.nextCursor) {
              setListOfCursors((prev) => [...prev, data?.nextCursor]);
              setCursor(data?.nextCursor);
            }
            if (data.flag) {
              setFlag(data.flag);
            }
          })
          .catch((error) => console.log(error));
      } catch (error) {
        Error(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    if (!flag) {
      postData();
    }
  }, [cursor, flag, listOfCursors]);

  return (
    <div className="App" style={{ fontSize: "20px" }}>
      {loading && <h1>loading</h1>}
      <ul style={{ listStyle: "none" }}>
        {listOfCursors.map((it) => (
          <li key={it}>Cursor: {it}</li>
        ))}
      </ul>
      <div>Flag : {flag}</div>
    </div>
  );
}

export default App;
