import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Entrepreneur",
          "Institution Builder",
          "Computer Science Engineer",
          "Learner",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 1,
      }}
    />
  );
}

export default Type;