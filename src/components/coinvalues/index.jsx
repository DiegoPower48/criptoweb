export default function CoinValues(prop) {
  const { name, icon, price, hour, day, week } = prop;

  return (
    <>
      <div className="flex flex-col w-full h-full  justify-between">
        <div className="font-bold text-amber-600 text-center text-2xl">
          {name}
        </div>
        <div className=" flex items-center h-32 justify-center">
          <img
            className="border-2 rounded-full  h-16 bg-yellow-300 text-black"
            src={`/${name}.webp`}
            alt={name}
          />
        </div>

        <div className="grid grid-cols-[1fr_2fr] text-lg ">
          <div className="col-span-2 flex justify-center text-lg ">
            <div className="font-bold  text-amber-800"> {icon}</div>
          </div>
          <div className="grid grid-cols-2 font-bold text-yellow-300">
            Price:
          </div>
          <div className="flex justify-center text-yellow-300 font-bold ">
            {price}
          </div>
        </div>
      </div>
      <div className="border-t-2 flex flex-col items-center justify-center">
        <div className="text-center font-bold  text-blue-600">Changes in:</div>
        <br />
        <div className="flex flex-col w-full">
          <div className="grid grid-cols-[1fr_2fr] justify-center w-full">
            <div className="text-center">1h:</div>
            <div className="flex  justify-center gap-2">
              <div className="flex w-2/3 justify-between">
                <div>⬆</div>
                <div>{hour}</div>
                <div>⬇</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-[1fr_2fr]">
            <div className="text-center">24h:</div>
            <div className="flex  justify-center gap-2">
              <div className="flex w-2/3 justify-between">
                <div>⬆</div>
                <div>{day}</div>
                <div>⬇</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-[1fr_2fr]">
            <div className="text-center">7d:</div>
            <div className="flex  justify-center gap-2">
              <div className="flex w-2/3 justify-between">
                <div>⬆</div>
                <div>{week}</div>
                <div>⬇</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
