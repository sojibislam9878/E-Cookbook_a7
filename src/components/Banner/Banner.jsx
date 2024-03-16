const Banner = () => {
  return (
    <div className="container mx-auto p-4">
      <div
        className="rounded-2xl"
        style={{
          backgroundImage:
            "linear-gradient(180deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(./banner.jpg)",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }}
      >
        <div className="t text-center text-white">
          <div className=" lg:w-2/3 lg:mx-auto lg:pt-44 pt-10">
            <h1 className=" md:text-5xl text-2xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
            <p className=" md:w-2/3 mx-auto md:mt-6 mt-3">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn bg-[#0BE58A] border-[#0BE58A] rounded-full lg:mt-10 lg:mb-44 mt-6">Explore Now</button>
            <button className="btn btn-outline rounded-full mx-6 mb-6 mt-6 text-white hover:bg-[#0BE58A] hover:border-[#0BE58A]">Our Feedback</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
