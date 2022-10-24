import { ChangeEvent } from "react";
import { useAppDispatch } from "../../../app/hooks";
import ProductInterface from "../../../utils/interfaces/product.interface";
import { setQuantity } from "../cart.slice";

const CartItem = ({
  id,
  title,
  price,
  category,
  description,
  image,
  quantity,
}: ProductInterface & { quantity: number }) => {
  const dispatch = useAppDispatch();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch(setQuantity({ id: id, newQuantity: e.target.value }));
  }

  return (
    <tr className="">
      <td>
        <div className="flex flex-row gap-10 items-center">
          <img src={image} alt="product" className=" w-28 h-28" />
          <p className=" text-sm font-medium max-w-[300px]">{title}</p>
        </div>
      </td>
      <td>
        <p className="font-semibold">${Number(price).toFixed(2)}</p>
      </td>
      <td>
        <input
          type="number"
          value={quantity}
          onChange={handleChange}
          min={0}
          className="bg-washedwhite font-medium text-sm p-2 w-14 rounded"
        />
      </td>
      <td>
        <p className="font-semibold">
          ${(Number(price) * quantity).toFixed(2)}
        </p>
      </td>
    </tr>
  );
};

export default CartItem;
