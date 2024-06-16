import React from "react";
import Select from "react-select";

const SelectField = ({
  label,
  id,
  name,
  value,
  onChange,
  options,
  placeholder,
  required = false,
  isDisabled = false,
}) => {
  const customStyles = {
    control: (provided) => ({
      ...provided,
      boxShadow: "none",
      "&:hover": {
        borderColor: "black",
      },
    }),
  };

  return (
    <div className="mb-3 w-full">
      <label
        htmlFor={id}
        className="block text-gray-600 font-semibold tracking-wider mb-1"
      >
        {label} <span className="text-red-500">{required && "*"}</span>
      </label>
      <Select
        id={id}
        name={name}
        value={options.find((option) => option.value === value)}
        onChange={(selectedOption) =>
          onChange({ target: { name, value: selectedOption.value } })
        }
        options={options}
        placeholder={placeholder}
        styles={customStyles}
        isDisabled={isDisabled}
        isSearchable
      />
    </div>
  );
};

export default SelectField;
