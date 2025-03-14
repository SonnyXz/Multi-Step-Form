"use client";
import { Header, Footer } from "../components/layers";
import { NameStep, NextStep, LastStep, FinalStep } from "../components/steps";
import { useState } from "react";
import { initialFormValues } from "../utils/constants";

export default function Home() {
  ////
  const [formValues, setFormValues] = useState(initialFormValues);
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormValues((previousValues) => ({ ...previousValues, [name]: value }));
  };

  ////
  const [stepCount, setStepCount] = useState(0);

  const handleNextStep = (event) => {
    event.preventDefault();

    if (stepCount >= 3) {
      return;
    }
    setStepCount(stepCount + 1);
  };
  const handlePreviousStep = () => {
    if (stepCount < 0) {
      return;
    }
    setStepCount(stepCount - 1);
  };
  const CurrentStep = [NameStep, NextStep, LastStep, FinalStep][stepCount];

  //const [inputValues, setInputValues] = useState

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      {stepCount === 3 && <FinalStep />}
      <div
        className="w-[480px] h-[655px] shadow-xl flex flex-col items-center justify-between rounded-xl py-8 px-8"
        style={{ display: stepCount === 3 ? "none" : "flex" }}
      >
        <div className="w-[416px]  flex flex-col gap-5">
          <Header></Header>
          <CurrentStep handleInput={handleInputChange} />
        </div>
        <Footer
          stepCount={stepCount + 1}
          befHandle={handlePreviousStep}
          aftHandle={handleNextStep}
        />
      </div>
    </div>
  );
}
