import { HttpResponse, delay, http } from 'msw';
import { jobList } from './jobList.demoData';
import { dummyUserCredentials, dummyUserDetails } from './user.demoData';
import { USER_PATH_LOCAL_STORAGE, LOGGED_USER_PATH_SESSION_STORAGE, JOBS_PATH_LOCAL_STORAGE } from '../constants/App.config';
import { JobDetailsType } from '../models/Jobs.types';
import { DummyUsersLocalStorage, UserDetails } from '../models/User.types';


const dummyUsers = JSON.parse(localStorage.getItem(USER_PATH_LOCAL_STORAGE) || 'null');
// To initialize the data.
if (dummyUsers == null) {
    console.log(">>>", "Initialed local storage with demo users details");
    localStorage.setItem(USER_PATH_LOCAL_STORAGE, JSON.stringify(dummyUserDetails));
};

export const handlers = [
    http.post('/api/login', async ({ request }) => {
        await delay(2000);
        // Read the intercepted request body as JSON.
        const { username, password } = await request.json() as { username: 'string', password: string };
        console.log(">>> In login api", username, password);
        // Simulate successful login
        // Performing basic authentication logic.
        if (dummyUserCredentials[username] && dummyUserCredentials[username] === password) {
            const userDetails = JSON.parse(localStorage.getItem(USER_PATH_LOCAL_STORAGE) || "");
            sessionStorage.setItem(LOGGED_USER_PATH_SESSION_STORAGE, JSON.stringify(userDetails[username]));
            return HttpResponse.json({
                message: 'loginSuccessful', userDetails: userDetails[username]
            }, { status: 200 });
        } else {
            // Simulate failed login
            return HttpResponse.error();
        };
    }),
    // Mock /api/jobs GET request
    http.get('/api/jobs', async () => {
        await delay(1000);
        let storedJobs = localStorage.getItem(JOBS_PATH_LOCAL_STORAGE) || '';
        // To initialize the data.
        if (storedJobs.length === 0) {
            console.log(">>>", "Initialed local storage with demo jobs");
            localStorage.setItem(JOBS_PATH_LOCAL_STORAGE, JSON.stringify(jobList));
            storedJobs = JSON.stringify(jobList);
        };
        return HttpResponse.json(storedJobs, { status: 200 })
    }),
    // Mock /api/apply-job POST request
    http.post('/api/apply-job', async ({ request }) => {
        await delay(1000);
        // Read the intercepted request body as JSON.
        const { jobId } = await request.json() as { jobId: number };
        const storedJobs = JSON.parse(localStorage.getItem(JOBS_PATH_LOCAL_STORAGE) || '');
        const indexOfJob = storedJobs.findIndex(({ id }: JobDetailsType) => id === jobId);

        if (indexOfJob !== -1 && jobId) {
            let storedUsers = JSON.parse(localStorage.getItem(USER_PATH_LOCAL_STORAGE) || '') as DummyUsersLocalStorage;
            let currentSession = JSON.parse(sessionStorage.getItem(LOGGED_USER_PATH_SESSION_STORAGE) || '') as UserDetails;

            if (storedUsers && currentSession) {
                storedUsers[currentSession.email]?.jobApplied.push(jobId);
                currentSession.jobApplied.push(jobId);

                localStorage.setItem(USER_PATH_LOCAL_STORAGE, JSON.stringify(storedUsers));
                sessionStorage.setItem(LOGGED_USER_PATH_SESSION_STORAGE, JSON.stringify(currentSession));
            };

            return HttpResponse.json({ message: `Successfully applied for jobId:${jobId}` }, { status: 200 })
        }
        return HttpResponse.error();
    }),
    //  Mock /api/post-job GET request
    http.post('/api/post-job', async ({ request }) => {
        await delay(1000);
        // Read the intercepted request body as JSON.
        const newPost = await request.json();
        const storedJobs = JSON.parse(localStorage.getItem(JOBS_PATH_LOCAL_STORAGE) || '');
        const updatedJobList = JSON.stringify([...storedJobs, newPost]);
        localStorage.setItem(JOBS_PATH_LOCAL_STORAGE, updatedJobList)
        return HttpResponse.json(updatedJobList, { status: 200 })
    }),
];