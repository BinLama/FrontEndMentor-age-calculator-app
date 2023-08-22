import { useEffect, useState } from "react";
import { useAgeContext } from "../AgeCalculator";
import "./displayInputs.css";
import SingleValueDisplay from "./SingleValueDisplay";

const DisplayInputs = () => {
    const { age } = useAgeContext();

    return (
        <div className="age__container">
            {age.map((val) => {
                return <SingleValueDisplay key={val.label} {...val} />;
            })}
        </div>
    );
};
export default DisplayInputs;
