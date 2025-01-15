"use client";
import { useEffect, useState } from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const PoppinsPro = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

interface Product {
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

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      // Resolve `params` first
      const resolvedParams = await params;
      const response = await fetch(`https://fakestoreapi.com/products/${resolvedParams.id}`);
      const data: Product = await response.json();
      setProduct(data);
      setLoading(false);
    }

    fetchProduct();
  }, [params]);

  if (loading) {
    return (
      <div className="w-full h-screen bg-white text-[#202020] flex justify-center items-center">
        Loading...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="w-full h-screen bg-white text-[#202020] flex justify-center items-center">
        Product not found....
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${PoppinsPro.className} bg-yellow-100 p-8`}>
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-[#020817] mb-6 underline">
          {product.title}
        </h1>
        <div className="flex flex-col md:flex-row gap-8">
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={300}
            className="object-contain"
          />
          <div className="flex flex-col gap-4">
            <p className="text-lg text-gray-600 uppercase">{product.category}</p>
            <p className="text-xl font-medium">{product.description}</p>
            <div className="flex items-center gap-2">
              <FaStar className="text-[#FFC107]" size={24} />
              <span className="text-lg font-semibold">{product.rating.rate}</span>
              <span className="text-gray-500">({product.rating.count} reviews)</span>
            </div>
            <p className="text-2xl font-bold text-black">${product.price}</p>
            <button className="mt-4 rounded-lg h-[40px] text-white text-lg w-[150px] bg-black">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
