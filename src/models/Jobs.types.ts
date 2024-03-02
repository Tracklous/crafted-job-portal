export type JobDetailsType = {
    id: number | string;
    title: string;
    company: string;
    jobType: "Any" | "Full-Time" | "Temporary" | "Part-time" | "Remote" | string; // Temporarily added type string.
    salaryType: "hourly" | "monthly" | "yearly" | string; // Temporarily added type string.
    workExperience: string;
    country: string;
    location: string;
    minSalary: number;
    maxSalary: number;
    description: string;
    skillSet: string[];
    postedDate: string; // ['2024-01-06', '2024-02-19', '2024-02-12', '2024-02-17', '2024-01-16', '2024-02-21', '2024-02-18', '2024-02-21', '2024-01-20', '2024-02-13']
    companyLogo?: string;
    dateOfPosting?: string;
};