import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const MyTaskCard = ({single}) => {
    const { _id, url, task_Title, description } = single;

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
          <h2 className="card-title">{task_Title}</h2>
          <p>{description}</p>
          <div className="card-actions flex justify-end">
            <button className="btn btn-primary">
              <Link to={`/browse-tasks-layout/browse-tasks/${_id}`}>
                View details
              </Link>
            </button>
            <button onClick={ ()=> handleDelete(_id)} className="btn btn-primary">
              Delete
            </button>
            <button className="btn btn-primary">
              <Link to={`/browse-tasks-layout/browse-tasks/${_id}`}>
                Update
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
};

export default MyTaskCard;