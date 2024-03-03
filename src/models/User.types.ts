
export type UserDetails = null | {
    role: string;
    email: string;
    jobApplied: number[];
    jobsPosted: number[];
};

export type DummyUsersLocalStorage = null | {
    [key: string]: UserDetails;
};