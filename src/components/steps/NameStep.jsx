import React from "react";
import { Input } from "../Input";

export const NameStep = ({ handleSubmit, stepCount, handleInput }) => {
  return (
    <div
      className="flex flex-col gap-3 justify-between h-full"
      onSubmit={handleSubmit}
    >
      <div>
        <Input
          text={"First Name"}
          isError={true}
          errorMsg={"Type first name"}
          placeholder={"First Name"}
          type={"text"}
        />
        <Input
          text={"Last Name"}
          isError={true}
          errorMsg={"Type last name"}
          placeholder={"Last Name"}
          type={"text"}
        />
        <Input
          text={"Username"}
          isError={true}
          errorMsg={"Type username"}
          placeholder={"Username"}
          type={"text"}
        />
      </div>
    </div>
  );
};
