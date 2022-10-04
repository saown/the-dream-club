import React from "react";

const SideBar = (props) => {

    const {breakTimes, exerciseTime, breakTime, notify, btnHandeler} = props;

    return(
        <div>
            <div className="profile-details">
                <div className="profile-image"></div>
                <p className="user-name text-uppercase m-0 h5">MD ROBIUL Islam</p>
                <p className="phone">+8801701646410</p>
            </div>
            <div className="break">
                <h5>Add A Break</h5>

                <ul className="break-times">
                    {breakTimes.map((item,index)=>{
                        return(
                            <li key={index} className="break-time-btn" onClick={() => btnHandeler(item)} data-time={item}>{item}s</li>
                        )
                    })}
                </ul>
            </div>
            <div className="exercise-details">
                <h5>Exercise Details</h5>
                <div className="exercise-data">
                    <div className="exercise-time">Exercise time: <span>{exerciseTime} seconds</span></div>
                    <div className="break-time">Break time: <span>{breakTime} seconds</span></div>
                </div>
            </div>
            <button type="button" className="btn btn-dark mt-4 activity-completed-btn" onClick={notify}>Activity Completed</button>
        </div>
    );
}
export default SideBar;