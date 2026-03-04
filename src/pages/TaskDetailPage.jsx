import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Navbar from '../components/Navbar';

const TaskDetailPage = () => {
    const {id} = useParams();
    console.log("This is id: ", id);
    const data = useLoaderData();
    console.log("this is from taskdetail", data);
    const filterData = data.find(filData => filData._id == id);
    console.log("This is filtered data: ",filterData);
    const {task_Title, description, url} = filterData;
    return (
      <div className="card bg-base-100 w-96 mx-auto mt-20 mb-10 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">{task_Title}</h2>
          <p>
            {description}
          </p>
        </div>
        <figure>
          <img
            src={url}
            className='h-auto object-cover object-center'
            alt="Shoes"
          />
        </figure>
      </div>
    );
};

export default TaskDetailPage;