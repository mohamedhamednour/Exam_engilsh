import React from "react";
import Store_context from "./UseContext";
import { useNavigate } from "react-router-dom";

const Start_exam = () => {
  const { allanswer } = React.useContext(Store_context);

  const navigate = useNavigate();

  return (
    <>
      <div className="top-[70px] relative  gap-2 text-center m-auto max-w-[500px]  border-2	  border-blue-800  rounded-[5px]      	">
        <h1 className="mt-[20px] mb-[10px] text-blue-600">hi this a currect answer 👇 </h1>
        {allanswer
                  ? allanswer.map((pro) => [
                      <p className="bio_account"> {pro.word} answer is : {pro.pos} </p>,
                    ])
                  : "no data"}
        <button
          class="bg-transparent  p-1  mt-[10px] mb-[10px] hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
        >
                    <a href={`/exam`}> agin Exam</a>

       
        </button>
      </div>
      <br />
    </>
  );
};

export default Start_exam;
