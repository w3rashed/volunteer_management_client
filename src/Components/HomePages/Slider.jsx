import { Carousel } from "@material-tailwind/react";

const Slider = () => {
  return (
    <div>
      <Carousel transition={{ duration: 1 }} className="rounded-xl h-[80vh]">
        <div
          className="hero h-[80vh]"
          style={{
            backgroundImage: "url(https://i.ibb.co/T2n7xm1/image.png)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-white w-[50%]">
            <div className="">
              <h1 className="mb-5 text-5xl font-bold">PALESTINE EMERGENCY</h1>
              <p className="mb-5">
                Palestinian cuisine under threat amid emergency. Support needed
                to ensure access to food, preserve culinary heritage, and
                alleviate hunger in crisis-stricken areas. Stand for food
                security in Palestine now
              </p>
            </div>
          </div>
        </div>

        <div
          className="hero h-[80vh]"
          style={{
            backgroundImage: "url(https://i.ibb.co/0XNGhVW/image.png)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-white w-[50%]">
            <div className="">
              <h1 className="mb-5 text-5xl font-bold">
                Planting Hope: Together, We Can Transform the World
              </h1>
              <p className="mb-5">
                Planting trees is our global responsibility. Join us to create a
                greener, healthier world for all. Together, we can make a
                difference
              </p>
            </div>
          </div>
        </div>
        <div
          className="hero h-[80vh]"
          style={{
            backgroundImage: "url(https://i.ibb.co/Fz532Nq/image.png)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-white w-[50%]">
            <div className="">
              <h1 className="mb-5 text-5xl font-bold">
                Donate Blood, Save Lives!
              </h1>
              <p className="mb-5">
                By donating blood, you're giving the gift of life. Your simple
                act of generosity can make a profound difference, saving lives
                and bringing hope to those in need.
              </p>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
