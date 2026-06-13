import { useState } from "react";
const BloodAvailability = () => {
  const bloodData = [
    { group: "A+", units: 45, satatus: " ✓ available" },
    { group: "A-", units: 45, satatus: " ✓ available" },
    { group: "AB+", units: 45, satatus: " ✓ available" },
    { group: "AB-", units: 45, satatus: " ✓ available" },
    { group: "B-", units: 45, satatus: " ✓ available" },
    { group: "B+", units: 45, satatus: " ✓ available" },
    { group: "O+", units: 45, satatus: " ✓ available" },
    { group: "O-", units: 45, satatus: " ✓ available" },
  ];
  const [selectedGroup, setselectedGroup] = useState("All");
  const filterData =
    selectedGroup === "All"
      ? bloodData
      : bloodData.filter((blood) => blood.group === selectedGroup);
  return (
    <div className="min-h-[calc(100vh-80px)] w-full ">
      <div className="m-10">
        {" "}
        <p
          className=" text-3xl font-medium
"
        >
          🩸Blood Avilability
        </p>
        <p className=" text-xl text-black/60">
          Real-time blood stock levels across all facilities
        </p>
      </div>

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
        <button
          className="border backdrop-blur-2xl m-2 w-12 rounded-md text-white bg-red-600  "
          onClick={() => setselectedGroup("All")}
        >
          All
        </button>
        <button
          className="border backdrop-blur-2xl m-2 w-12 rounded-md "
          onClick={() => setselectedGroup("A+")}
        >
          A+
        </button>
        <button
          className="border backdrop-blur-2xl m-2 w-12 rounded-md "
          onClick={() => setselectedGroup("A-")}
        >
          A-
        </button>
        <button
          className="border backdrop-blur-2xl m-2 w-12 rounded-md "
          onClick={() => setselectedGroup("B+")}
        >
          B+
        </button>
        <button
          className="border backdrop-blur-2xl m-2 w-12 rounded-md "
          onClick={() => setselectedGroup("B-")}
        >
          B-
        </button>
        <button
          className="border backdrop-blur-2xl m-2 w-12 rounded-md "
          onClick={() => setselectedGroup("AB+")}
        >
          AB+
        </button>
        <button
          className="border backdrop-blur-2xl m-2 w-12 rounded-md "
          onClick={() => setselectedGroup("AB-")}
        >
          AB-
        </button>
        <button
          className="border backdrop-blur-2xl m-2 w-12 rounded-md "
          onClick={() => setselectedGroup("O+")}
        >
          O+
        </button>
        <button
          className="border backdrop-blur-2xl m-2 w-12 rounded-md "
          onClick={() => setselectedGroup("O-")}
        >
          O-
        </button>
      </div>
      <div className=" flex justify-between">
        <div className=" m-2 h-20 w-95  bg-green-100 border border-green-300 rounded-2xl text-center p-2.5">
          <p className="text-green-800 font-medium text-3xl"> 4</p>
          <p className="text-xl text-green-500 ">Avilable</p>
        </div>

        <div className=" m-2 h-20 w-95  bg-amber-100 border border-amber-200  rounded-2xl text-center p-2.5">
          <p className="text-amber-400 font-medium text-3xl"> 4</p>
          <p className="text-xl text-amber-300 ">Low stock</p>
        </div>

        <div className=" m-2 h-20 w-95  bg-red-100 border border-red-300 rounded-2xl text-center p-2.5">
          <p className="text-red-800 font-medium text-3xl"> 4</p>
          <p className="text-xl text-red-500 ">Critical</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-6">
        {filterData.map((blood) => (
          <div className="bg-white rounded-2xl p-6 shadow-md w-72">
            <div className="flex justify-between items-start">
              <div className="bg-red-600 text-white font-bold text-2xl px-5 py-4 rounded-2xl">
                {blood.group}
              </div>
              <div className="text-green-600 font-medium flex items-center gap-2">
                {blood.satatus}
              </div>
            </div>
            <div className="mt-6 flex">
              <h2 className="text-5xl font-bold text-gray-900">
                {blood.units}
              </h2>

              <p className="text-gray-400 text-right">units</p>
            </div>

            <div className="mt-4 text-gray-400 text-sm">
              <p>City General</p>
              <p>Updated 2h ago</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BloodAvailability;
