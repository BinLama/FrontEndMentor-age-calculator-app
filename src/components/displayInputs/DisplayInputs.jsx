import { useAgeContext } from "../AgeCalculator";
import "./displayInputs.css";

const DisplayInputs = () => {
    const { age } = useAgeContext();

    return (
        <div>
            {age.map((val) => {
                return (
                    <p className="age__display" key={val.label}>
                        <span className="age_display-value">{val.value} </span>
                        {val.label}
                    </p>
                );
            })}
        </div>
    );
};
export default DisplayInputs;
