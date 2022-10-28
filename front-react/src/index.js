import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Store_x } from "./components/UseContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Exam from "./components/Exam";
import Start_exam from "./components/Start_exam";
import Your_rank from './components/Your_rank';
import Currect_answer from './components/Currect_answer'
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Store_x>
        <App />
      </Store_x>
    ),
    children: [
      { index: true, element: <Start_exam />  },
      { path: "exam", element: <Exam /> },
      { path: "start_exam", element: <Start_exam /> },
      { path: "your_rank", element: <Your_rank /> },
      { path: "currect_answer", element: <Currect_answer /> },

    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router} />
  // <React.StrictMode>   // i romve it becouse this ruern mulite render to use effect when start app by StrictMode return two call use effact here i dont need development i use it in production build
);

reportWebVitals();
