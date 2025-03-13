import { Input } from "../Input";
export const LastStep = () => {
  return (
    <div className="flex flex-col gap-3 justify-between h-full">
      <div>
        <Input
          text={"Date of Birth"}
          isError={true}
          errorMsg={"Insert date of birth"}
          placeholder={"--/--/--"}
          type={"date"}
        ></Input>
      </div>
    </div>
  );
};
