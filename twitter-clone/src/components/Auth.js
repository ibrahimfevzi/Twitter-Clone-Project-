import { useState, useEffect } from "react";
import axios from "axios";

export const myAxios = () => {
  const token = localStorage.getItem("s11g2_0223");

  return axios.create({
    headers: {
      Authorization: token,
    },
  });
};

export default function ContentList() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    /* axios
      .get("https://wit-courses-api2.onrender.com/pr/entries", {
        headers: {
          Authorization: myToken,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setContent(res.data);
        }
      })
      .catch((error) => console.log(error)); */

    myAxios()
      .get("https://wit-courses-api2.onrender.com/pr/entries")
      .then((res) => {
        if (res.status === 200) {
          setContent(res.data);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold p-2">Gizli Kullanıcı Listesi</h2>
      <p>Burası aslında gizli bilgi.</p>

      <div className="py-6">
        {content.map((item) => (
          <div className="p-4 bg-white shadow mb-4" key={item.id}>
            <div className="p-4 text-left">
              <h3 className="font-bold text-lg">{item.id}</h3>
              <p>{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
