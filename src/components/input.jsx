export const Input = ({ text, isError, errorMsg }) => {
  return (
    <div className="flex flex-col gap-2">
      <p>{text}</p>
      <input
        className="w-[416px] h-[44px] p-3 border rounded-md border-[#8E8E8E]"
        type="text"
        placeholder="type..."
      />
      {isError && <p className="text-red-600">{errorMsg}</p>}
    </div>
  );
};
