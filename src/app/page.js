"use client";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { NameStep, NextStep, LastStep } from "../components/steps";

import { useState } from "react";

export default function Home() {
  const [button, setButton] = useState(1);

  const handleNext = () => {
    setButton(button + 1);
  };
  const handlePrev = () => {
    setButton(button - 1);
  };

  const [Namestep, setNamestep] = useState(true);
  const [Nextstep, setNextstep] = useState(false);
  const namestepHandler = () => {
    setNamestep(true);
    setNextstep(false);
  };
  const nextstepHandler = () => {
    setNamestep(false);
    setNextstep(true);
  };

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="w-[480px] h-[655px] shadow-xl flex flex-col items-center justify-around rounded-xl">
        <div className="w-[416px] h-[385px flex flex-col gap-5">
          <Header></Header>
          <NameStep></NameStep>
          <Footer
            alhamCount={button}
            befHandle={handlePrev}
            aftHandle={handleNext}
          />
        </div>
      </div>
    </div>
  );
}
