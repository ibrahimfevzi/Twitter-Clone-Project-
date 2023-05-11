import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function EntryForm() {
  const history = useNavigate();
  const { handleSubmit, register } = useForm({});

  function gonder(data) {
    // console.log(data);
    axios
      .post("https://wit-courses-api2.onrender.com/pub/entries", data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    history("/entry-list");
  }

  return (
    <form onSubmit={handleSubmit(gonder)}>
      <label className="flex py-2 items-center gap-2 justify-center" htmlFor="">
        <span>Mesaj</span>
        <input
          className="h-8 border px-2 text-black  rounded-md"
          type="text"
          {...register("body")}
        />
      </label>
      <p className="text-center">
        <button className="py-2 px-4 bg-green-600 text-white rounded shadow-md">
          Kaydet
        </button>
      </p>
    </form>
  );
}
