import { createContext, useState } from "react";
import axios from "axios";

const Store_context = createContext();

export default Store_context;

export const Store_x = ({ children }) => {
  let [counts, setcounts] = useState(0); //counts answer
  let [allanswer, setanser] = useState([]); //all answer user if you want this 
  const [end, setend] = useState(0);  //start questions 

  let [rank, setrank] = useState(0); //rank user
  const [name, setname] = useState(""); //get name user

// function post rank user
  const send_rank = async () => {
    await axios({
      method: "post",
      header: {
        "Content-Type": "application/json",
      },
      url: "http://localhost:5000/user/apipost",
      data: [counts],
    }).then((response) => {
      console.log("res is ", response.data);
    });
  };
//  get rank user
  const get_rank = async () => {
    try {
      const response = await axios.get("http://localhost:5000/user/rank");
      setrank(response.data);
      console.log(response.data, "is :::::::");
    } catch (error) {
      console.error(error);
    }
  };
//  pass data by store 
  let contextData = {
    counts,
    setcounts,
    send_rank,
    get_rank,
    rank,
    name,
    setname,
    allanswer,
    setanser,
    end,
    setend,
  };

  return (
    <Store_context.Provider value={contextData}>
      {children}
    </Store_context.Provider>
  );
};
