import { Input } from "../layers/Input";
export const LastStep = ({ handleSubmit, stepCount, handleInput }) => {
  return (
    <div className="flex flex-col gap-3 justify-between h-full">
      <div>
        <Input
          text={"Date of Birth"}
          isError={true}
          errorMsg={"Insert date of birth"}
          placeholder={"--/--/--"}
          type={"date"}
          handleInput={handleInput}
        ></Input>
      </div>
      <div className="flex justify-center items-center w-[416px] h-[180px] bg-[#F4F4F4]">
        <label htmlFor="file">Add an image </label>
        <input className="hidden" type="file" name="" id="" />
      </div>
    </div>
  );
};
