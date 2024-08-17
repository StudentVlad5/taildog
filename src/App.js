import { useEffect, useState } from "react";
// import axios from "axios";
import "./App.css";

function App() {
  const [listOfCursors, setListOfCursors] = useState([]);
  const [cursor, setCursor] = useState("4e76cffe");
  const [loading, setIsLoading] = useState(false);
  const TOKEN = "uM0M7uypyeeHZ741XIrs9KsFOUEhxUdtXJA=";
  const BASE_URL = "https://flag-gilt.vercel.app/api/challenge/";

  useEffect(() => {
    async function postData() {
      setIsLoading(true);
      try {
        const { data } = await fetch(BASE_URL, {
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
        });
        if (!data) {
          return Error(alert("Whoops, something went wrong"));
        }
        setListOfCursors(listOfCursors.push(data));
        if (data?.nextCursor) {
          setCursor(data?.nextCursor);
        }
      } catch (error) {
        Error(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    if (cursor && cursor.length === 8) {
      postData();
    }
  }, [cursor, listOfCursors]);

  return (
    <div className="App">
      <header className="App-header"></header>
      {loading && <h1>loading</h1>}
      {listOfCursors.forEach((it, ind) => (
        <div key={ind}>{it}</div>
      ))}
    </div>
  );
}

export default App;
