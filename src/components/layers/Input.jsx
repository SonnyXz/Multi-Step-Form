export const Input = ({
  text,
  isError,
  errorMsg,
  type,
  placeholder,
  handleInput,
}) => {
  return (
    <div>
      <div className="flex flex-col pb-3">
        <p>
          {text} <span className="text-red-600">*</span>
        </p>
        <input
          className="w-[416px] h-[44px] p-3 border rounded-md border-[#8E8E8E]"
          placeholder={placeholder}
          type={type}
          onChange={handleInput}
        />
        {/* {isError && <p className="text-red-600">{errorMsg}</p>} */}
      </div>
    </div>
  );
};
