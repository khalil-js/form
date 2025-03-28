import { useState, useEffect } from "react";

function Job() {
  const [worker, setWorker] = useState({
    name: "",
    phone: "",
    age: "",
    salary: "",
    isemployee: false,
  });

  const handleChange = (e) => {
    setWorker({ ...worker, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(worker);
    setWorker({ name: "", phone: "", age: "", salary: "", isemployee: false });
  };

  
  const isButtonDisabled =
    worker.name === "" ||
    worker.phone === "" ||
    worker.salary === "" ||
    worker.isemployee === false;


  const buttonClass = isButtonDisabled
    ? "bg-violet-50"
    : "bg-violet-950";

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="border-2 border-violet-950 p-4 w-96 bg-white shadow-lg rounded-md">
          <h1 className="text-lg font-bold text-center">Requesting a Loan</h1>
          <hr className="my-2" />

          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={worker.name}
              onChange={handleChange}
              name="name"
              className="w-full p-2 border rounded"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              value={worker.phone}
              onChange={handleChange}
              name="phone"
              className="w-full p-2 border rounded"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label htmlFor="age" className="block text-sm font-medium">
              Age
            </label>
            <input
              type="number"
              id="age"
              value={worker.age}
              onChange={handleChange}
              min="1"
              name="age"
              className="w-full p-2 border rounded"
              placeholder="Enter your age"
            />
          </div>

          <div>
            <label htmlFor="isemployee" className="block text-sm font-medium">
              Are you an employee?
            </label>
            <input
              type="checkbox"
              id="isemployee"
              name="isemployee"
              checked={worker.isemployee}
              onChange={(e) =>
                setWorker({ ...worker, isemployee: e.target.checked })
              }
              className="flex justify-center items-center mr-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">
              Choose Your Salary
            </label>
            <select
              id="salary"
              name="salary"
              value={worker.salary}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Select your salary</option>
              <option value="under 500">Under 500</option>
              <option value="600">600</option>
              <option value="more than 700">More than 700</option>
            </select>
          </div>

          <button
            className={`hover:bg-violet-500 active:bg-violet-100 text-white p-2 rounded w-full mt-4 ${buttonClass}`}
            disabled={isButtonDisabled}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default Job;
