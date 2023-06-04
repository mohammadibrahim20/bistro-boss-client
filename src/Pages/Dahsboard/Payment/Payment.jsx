import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../Hooks/useCart";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";

// TODO:
// console.log(import.meta.env.VITE_Payment_Gatway_PK)
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gatway_PK);
const Payment = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));
  //   console.log(total);
  return (
    <div>
      <SectionTitle subHeading="please process" heading="Payment" />
      {/* <h2 className="text-3xl">Teka teka tumi uira uira aso...</h2> */}
      <Elements stripe={stripePromise}>
        <CheckoutForm cart={cart} price={price} />
      </Elements>
    </div>
  );
};

export default Payment;
