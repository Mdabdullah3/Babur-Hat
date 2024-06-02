"use client";
import React, { useState } from "react";
import InputField from "../../common/InputField";
import PrimaryButton from "../../common/PrimaryButton";
const AddNewVoucher = () => {
  const [form, setForm] = useState({
    voucherId: "",
    strdate: "",
    enddate: "",
    discount: "",
    status: "",
  });
  return (
    <section>
      <form action="">
        <div>
          <InputField
            label="Voucher ID"
            value={form.voucherId}
            placeholder="Enter Voucher ID"
            onChange={(e) => setForm({ ...form, voucherId: e.target.value })}
            required
          />
          <InputField
            label="Discount"
            value={form.discount}
            placeholder="Enter Disocunt"
            onChange={(e) => setForm({ ...form, discount: e.target.value })}
            required
          />
          <InputField
            label="Start Date"
            type="date"
            value={form.strdate}
            placeholder="Enter Start Date"
            onChange={(e) => setForm({ ...form, strdate: e.target.value })}
            required
          />
          <InputField
            label="End Date"
            type="date"
            value={form.enddate}
            placeholder="Enter End Date"
            onChange={(e) => setForm({ ...form, enddate: e.target.value })}
            required
          />
          <InputField
            label="Status"
            value={form.status}
            placeholder="Enter Status"
            onChange={(e) => setForm({ ...form, status: e.target.value })}
            required
          />
        </div>

        <PrimaryButton value="Add New Voucher" />
      </form>
    </section>
  );
};

export default AddNewVoucher;
