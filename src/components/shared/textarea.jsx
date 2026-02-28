import React from "react";

const Textarea = ({ label, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && <label className="text-sm font-medium">{label}</label>}

      <textarea
        rows={5}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
      />
    </div>
  );
};

export default Textarea;
