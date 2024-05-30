import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { GiHeavyCollar, GiTakeMyMoney } from "react-icons/gi";

const Donate = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/donate.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

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
                      <GiHeavyCollar /> Collected : ${item.total_collected}
                    </p>
                  </Typography>
                  <Typography className="flex">
                    <p className=" flex items-center gap-2">
                      <GiTakeMyMoney /> Target : ${item.targe}
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
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <p className="py-4">
                    Press ESC key or click the button below to close
                  </p>
                  <div className="modal-action">
                    <button
                      className="px-8 py-2.5 w-full mt-5 leading-5 border rounded-md   bg-[#2ECC71] text-white hover:text-[#2ECC71] hover:bg-transparent hover:border-[#2ECC71] duration-500"
                      onClick={() => {
                        const modal = document.getElementById("my_modal_5");
                        modal.close();
                      }}
                    >
                      Request
                    </button>
                  </div>
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
