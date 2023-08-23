import { useState, useEffect } from "react";

const SingleValueDisplay = (props) => {
    const { label, value } = props;

    const [age, setAge] = useState("0");

    useEffect(() => {
        let start = 0;
        if (value === "--") return setAge("--");

        const end = parseInt(value);

        if (start === end) return setAge("0");

        // find duration per increment
        let totalMilSecDur = 2;
        let incrementTime = (totalMilSecDur / end) * 1000;

        console.log("got to interval", end);
        let timer = setInterval(() => {
            start += 1;
            setAge(String(start));
            if (start === end) clearInterval(timer);
        }, incrementTime);
    }, [value]);

    return (
        <h1 className="age__display" key={label}>
            <span className="age__display-value">{age} </span>
            {label}
        </h1>
    );
};
export default SingleValueDisplay;
