import "./input.css";
import { inputs } from "../../data";
import SingleInput from "./SingleInput";
import downArrow from "../../assets/images/index";
import { checkErrors, calculateAge } from "./utility";
import { useAgeContext } from "../AgeCalculator";

const Inputs = () => {
    const { setError, data, setAge } = useAgeContext();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setError((currError) => {
            const newError = checkErrors(currError, data);

            // calcualte age
            setAge((_) => {
                return calculateAge(data, newError);
            });

            return newError;
        });
    };

    return (
        <section>
            <form className="form__container" onSubmit={handleOnSubmit}>
                <div className="input__container">
                    {inputs.map((input) => {
                        return <SingleInput key={input.id} {...input} />;
                    })}
                </div>
                <div className="input__submit">
                    <hr className="input__seperation" />
                    <div className="btn">
                        <button className="btn__submit" type="submit">
                            <img src={downArrow} alt="submit button" />
                        </button>
                    </div>
                </div>
            </form>
        </section>
    );
};
export default Inputs;
