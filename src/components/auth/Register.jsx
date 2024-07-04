import React, { useRef, useState, useEffect } from "react";
import axiosInstance from '../../utils/axiosInstance'; // Import Axios instance
import FileUpload from "../../components/common/FileUpload";
import VideoUpload from "../../components/common/VideoUpload";
import InputField from "../../components/common/InputField";
import SelectField from "../../components/common/SelectField";
import { category } from "../../utils/constant";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import PrimaryButton from "../../components/common/PrimaryButton";

const AddProducts = () => {
  const [activeVideo, setActiveVideo] = useState("file upload");
  const [activeStep, setActiveStep] = useState(0);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [form, setForm] = useState({
    videoUrl: "",
    img: [image1, image2, image3],
    productName: "",
    category: "",
    brand: "",
    coverImage: coverImage,
    description: "",
    price: 0,
    promoPrice: 0,
    quantity: 0,
    sku: "",
    warranty: "",
    packageWeight: "",
    packageDimensionLength: "",
    packageDimensionWidth: "",
    packageDimensionHeight: "",
  });

  useEffect(() => {
    setForm((prevForm) => ({
      ...prevForm,
      img: [image1, image2, image3],
      coverImage: coverImage,
    }));
  }, [image1, image2, image3, coverImage]);

  const warrantyType = [
    {
      id: 1,
      label: "Seller Warranty",
      value: "Seller Warranty",
      duration: "1 Year",
    },
    {
      id: 2,
      label: "Brand Warranty",
      value: "Brand Warranty",
      duration: "1 Year",
    },
    {
      id: 3,
      label: "No Warranty",
      value: "No Warranty",
    },
  ];

  const formRefs = {
    basicInfo: useRef(null),
    description: useRef(null),
    variants: useRef(null),
    serviceWarranty: useRef(null),
  };

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Construct form data
    const formData = {
      name: form.productName,
      price: form.price,
      quantity: form.quantity,
      summary: form.description.slice(0, 150),
      description: form.description,
      category: form.category,
      brand: form.brand,
      size: form.size,
      coverPhoto: coverImage, // use base64
      images: [image1, image2, image3].filter(Boolean), // Filter out null images
    };

    try {
      const response = await axiosInstance.post('/products', formData);
      console.log(response.data);
      // Handle success (e.g., redirect to the product list or show a success message)
    } catch (error) {
      console.error(error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <section className="mt-5 grid grid-cols-5 relative">
      <form className="col-span-4 w-11/12" onSubmit={handleSubmit}>
        <section ref={formRefs.basicInfo}>
          <h1 className="text-2xl font-bold tracking-wider">Basic Information</h1>
          <div className="mt-5">
            <h1 className="text-xl text-primary">Product Image</h1>
            <p className="text-gray-500">
              Your product image is the first thing customers will see.
            </p>
            <div className="my-4 flex">
              <FileUpload
                name="ProductImage"
                label={"Cover Image"}
                file={coverImage}
                setFile={setCoverImage}
              />
            </div>
            <div className="flex flex-wrap gap-4 mt-3">
              <FileUpload
                file={image1}
                setFile={setImage1}
                label="Image 1"
                name="ProductImage"
              />
              <FileUpload
                file={image2}
                setFile={setImage2}
                label="Product Image 1"
                name="ProductImage"
              />
              <FileUpload
                file={image3}
                setFile={setImage3}
                label="Product Image 2"
                name="ProductImage"
              />
            </div>

            <h1 className="text-xl text-primary mt-5">Video</h1>
            <div className="flex items-center gap-10 mt-2">
              <div className="flex items-center gap-3">
                <input
                  id="video"
                  type="radio"
                  name="radio-2"
                  className="radio radio-primary"
                  checked={activeVideo === "file upload"}
                  onChange={() => setActiveVideo("file upload")}
                />
                <label
                  htmlFor="video"
                  onClick={() => setActiveVideo("file upload")}
                >
                  Video Upload
                </label>
              </div>
              <div className="flex items-center gap-3">
                <input
                  id="videoUrl"
                  type="radio"
                  name="radio-2"
                  className="radio radio-primary"
                  checked={activeVideo === "url"}
                  onChange={() => setActiveVideo("url")}
                />
                <label htmlFor="videoUrl" onClick={() => setActiveVideo("url")}>
                  Video Url
                </label>
              </div>
            </div>
            <div className="flex mt-5">
              {activeVideo === "file upload" ? (
                <VideoUpload
                  label="Upload Your Product Video"
                  name="productVideo"
                />
              ) : (
                <InputField
                  label="Product Video Url"
                  value={form.videoUrl}
                  onChange={(e) =>
                    setForm({ ...form, videoUrl: e.target.value })
                  }
                  placeholder="Product Video Url"
                />
              )}
            </div>
          </div>
          <div className="mt-10">
            <h1 className="text-2xl font-bold tracking-wide">
              Product Information
            </h1>
            <p className="text-sm text-gray-500 mb-4">
              Having Accurate Product Information Raises Discoverilty
            </p>
            <InputField
              label="Product Name"
              required
              placeholder="Product Name"
              value={form.productName}
              onChange={(e) =>
                setForm({ ...form, productName: e.target.value })
              }
            />
            <div className="mt-4">
              <SelectField
                required
                label="Product Category"
                options={category.map((item) => ({
                  label: item.name,
                  value: item.name,
                }))}
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
              />
            </div>
            <div className="mt-4">
              <InputField
                label="Brand Name"
                placeholder="Brand Name"
                value={form.brand}
                onChange={(e) => setForm({ ...form, brand: e.target.value })}
              />
            </div>
          </div>
        </section>
        <section ref={formRefs.description}>
          <h1 className="text-2xl font-bold tracking-wide mt-6">
            Product Highlight
          </h1>
          <p className="text-sm text-gray-500">
            Having Accurate Product Information Raises Discoverilty
          </p>
          <h1>
            Description <span className="text-red-500">*</span>
          </h1>
          <div className="mt-4">
            <ReactQuill
              theme="snow"
              value={form.description}
              onChange={(value) => setForm({ ...form, description: value })}
              style={{ height: "400px" }}
            />
          </div>
        </section>
        <section ref={formRefs.variants}>
          <h1 className="text-xl tracking-wide mt-16 text-primary">
            Variants, Price, Stock
          </h1>
          <div className="mt-5 ">
            <h1 className="flex items-center gap-2 text-xl font-bold">
              Product Variants{" "}
              <span className="text-xs font-normal text-primary">optional</span>
            </h1>
            <div className="mt-5">
              <h1 className="flex items-center gap-2">
                Size{" "}
                <span className="text-xs font-normal text-primary">
                  (optional)
                </span>
              </h1>
              <InputField
                label="Product Size"
                placeholder="Product Size"
                value={form.size}
                onChange={(e) => setForm({ ...form, size: e.target.value })}
              />
            </div>
            <div className="mt-5">
              <h1 className="flex items-center gap-2">
                Color{" "}
                <span className="text-xs font-normal text-primary">
                  (optional)
                </span>
              </h1>
              <InputField
                label="Product Color"
                placeholder="Product Color"
                value={form.color}
                onChange={(e) => setForm({ ...form, color: e.target.value })}
              />
            </div>
            <div className="mt-5">
              <InputField
                label="Price"
                type="number"
                required
                placeholder="0"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
              />
            </div>
            <div className="mt-5">
              <InputField
                label="Promo Price"
                type="number"
                placeholder="0"
                value={form.promoPrice}
                onChange={(e) => setForm({ ...form, promoPrice: e.target.value })}
              />
            </div>
            <div className="mt-5">
              <InputField
                label="Quantity"
                type="number"
                required
                placeholder="0"
                value={form.quantity}
                onChange={(e) => setForm({ ...form, quantity: e.target.value })}
              />
            </div>
            <div className="mt-5">
              <InputField
                label="SKU"
                placeholder="SKU"
                value={form.sku}
                onChange={(e) => setForm({ ...form, sku: e.target.value })}
              />
            </div>
          </div>
        </section>
        <section ref={formRefs.serviceWarranty}>
          <h1 className="text-xl tracking-wide mt-16 text-primary">
            Service and Warranty
          </h1>
          <div className="mt-5">
            <h1 className="flex items-center gap-2 text-xl font-bold">
              Service and Warranty{" "}
              <span className="text-xs font-normal text-primary">optional</span>
            </h1>
            <div className="mt-5">
              <h1 className="flex items-center gap-2">
                Warranty Type{" "}
                <span className="text-xs font-normal text-primary">
                  (optional)
                </span>
              </h1>
              <SelectField
                label="Warranty Type"
                options={warrantyType.map((item) => ({
                  label: item.label,
                  value: item.value,
                }))}
                value={form.warranty}
                onChange={(e) => setForm({ ...form, warranty: e.target.value })}
              />
            </div>
            <div className="mt-5">
              <InputField
                label="Package Weight"
                placeholder="0"
                value={form.packageWeight}
                onChange={(e) =>
                  setForm({ ...form, packageWeight: e.target.value })
                }
              />
            </div>
            <div className="mt-5">
              <InputField
                label="Package Dimension Length"
                placeholder="0"
                value={form.packageDimensionLength}
                onChange={(e) =>
                  setForm({ ...form, packageDimensionLength: e.target.value })
                }
              />
            </div>
            <div className="mt-5">
              <InputField
                label="Package Dimension Width"
                placeholder="0"
                value={form.packageDimensionWidth}
                onChange={(e) =>
                  setForm({ ...form, packageDimensionWidth: e.target.value })
                }
              />
            </div>
            <div className="mt-5">
              <InputField
                label="Package Dimension Height"
                placeholder="0"
                value={form.packageDimensionHeight}
                onChange={(e) =>
                  setForm({ ...form, packageDimensionHeight: e.target.value })
                }
              />
            </div>
          </div>
        </section>
        <div className="flex gap-5 mt-10 justify-end">
          <PrimaryButton onClick={() => scrollToSection(formRefs.basicInfo)}>
            Previous
          </PrimaryButton>
          <PrimaryButton type="submit">Save</PrimaryButton>
        </div>
      </form>
    </section>
  );
};

export default AddProducts;
