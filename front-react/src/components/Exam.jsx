import React from "react";
import axios from "axios";
import Raido from "./Raido";
import Store_context from "./UseContext";
import { useNavigate } from "react-router-dom";

const Exam = () => {
  const navigate = useNavigate();

  const [state, setState] = React.useState({});   
  // import data by store 
  const { send_rank, get_rank, setanser, allanswer , end , setend } =
    React.useContext(Store_context);
// function  get question 
  const handel_Api = async () => {
    try {
      if (end < 10) {
        const response = await axios.get("http://localhost:5000/user/student");
        setState(response.data);
        setanser([...allanswer, response.data]); //add question in array 
        setend(end + 1);
      } else if (end == 10) {
        //if value == 10 go to rank user 
        send_rank(); //call post function in store  send rank
        get_rank(); //call get function in store  return rank 
        navigate("/your_rank" , {replace: true});
      } 
    } catch (error) {
      console.error(error);
    }
    console.log(end);
  };

  React.useEffect(() => {
    //  call api when start app 
    handel_Api();

  }, []);

  return (
    <>
      <div className="top-[60px] relative  gap-2 text-center m-auto max-w-[500px]  border-2	  border-blue-800  rounded-[5px]      	">
        <div class="max-w-[80%] m-auto mt-[20px] bg-gray-200 ">
          <div
            class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none "
            style={{ width: `${end}0%` }}
          >
            {" "}
            {end}0%
          </div>
        </div>
        <h1 className="mt-[20px]"> question number : {end} </h1>

        <h1 className="mt-[20px]"> select type name : {state.word} </h1>

        <Raido value_std={state} />
        <div className="gap-[10px]">
          <button
            onClick={() => handel_Api()}
            class="bg-transparent   mt-[30px] mb-[30px] hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            {end == 10 ? "Go to Rank" : "next"}
          </button>
          <button
            onClick={() => window.location.reload()}
            class="bg-transparent  p-1  mt-[30px] mb-[30px] hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
          >
            end Exam
          </button>
        </div>
      </div>
      <br />
    </>
  );
};

export default Exam;
