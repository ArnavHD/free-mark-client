import React from "react";
import Navbar from "../components/Navbar";
import Swal from "sweetalert2";

const AddTask = () => {
  const handleAddTask = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newTask = Object.fromEntries(formData.entries());
    console.log(newTask);

    //send data to the db
    fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log("After adding coffee to db", data);
          Swal.fire({
            title: "Task Added Successfully",
            icon: "success",
            draggable: true,
          });
          form.reset();
        }
      });
  };

  return (
    <div className="mb-20">
      <div className="bg-black ">
        <Navbar></Navbar>
      </div>

      <div className="p-12 text-center bg-black/90 mx-70 mt-10 space-y-4">
        <h1 className="text-5xl text-white">Add New Task</h1>
        <p className="text-white">
          Add a new job by providing the required details below. This will help
          you track progress, manage timelines, and stay organized efficiently.
        </p>
        <form onSubmit={handleAddTask}>
          <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input w-full"
                placeholder="Enter Name"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">User Email</label>
              <input
                type="email"
                name="email"
                className="input w-full"
                placeholder="Enter Email"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Task Title</label>
              <input
                type="text"
                name="task_Title"
                className="input w-full"
                placeholder="Your Task Title"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">Categories</label>
              <select name="category" defaultValue="" className="select">
                <option value="" disabled>
                  Pick a Category
                </option>
                <option value="Photographer">Photographer</option>
                <option value="Music and Audio">Music And Audio</option>
                <option value="Content Creator">Content Creator</option>
                <option value="AI Services">AI Services</option>
                <option value="Graphics Designer">Graphics Designer</option>
                <option value="Programmer and Tech">Programmer and Tech</option>
                <option value="Digital Markting Officer">
                  Digital Markting Officer
                </option>
                <option value="Consultant">Consultant</option>
                <option value="SEO Writer">SEO Writer</option>
              </select>
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Description</label>
              <input
                type="text"
                name="description"
                className="input w-full"
                placeholder="What needs to be Done"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">Deadline</label>
              <input type="date" name="Deadline" className="input" />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Budget</label>
              <input
                type="number"
                name="Budget"
                className="input w-full"
                placeholder="Enter Budget in CAD"
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">Photo URL</label>
              <input
                type="text"
                className="input w-full"
                name="url"
                placeholder="Enter Photo URL"
              />
            </fieldset>
          </div>
          <input type="submit" value="Add Task" className="btn w-full mt-5" />
        </form>
      </div>
    </div>
  );
};

export default AddTask;
