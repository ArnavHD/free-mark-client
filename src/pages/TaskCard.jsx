import React from "react";
import { Link } from "react-router";

const TaskCard = ({ task }) => {
  const {_id, url, task_Title, description } = task;
  

  return (
    // <div className="card card-side bg-base-100 shadow-sm">
    //   <figure className="w-52 h-52 shrink-0">
    //     <img src={url} className="w-full h-full object-cover" alt="Movie" />
    //   </figure>
    //   <div className="card-body">
    //     <h2 className="card-title">{task_Title}</h2>
    //     <p>{description}</p>
    //     <div className="card-actions justify-end">
    //       <button className="btn btn-primary">
    //         {" "}
    //         <Link to={`/browse-tasks-layout/browse-tasks/${_id}`}>
    //           View details
    //         </Link>{" "}
    //       </button>
    //     </div>
    //   </div>
    // </div>

    // the main
    <div className="card  lg:card-side  bg-base-100  shadow-sm">
      <figure className="w-full md:w-52 md:h-54 shrink-0">
        <img src={url} className="w-full h-full" alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{task_Title}</h2>
        <p className="w-full xl:hidden">
          
          {description.length > 30 ? description.slice(0, 20): description}
          {description.length > 30 ? <span className="font-bold">...see more</span> : ""}
        </p>
        <p className="hidden xl:block">{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            <Link to={`/browse-tasks-layout/browse-tasks/${_id}`}>
              View details
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
