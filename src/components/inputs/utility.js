export const daysinMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
};

export const checkErrors = (currError, data) => {
    let newError = { ...currError };

    // validate day
    if (data["day"] === "") {
        console.log("day is empty!");
        newError = {
            ...newError,
            day: {
                isError: true,
                type: "empty text",
                text: "This field is required",
            },
        };
    } else if (parseInt(data["day"]) < 1 || parseInt(data["day"]) > 31) {
        console.log("1 < day < 31");
        newError = {
            ...newError,
            day: {
                isError: true,
                type: "number out of bound",
                text: "Must be a valid day",
            },
        };
    } else {
        console.log("good day");
        newError = {
            ...newError,
            day: { isError: false, type: "", text: "" },
        };
    }

    // validate month
    if (data["month"] === "") {
        console.log("month is empty!");
        newError = {
            ...newError,
            month: {
                isError: true,
                type: "empty text",
                text: "This field is required",
            },
        };
    } else if (parseInt(data["month"]) < 1 || parseInt(data["month"]) > 12) {
        console.log("1 < month < 12");
        newError = {
            ...newError,
            month: {
                isError: true,
                type: "number out of bound",
                text: "Must be a valid month",
            },
        };
    } else {
        console.log("good month");
        newError = {
            ...newError,
            month: { isError: false, type: "", text: "" },
        };
    }

    // validate year
    const thisYear = new Date().getFullYear();

    if (data["year"] === "") {
        console.log("year is empty!");
        newError = {
            ...newError,
            year: {
                isError: true,
                type: "empty text",
                text: "This field is required",
            },
        };
    } else if (parseInt(data["year"]) > thisYear) {
        console.log("year is greater than this year!");
        newError = {
            ...newError,
            year: {
                isError: true,
                type: "future year",
                text: "Must be in the past",
            },
        };
    } else {
        console.log("Good year");
        newError = {
            ...newError,
            year: {
                isError: false,
                type: "",
                text: "",
            },
        };
    }

    // validate date
    if (
        !newError.day.isError &&
        !newError.month.isError &&
        !newError.year.isError
    ) {
        const days = daysinMonth(
            parseInt(data["month"]),
            parseInt(data["year"])
        );

        console.log("got here");
        if (parseInt(data["day"]) > days) {
            newError = {
                error: true,

                day: {
                    isError: true,
                    type: "not a valid date",
                    text: "Must be a valid date",
                },
                month: {
                    isError: true,
                    type: "not a valid date",
                    text: "",
                },
                year: {
                    isError: true,
                    type: "not a valid date",
                    text: "",
                },
            };

            return newError;
        }

        const day = new Date().getDate(),
            month = new Date().getMonth(),
            year = new Date().getFullYear();

        if (
            parseInt(data["day"]) > day &&
            parseInt(data["month"]) > month &&
            parseInt(data["year"]) >= year
        ) {
            newError = {
                error: true,
                day: {
                    isError: true,
                    type: "future date",
                    text: "Date must be in the present",
                },
                month: {
                    isError: true,
                    type: "future date",
                    text: "",
                },
                year: {
                    isError: true,
                    type: "future date",
                    text: "",
                },
            };
            return newError;
        }

        return { ...newError, error: false };
    }

    return { ...newError, error: true };
};

export const calculateAge = (data, error) => {
    if (error.error) {
        return [
            { label: "years", value: "--" },
            { label: "months", value: "--" },
            { label: "days", value: "--" },
        ];
    }

    // https://stackoverflow.com/questions/7833709/calculating-age-in-months-and-days

    const now = new Date();
    const yearNow = now.getFullYear(),
        monthNow = now.getMonth(),
        dateNow = now.getDate();

    const birthDate = new Date(data.year, data.month - 1, data.day);

    const yearDob = birthDate.getFullYear(),
        monthDob = birthDate.getMonth(),
        dateDob = birthDate.getDate();

    let yearAge = yearNow - yearDob,
        monthAge = monthNow - monthDob,
        dateAge = dateNow - dateDob;

    if (monthAge < 0 || (monthAge === 0 && dateAge < 0)) yearAge--;

    if (dateAge < 0) {
        birthDate.setMonth(monthDob, 0);
        dateAge = birthDate.getDate() - dateDob + dateNow;
        --monthAge;
    }

    if (monthAge < 0) monthAge += 12;

    let age = [
        { label: "years", value: yearAge },
        { label: "months", value: monthAge },
        { label: "days", value: dateAge },
    ];

    if (dateAge <= 1) {
        age[2].label = "day";
    }

    if (monthAge <= 1) {
        age[1].label = "month";
    }

    if (yearAge <= 1) {
        age[0].label = "year";
    }

    return age;
};
