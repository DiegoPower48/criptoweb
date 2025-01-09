import React from "react";

export default function CoinValues(prop) {
  const { name, icon, price, hour, day, week } = prop;

  return (
    <div>
      <div>
        <div className=" flex items-center justify-center">
          <img
            className="border-2 rounded-full p-4 h-24 bg-yellow-300 text-black"
            src={`/${name}.webp`}
            alt={name}
          />
        </div>

        <div className="grid grid-cols-2 text-lg ">
          <div className="font-bold text-amber-600"> {name}</div>
          <div className="font-bold  text-amber-600"> {icon}</div>
        </div>
        <div className="grid grid-cols-2 text-lg ">
          <div className="grid grid-cols-2 font-bold text-yellow-300">
            Price:
          </div>
          <div className="text-yellow-300 font-bold ">{price}</div>
        </div>
        <div className="border-t-2 mt-6">
          <div className="text-center font-bold  text-blue-600">
            Changes in:
          </div>
          <div className=" grid grid-cols-2">
            <div>1h:</div>
            <div className="justify-end text-white">⬆{hour}⬇</div>
            <div>24h:</div>
            <div>⬆ {day}⬇</div>
            <div>7d:</div>
            <div>⬆{week}⬇</div>
          </div>
        </div>
      </div>
    </div>
  );
}
