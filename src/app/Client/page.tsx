"use client"
import { useEffect, useState } from "react"
import { Poppins } from "next/font/google"
import Image from "next/image"
const PoppinsPro = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});
import { FaStar } from "react-icons/fa"

interface products {
  id: number;
  category: string;
  title: string;
  description: string;
  price: number;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
function Client() {
  const [loader, setloader] = useState(true);
  const [data, setData] = useState<products[]>([]);

  useEffect(() => {
    async function fetchingData() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data: products[] = await response.json();
      setloader(false);
      setData(data);
      console.log(data);
    }
    fetchingData();
  }, []);

  if (loader) {
    return (
      <div className="w-full h-screen bg-white text-[#202020] flex justify-center items-center">
        Loading...
      </div>
    );
  } else {
    return (
      <>
        <div className="flex justify-center underline text-red-500  p-6 tracking-[2px] font-mono font-extrabold text-4xl sm:text-[35px] ">
          <h1>DATA FETCHED SUCSSESFULLY</h1>
        </div>
        <div className=" p-4  tracking-[2px] font-mono font-extrabold text-3xl  sm:text-[35px] underline bg-yellow-100 rounded-3xl">
          <h1>Total Products : {data.length}</h1>
        </div><br />
        <div
          className={` pt-20 ${PoppinsPro.className} px-2 w-full h-min-screen  grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-4 bg-yellow-500 grid-rows-[repeat(auto,500px)] gap-x-4 gap-y-10 `}
        >
          {data.map(
            (
              {
                id,
                category,
                price,
                image,
                description,
                title,
                rating: { rate, count },
              }: products,
        
            ) => (
              <div
                key={id}
                id="shadow2"
                className="rounded-[10px] w-[90%] sm:w-full h-full bg-white flex justify-between flex-col items-center px-0 p-4 "
              >
                <div
                  className={`${id === 7 || id === 8 ? "pt-8" : "pt-0"} h-auto`}
                >
                  <Image
                    src={image}
                    alt={title}
                    width={100}
                    height={100}
                    className={`${
                      id === 7 || id === 8
                        ? "w-[250px] h-[260px]"
                        : "w-[250px] md:w-[300px] h-[300px] md:h-[400px]"
                    } `}
                  ></Image>
                </div>
                <div className="w-full sm:w-full h-[200px] border-t-[1px]  border-t-[#000000]  pt-3 mt-3">
                  <div className="px-3">
                    <p className="text-[12px] font-[600] uppercase text-[#2b2c2c] cursor-pointer hover:underline">
                      {category}
                    </p>
                    <h1 className="pt-2 text-[#020817] text-[20px] font-sans font-[600] line-clamp-1">
                      {title}
                    </h1>
                    <p className="pt-2 truncate max-w-[400px]">{description}</p>
                    <div className="flex justify-between pt-2">
                      <p className="font-[600]">${price}</p>
                      <div className="flex ">
                        <FaStar className="text-[#FFC107]" size={20} />
                        <p className="text-black font-[600] ml-1">{rate}</p>
                        <p className="mt-2 ml-1 text-[12px]">({count})</p>
                      </div>
                    </div>
                    <button className="mt-3 rounded-lg h-[35px] text-white text-[16px] w-[100px] bg-black">
                      Buy now
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </>
    );
  }
}

export default Client;