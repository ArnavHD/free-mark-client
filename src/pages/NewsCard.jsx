import React from "react";
import { FcOk } from "react-icons/fc";

const NewsCard = ({ singleNews }) => {
//   console.log(singleNews);
  const { img, author, title } = singleNews;
  return (
    <div>
      <div className="card bg-base-100  shadow-sm">
        <figure className="px-5 pt-5 w-4/5 h-52 mx-auto">
          <img src={img} alt="Shoes" className="rounded-xl object-cover" />
        </figure>
        <div className="card-body items-center text-center">
          <div className="flex flex-row justify-center items-center gap-3">
            <h2 className="card-title">{author}</h2>
            <FcOk size={20}/>
          </div>
          <p>{title}</p>
          <div className="card-actions">
            <button className="btn btn-primary">View News</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
