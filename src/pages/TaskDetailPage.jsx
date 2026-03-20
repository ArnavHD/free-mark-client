import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Navbar from '../components/Navbar';
import Swal from 'sweetalert2';

const TaskDetailPage = () => {
    const hanldeSweet = ()=>{
        Swal.fire({
          title: "Congratulations!!",
          text: "Your Application has been sent",
          imageUrl: "https://i.ibb.co/8DwSJWRv/lke.webp",
          imageWidth: 300,
          imageHeight: 250,
          imageAlt: "Custom image",
        });
    }
    const {id} = useParams();
    // console.log("This is id: ", id);
    const data = useLoaderData();
    // console.log("this is from taskdetail", data);
    const filterData = data.find(filData => filData._id == id);
    // console.log("This is filtered data: ",filterData);
    const {task_Title,Deadline, description, url} = filterData;
    return (
      <div className="card bg-base-100 w-72 md:w-96  mx-auto mt-20 mb-10 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">{task_Title}</h2>
          <p>
            {description}
          </p>
        </div>
        <div className='flex justify-end mr-5'>
          <h2 className='bg-blue-300 p-2 rounded-l-xs'>Deadline</h2>
          <h2 className='bg-gray-300 p-2 rounded-r-xs'>{Deadline}</h2>
        </div>
        <div className='flex justify-end'>
          <button onClick={hanldeSweet} className='btn btn-primary mt-5 mb-5 mr-5'>Apply Now !!</button>
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