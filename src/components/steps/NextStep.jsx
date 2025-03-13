import React from "react";
import { Input } from "../Input";

export const NextStep = ({ handleSubmit, stepCount, handleInput }) => {
  return (
    <div
      className="flex flex-col gap-3 justify-between h-full"
      onSubmit={handleSubmit}
    >
      <div>
        <Input
          text={"Email"}
          isError={true}
          errorMsg={"Insert email account"}
          placeholder={"...@example.com"}
          type={"email"}
        />
        <Input
          text={"Phone number"}
          isError={true}
          errorMsg={"Insert phone number"}
          placeholder={"####-####"}
          type={"number"}
        />
        <Input
          text={"Password"}
          isError={true}
          errorMsg={"At least include 1 letter,"}
          placeholder={"Password"}
          type={"password"}
        />
        <Input
          text={"Confirm Password"}
          isError={true}
          errorMsg={"Password is not matching"}
          placeholder={"Confirm Password"}
          type={"password"}
        />
      </div>
    </div>
  );
};
