import { useEffect, useState } from "react";
import axios from "axios";

// GET from "https://wit-courses-api2.onrender.com/entries"

export default function Liste() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    axios
      .get("https://wit-courses-api2.onrender.com/entries")
      .then((res) => setEntries(res.data))
      .catch((err) => console.log(err));
  }, []);

  function sil(id) {
    axios
      .delete("https://wit-courses-api2.onrender.com/pub/entries/" + id)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <div className="flex flex-col-reverse gap-4">
      {entries.map((e) => (
        <div
          className="p-4 bg-white rounded-md flex gap-4 items-start border border-gray-200"
          key={e.id}
        >
          <span className="flex-1">{e.body}</span>
          <span className="text-sm text-gray-500 cursor-pointer underline">
            Düzenle
          </span>
          <span
            className="text-sm text-red-500 cursor-pointer underline"
            onClick={() => sil(e.id)}
          >
            Sil
          </span>
        </div>
      ))}
    </div>
  );
}
