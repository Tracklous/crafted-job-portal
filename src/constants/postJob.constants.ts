export const POST_A_JOB_FIELDS = {
    title: "",
    companyName: "",
    location: "",
    minSalary: "",
    maxSalary: "",
    jobType: [{ name: "", label: "", value: "" },],
    salaryType: [{ name: "", label: "", value: "" },],
    workExperience: [{ name: "", label: "", value: "" },],
    country: "",
    postingDate: "",
    skillSet: [{ name: "", label: "", value: "" }],
    companyLogo: "",
    description: "",
};

export type PostAJobFields = typeof POST_A_JOB_FIELDS;
export type PostAJobFieldsKeys = keyof typeof POST_A_JOB_FIELDS;