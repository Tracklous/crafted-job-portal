import { HttpResponse, delay, http } from 'msw';
import { jobList } from './jobList.demoData';

const JOBS_PATH_LOCAL_STORAGE = 'jobsList';
export const handlers = [
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
        // return HttpResponse.error();
    }),
    //  Mock /api/post-job GET request
    http.post('/api/post-job', async ({ request }) => {
        // Read the intercepted request body as JSON.
        const newPost = await request.json();

        await delay(1000);
        const storedJobs = JSON.parse(localStorage.getItem(JOBS_PATH_LOCAL_STORAGE) || '');
        const updatedJobList = JSON.stringify([...storedJobs, newPost]);
        localStorage.setItem(JOBS_PATH_LOCAL_STORAGE, updatedJobList)
        // return HttpResponse.error();
        return HttpResponse.json(updatedJobList, { status: 200 })
    }),
];