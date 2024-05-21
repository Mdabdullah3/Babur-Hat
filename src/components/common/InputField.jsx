import React from "react";

const InputField = ({
  label,
  id,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}) => {
  return (
    <div className="w-full">
      <label htmlFor={id} className="block text-gray-600 font-semibold mb-1">
        {label} <span className="text-primary">{required && "*"}</span>
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="input input-bordered w-full focus:outline-none my-2 bg-transparent"
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
