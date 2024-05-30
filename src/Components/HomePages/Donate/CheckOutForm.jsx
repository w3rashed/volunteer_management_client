import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider_&_Firebase/AuthProvider";
import Swal from "sweetalert2";

const CheckOutForm = () => {
  const [error, setError] = useState();
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const price = 100;
  useEffect(() => {
    axios
      .post("http://localhost:5000/create-payment-intent", {
        price,
      })
      .then((res) => {
        setClientSecret(res.data.clientSecret);
        console.log(res.data);
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      setError("");
      console.log("payment method", paymentMethod);
    }
    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your donation successfully complete",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        type="submit "
        className="px-8 py-2.5 w-full mt-5 leading-5 border rounded-md   bg-[#2ECC71] text-white hover:text-[#2ECC71] hover:bg-transparent hover:border-[#2ECC71] duration-500"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <p className="text-red-600">{error}</p>
    </form>
  );
};

export default CheckOutForm;
