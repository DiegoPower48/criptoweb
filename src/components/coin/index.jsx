import React, { useEffect, useState } from "react";
import CoinValues from "../coinvalues";
import MoonLoader from "react-spinners/MoonLoader";

export default function Coin() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searched, setSearched] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [lastSearch, setLastSearch] = useState(false);

  async function fetchData() {
    try {
      const response = await fetch("https://backendmichu.onrender.com/webdata");
      if (!response.ok) {
        throw new Error("Error en la solicitud: " + response.status);
      }
      const data = await response.json(); // Parsear JSON
      setData(data);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error); // Manejar errores
    }
  }

  useEffect(() => {
    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const onSubmit = (event) => {
    event.preventDefault(); // Prevenir que el formulario recargue la página

    console.log(inputValue); // Verificar el valor ingresado

    // Buscar el índice del elemento que contiene el valor ingresado
    const position = data.findIndex((item) =>
      item[1].toLowerCase().includes(inputValue.toLowerCase())
    );

    if (position !== -1) {
      setSearched(data[position]);
      setLastSearch(true);
    } else {
      console.log("Elemento no encontrado");
      setLastSearch(false);
    }
  };

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
            <div className="h-96 w-full rounded-lg border-4 grid grid-cols-2">
              <div className="text-black  flex-1  items-center justify-center">
                <form onSubmit={onSubmit}>
                  <div className="grid grid-cols-1 p-32">
                    <input
                      className="border-2 h-10 rounded-lg border-yellow-300 text-center"
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button
                      className="border-2 border-black h-10 rounded-lg font-bold bg-yellow-300 mt-7 active:bg-white active:scale-105 "
                      type="submit"
                    >
                      Buscar
                    </button>
                  </div>
                </form>
              </div>
              {!lastSearch ? (
                <div></div>
              ) : (
                <div className=" p-10">
                  <CoinValues
                    name={searched[1]}
                    icon={searched[2]}
                    price={searched[3]}
                    hour={searched[4]}
                    day={searched[5]}
                    week={searched[6]}
                  />
                </div>
              )}
            </div>
            <div className="grid grid-cols-4 gap-10 p-10 ">
              {data.map((e, i) => (
                <CoinValues
                  key={i}
                  name={e[1]}
                  icon={e[2]}
                  price={e[3]}
                  hour={e[4]}
                  day={e[5]}
                  week={e[6]}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
