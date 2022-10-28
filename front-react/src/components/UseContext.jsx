import { createContext, useState } from "react";
import axios from "axios";

const Store_context = createContext();

export default Store_context;

export const Store_x = ({ children }) => {
  let [counts, setcounts] = useState(0);
  let [allanswer, setanser] = useState([]);

  let [rank, setrank] = useState(0);
  const [name, setname] = useState("");

  console.log("counts is ", typeof counts);
  const send_rank = async () => {
    await axios({
      method: "post",
      header: {
        'Content-Type': 'application/json'
    },
      url: "http://localhost:5000/user/apipost",
      data: [counts],
    }).then((response) => {
      console.log("res is ", response.data);
    });
  };

  const get_rank = async () => {
    try {
      const response = await axios.get("http://localhost:5000/user/rank");
      setrank(response.data);
      console.log(response.data , 'is :::::::');
    } catch (error) {
      console.error(error);
    }
  };

  let contextData = {
    counts,
    setcounts,
    send_rank,
    get_rank,
    rank,
    name,
    setname,
    allanswer,
    setanser
  };

  return (
    <Store_context.Provider value={contextData}>
      {children}
    </Store_context.Provider>
  );
};
