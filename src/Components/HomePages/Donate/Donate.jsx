import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { GiHeavyCollar,} from "react-icons/gi";
import CheckOutForm from "./CheckOutForm";

const Donate = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/donate.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // TODO: add publishable key
  const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

  return (
    <div>
      <h3 className="font-bold text-3xl text-center mt-10">Support Us</h3>
      <div className="grid grid-cols-3 gap-6 mt-10">
        {data.map((item, idx) => (
          <Card
            key={idx}
            color="transparent"
            className="mt-8 hover:border-b-8 hover:duration-500 hover:border-[#2ECC71]"
          >
            <CardHeader color="blue-gray" className="relative  h-[210px]">
              <img src={item.img} alt="card-image" />
            </CardHeader>
            <CardBody>
              <div className="flex  justify-between">
                <Typography variant="h5" className="mb-2 ">
                  {item.title}
                </Typography>
              </div>
              <div className="flex  justify-between">
                <div>
                  <Typography className="flex">{item.description}</Typography>
                  <Typography className="flex">
                    <p className="my-5 flex items-center gap-2">
                      <GiHeavyCollar /> Donate for : $ 100
                    </p>
                  </Typography>
                </div>
              </div>

              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="btn px-6 rounded-full bg-[#2ECC71] text-white hover:text-[#2ECC71] hover:bg-transparent hover:border-[#2ECC71] duration-500 mt-3"
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                DONATE NOW
              </button>
              <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box">
                  {/* start */}
                  <div>
                    <Elements stripe={stripePromise}>
                      <CheckOutForm></CheckOutForm>
                    </Elements>
                  </div>

                  {/* end */}

                  <div className="modal-action flex justify-center w-full">
                    <form method="dialog" className="w-full">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn w-full">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Donate;
