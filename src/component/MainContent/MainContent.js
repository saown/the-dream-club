import React from "react";

const MainContent = (props) => {
    const {exercise,sidebarHandeler, btnHandeler} = props;
    return(
        <div>
            <div className="header bg-primary">
                <div className="logo h1">The Dream Club</div>
                <button type="button" className="details-btn btn btn-dark" onClick={sidebarHandeler}>Details</button>
            </div>
            <div className="exercises d-flex flex-wrap justify-content-center align-items-center gap-3">
                {exercise.map((item)=>{
                    return(
                        <div className="card" key={item.id}>
                            <img src={item.img} alt="sorry" className="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.description}</p>
                                <p className="card-text">Time required : <strong>{item.time}s</strong></p>
                                <button type="button" className="btn btn-primary w-100 add-to-list-btn" onClick={() => btnHandeler(item.time)} data-time={item.time} data-id={item.id}>Add To List</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
export default MainContent;