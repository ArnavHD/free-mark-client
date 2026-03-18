import React, { useState } from 'react';
import NewsCard from './NewsCard';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const News = () => {

  const [show, setShow] = useState(false);

  const click = ()=>{
    setShow(!show);
    console.log(show);
  }

    const news = [
      {
        id: 0,
        title: "Software Engineers win the lottery",
        author: "Rensona and Jacky",
        price: 500,
        img: "https://i.ibb.co/prBs1BrQ/lottery.jpg",
      },
      {
        id: 1,
        title: "AI revolusion explodes the world",
        author: "Stiphen snippy",
        price: 700,
        img: "https://i.ibb.co/rGT1ywnt/ai-Rev.webp",
      },
      {
        id: 2,
        title: "Tech fund got flurished by tech gaints",
        author: "Miscwa Hawn",
        price: 900,
        img: "https://i.ibb.co/nsw9PDyS/Tech-Fund.avif",
      },
      {
        id: 3,
        title: "New update in Graphics Design job",
        author: "Arnold Mordon",
        price: 100,
        img: "https://i.ibb.co/3bw80GK/update.webp",
      },
      {
        id: 4,
        title: "Fun tech game",
        author: "Mack Nicolson",
        price: 50,
        img: "https://i.ibb.co/HTMHbbPL/game.avif",
      },
    ];
    return (
      <div className="mx-10 p-15 mb-10 rounded-2xl bg-gray-200">
        <h1 className="text-4xl mb-5 font-semibold">
          Your One-stop online Markateplace News
        </h1>
        <p className="text-xl text-gray-500 md:w-3/5">
          Your premier online marketplace. Find quality products and services,
          connect with trusted sellers, and enjoy a seamless shopping experience
          today.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-10">
          {show
            ? news.map((singleNews) => (
                <NewsCard singleNews={singleNews}></NewsCard>
              ))
            : news.slice(0,3).map((singleNews) => (
                <NewsCard singleNews={singleNews}></NewsCard>
              ))}
        </div>
        <div className="text-center">
          <button onClick={click} className="btn btn-neutral mt-5 text-center">
            {show ? (
              <div className="flex gap-2 justify-center items-center">
                <h3>View Less</h3>
                <IoIosArrowUp size={20} />
              </div>
            ) : (
              <div className="flex gap-2 justify-center items-center">
                <h3>View More</h3>
                <IoIosArrowDown className="font-bold" size={20} />
              </div>
            )}
          </button>
        </div>
      </div>
    );
};

export default News;