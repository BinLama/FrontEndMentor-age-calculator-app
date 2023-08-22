import { useAgeContext } from "../AgeCalculator";
import "./SingleInput.css";

const SingleInput = ({ type, name, placeholder, label }) => {
    const { data, setData, error } = useAgeContext();
    return (
        <div className="input">
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                id={name}
                onChange={(e) => {
                    setData({ ...data, [name]: e.target.value });
                }}
                value={data[name]}
                placeholder={placeholder}
                className={error[name].isError ? "error" : ""}
            />
            {error[name].isError && (
                <span className="input__error">{error[name].text}</span>
            )}
        </div>
    );
};
export default SingleInput;
