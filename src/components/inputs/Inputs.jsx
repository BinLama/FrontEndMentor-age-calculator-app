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
        <section className="form__container">
            <form className="form" onSubmit={handleOnSubmit}>
                <div className="input__container">
                    {inputs.map((input) => {
                        return <SingleInput key={input.id} {...input} />;
                    })}
                </div>
                <div className="input__submit">
                    <hr className="input__seperation" />
                    <button className="btn__submit btn" type="submit">
                        <img src={downArrow} alt="submit button" />
                    </button>
                </div>
            </form>
        </section>
    );
};
export default Inputs;
