export const Input = ({ text, isError, errorMsg, type, placeholder }) => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <p>{text}</p>
        <input
          className="w-[416px] h-[44px] p-3 border rounded-md border-[#8E8E8E]"
          placeholder={placeholder}
          type={type}
        />
        {isError && <p className="text-red-600">{errorMsg}</p>}
      </div>
    </div>
  );
};
