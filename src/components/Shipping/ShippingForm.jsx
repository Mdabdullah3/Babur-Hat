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
import useCategoryStore from "../../store/CategoriesStore";
import Loading from "../common/Loading";
import { useRouter } from "next/navigation";

const ShippingForm = () => {
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [bdDistricts, setBdDistricts] = useState([]);
  const [bdCities, setBdCities] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);
  const { user, fetchUser } = useUserStore();
  const [selectedMethod, setSelectedMethod] = useState("cod");
  const [isClient, setIsClient] = useState(false);
  const { cart, clearCart } = useCartStore();
  const [shippingData, setShippingData] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { categories, fetchCategories } = useCategoryStore();
  const router = useRouter();

  // Product Check
  useEffect(() => {
    // if (!user) {
    //   router.push("/auth/login");
    // }

    const url = `${API_URL}/products?_limit=10000&_fields=_id,productVariants`;
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setProductsData(data.data);
    };
    fetchData();
  }, [user, router]);

  const groupedCartProductsByCategory = cart?.map((product) => {
    const matchedCategory = categories?.find(
      (cat) => cat?._id === product?.category
    );
    const matchedSubCategory = matchedCategory?.subCategories?.find(
      (subCat) => subCat?._id === product?.subCategory
    );

    // Financial fields from subcategory (if exists)
    const subCategoryVat = matchedSubCategory?.vat;
    const subCategoryCommission = matchedSubCategory?.commission;
    const subCategoryTransactionCost = matchedSubCategory?.transactionCost;
    const subCategoryShippingCharge = matchedSubCategory?.shippingCharge;

    // Financial fields from category (fallback if subcategory fields missing)
    const categoryVat = matchedCategory?.vat;
    const categoryCommission = matchedCategory?.commission;
    const categoryTransactionCost = matchedCategory?.transactionCost;
    const categoryShippingCharge = matchedCategory?.shippingCharge;

    // Use subcategory values if available, else fallback to category
    const finalVat = subCategoryVat || categoryVat || 0;
    const finalCommission = subCategoryCommission || categoryCommission || 0;
    const finalTransactionCost =
      subCategoryTransactionCost || categoryTransactionCost || 0;
    const finalShippingCharge =
      subCategoryShippingCharge || categoryShippingCharge || 0;

    // Define types (e.g., default to "percentage" or "fixed")
    const finalVatType =
      matchedSubCategory?.vatType || matchedCategory?.vatType || "percentage"; // Default to percentage
    const finalCommissionType =
      matchedSubCategory?.commissionType ||
      matchedCategory?.commissionType ||
      "percentage";
    const finalTransactionCostType =
      matchedSubCategory?.transactionCostType ||
      matchedCategory?.transactionCostType ||
      "fixed";
    const finalShippingChargeType =
      matchedSubCategory?.shippingChargeType ||
      matchedCategory?.shippingChargeType ||
      "fixed";

    // Calculate price adjustments (example: if percentage, apply percentage logic)
    const price = parseFloat(product.price) * parseFloat(product.quantity);

    const vatAmount =
      finalVatType === "percentage" ? (price * finalVat) / 100 : finalVat;
    const commissionAmount =
      finalCommissionType === "percentage"
        ? (price * finalCommission) / 100
        : finalCommission;
    const transactionCostAmount =
      finalTransactionCostType === "percentage"
        ? (price * finalTransactionCost) / 100
        : finalTransactionCost;
    const shippingChargeAmount =
      finalShippingChargeType === "percentage"
        ? (price * finalShippingCharge) / 100
        : finalShippingCharge;
    const profit =
      price -
      (parseFloat(vatAmount) +
        parseFloat(commissionAmount) +
        parseFloat(transactionCostAmount) +
        parseFloat(shippingChargeAmount));
    // Update the product with calculated values
    return {
      ...product,
      vatAmount,
      commissionAmount,
      transactionCostAmount,
      shippingChargeAmount,
      profit,
    };
  });
  // Shipping Form
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

  useEffect(() => {
    if (user) {
      setForm((prev) => ({
        ...prev,
        fullName: user?.name || "",
        email: user?.email || "",
      }));
    }
  }, [user]);

  // Handle changes in inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // Load District & Cities
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
    const loadUser = async () => {
      await fetchUser();
      setLoading(false);
    };

    loadUser();
    fetchDistricts();
    fetchCities();
  }, [fetchUser]);

  // Load Dynamic Delevery Fees
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
        setShippingData(null);
      });
  }, [selectedDistrict]);

  useEffect(() => {
    fetchCategories();
    if (selectedDistrict) {
      const filteredCities = bdCities.filter(
        (city) => city.district_id === selectedDistrict.value
      );
      setCityOptions(
        filteredCities.map((city) => ({ value: city.id, label: city.name }))
      );
    }
  }, [selectedDistrict, fetchCategories, bdCities]);

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

  //Handle Product Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Clear previous errors

    if (!user) {
      setLoading(false);
      return toast.error("Please login first.");
    }
    // Validate form inputs
    const validationErrors = [];
    if (form.fullName.length < 5)
      validationErrors.push("Name must be at least 5 characters long.");
    if (form.streetAddress.length < 8)
      validationErrors.push("Address must be at least 8 characters long.");
    // if (form.postalCode.length < 4)
    //   validationErrors.push("Postal Code must be at least 4 characters long.");
    if (!/^01[3-9]\d{8}$/.test(form.phone))
      validationErrors.push("Invalid phone number.");
    if (!selectedCity?.label || !selectedDistrict?.label)
      validationErrors.push("City and District are required.");
    if (validationErrors.length > 0) {
      toast.error(validationErrors.join(", "));
      setLoading(false);
      return;
    }
    // Check product stock
    const stockError = checkProductStock();
    if (stockError) {
      toast.error(stockError);
      setLoading(false);
      return;
    }
    // Prepare order data
    const orders = groupedCartProductsByCategory?.map((item) => ({
      user: user?._id,
      product: item?._id,
      price: item?.price,
      variantId: item?.variantId,
      quantity: item?.quantity,
      vat: item?.vatAmount,
      commission: item?.commissionAmount,
      transactionCost: item?.transactionCostAmount,
      shippingCharge: item?.shippingChargeAmount,
      profit: item?.profit,
      vendorPaid: "unpaid",
      vendor: item?.userId,
      currency: "bdt",
      transactionId: item?._id,
      paymentType:
        selectedMethod === "cod" ? "cash-on-delivery" : "Online Payment",
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
    }));
    const orderData = {
      products: [
        {
          product: "675ff3153b48cef96b91be25",
          price: 43,
          quantity: 3,
          vendor: "675fe0173b48cef96b91a459",
          status: "pending",
          vendorPayment: {
            vat: 4,
            commission: 3,
            payableAmount: 200,
            profit: 50,
          },
          vendorPaymentStatus: "non-paid",
        },
      ],
      status: "pending",
      currency: "Bdt",
      paymentType: "cash",
      user: "675fe0173b48cef96b91a459",
      shippingInfo: {
        name: "Riajul Islam",
        email: "riajul@gmail.com",
        phone: "01957500605",
        method: "Courier",
        address1: "shipping address",
        address2: "",
        city: "Dhaka",
        state: "Dhaka",
        postCode: 1000,
        country: "Bangladesh",
        deliveryFee: 50,
      },
      orderCost: 516,
      profit: 100,
      brand: "BrandName",
    };
    const OnlinePaymentsOrdersData = {
      products: groupedCartProductsByCategory?.map((item) => ({
        product: item?._id,
        price: item?.price,
        quantity: item?.quantity,
        vendor: item?.userId,
        status: "pending",
        vendorPayment: {
          vat: item?.vatAmount,
          commission: item?.commissionAmount,
          transactionCost: item?.transactionCostAmount,
          shippingCharge: item?.shippingChargeAmount,
          profit: item?.profit,
        },
        vendorPaymentStatus: item?.vendorPaid === "unpaid",
      })),
      status: "pending",
      currency: "Bdt",
      paymentType: selectedMethod === "Online Payment",
      user: user?._id,
      shippingInfo: {
        name: form.fullName,
        email: form.email,
        phone: form.phone,
        method: "Courier",
        address1: form.streetAddress,
        address2: "",
        city: selectedCity?.label || "",
        state: selectedDistrict?.label || "",
        postCode: form.postalCode,
        country: "Bangladesh",
        deliveryFee: shippingData?.deliveryFee || 100,
      },
    };
    try {
      if (selectedMethod === "cod") {
        const response = await axios.post(`${API_URL}/orders`, orders, {
          withCredentials: true,
        });
        console.log(response);
        if (response.data) {
          toast.success("Orders processed successfully!");
          window.location.href = "/order-complete";
          clearCart();
        } else {
          toast.error(response.data.message || "Failed to process orders.");
        }
      } else {
        const response = await axios.post(
          `${API_URL}/payments/checkout`,
          orderData,
          { withCredentials: true }
        );
        const gatewayUrl = response?.data?.gatewayUrl;
        if (gatewayUrl) {
          toast.success("Redirecting to payment gateway...");
          window.location.href = gatewayUrl;
        } else {
          throw new Error("Failed to get payment gateway URL.");
        }
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "An error occurred. Please try again."
      );
      console.error("Error during submission:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  // if (loading) {
  //   return <Loading />;
  // }
  // Checking Product Is Avaiable in Stock or Invalid Product
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
  // if (!user) {
  //   return <Loading />;
  // }
  return (
    <section className="flex md:flex-row lg:gap-12 items-start flex-col-reverse">
      <section className="w-full">
        <h1 className="font-bold capitalize md:text-2xl my-2 md:my-0 text-xl tracking-wider">
          Billing Details
        </h1>
        <form className="md:mt-10" onSubmit={handleSubmit}>
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
          <div className="md:flex items-center gap-5 my-3">
            <InputField
              label="Email"
              id="email"
              name="email"
              type="email"
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
                    alt="Cash On Delivery"
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
                    alt="Online Payment"
                  />
                </label>
              </div>
            </div>
          </section>

          {error && <p className="text-red-500 text-center my-2">{error}</p>}
          <PrimaryButton
            type="submit"
            value={loading ? "Loading..." : "Submit"}
          />
        </form>
      </section>
      <section className="w-full">
        <ProductSummery deliveryCharge={shippingData?.deliveryFee || 100} />
      </section>
    </section>
  );
};

export default ShippingForm;
