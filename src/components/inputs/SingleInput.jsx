import "./SingleInput.css";

const SingleInput = ({ type, name, error, data, setData }) => {
    return (
        <div className="input">
            <label htmlFor={name}>{name}</label>
            <input
                type={type}
                id={name}
                onChange={(e) => {
                    setData({ ...data, [name]: e.target.value });
                }}
                value={data[name]}
            />
            {error[name].isError && (
                <span className="input__error">{error[name].text}</span>
            )}
        </div>
    );
};
export default SingleInput;
