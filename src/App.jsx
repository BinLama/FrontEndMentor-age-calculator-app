import { useState } from "react";
import "./App.css";

import AgeCalculator from "./components/AgeCalculator";

/*
Day
DD

Month
MM

Year
YYYY

-- years
-- months
-- days 

*/
function App() {
    return (
        <>
            <AgeCalculator />
        </>
    );
}

export default App;
