import React from "react";

export default function CoinValues(prop) {
  const { name, icon, price, hour, day, week } = prop;

  return (
    <div>
      <div className="  h-full rounded-lg border-2 border-gray-300 p-2  hover:scale-105 hover:border-yellow-200 hover:border-4">
        <div className="h-28 ">Icono!!!!</div>

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
