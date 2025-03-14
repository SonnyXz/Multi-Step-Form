import React from "react";
import { Input } from "../layers/Input";

export const NextStep = ({ handleSubmit, stepCount, handleInput }) => {
  return (
    <div
      className="flex flex-col gap-3 justify-between h-full"
      onSubmit={handleSubmit}
    >
      <div>
        <Input
          text={"Email"}
          name={"email"}
          isError={true}
          errorMsg={"Insert email account"}
          placeholder={"...@example.com"}
          type={"email"}
          handleInput={handleInput}
        />
        <Input
          text={"Phone number"}
          name={"phoneNumber"}
          isError={true}
          errorMsg={"Insert phone number"}
          placeholder={"####-####"}
          type={"number"}
          handleInput={handleInput}
        />
        <Input
          text={"Password"}
          name={"password"}
          isError={true}
          errorMsg={"At least include 1 letter,"}
          placeholder={"Password"}
          type={"password"}
          handleInput={handleInput}
        />
        <Input
          text={"Confirm Password"}
          name={"confirmPassword"}
          isError={true}
          errorMsg={"Password is not matching"}
          placeholder={"Confirm Password"}
          type={"password"}
          handleInput={handleInput}
        />
      </div>
    </div>
  );
};
