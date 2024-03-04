export const PAGINATION_PAGE_SIZE = 6;
export const JOBS_PATH_LOCAL_STORAGE = 'jobsList';
export const USER_PATH_LOCAL_STORAGE = 'users';
export const LOGGED_USER_PATH_SESSION_STORAGE = 'userSession';
export const employerLinks = [
    { label: "Post Job", path: "/hire" },
    { label: "Posted", path: "hire/posted-jobs" },
    { label: "Profile", path: "Profile" },
];
export const jobSeekerLinks = [
    { label: "Jobs", path: "/jobs" },
    { label: "Applied Jobs", path: "jobs/applied-jobs" },
    { label: "Profile", path: "Profile" },
];

export function getNavLinks(persona: "employer" | "freelancer" | undefined) {
    if (persona === undefined) return [];

    if (persona == "employer") return employerLinks;
    else return jobSeekerLinks;
}