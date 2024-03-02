import { HttpResponse, delay, http } from 'msw';
import { jobList } from './jobList.demoData';
import { dummyUserCredentials, dummyUserDetails } from './user.demoData';
const JOBS_PATH_LOCAL_STORAGE = 'jobsList';
const USER_PATH_LOCAL_STORAGE = 'users';
const LOGGED_USER_PATH_SESSION_STORAGE = 'userSession';


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
        console.log(">>> In login", username, password);
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
        await delay(3000);
        const storedJobs = localStorage.getItem(JOBS_PATH_LOCAL_STORAGE) || '';
        // To initialize the data.
        if (storedJobs.length === 0) {
            console.log(">>>", "Initialed local storage with demo jobs");
            localStorage.setItem(JOBS_PATH_LOCAL_STORAGE, JSON.stringify(jobList));
        };
        return HttpResponse.json(storedJobs, { status: 200 })
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