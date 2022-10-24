import { ChangeEvent, useState } from "react";
import { FaCcPaypal } from "react-icons/fa";
import Advertisement from "../../../common/advertisement";
import stripe from "../../../assets/stripe.png";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { warnCartEmpty } from "../cart.slice";
import { SERVER_ENDPOINT } from "../../../utils/endpoint";

const Summary = () => {
  const { cartItems, state, error } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const [country, setCountry] = useState("");
  const [states, setStates] = useState("");
  const [postal, setPostal] = useState("");
  const [delivery, setDelivery] = useState("rate");
  const [discount, setDiscount] = useState("");

  function handleInputChange(
    e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>,
    input: string
  ) {
    let newValue = e.target.value;
    if (input === "country") {
      setCountry(newValue);
    } else if (input === "state") {
      setStates(newValue);
    } else if (input === "discount") {
      setDiscount(newValue);
    } else {
      setPostal(newValue);
    }
  }

  function handleRadioChange(e: ChangeEvent<HTMLInputElement>) {
    setDelivery(e.target.value);
  }

  async function handlePaymentClick() {
    if (!cartItems.length) {
      dispatch(warnCartEmpty());
      return;
    }

    const response = await axios.post(
      `${SERVER_ENDPOINT}/api/payment/create-checkout-session`,
      {
        cartItems,
      }
    );

    window.location.href = response.data;
  }

  return (
    <div className="bg-washedwhite flex flex-col gap-5 p-7 rounded-md lg:w-96 w-full">
      <p className=" text-xl font-semibold">Summary</p>
      <details>
        <summary>Estimate Shipping and Tax</summary>
        <div className="flex flex-col gap-4 mt-5">
          <label htmlFor="country" className="font-semibold text-xs">
            Country
          </label>
          <select
            value={country}
            id="name"
            className="border-gray border-2 rounded p-2"
            required
            onChange={(e) => handleInputChange(e, "country")}
          >
            <option value="">Select a country</option>
            <option value="USA">USA</option>
            <option value="Philippines">Philippines</option>
          </select>
          <label htmlFor="state" className="font-semibold text-xs">
            State/Province
          </label>
          <input
            id="state"
            className="border-gray border-2 rounded p-2"
            value={states}
            onChange={(e) => handleInputChange(e, "state")}
          />
          <label htmlFor="postal" className="font-semibold text-xs">
            Zip/Postal Code
          </label>
          <input
            id="postal"
            className="border-gray border-2 rounded p-2"
            value={postal}
            onChange={(e) => handleInputChange(e, "postal")}
          />
          <label htmlFor="rate" className="font-semibold text-xs">
            Standard Rate
          </label>
          <p className="text-sm">
            <input
              id="rate"
              type="radio"
              name="delivery"
              checked={delivery === "rate"}
              className="mr-2"
              value="rate"
              onChange={handleRadioChange}
            />
            Price may vary depending on the item/destination. Shop Staff will
            contact you. $21.00
          </p>
          <label htmlFor="pickup" className="font-semibold text-xs">
            Pickup from store
          </label>
          <p className="text-sm">
            <input
              id="pickup"
              type="radio"
              name="delivery"
              checked={delivery === "pickup"}
              className="mr-2"
              value="pickup"
              onChange={handleRadioChange}
            />
            1234 Street Adress City Address, 1234 $0.00
          </p>
        </div>
      </details>
      <p className="text-color10 text-sm">
        Enter your destination to get a shipping estimate.
      </p>
      <details>
        <summary>Apply Discount Code</summary>
        <div className="flex flex-col gap-4 mt-5">
          <label htmlFor="discount" className="font-semibold text-xs">
            Enter discount code
          </label>
          <input
            id="discount"
            value={discount}
            onChange={(e) => handleInputChange(e, "discount")}
            className="border-gray border-2 rounded p-2"
            placeholder="Enter Discount code"
          />
          <button className="text-blue text-sm font-semibold border-blue border-2 rounded-full py-3">
            Apply Discount
          </button>
        </div>
      </details>
      <hr className="text-gray" />
      <div className="flex justify-between font-semibold">
        <p>Subtotal</p>
        <p>$13,047.00</p>
      </div>
      <div className="flex justify-between font-semibold">
        <p>Shipping</p>
        <p>$21.00</p>
      </div>
      <p className="text-xs text-color5 w-3/4">
        (Standard Rate - Price may vary depending on the item/destination. TECS
        Staff will contact you.)
      </p>
      <div className="flex justify-between font-semibold">
        <p>Tax</p>
        <p>$1.91</p>
      </div>
      <div className="flex justify-between font-semibold">
        <p>GST (10%)</p>
        <p>$1.91</p>
      </div>
      <div className="flex justify-between font-semibold">
        <p>Order Total</p>
        <p className="text-lg">$13,068.00</p>
      </div>
      {state === "error" && (
        <p className="text-red text-sm text-center">{error}</p>
      )}
      <button
        onClick={() => (window.location.pathname = "/checkout")}
        className="bg-blue text-white rounded-full font-semibold py-3"
      >
        Proceed to Checkout
      </button>
      <button
        onClick={handlePaymentClick}
        className="border-blue border-2 font-semibold text-blue rounded-full py-2 flex flex-row justify-center items-center"
      >
        Pay with <img src={stripe} className=" w-12" alt="payment" />
      </button>
      <button className="bg-yellow font-semibold rounded-full py-3 flex justify-center items-center gap-2">
        Checkout with <FaCcPaypal className="h-6 w-10" />
      </button>
      <Advertisement />
    </div>
  );
};

export default Summary;
