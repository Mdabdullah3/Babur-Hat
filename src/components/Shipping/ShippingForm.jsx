/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import InputField from "../common/InputField";
import PrimaryButton from "../common/PrimaryButton";
import Select from "react-select";
import useCartStore from "../../store/cartStore";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { toast } from "react-toastify";
import { API_URL } from "../../config";
const ShippingForm = () => {
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [bdDistricts, setBdDistricts] = useState([]);
  const [bdCities, setBdCities] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);
  const [selectedMethod, setSelectedMethod] = useState("cod");
  const [isClient, setIsClient] = useState(false);
  const { cart } = useCartStore();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    streetAddress: "",
    postalCode: "",
    district: selectedDistrict,
    city: selectedCity,
    paymentMethod: selectedMethod,
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

  const total = cart?.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleImageClick = (method) => {
    setSelectedMethod(method);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the data according to API requirements
    const requestData = {
      product: cart.map((item) => item._id),
      price: total + 60,
      currency: "BDT",
      paymentType: selectedMethod === "cod" ? "cash" : "card",
      shippingInfo: {
        name: form.fullName,
        email: form.email,
        phone: form.phone,
        method: "Courier",
        address1: form.streetAddress,
        address2: "",
        city: selectedCity?.label || "",
        state: selectedDistrict?.label || "",
        postcode: form.postalCode,
        country: "Bangladesh",
      },
    };

    // Send the data to the API
    // fetch(`${API_URL}/api/payments`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(requestData),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (data.success) {
    //       toast.success("Your order is successful!");
    //     } else {
    //       toast.error("There was an issue with your order. Please try again.");
    //     }
    //   })
    //   .catch((error) => {
    //     toast.error("There was an error processing your order.");
    //     console.error("Error:", error);
    //   });

    console.log(requestData);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <div className="w-full">
      <h1 className="font-bold capitalize text-2xl tracking-wider">
        Billing details
      </h1>
      <form className="mt-10" onSubmit={handleSubmit}>
        {/* Billing input fields */}
        <InputField
          label="Full Name"
          id="fullName"
          name="fullName"
          required
          value={form.fullName}
          onChange={handleInputChange}
          placeholder="Full Name"
        />
        <div className="flex items-center gap-5 my-3">
          <InputField
            label="Email"
            id="email"
            name="email"
            required
            value={form.email}
            onChange={handleInputChange}
            placeholder="Email"
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
        <h1 className="font-bold capitalize text-xl tracking-wider my-4">
          Shipping Details
        </h1>
        <div className="mb-1">
          <div className="my-2">
            <label
              htmlFor="district"
              className="pb-2 text-gray-600 font-semibold"
            >
              District <span className="text-red-500">*</span>
            </label>
            <Select
              id="district"
              instanceId="district-select"
              options={bdDistricts.map((district) => ({
                id: district.id,
                value: district.id,
                label: district.name,
              }))}
              value={selectedDistrict}
              onChange={handleDistrictChange}
              placeholder="Select District"
            />
          </div>
          <div className="my-4">
            <label htmlFor="city" className="pb-2 font-semibold text-gray-600">
              City <span className="text-red-500">*</span>
            </label>
            <Select
              id="city"
              instanceId="city-select"
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
        </div>
        <section className="bg-gray-200  text-center py-6 mb-4 rounded-lg">
          <h1>Your total payable amount is </h1>
          <p className="text-3xl font-bold tracking-wider flex items-center justify-center my-2 text-green-700">
            <FaBangladeshiTakaSign size={24} />
            {total + 60}
          </p>
          <h1 className="text-xl">Breakdown</h1>
          <div>
            <h1 className="border border-gray-100 my-3"> </h1>
            <h1 className=" tracking-wider px-10 flex items-center justify-between">
              Total
              <span className="font-bold flex items-center gap-1 text-green-700">
                <FaBangladeshiTakaSign />
                {total}
              </span>
            </h1>
          </div>
          <div>
            <h1 className="border border-gray-100 my-3"> </h1>
            <h1 className=" px-10 tracking-wider flex items-center justify-between">
              Shipping
              <span className="font-bold flex items-center text-green-700">
                <FaBangladeshiTakaSign />
                60.00
              </span>
            </h1>
          </div>
          <h1 className="border border-gray-100 my-3"> </h1>

          <p className="text-center mt-4">
            You will get the delivery{" "}
            <span className="font-semibold text-green-700">
              within 2-3 Days
            </span>{" "}
            after confirmation.
          </p>
        </section>
        <section>
          <h1 className="font-bold capitalize text-lg tracking-wider">
            Payment Options
          </h1>
          <div className="flex items-center gap-6 my-5">
            <div className="relative">
              <input
                type="radio"
                name="paymentMethod"
                id="cod"
                className="absolute bottom-[26px] left-2"
                checked={selectedMethod === "cod"}
                onChange={() => handleImageClick("cod")}
              />
              <label htmlFor="cod" onClick={() => handleImageClick("cod")}>
                <img
                  className="w-40 bg-white shadow-md px-6 py-4"
                  src="/COD.png"
                  alt=""
                />
              </label>
            </div>

            <div className="relative">
              <input
                type="radio"
                name="paymentMethod"
                id="card"
                className="absolute bottom-[25px] left-2"
                checked={selectedMethod === "card"}
                onChange={() => handleImageClick("card")}
              />
              <label htmlFor="card" onClick={() => handleImageClick("card")}>
                <img
                  className="w-40 bg-white shadow-md px-6 py-4"
                  src="/card-pay.png"
                  alt=""
                />
              </label>
            </div>
          </div>
        </section>

        <PrimaryButton type="submit" value="Place Order" />
      </form>
    </div>
  );
};

export default ShippingForm;
