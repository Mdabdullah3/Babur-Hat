// components/ShippingForm.js
"use client";
import { useEffect, useState } from "react";
import InputField from "../common/InputField";
import SelectField from "../common/SelectField";
import PrimaryButton from "../common/PrimaryButton";
import axios from "axios";

const ShippingForm = () => {
  const [shipToDifferentAddress, setShipToDifferentAddress] = useState(false);
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [upazila, setUpazila] = useState("");
  const [divisions, setDivisions] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);
  console.log(upazilas?.upazillas);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    address: "",
    postalCode: "",
    phone: "",
    shippingFullName: "",
    shippingPhone: "",
    shippingAddress: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  useEffect(() => {
    axios.get("https://bdapis.com/api/v1.2/divisions").then((response) => {
      setDivisions(response.data.data);
    });
  }, []);

  useEffect(() => {
    if (division) {
      axios
        .get(`https://bdapis.com/api/v1.2/division/${division}`)
        .then((response) => {
          setDistricts(response.data.data);
        });
    } else {
      setDistricts([]);
      setUpazilas([]);
    }
  }, [division]);

  useEffect(() => {
    if (district) {
      axios
        .get(`https://bdapis.com/api/v1.2/district/${district}`)
        .then((response) => {
          setUpazilas(response.data.data);
        });
    } else {
      setUpazilas([]);
    }
  }, [district]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="w-full">
      <h1 className="font-bold capitalize text-2xl tracking-wider">
        Billing details
      </h1>
      <form className="mt-10" onSubmit={handleSubmit}>
        {/* Billing input fields */}
        <div className="flex items-center gap-5 mb-3">
          <InputField
            label="Full Name"
            id="fullName"
            name="fullName"
            required
            value={form.fullName}
            onChange={handleInputChange}
            placeholder="Full Name"
          />
          <InputField
            label="Email"
            id="email"
            name="email"
            required
            value={form.email}
            onChange={handleInputChange}
            placeholder="Email"
          />
        </div>
        <div className="flex items-center gap-5 mb-3">
          <SelectField
            label="Division"
            id="division"
            name="division"
            required
            value={division}
            onChange={(e) => setDivision(e.target.value)}
            options={divisions.map((div, index) => ({
              value: div.division,
              label: div.division,
              key: index,
            }))}
            placeholder="Select a division"
          />
          <SelectField
            label="District"
            id="district"
            name="district"
            required
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            options={districts.map((dist, index) => ({
              value: dist.district,
              label: dist.district,
              key: index,
            }))}
            placeholder="Select a district"
            disabled={!division}
          />
          <SelectField
            label="Upazila"
            id="upazila"
            name="upazila"
            required
            value={upazila}
            onChange={(e) => setUpazila(e.target.value)}
            options={
              upazilas?.upazillas?.map((upz, index) => ({
                value: upz,
                label: upz,
                key: index,
              })) || []
            }
            placeholder="Select an upazila"
            disabled={!district}
          />
        </div>
        <div className="mb-3">
          <InputField
            label="Street Address"
            name="streetAddress"
            id="streetAddress"
            required
            placeholder="House Number and Street name"
            value={form.streetAddress}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex items-center gap-5 mb-3">
          <InputField
            label="Post code"
            name="postalCode"
            id="postalCode"
            placeholder="Postcode"
            required
            value={form.postalCode}
            onChange={handleInputChange}
          />
          <InputField
            label="Phone"
            id="phone"
            placeholder="Phone Number"
            required
            value={form.phone}
            onChange={handleInputChange}
            name="phone"
          />
        </div>
        <div className="my-3">
          <label className="cursor-pointer flex items-center gap-4">
            <input
              type="checkbox"
              className="checkbox checkbox-secondary checkbox-sm"
              checked={shipToDifferentAddress}
              onChange={() =>
                setShipToDifferentAddress(!shipToDifferentAddress)
              }
            />
            <span className="tracking-wider">Ship to a Different Address?</span>
          </label>
        </div>
        {/* Shipping input fields */}
        {shipToDifferentAddress && (
          <div className="my-5">
            <div className="flex items-center gap-5 mb-3">
              <InputField
                label="Shipping Full Name"
                id="shippingFullName"
                name="shippingFullName"
                value={form.shippingFullName}
                onChange={handleInputChange}
                placeholder="Full Name"
                required
              />
              <InputField
                label="Shipping Phone"
                id="shippingPhone"
                placeholder="Phone Number"
                value={form.shippingPhone}
                onChange={handleInputChange}
                name="shippingPhone"
                required
              />
            </div>
            <InputField
              label="Shipping Address"
              id="shippingStreetAddress"
              placeholder="House Number and Street name"
              value={form.shippingAddress}
              onChange={handleInputChange}
              name="shippingAddress"
              required
            />
          </div>
        )}
        <PrimaryButton type="submit" value="Place Order" />
      </form>
    </div>
  );
};

export default ShippingForm;
