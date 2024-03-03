
export type UserDetails = null | {
    name: string;
    role: "freelancer" | "employer";
    email: string;
    github: {
        isLinked: boolean;
        username?: string;
    };
    bio: string;
    location: string;
    country: string;
    jobApplied: number[];
    jobsPosted: number[];
};

export type DummyUsersLocalStorage = null | {
    [key: string]: UserDetails;
};