import { useParams } from "react-router-dom";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { createClient } from '@supabase/supabase-js'
import { v4 as uuidv4 } from 'uuid';

// Create a single supabase client for interacting with your database
const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_PUBLIC_KEY)

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

  const requirePermitExpiry = ["Work Permit", "Study Permit"].includes(formData.immigrationStatus);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (phone) => {
    setFormData({ ...formData, phone });
  };

  const handleFileChange = async (e) => {
    if (!e.target.files[0]) return;
    const { data, error } = await supabase.storage.from('resumes').upload('resumes/' + uuidv4()+"_"+e.target.files[0].name, e.target.files[0])
    if (error) {
      console.error('Error uploading file: ', error)
      alert('Error uploading file')
    } else {
      setFormData({ ...formData, resume: data.fullPath });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase
    .from('job-applications')
    .insert({ name: formData.name, 
      email: formData.email, 
      phone_number: formData.phone, 
      address: formData.address, 
      relocatable: formData.relocation, 
      preferred_start_date: new Date(formData.startDate).toISOString(), 
      immigration_status:formData.immigrationStatus, 
      permit_expiry: formData.workPermitExpiry || null, 
      resume: formData.resume })

    if (error) {
      console.error('Error while inserting record', error);
      return alert('Application submission failed.');
    }
  
    // Call Supabase Edge Function to send email
    const emailResponse = await fetch(
      `${process.env.REACT_APP_SUPABASE_URL}/functions/v1/sendApplicationEmail`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json",
         },
        body: JSON.stringify({
          email: formData.email,
          name: formData.name,
          phone: formData.phone,
          address: formData.address,
          relocation: formData.relocation,
          startDate: formData.startDate,
          immigrationStatus: formData.immigrationStatus,
          workPermitExpiry: formData.workPermitExpiry,
          resume: `${process.env.REACT_APP_SUPABASE_URL}/storage/v1/object/public/${formData.resume}`,  
          jobTitle: slug.replace(/-/g, " "),
        }),
      }
    );
      
    if (!emailResponse.ok) {
      console.error("Failed to send email", await emailResponse.json());
      return alert("Application submitted, but email not sent.");
    }
  
    alert("Application submitted successfully. Confirmation email sent!");
  
     // Reset form
      setFormData({
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
      document.getElementById("application-form").reset();
    
  };

  return (
    <div className="container w-[40%] mt-10 mx-auto p-6 leading-loose">
      <h1 className="text-2xl font-bold mb-4">Apply for {slug.replace(/-/g, " ")}</h1>
      <form id="application-form" onSubmit={handleSubmit} className="space-y-4">
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
        <select
          type="text"
          name="immigrationStatus"
          placeholder="Immigration Status"
          required
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        >
          <option value="">Select</option>
          <option value="Citizen">Citizen</option>
          <option value="Permanent Resident">Permanent Resident</option>
          <option value="Work Permit">Work Permit</option>
          <option value="Study Permit">Study Permit</option>
          <option value="Visitor">Visitor</option>
        </select>

        <label className="block">Permit Expiry</label>
        <input
          type="date"
          name="workPermitExpiry"
          placeholder="Work Permit Expiry (if applicable)"
          onChange={handleChange}
          required
          className={"w-full p-2 border rounded-md" + (!requirePermitExpiry ? "bg-gray-400" : "")}
          disabled={!requirePermitExpiry}
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
