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
import useUserStore from "../../store/userStore";
import axios from "axios";
import ProductSummery from "./ProductSummery";

const ShippingForm = () => {
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [bdDistricts, setBdDistricts] = useState([]);
  const [bdCities, setBdCities] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);
  const { user } = useUserStore();
  const [selectedMethod, setSelectedMethod] = useState("cod");
  const [isClient, setIsClient] = useState(false);
  const { cart, clearCart } = useCartStore();
  const [shippingData, setShippingData] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const url = `${API_URL}/products?_limit=10000&_fields=_id,quantity`;
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setProductsData(data.data);
    };
    fetchData();
  }, []);
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
    const url = `${API_URL}/delivery-fees?_limit=64`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const deliveryCharge = data?.data?.find(
          (item) =>
            item?.district?.toLowerCase() ===
            selectedDistrict?.label?.toLowerCase()
        );
        setShippingData(deliveryCharge || null);
      })
      .catch((error) => {
        console.error("Error fetching delivery fees:", error);
        setShippingData(null);
      });
  }, [selectedDistrict]);

  console.log(shippingData?.deliveryFee);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const stockError = checkProductStock();
    if (stockError) {
      setError(stockError);
      return;
    }
    // Validate phone number
    const phoneRegex = /^01[3-9]\d{8}$/;
    if (!phoneRegex.test(form.phone)) {
      toast.error("Invalid Phone Number");
      return;
    }

    // Prepare the order products
    const orderProducts = cart?.map((item) => ({
      product: item._id,
      price: item.price,
      quantity: item.quantity,
    }));

    try {
      // Create the request form
      const requestForm = {
        products: orderProducts,
        currency: "BDT",
        user: user?._id,
        paymentType: selectedMethod === "cod" ? "cash" : "card",
        status: "pending",
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
          deliveryFee: shippingData?.deliveryFee || 100,
        },
      };

      // Send POST request
      const response = await axios.post(`${API_URL}/payments`, requestForm, {
        withCredentials: true,
      });

      console.log(response);
      // Handle success
      if (response.status === 200 || response.status === 201) {
        toast.success("Payment processed successfully!");
      } else {
        throw new Error("Failed to process payment.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      toast.error(error.message || "An error occurred. Please try again.");
    }
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const checkProductStock = () => {
    for (const item of cart) {
      const product = productsData?.find((p) =>
        p?.productVariants?.some((variant) => variant?._id === item?.variantId)
      );
      const variant = product?.productVariants?.find(
        (variant) => variant?._id === item?.variantId
      );

      if (!product || !variant) {
        return "Product or variant not found.";
      }
      if (variant.quantity === 0) {
        return `"${item?.name}" is out of stock. Please remove it from the cart.`;
      }
      if (item?.quantity > variant?.quantity) {
        return `The quantity of "${item.name}" exceeds available stock. Please reduce the quantity.`;
      }
    }
    return null;
  };

  return (
    <section className="flex gap-12 items-start">
      <section className="w-full">
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
              placeholder="017XXX-XXXXX"
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
              <label
                htmlFor="city"
                className="pb-2 font-semibold text-gray-600"
              >
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
              {total + parseFloat(shippingData?.deliveryFee || 100)}
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
                  {shippingData?.deliveryFee || 100}
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

          {error && <p className="text-red-500 text-center my-2">{error}</p>}
          <PrimaryButton type="submit" value="Place Order" />
        </form>
      </section>
      <section className="w-full">
        <ProductSummery deliveryCharge={shippingData?.deliveryFee || 100} />
      </section>
    </section>
  );
};

export default ShippingForm;
