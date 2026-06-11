const Home = () => {
  return (
    <>
      <div className=" h-[calc(100vh-80px)] w-full bg-red-600 flex">
        <div className=" ml-10 ">
          <div
            className="w-75 rounded-3xl text-xl
            bg-liner-to-r from-red-500 to-red-600 
            text-white shadow-lg  flex pt-6 "
          >
            <span className="relative flex h-2 w-3 mt-1.5 mr-1 ">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <p className="p-3">Blood Avilable-Donate Today</p>
          </div>
          <div className="mt-10">
            <p className="font-bold text-5xl text-white p-2.5">
              Donate Blood,{" "}
            </p>
            <p className="font-bold text-5xl   text-white/60 p-1.5">
              Save Lives
            </p>

            <p className="text-white w-180 text-2xl mt-3">
              Every drop of blood you donate can save upto 3 lifes. join our
              community of heroes and make a different today
            </p>
          </div>
          <div className="mt-5">
            <button className=" border-2 text-red-500 text-2xl bg-white rounded-2xl p-3  ">
              Become a donor{" "}
            </button>
            <button className=" border-2 ml-3 text-white  text-2xl  rounded-2xl p-2 ">
              {" "}
              check Blood Availibitity
            </button>
          </div>
          <div className="flex gap-8 mt-10">
            <div className=" p-3 rounded-xl shadow-md text-center w-40">
              <h2 className=" text-white text-3xl font-bold ">12K+</h2>
              <p className="text-white">Donors</p>
            </div>

            <div className=" p-3 rounded-xl shadow-md text-center w-40">
              <h2 className="text-3xl font-bold text-white">38K+</h2>
              <p className="text-white">Lives Saved</p>
            </div>

            <div className=" p-3 rounded-xl shadow-md text-center w-40">
              <h2 className="text-3xl font-bold text-white">607</h2>
              <p className="text-white">Units Available</p>
            </div>
          </div>
        </div>
        {/* //there is two main div */}
        <div>
          <img src=" src\image\drop.png" alt="" />
        </div>
      </div>
    </>
  );
};
4;

export default Home;
