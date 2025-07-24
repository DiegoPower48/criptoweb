import React, { useEffect, useState } from "react";
import CoinValues from "../coinvalues";
import MoonLoader from "react-spinners/MoonLoader";
import Searcher from "../seacher";

export default function Coin() {
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/scrapper`);
      if (!response.ok) {
        throw new Error("Error en la solicitud: " + response.status);
      }
      const data = await response.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>
        {!data ? (
          <div className="h-full flex mt-32 justify-center flex-col items-center">
            <div className="h-20 text-3xl text-yellow-300 font-bold">
              Loading...
            </div>
            <MoonLoader color="white" />
          </div>
        ) : (
          <div className="h-full w-full">
            <div className="w-full flex justify-center">
              <Searcher datos={data} />
            </div>
            <div className="grid lg:grid-cols-4 gap-10 p-10 md:grid-cols-3 sm:grid-cols-2 overflow-hidden h-full">
              {data.map((e, i) => (
                <div
                  key={i}
                  className="transform duration-200 h-full rounded-lg border-2 border-gray-300 p-2  hover:border-yellow-200  hover:scale-105  grid grid-cols-1 grid-rows-[2fr_1fr] place-content-center gap-4 overflow-hidden  "
                >
                  <CoinValues
                    name={e.name}
                    icon={e.symbol}
                    price={e.price}
                    hour={e.change1h}
                    day={e.change24h}
                    week={e.change7d}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
