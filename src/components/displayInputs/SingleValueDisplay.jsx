import { useState, useEffect } from "react";

const SingleValueDisplay = (props) => {
    const { label, value } = props;

    const [age, setAge] = useState("0");
    console.log(value);
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
        <p className="age__display" key={label}>
            <span className="age__display-value">{age} </span>
            {label}
        </p>
    );
};
export default SingleValueDisplay;
