import { DummyUsersLocalStorage } from "../models/User.types";

export const dummyUserCredentials: Partial<{ [k: string]: string }> = {
    ankit: 'ankit@1234',
    "ankit@abc.com": 'ankit@1234',
    amit: 'amit@1234',
    "amit@abc.com": 'amit@1234',
    ria: 'ria@1234',
    "ria@abc.com": 'ria@1234',
    kirti: 'kirti@1234',
    "kirti@abc.com": 'kirti@1234',
};

const dummyBio = {
    bio: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
    est minima esse illo incidunt maxime. Reiciendis aliquam cupiditate
    perspiciatis voluptatem autem repellat molestiae, accusantium,
    maxime vitae voluptate voluptates mollitia sunt!`,
    location: "Hyderabad",
    country: "India",
}
const github = {
    isLinked: false,
    username: ""
};

export const dummyUserDetails = {
    "ankit": {
        role: 'freelancer',
        email: 'ankit@abc.com',
        jobApplied: [],
        jobsPosted: [],
        github,
        ...dummyBio,
    },
    "ankit@abc.com": {
        role: 'freelancer',
        email: 'ankit@abc.com',
        jobApplied: [],
        jobsPosted: [],
        github,
        ...dummyBio

    },
    "amit": {
        role: "employer",
        email: "amit@abc.com",
        jobApplied: [],
        jobsPosted: [],
        github,
        ...dummyBio
    },
    "amit@abc.com": {
        role: "employer",
        email: "amit@abc.com",
        jobApplied: [],
        jobsPosted: [],
        github,
        ...dummyBio
    },
    "ria": {
        role: 'freelancer',
        email: 'ria@abc.com',
        jobApplied: [],
        jobsPosted: [],
        github,
        ...dummyBio
    },
    "ria@abc.com": {
        role: 'freelancer',
        email: 'ria@abc.com',
        jobApplied: [],
        jobsPosted: [],
        github,
        ...dummyBio
    },
    "kirti": {
        role: "employer",
        email: "kirti@abc.com",
        jobApplied: [],
        jobsPosted: [],
        github,
        ...dummyBio
    },
    "kirti@abc.com": {
        role: "employer",
        email: "kirti@abc.com",
        jobApplied: [],
        jobsPosted: [],
        github,
        ...dummyBio
    }
} satisfies DummyUsersLocalStorage;