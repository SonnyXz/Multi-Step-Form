import { Input } from "../layers/Input";
export const LastStep = ({ handleInput }) => {
  return (
    <div className="flex flex-col gap-3 justify-between h-full">
      <div>
        <Input
          text={"Date of Birth"}
          name={"dateOfBirth"}
          isError={true}
          errorMsg={"Insert date of birth"}
          placeholder={"--/--/--"}
          type={"date"}
          handleInput={handleInput}
        ></Input>
      </div>
      <div>
        <h1>Profile Image</h1>
        <div className="flex justify-center items-center w-[416px] h-[180px] bg-[#F4F4F4]">
          <label
            className="flex justify-center items-center flex-col h-[148px] w-[416px]"
            htmlFor="file"
          >
            <div className="flex justify-center items-center w-[25px] h-[25px] rounded-[50px] bg-white ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M9.5 2.5V9.5H2.5V2.5H9.5ZM9.5 1.5H2.5C1.95 1.5 1.5 1.95 1.5 2.5V9.5C1.5 10.05 1.95 10.5 2.5 10.5H9.5C10.05 10.5 10.5 10.05 10.5 9.5V2.5C10.5 1.95 10.05 1.5 9.5 1.5ZM7.07 5.93L5.57 7.865L4.5 6.57L3 8.5H9L7.07 5.93Z"
                  fill="#202124"
                />
              </svg>
            </div>
            Add an image{" "}
          </label>
          <input className="hidden " type="file" name="" id="file" />
        </div>
      </div>
    </div>
  );
};
