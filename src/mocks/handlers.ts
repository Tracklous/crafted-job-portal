import { HttpResponse, delay, http } from 'msw';

const jobs = [
    {
        job: "Sr. software Engineer",
        salary: '120000'
    }
]

export const handlers = [
    // Mock GET request example
    http.get('/api/jobs', async () => {
        await delay(4000);

        // return HttpResponse.error();
        return HttpResponse.json(jobs)
    }),
    // Add more request handlers as needed
];