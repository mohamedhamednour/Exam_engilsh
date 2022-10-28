import React from "react";
import Store_context from "./UseContext";
import { useNavigate } from "react-router-dom";

const Start_exam = () => {
  const { name, rank } = React.useContext(Store_context);
  const navigate = useNavigate();

  return (
    <>
      <div className="top-[70px] relative  gap-2 text-center m-auto max-w-[500px]  border-2	  border-blue-800  rounded-[5px]      	">
        <h1 className="mt-[30px]">Hello : {name}</h1>
        <h1 className="mt-[20px] mb-[10px]">  {rank == 1 ? 'try agin please ' : ` Your Rank is :${rank}`}</h1>
        {/* <h1 className="mt-[20px] mb-[10px]"> IF you want currect answer 👇 </h1>

        <button
                   
                  onClick={()=> navigate("/currect_answer")}

            class="bg-transparent  p-1  mt-[10px] mb-[10px] hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
          >
           currect answer
          </button><br /> */}
          <h1 className="mt-[20px] mb-[10px]"> IF you want agin  Exam answer 👇 </h1>

        <button
                     onClick={()=> navigate("/exam")}

            class="bg-transparent  p-1  mt-[10px] mb-[10px] hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
          >
            agin  Exam
          </button>
      </div>
      <br />
    </>
  );
};

export default Start_exam;
