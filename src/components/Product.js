import Image from "next/image";
import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0);
  const [hasPrime, setHasPrime] = useState(false);

  useEffect(() => {
    setRating(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING);
    setHasPrime(Math.random() < 0.5);
  }, []);

  const addItemToBasket = () => {
    const product = { id, title, price, description, category, image, rating, hasPrime };

    dispatch(addToBasket(product));
  }

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className=" absolute top-2 right-2 italic text-gray-400">{category}</p>

      <Image className="self-center" src={image} height={200} width={200} style={{ width: "200px", height: "200px" }} alt="product" />

      <h4 className="my-3">{title}</h4>

      <div className="flex">
        {Array(rating).fill().map((_, i) => (
          <StarIcon key={i} className="h-5 text-yellow-500" />
        ))}
      </div>

      <p className="text-xs mt-2 my-2 line-clamp-2">{description}</p>

      <div className="mb-5">
        <span>€{price}</span>
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img className="w-12" src="https://links.papareact.com/fdw" alt="prime" />
          <p className="text-xs text-gray-500">FREE next-day Delivery</p>
        </div>
      )}

      <button onClick={addItemToBasket} className="mt-auto button">Add to basket</button>
    </div>
  )
}

export default Product;