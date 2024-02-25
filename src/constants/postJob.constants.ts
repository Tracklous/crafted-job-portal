export const POST_A_JOB_FIELDS = {
    title: "",
    companyName: "",
    location: "",
    minSalary: "",
    maxSalary: "",
    jobType: [],
    salaryType: [],
    workExperience: [],
    country: "",
    postingDate: "",
    skillSet: [],
    companyLogo: "",
    description: "",
};

export type PostAJobFields = typeof POST_A_JOB_FIELDS;
export type PostAJobFieldsKeys = keyof typeof POST_A_JOB_FIELDS;