import { useParams } from "react-router-dom";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Apply = () => {
  const { slug } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    relocation: "",
    startDate: "",
    immigrationStatus: "",
    workPermitExpiry: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (phone) => {
    setFormData({ ...formData, phone });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Application submitted successfully!");
  };

  return (
    <div className="container w-[40%] mt-10 mx-auto p-6 leading-loose">
      <h1 className="text-2xl font-bold mb-4">Apply for {slug.replace(/-/g, " ")}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter Full Name"
          required
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />

        <label className="block">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter Email address"
          required
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />

        <label className="block">Phone</label>
        <PhoneInput
          country={"ca"} 
          enableSearch={true} 
          value={formData.phone}
          onChange={handlePhoneChange}
          inputClass="w-full p-2 border rounded-md"
          containerClass="w-full"
        />

        <label className="block">Address</label>
        <input
          type="text"
          name="address"
          placeholder="Address"
          required
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />

        <label className="block">Are you willing to relocate?</label>
        <select
          name="relocation"
          required
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        >
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <label className="block">Preferred Start Date</label>
        <input
          type="date"
          name="startDate"
          placeholder="Preferred Start Date"
          required
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />

        <label className="block">Immigration Status</label>
        <input
          type="text"
          name="immigrationStatus"
          placeholder="Immigration Status"
          required
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />

        <label className="block">Work Permit Expiry</label>
        <input
          type="date"
          name="workPermitExpiry"
          placeholder="Work Permit Expiry (if applicable)"
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />

        <label className="block">Upload Resume</label>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          required
          onChange={handleFileChange}
          className="w-full p-2 border rounded-md"
        />

        <button
          type="submit"
          className="bg-red-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-600 w-full"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default Apply;
