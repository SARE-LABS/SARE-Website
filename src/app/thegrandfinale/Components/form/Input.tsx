import type { InputFieldProps } from "../../types/Input";

const InputField: React.FC<InputFieldProps> = ({
  id,
  name,
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  error,
  disabled = false,
  autoComplete,
  icon,
  required = false,
}) => {
  const inputId = id || `input-${name}`;

  return (
    <div className="flex flex-col w-full text-left">
      <div className="flex items-center justify-between mb-1.5">
        <label
          htmlFor={inputId}
          className="text-xs font-semibold uppercase tracking-wider text-gray-700"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      </div>

      <div className="relative flex items-center">
        {icon && (
          <div
            aria-hidden="true"
            className={`absolute left-3.5 flex items-center pointer-events-none transition-colors ${
              error ? "text-red-400" : "text-gray-400"
            }`}
          >
            {icon}
          </div>
        )}

        <input
          id={inputId}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          autoComplete={autoComplete}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${inputId}-error` : undefined}
          className={`w-full rounded-xl border bg-gray-50/50 text-gray-900 placeholder:text-gray-400 text-sm transition-all duration-200 outline-none ${
            icon ? "pl-10 pr-4" : "px-4"
          } py-3 ${
            error
              ? "border-red-300 bg-red-50/30 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
              : "border-gray-200 hover:border-gray-300 focus:border-[#67B5DC] focus:bg-white focus:ring-4 focus:ring-[#67B5DC]/15"
          } disabled:cursor-not-allowed disabled:opacity-60`}
        />
      </div>

      {error && (
        <p
          id={`${inputId}-error`}
          role="alert"
          className="mt-1.5 text-xs font-medium text-red-500 flex items-center gap-1"
        >
          <svg
            className="w-3.5 h-3.5 shrink-0"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
};

export default InputField;
