export const COUNTRIES = [
    {
        "name": "country",
        "value": "India",
        "label": "India"
    },
    {
        "name": "country",
        "value": "United States",
        "label": "United States"
    },
    {
        "name": "country",
        "value": "United Kingdom",
        "label": "United Kingdom"
    },
    {
        "name": "country",
        "value": "Germany",
        "label": "Germany"
    },
    {
        "name": "country",
        "value": "Canada",
        "label": "Canada"
    },
    {
        "name": "country",
        "value": "Australia",
        "label": "Australia"
    },
    {
        "name": "country",
        "value": "Netherlands",
        "label": "Netherlands"
    },
    {
        "name": "country",
        "value": "Sweden",
        "label": "Sweden"
    },
    {
        "name": "country",
        "value": "France",
        "label": "France"
    },
    {
        "name": "country",
        "value": "Switzerland",
        "label": "Switzerland"
    },
    {
        "name": "country",
        "value": "Singapore",
        "label": "Singapore"
    },
    {
        "name": "country",
        "value": "Japan",
        "label": "Japan"
    },
    {
        "name": "country",
        "value": "Spain",
        "label": "Spain"
    },
    {
        "name": "country",
        "value": "Italy",
        "label": "Italy"
    },
    {
        "name": "country",
        "value": "South Korea",
        "label": "South Korea"
    },
    {
        "name": "country",
        "value": "Brazil",
        "label": "Brazil"
    },
    {
        "name": "country",
        "value": "Mexico",
        "label": "Mexico"
    }
];

export const SALARY_RANGE = [
    { name: 'salaryRange', value: Infinity, label: 'Any' },
    { name: 'salaryRange', value: 5000, label: '< 5k' },
    // { name: 'salaryRange', value: 10000, label: '< 10k' },
    { name: 'salaryRange', value: 100000, label: '< 100k' },
    // { name: 'salaryRange', value: 150000, label: '< 150k' },
    { name: 'salaryRange', value: 200000, label: '< 200k' },
    // { name: 'salaryRange', value: 250000, label: '< 250k' },
    { name: 'salaryRange', value: 300000, label: '< 300k' },
];

export const SALARY_TYPE = [
    // { name: 'salaryType', value: 'Any', label: 'Any' },
    { name: 'salaryType', value: 'Hourly', label: 'Hourly' },
    { name: 'salaryType', value: 'Monthly', label: 'Monthly' },
    { name: 'salaryType', value: 'Yearly', label: 'Yearly' },
];

export const DATE_OF_POSTING = [
    { name: 'postingDate', value: 'All Time', label: 'All Time' },
    { name: 'postingDate', value: 'Last 24 hours', label: 'Last 24 hours' },
    { name: 'postingDate', value: 'Last 7 days', label: 'Last 7 days' },
    { name: 'postingDate', value: 'Last month', label: 'Last month' },
];
export type datePostingType = 'All Time' | 'Last 24 hours' | 'Last 7 days' | 'Last month';

export const WORK_EXPERIENCE = [
    { name: 'workExperience', value: 'Any Experience', label: 'Any Experience' },
    { name: 'workExperience', value: 'Internship', label: 'Internship' },
    { name: 'workExperience', value: 'Work Remotely', label: 'Work Remotely' },
];

export const JOB_TYPE = [
    { name: 'jobType', value: 'Any', label: 'Any' },
    { name: 'jobType', value: 'Full-Time', label: 'Full-Time' },
    { name: 'jobType', value: 'Temporary', label: 'Temporary' },
    { name: 'jobType', value: 'Part-time', label: 'Part-time' },
    { name: 'jobType', value: 'Remote', label: 'Remote' },
];

export const SKILLS_SET = [
    { name: "skillSet", label: "React", value: "React" },
    { name: "skillSet", label: "HTML/CSS", value: "HTML/CSS" },
    { name: "skillSet", label: "JavaScript", value: "JavaScript" },
    { name: "skillSet", label: "Python", value: "Python" },
    { name: "skillSet", label: "Java", value: "Java" },
];

export const filterDefaultState = {
    country: "",
    location: "",
    salaryRange: "",
    salaryType: "",
    postingDate: "",
    workExperience: "",
    jobType: "",
};

export type FilterOptions = typeof filterDefaultState;