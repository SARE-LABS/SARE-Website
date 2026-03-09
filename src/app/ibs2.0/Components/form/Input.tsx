import type { InputFieldProps } from "../../types/Input";

const InputField = ({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  name,
}: InputFieldProps) => {
  return (
    <div className="flex flex-col w-full">
      <label className="mb-1 text-sm font-medium text-[#1F2937]">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-[#9CA3AF] rounded-lg placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#67B5DC] focus:border-[#67B5DC]"
      />
    </div>
  );
};

export default InputField;
