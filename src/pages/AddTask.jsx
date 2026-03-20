import React, { use } from "react";
import Navbar from "../components/Navbar";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "./Loading";
import Footer from "./Footer";

const AddTask = () => {
  const { user, loading } = use(AuthContext);

  if (loading) {
    return <Loading></Loading>;
  }

  const handleAddTask = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newTask = Object.fromEntries(formData.entries());
    // console.log(newTask);

    //send data to the db
    fetch("https://free-mark-server.vercel.app/tasks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          // console.log("After adding coffee to db", data);
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
    <div className="">
      <div className="bg-black ">
        <Navbar></Navbar>
      </div>

      <div className="p-4 mb-10 pb-10 md:p-12 text-center bg-black/90 mx-3 md:mx-15 lg:mx-25 xl:mx-70 mt-10 space-y-4">
        <h1 className="text-5xl text-white">Add New Task</h1>
        <p className="text-white">
          Add a new job by providing the required details below. This will help
          you track progress, manage timelines, and stay organized efficiently.
        </p>
        <form onSubmit={handleAddTask}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input w-full disabled:border-gray-200 text-gray-400 cursor-not-allowed pointer-events-none"
                value={user.displayName}
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">User Email</label>
              <input
                type="email"
                name="email"
                className="input w-full disabled:border-gray-200 text-gray-400 cursor-not-allowed pointer-events-none"
                value={user.email}
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Task Title</label>
              <input
                type="text"
                name="task_Title"
                className="input w-full"
                placeholder="Your Task Title"
                required
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">Categories</label>
              <select
                name="category"
                defaultValue=""
                className="select"
                required
              >
                <option value="" disabled>
                  Pick a Category
                </option>
                <option value="Photographer">Photographer</option>
                <option value="Web Developer">Web Developer</option>
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
                required
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">Deadline</label>
              <input type="date" name="Deadline" className="input" required />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Budget</label>
              <input
                type="number"
                name="Budget"
                className="input w-full"
                placeholder="Enter Budget in CAD"
                required
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">Photo URL</label>
              <input
                type="text"
                className="input w-full"
                name="url"
                placeholder="Enter Photo URL"
                required
              />
            </fieldset>
          </div>
          <input type="submit" value="Add Task" className="btn w-full mt-5" />
        </form>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default AddTask;
