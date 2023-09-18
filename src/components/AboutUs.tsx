import { Link } from "react-router-dom";
const AboutUs = () => {
  return (
    <>
      <section className="flex justify-center px-8 pt-20 lg:pt-[10px] pb-12 lg:pb-[10px] overflow-hidden">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 py-4 lg:w-5/12">
              <img
                src="https://i.ibb.co/rfHFq15/image-2.jpg"
                alt=""
                className="w-full rounded-2xl"
              />
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-2 text-lg font-semibold text-primary">
                  Why Choose Us
                </span>
                <h2 className="mb-8 text-3xl font-bold text-dark sm:text-4xl">
                  Make your customers happy by giving services.
                </h2>
                <p className="mb-8 text-base text-body-color">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less.
                </p>
                <button className="text-white p-4 border border-black rounded-xl bg-blue-600">
                  <Link to="/">Get Started</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
