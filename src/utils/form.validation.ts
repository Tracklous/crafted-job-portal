import { PostAJobFields, PostAJobFieldsKeys } from "../constants/postJob.constants";

export const getErrorMsg = (key: PostAJobFieldsKeys, errors: Partial<{ [key in PostAJobFieldsKeys]: string }>[]) => {
    if (errors.find(err => err.hasOwnProperty(key) !== undefined)) {
        const errorObj = errors.find(err => err.hasOwnProperty(key))
        return errorObj && errorObj[key]
    }
};

export const validateJobPostFormData = (errData: PostAJobFields, setErrors: (err: Partial<{ [key in PostAJobFieldsKeys]: string }>[]) => void): boolean => {
    const err: Partial<{ [key in PostAJobFieldsKeys]: string }>[] = [];

    if (errData.title.length < 1) {
        err.push({ title: "Job title should not be empty." })
    }
    else if (errData.companyName?.length < 1) {
        err.push({ companyName: "Company name should not be empty." })
    }
    else if (Number(errData.minSalary) < 1) {
        err.push({ minSalary: "Minimum salary should be greater zero." })
    }
    else if (Number(errData.maxSalary) < 1) {
        err.push({ maxSalary: "Maximum salary should be greater zero." })
    }
    else if (errData.location.length < 1) {
        err.push({ location: "Location name should not be empty" })
    }
    else if (errData.postingDate.length < 1) {
        err.push({ postingDate: "Job post data is required." })
    }
    else if (errData.postingDate.length > 1) {
        const dateParts = errData.postingDate.split('-');
        const day = parseInt(dateParts[2], 10);
        const month = parseInt(dateParts[1], 10) - 1; // Month is 0-based in JavaScript
        const year = parseInt(dateParts[0], 10);

        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0); // Set current date's time to midnight
        const selectedDate = new Date(year, month, day);
        if (selectedDate < currentDate) {
            err.push({ postingDate: "You cannot post a job in a past date" })
        } else if (selectedDate > currentDate) {
            err.push({ postingDate: "You cannot post a job for a future date" })
        }
    }

    setErrors(err)
    if (err.length > 0) return false
    else return true
};