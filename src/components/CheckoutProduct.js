import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../slices/basketSlice";

function CheckoutProduct({ id, title, rating, price, description, category, image, hasPrime }) {
  const dispatch = useDispatch();

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket(id));
  }

  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} />

      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating).fill().map((_, i) =>
            <StarIcon key={i} className="h-5 text-yellow-500" />
          )}
        </div>

        <p className="text-xs mt-2 my-2 line-clamp-3">{description}</p>
        <span>€{price}</span>
        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img className="w-12" src="https://links.papareact.com/fdw" alt="prime" />
            <p className="text-xs text-gray-500">FREE next-day Delivery</p>
          </div>
        )}
      </div>

      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="button" onClick={removeItemFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;