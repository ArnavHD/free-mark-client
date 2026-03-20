import React from 'react';
import { useLoaderData } from 'react-router';
import TaskCard from './TaskCard';

const BrowseTasks = () => {
    const tasks = useLoaderData();
        console.log(tasks);
    return (
        <div className='bg-gray-600 pt-16 pb-16'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mx-5 md:mx-16'>
                {
                    tasks.map(task=> <TaskCard key={task._id} task={task}></TaskCard>)
                }
            </div>
        </div>
    );
};

export default BrowseTasks;