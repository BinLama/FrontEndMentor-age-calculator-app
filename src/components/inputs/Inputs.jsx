import { useState } from "react";
import "./input.css";
import { inputs } from "../../data";
import SingleInput from "./SingleInput";
import downArrow from "../../assets/images/index";
import { daysinMonth, validate } from "./utility";

const Inputs = () => {
    const [error, setError] = useState({
        day: { isError: false, type: "", text: "" },
        month: { isError: false, type: "", text: "" },
        year: { isError: false, type: "", text: "" },
    });
    const [data, setData] = useState({ day: "", month: "", year: "" });

    const handleOnSubmit = (e) => {
        e.preventDefault();
        validate(setError, data);
        console.log("subtmitted");
    };
    return (
        <section>
            <form className="form__container" onSubmit={handleOnSubmit}>
                <div className="input__container">
                    {inputs.map((input) => {
                        return (
                            <SingleInput
                                key={input.id}
                                {...input}
                                error={error}
                                data={data}
                                setData={setData}
                            />
                        );
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
