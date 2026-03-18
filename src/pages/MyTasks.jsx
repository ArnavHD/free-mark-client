import React, { use, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import Loading from './Loading';
import TaskCard from './TaskCard';
import MyTaskCard from './MyTaskCard';

const MyTasks = () => {
    const {user } = use(AuthContext);
    const initialMyData = useLoaderData();
    // console.log(data);

    const [tasks, setTasks] = useState(initialMyData);

    

    const filteredData = tasks.filter(single => single.email === user?.email).sort((a,b)=> new Date(a.Deadline) - new Date(b.Deadline));
    console.log(filteredData);
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  mx-16 mt-10 mb-15">
        {filteredData.map((single) => (
          <MyTaskCard 
          key={single._id}
          single={single}
          tasks={tasks}
          setTasks={setTasks}
          ></MyTaskCard>
        ))}
      </div>
    );
};

export default MyTasks;