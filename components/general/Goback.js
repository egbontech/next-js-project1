import React from "react";
import { useRouter } from "next/router";
import { HiArrowLeft } from "react-icons/Hi";

const Goback = () => {
  const router = useRouter();

  const goback = () => {
    router.back();
  };

  return (
    <div>
      <button onClick={goback}>
      <HiArrowLeft className="i"/>
      </button>
    </div>
  );
};

export default Goback;
