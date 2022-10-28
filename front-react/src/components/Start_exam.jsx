import React from "react";
import Store_context from "./UseContext";
import { useNavigate } from "react-router-dom";

const Start_exam = () => {
    const navigate = useNavigate();

  const { name, setname } = React.useContext(Store_context);
  const onChange = (e) => {
    setname(e.target.value);
    console.log(name);
  };
  return (
    <>
      <div className="top-[70px] relative  gap-2 text-center m-auto max-w-[500px]  border-2	  border-blue-800  rounded-[5px]      	">
        <h1 className="text-blue-600">English Exam</h1>
        <h3 className="mt-[20px] text-[15px]">
          Questions get easier or harder according to how well you do. If your
          English is very good you will answer more difficult questions than
          someone whose English is not as good. You will not be able to see the
          correct answers Unless you finish the exam
        </h3>
        <h2 className="mt-[10px] text-green-500">
          The exam consists of 10 questions
        </h2>

        <div>
          <label
            for="error"
            class="block mb-2 text-sm font-medium text-blue-700 dark:text-blue-500"
          >
            Enter Your name
          </label>
          <input
            onChange={onChange}
            type="text"
            id="error"
            class="text-center m-auto bg-blue-50 border border-blue-500 text-blue-900 placeholder-blue-700 text-sm rounded-lg focus:ring-blue-500 dark:bg-gray-700 focus:border-blue-500 block w-full p-2.5 dark:text-blue-500 dark:placeholder-blue-500 dark:border-blue-500 w-[60%]"
            placeholder="Your name"
            required
          />
          <button
          onClick={()=> navigate("/exam")}
            type="button"
            class="mt-[10px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            GO to Exam
          </button>
        </div>
      </div>
      <br />
    </>
  );
};

export default Start_exam;
