export const daysinMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
};

export const validate = (setError, data) => {
    setError((currError) => {
        let newError = { ...currError };

        // validate day
        if (data["day"] === "") {
            console.log("day is empty!");
            newError = {
                ...newError,
                day: {
                    isError: true,
                    type: "empty text",
                    text: "this field is required",
                },
            };
        } else if (parseInt(data["day"]) < 1 || parseInt(data["day"]) > 31) {
            console.log("1 < day < 31");
            newError = {
                ...newError,
                day: {
                    isError: true,
                    type: "number out of bound",
                    text: "must be a valid day",
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
                    text: "this field is required",
                },
            };
        } else if (
            parseInt(data["month"]) < 1 ||
            parseInt(data["month"]) > 12
        ) {
            console.log("1 < month < 12");
            newError = {
                ...newError,
                month: {
                    isError: true,
                    type: "number out of bound",
                    text: "must be a valid day",
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
                    text: "this field is required",
                },
            };
        } else if (parseInt(data["year"]) > thisYear) {
            console.log("year is greater than this year!");
            newError = {
                ...newError,
                year: {
                    isError: true,
                    type: "future year",
                    text: "must be in the past",
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
                    day: {
                        isError: true,
                        type: "not a valid date",
                        text: "must be a valid date",
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
                    day: {
                        isError: true,
                        type: "future date",
                        text: "must be a valid date",
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
        }

        return newError;
    });
};
