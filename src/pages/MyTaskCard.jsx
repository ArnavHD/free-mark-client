import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const MyTaskCard = ({single, tasks, setTasks}) => {
    const { _id, url, task_Title, category, Deadline, description } = single;
    console.log('This is tasks: ', tasks);
    const formatedDate = Deadline.split("T")[0];
    const handleDelete = (_id) =>{
        console.log("Cliked id for delet: ", _id);
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            console.log(result.isConfirmed);
          if (result.isConfirmed) {
            fetch(`http://localhost:3000/tasks/${_id}`, {
                method: 'DELETE'
            })
            .then(res =>res.json())
            .then(data =>{
                console.log('After delete ', data);
                if(data.deletedCount){
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your  task has been deleted.",
                    icon: "success",
                  });

                //   remove the task from the state
                const remainingTasks = tasks.filter(task => task._id !== _id);
                setTasks(remainingTasks);
                }
            });
            
          }
        });
    }
    return (
      <div className="card  lg:card-side  bg-base-100  shadow-sm">
        <figure className="w-full md:w-52 md:h-54 shrink-0">
          <img src={url} className="w-full h-full object-cover" alt="Album" />
        </figure>
        <div className="card-body">
          <div className=''>
            <h2 className="card-title">{task_Title}</h2>
            <p>{description}</p>
          </div>

          <div className="flex justify-between items-center">
            <h3 className="text-xm font-bold bg-sky-200 py-1 px-2 rounded-xs">
              {category}
            </h3>
            <h3 className="text-xm font-bold bg-gray-200 py-1 px-2 rounded-xs">
              {formatedDate}
            </h3>
          </div>
          <div className="card-actions flex justify-end items-end">
            <button className="btn btn-primary">
              <Link to={`/browse-tasks-layout/browse-tasks/${_id}`}>
                View details
              </Link>
            </button>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-primary"
            >
              Delete
            </button>
            <button className="btn btn-primary">
              <Link to={`/update-task/${_id}`}>Update</Link>
            </button>
          </div>
        </div>
      </div>
    );
};

export default MyTaskCard;