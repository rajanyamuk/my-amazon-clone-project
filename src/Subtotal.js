import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useNavigate } from "react-router-dom"; // Use `useNavigate` instead of `useHistory`

function Subtotal() {
  const navigate = useNavigate(); // Initialize the `useNavigate` hook
  const [{ basket }] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Calculate the total from basket
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      {/* Add navigation functionality to the button */}
      <button onClick={() => navigate("/checkout")}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
