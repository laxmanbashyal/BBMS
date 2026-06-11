const BloodAvailability = () => {
  return (
    <div className="h-[calc(100vh-80px)] w-full ">
      <p>Blood Avilability</p>
      <p>Real-time blood stock levels across all facilities</p>
      <hr class="border-t border-gray-300 my-4" />
      <div className="flex m-3.5 p-2.5 ">
        <div className=" border-red-600">
          {" "}
          <input
            type="text"
            placeholder="🔎︎     search blood group or hospital....."
            className=" border outline-none border-red-600 rounded-2xl w-100 p-2"
          />
        </div>
        <button className="border backdrop-blur-2xl m-2 w-12 rounded-md text-white bg-red-600  ">
          All
        </button>
        <button className="border backdrop-blur-2xl m-2 w-12 rounded-md ">
          A+
        </button>
        <button className="border backdrop-blur-2xl m-2 w-12 rounded-md ">
          A-
        </button>
        <button className="border backdrop-blur-2xl m-2 w-12 rounded-md ">
          B+
        </button>
        <button className="border backdrop-blur-2xl m-2 w-12 rounded-md ">
          B-
        </button>
        <button className="border backdrop-blur-2xl m-2 w-12 rounded-md ">
          AB+
        </button>
        <button className="border backdrop-blur-2xl m-2 w-12 rounded-md ">
          AB-
        </button>
        <button className="border backdrop-blur-2xl m-2 w-12 rounded-md ">
          O+
        </button>
        <button className="border backdrop-blur-2xl m-2 w-12 rounded-md ">
          O-
        </button>
      </div>
      <div className="bg-white rounded-2xl p-6 shadow-md w-72">

  {/* Top Row */}
  <div className="flex justify-between items-start">

    <div className="bg-red-600 text-white font-bold text-2xl px-5 py-4 rounded-2xl">
      A+
    </div>

    <div className="text-green-600 font-medium flex items-center gap-2">
      ✓ Available
    </div>

  </div>

  {/* Units */}
  <div className="mt-6">
    <h2 className="text-5xl font-bold text-gray-900">
      145
    </h2>

    <p className="text-gray-400 text-right">
      units
    </p>
  </div>

  {/* Progress Bar */}
  <div className="w-full h-2 bg-gray-200 rounded-full mt-3">
    <div className="h-2 bg-green-500 rounded-full w-[60%]"></div>
  </div>

  {/* Footer */}
  <div className="mt-4 text-gray-400 text-sm">
    <p>City General</p>
    <p>Updated 2h ago</p>
  </div>

</div>
    </div>
  );
};

export default BloodAvailability;
