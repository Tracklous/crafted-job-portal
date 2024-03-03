import { DummyUsersLocalStorage } from "../models/User.types";

export const dummyUserCredentials: Partial<{ [k: string]: string }> = {
    ankit: 'ankit@1234',
    "ankit@abc.com": 'ankit@1234',
    amit: 'amit@1234',
    "amit@abc.com": 'amit@1234',
    ria: 'rohit@1234',
    "ria@abc.com": 'rohit@1234',
    kirti: 'kirti@1234',
    "kirti@abc.com": 'kirti@1234',
};


export const dummyUserDetails: DummyUsersLocalStorage = {
    "ankit": {
        role: 'freelancer',
        email: 'ankit@abc.com',
        jobApplied: [],
        jobsPosted: [],
    },
    "ankit@abc.com": {
        role: 'freelancer',
        email: 'ankit@abc.com',
        jobApplied: [],
        jobsPosted: [],
    },
    "amit": {
        role: "employer",
        email: "amit@abc.com",
        jobApplied: [],
        jobsPosted: []
    },
    "amit@abc.com": {
        role: "employer",
        email: "amit@abc.com",
        jobApplied: [],
        jobsPosted: []
    },
    "ria": {
        role: 'freelancer',
        email: 'ria@abc.com',
        jobApplied: [],
        jobsPosted: [],
    },
    "ria@abc.com": {
        role: 'freelancer',
        email: 'ria@abc.com',
        jobApplied: [],
        jobsPosted: [],
    },
    "kirti": {
        role: "employer",
        email: "kirti@abc.com",
        jobApplied: [],
        jobsPosted: []
    },
    "kirti@abc.com": {
        role: "employer",
        email: "kirti@abc.com",
        jobApplied: [],
        jobsPosted: []
    }
};