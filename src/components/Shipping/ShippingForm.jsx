"use client";
import { useEffect, useState } from "react";
import InputField from "../common/InputField";
import SelectField from "../common/SelectField";
import PrimaryButton from "../common/PrimaryButton";
const ShippingForm = () => {
  const [shipToDifferentAddress, setShipToDifferentAddress] = useState(false);
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    country: country,
    address: "",
    city: cities,
    postalCode: "",
    phone: "",
    shippingFullName: "",
    shippingPhone: "",
    shippingAddress: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    // Fetch list of countries
    fetch("https://countriesnow.space/api/v0.1/countries").then((response) => {
      setCountries(response.data.data);
      const selectedCountry = response.data.data.find(
        (c) => c.country === country
      );
      if (selectedCountry) {
        setCities(selectedCountry.cities);
      }
    });
  }, [country]);
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
            onChange={handleSubmit}
            placeholder="Full Name"
          />
          <InputField
            label="Email"
            id="email"
            name="email"
            required
            value={form.email}
            onChange={handleSubmit}
            placeholder="Email"
          />
        </div>
        <div className="flex items-center gap-5 mb-3">
          <SelectField
            label="Country"
            id="country"
            name="country"
            required
            value={country}
            onChange={handleSubmit}
            options={countries.map((country, index) => ({
              value: country?.country,
              label: country?.country ? country?.country : "No country",
              key: index,
            }))}
            placeholder="Select a country"
          />
          <SelectField
            label="City"
            id="city"
            name="city"
            required
            value={form.city}
            onChange={handleSubmit}
            options={cities?.map((city, index) => ({
              value: city,
              label: city ? city : "No city",
              key: index,
            }))}
            placeholder="Select a city"
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
            onChange={handleSubmit}
          />
        </div>
        <div className="flex items-center gap-5 mb-3">
          <InputField
            label="Post code"
            name="postcode"
            id="postcode"
            placeholder="Postcode"
            required
            value={form.postcode}
            onChange={handleSubmit}
          />
          <InputField
            label="Phone"
            id="phone"
            placeholder="Phone Number"
            required
            value={form.phone}
            onChange={handleSubmit}
            name="phone"
          />
        </div>
        {/* Checkbox for shipping to different address */}
        <div className="mt-2">
          <label className="cursor-pointer flex items-center gap-4">
            <input
              type="checkbox"
              className="checkbox checkbox-secondary"
              checked={shipToDifferentAddress}
              onChange={() =>
                setShipToDifferentAddress(!shipToDifferentAddress)
              }
            />
            <span className=" tracking-wider">
              Ship to a Different Address?
            </span>
          </label>
        </div>
        {/* Shipping input fields */}
        {shipToDifferentAddress && (
          <div className="mt-5">
            <div className="flex items-center gap-5 mb-3">
              <InputField
                label="Shipping Full Name"
                id="shippingFullName"
                name="shippingFullName"
                value={form.shippingFullName}
                onChange={handleSubmit}
                placeholder="Full Name"
                required
              />
              <InputField
                label="Shipping Phone"
                id="shippingPhone"
                placeholder="Phone Number"
                value={form.shippingPhone}
                onChange={handleSubmit}
                name="shippingPhone"
                required
              />
            </div>
            <InputField
              label="Shipping Address"
              id="shippingStreetAddress"
              placeholder="House Number and Street name"
              value={form.shippingAddress}
              onChange={handleSubmit}
              name="shippingStreetAddress"
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