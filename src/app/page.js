"use client";
import { Header, Footer } from "../components/layers";
import { NameStep, NextStep, LastStep } from "../components/steps";
import { useState } from "react";

export default function Home() {
  const [stepCount, setStepCount] = useState(0);

  const handleNextStep = (event) => {
    event.preventDefault();

    if (stepCount >= 2) {
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

  // const handleInputChange = (event) => {};

  const CurrentStep = [NameStep, NextStep, LastStep][stepCount];

  //const [inputValues, setInputValues] = useState

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="w-[480px] h-[655px] shadow-xl flex flex-col items-center justify-between rounded-xl py-8 px-8">
        <div className="w-[416px]  flex flex-col gap-5">
          <Header></Header>
          <CurrentStep />
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
