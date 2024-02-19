import React, { useState, useEffect } from "react";
import Button from "../../Button";

function RequestForm({ pageText }) {
  const initialFormData = {
    name: "",
    bloodGroup: "",
    age: "",
    city: "",
    state: "",
    email: "",
    contactNumber: "",
    address: "",
    description: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    // Reset the form data when pageText changes
    setFormData(initialFormData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageText]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    alert("form submitted");
    console.log("form submitted");
    event.preventDefault();
    setFormData(initialFormData);
  };

  const handleReset = (event) => {
    alert("form reseted");
    console.log("form reseted");
    event.preventDefault();
    setFormData(initialFormData);
  };

  const labels = {
    name: pageText === "want to donate" ? "Donor Name" : "Patient Name",
    bloodGroup:
      pageText === "want to donate"
        ? "Donor's Blood Group"
        : "Need Blood Group",
    age: pageText === "want to donate" ? "Select Age" : "Patient Age",
    city: pageText === "want to donate" ? "Donor City" : "Patient City",
    state: pageText === "want to donate" ? "Donor State" : "Patient State",
    email: "Contact Email",
    contactNumber: "Contact Number",
    address:
      pageText === "want to donate" ? "Full Address" : "Hospital Address",
    description: "Description/ Requirement",
  };

  return (
    <form className="mt-4 mb-4 w-1/2 m-auto" onSubmit={handleSubmit}>
      <table className="w-full">
        <tbody>
          {Object.keys(labels).map((key) => (
            <tr key={key}>
              <td className="pr-2 pb-2 font-bold text-gray-700 w-1/3">
                {labels[key]}
              </td>
              <td className="pb-2 w-auto">
                {key === "bloodGroup" ? (
                  <select
                    id={key}
                    name={key}
                    value={formData[key]}
                    onChange={handleInputChange}
                    className="border-2 border-gray-300 rounded px-3 py-2 w-full"
                  >
                    <option value="">Select Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="O+">O+</option>
                    <option value="B+">B+</option>
                    <option value="AB+">AB+</option>
                    <option value="A-">A-</option>
                    <option value="O-">O-</option>
                    <option value="B-">B-</option>
                    <option value="AB-">AB-</option>
                  </select>
                ) : (
                  <input
                    type={key === "age" ? "number" : "text"}
                    id={key}
                    name={key}
                    value={formData[key]}
                    onChange={handleInputChange}
                    className="border-2 border-gray-300 rounded px-3 py-2 w-full"
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center mt-4 mb-2">
        <div className="mx-auto relative left-20">
          <Button title={"Submit"} type={"submit"} />
        </div>
        <div className="mx-auto relative right-20">
          <Button type={"reset"} onClick={handleReset} title={"Reset"} />
        </div>
      </div>
    </form>
  );
}

export default RequestForm;
