import React, { use } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import Loading from './Loading';
import TaskCard from './TaskCard';
import MyTaskCard from './MyTaskCard';

const MyTasks = () => {
    const {user } = use(AuthContext);
    const data = useLoaderData();
    console.log(data);

    const filteredData = data.filter(single => single.email === user?.email);
    console.log(filteredData);
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  mx-16 mt-10 mb-15">
        {filteredData.map((single) => (
          <MyTaskCard single={single}></MyTaskCard>
        ))}
      </div>
    );
};

export default MyTasks;