import React, {useEffect, useState} from "react";
import SideBar from "./component/SideBar/SideBar";
import MainContent from "./component/MainContent/MainContent";
import Question from "./component/Question/Question";
import { ToastContainer, toast } from 'react-toastify';

import "./component/style.css";

function App() {

    const addToListBtn = document.querySelectorAll(".add-to-list-btn");
    const breakTimeBtn = document.querySelectorAll(".break-time-btn");

    const localExerciseTime = (localStorage.getItem("exerciseTimeAdd") === null ? 0 : Number(localStorage.getItem("exerciseTimeAdd")))
    const localBreakTime = (localStorage.getItem("breakTime") === null ? 0 : Number(localStorage.getItem("breakTime")))

    const [exercise, setExercise] = useState([]);
    const [breakTimes, setBreakTimes] = useState([]);
    const [exerciseTime, setExerciseTime] = useState(localExerciseTime);
    const [breakTime, setBreakTime] = useState(localBreakTime);

    useEffect(()=>{
        fetch("data.json",{
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then((data)=>{
                setExercise(data.exercise);
                setBreakTimes(data.breakTimes);
            })
    },[]);

    useEffect(()=>{

        addToListBtn.forEach((item)=>{
            item.addEventListener("click",(data)=>{
                let exerciseTimeAdd = Number(data.target.dataset.time) + exerciseTime
                localStorage.setItem("exerciseTimeAdd", exerciseTimeAdd.toString());
                setExerciseTime(exerciseTimeAdd)

            })
        })

        breakTimeBtn.forEach((item)=>{
            if (item.getAttribute('data-time') === localStorage.getItem('breakTime')){
                item.classList.add('break-times-active');
            }
        })

        breakTimeBtn.forEach((item)=>{
            item.addEventListener("click", (data)=>{
                let breakTimeA = Number(data.target.dataset.time)
                breakTimeBtn.forEach((items)=>{
                    items.classList.remove('break-times-active')
                })
                data.target.classList.add("break-times-active");
                localStorage.setItem("breakTime", breakTimeA.toString())
                setBreakTime(breakTimeA);
            })

        })

    },[addToListBtn, breakTimeBtn, exerciseTime])

    let show = false;
    const showSidebar = () => {
        if (show === false) {
            document.querySelector('.side-bar').classList.add("show-sidebar")
            show = true
        }else{
            document.querySelector('.side-bar').classList.remove("show-sidebar")
            show = false
        }
    }

    const notify = () => {
        toast('Complete',{
            autoClose:1000,
        });
    };

  return (
      <div>
          <div className="app">
              <div className="main-content">
                  <div><ToastContainer className="mt-5 pt-5"/></div>
                  <MainContent exercise={exercise} sidebarHandeler={showSidebar}/>
              </div>
              <div className="side-bar">
                  <SideBar
                      breakTimes={breakTimes}
                      exerciseTime={exerciseTime}
                      breakTime={breakTime}
                      notify={notify}
                  />
              </div>
          </div>
          <Question/>
      </div>
  );
}

export default App;
