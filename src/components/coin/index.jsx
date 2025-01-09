import React, { useEffect, useState } from "react";
import CoinValues from "../coinvalues";
import MoonLoader from "react-spinners/MoonLoader";
import Searcher from "../seacher";

export default function Coin() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      const response = await fetch("https://backendmichu.onrender.com/webdata");
      if (!response.ok) {
        throw new Error("Error en la solicitud: " + response.status);
      }
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div>
        {loading ? (
          <div className="h-full flex mt-32 justify-center flex-col items-center">
            <div className="h-20 text-3xl text-yellow-300 font-bold">
              Loading...
            </div>
            <MoonLoader color="white" />
          </div>
        ) : (
          <div>
            <div className="w-full flex justify-center">
              <Searcher datos={data} />
            </div>
            <div className="grid lg:grid-cols-4 gap-10 p-10 md:grid-cols-3 sm:grid-cols-2">
              {data.map((e, i) => (
                <div
                  key={i}
                  className=" h-full rounded-lg border-2 border-gray-300 p-2  hover:scale-105 hover:border-yellow-200 hover:border-4"
                >
                  <CoinValues
                    name={e[1]}
                    icon={e[2]}
                    price={e[3]}
                    hour={e[4]}
                    day={e[5]}
                    week={e[6]}
                  />{" "}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
