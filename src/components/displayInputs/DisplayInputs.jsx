import { useAgeContext } from "../AgeCalculator";
import "./displayInputs.css";
import SingleValueDisplay from "./SingleValueDisplay";

const DisplayInputs = () => {
    const { age } = useAgeContext();

    return (
        <section className="age__container">
            {age.map((val) => {
                return <SingleValueDisplay key={val.label} {...val} />;
            })}
        </section>
    );
};
export default DisplayInputs;
