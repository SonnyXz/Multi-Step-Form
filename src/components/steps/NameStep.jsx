import React from "react";
import { Input } from "../layers/Input";

export const NameStep = ({ handleInput }) => {
  return (
    <div className="flex flex-col gap-3 justify-between h-full">
      <div>
        <Input
          text={"First Name"}
          name={"firstName"}
          isError={true}
          errorMsg={"Type first name"}
          placeholder={"First Name"}
          type={"text"}
          handleInput={handleInput}
        />
        <Input
          text={"Last Name"}
          name={"lastName"}
          isError={true}
          errorMsg={"Type last name"}
          placeholder={"Last Name"}
          type={"text"}
          handleInput={handleInput}
        />
        <Input
          text={"Username"}
          name={"userName"}
          isError={true}
          errorMsg={"Type username"}
          placeholder={"Username"}
          type={"text"}
          handleInput={handleInput}
        />
      </div>
    </div>
  );
};
