import DisplayInputs from "./displayInputs/DisplayInputs";
import Inputs from "./inputs/Inputs";

const AgeCalculator = () => {
    return (
        <div className="section__center age-calculator">
            <Inputs />
            <DisplayInputs />
        </div>
    );
};
export default AgeCalculator;
