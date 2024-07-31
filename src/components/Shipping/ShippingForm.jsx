// components/ShippingForm.js
"use client";
import { useEffect, useState } from "react";
import InputField from "../common/InputField";
import SelectField from "../common/SelectField";
import PrimaryButton from "../common/PrimaryButton";
import axios from "axios";
import Select from "react-select";

const ShippingForm = () => {
  const [shipToDifferentAddress, setShipToDifferentAddress] = useState(false);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [bdDistricts, setBdDistricts] = useState([]);
  const [bdCities, setBdCities] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);
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
    const fetchDistricts = async () => {
      const response = await fetch("bd-districts.json");
      const data = await response.json();
      setBdDistricts(data?.districts || []);
    };

    const fetchCities = async () => {
      const response = await fetch("bd-upazilas.json");
      const data = await response.json();
      setBdCities(data?.upazilas || []);
    };

    fetchDistricts();
    fetchCities();
  }, []);

  useEffect(() => {
    if (selectedDistrict) {
      const filteredCities = bdCities.filter(
        (city) => city.district_id === selectedDistrict.value
      );
      setCityOptions(
        filteredCities.map((city) => ({ value: city.id, label: city.name }))
      );
    }
  }, [selectedDistrict, bdCities]);

  const handleDistrictChange = (selectedOption) => {
    setSelectedDistrict(selectedOption);
    setCityOptions([]);
  };

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
        <div className="mb-1">
          <div className="my-2">
            <label htmlFor="district" className="pb-2 font-medium">
              District <span className="text-red-500">*</span>
            </label>
            <Select
              id="district"
              options={bdDistricts.map((district) => ({
                value: district.id,
                label: district.name,
              }))}
              value={selectedDistrict}
              onChange={handleDistrictChange}
              placeholder="Select District"
            />
          </div>
          <div className="my-4">
            <label htmlFor="city" className="pb-2 font-medium">
              City <span className="text-red-500">*</span>
            </label>
            <Select
              id="city"
              options={cityOptions}
              placeholder="Select City"
              isDisabled={!selectedDistrict}
              onChange={(selectedOption) => setSelectedCity(selectedOption)}
            />
          </div>
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
