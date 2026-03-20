import React, { use } from "react";
import Navbar from "../components/Navbar";
import { AuthContext } from "../provider/AuthProvider";
import { useLoaderData } from "react-router";
import Loading from "./Loading";
import Swal from "sweetalert2";

const UpdateTask = () => {
  const { _id, Budget, Deadline, category, description, task_Title, url } =
    useLoaderData();
  // console.log(Deadline);

  const { user, loading } = use(AuthContext);

  if (loading) {
    return <Loading></Loading>;
  }

  const formattedDate = Deadline ? Deadline.split("T")[0] : "";
  // console.log(Deadline);
  // console.log(formattedDate);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedTask = Object.fromEntries(formData.entries());
    // console.log(updatedTask);

    // send updated coffee to the db
    fetch(`https://free-mark-server.vercel.app/tasks/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your task has been Updated",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="mb-20">
      <div className="bg-black ">
        <Navbar></Navbar>
      </div>

      <div className="p-12 text-center bg-black/90 mx-70 mt-10 space-y-4">
        <h1 className="text-5xl text-white">Update Task</h1>
        <p className="text-white">
          Update a job by providing the required details below. This will help
          you track progress, manage timelines, and stay organized efficiently.
        </p>
        <form onSubmit={handleUpdate}>
          <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
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
                defaultValue={task_Title}
                required
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">Categories</label>
              <select
                name="category"
                defaultValue={category}
                className="select"
                required
              >
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
                defaultValue={description}
                required
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label">Deadline</label>
              <input
                type="date"
                name="Deadline"
                defaultValue={formattedDate}
                className="input"
                required
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <label className="label">Budget</label>
              <input
                type="number"
                name="Budget"
                defaultValue={Budget}
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
                defaultValue={url}
                name="url"
                placeholder="Enter Photo URL"
                required
              />
            </fieldset>
          </div>
          <input
            type="submit"
            value="Update Task"
            className="btn w-full mt-5"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateTask;
