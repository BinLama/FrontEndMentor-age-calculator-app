import { useState, useEffect } from "react";

const SingleValueDisplay = ({ label, value }) => {
    const [age, setAge] = useState(null);

    useEffect(() => {
        console.log("value", value);
        setAge((_) => {
            if (value === "--") {
                return null;
            }
            return 0;
        });
    }, [value]);

    useEffect(() => {
        const interval = setTimeout(() => {
            if (age !== null) {
                if (age != parseInt(value)) {
                    setAge((curr) => {
                        return curr + 1;
                    });
                }
            }
        }, 50);

        return () => {
            clearTimeout(interval);
        };
    }, [age]);

    return (
        <p className="age__display" key={label}>
            <span className="age__display-value">{!age ? "--" : age} </span>
            {label}
        </p>
    );
};
export default SingleValueDisplay;
