# Job Portal

This application provides various features to enhance user experience, including filtering options for refining job searches and facilitating easy navigation through the available listings. Users can utilize these features to streamline their job search process, enabling them to find relevant opportunities more efficiently. Additionally, the platform offers advanced search functionalities, allowing users to customize their search criteria and locate specific job postings tailored to their preferences and skills.

## Features Highlights:

#### User Authentication:

- **Login with Dummy Credentials:** Users can log in using dummy credentials for testing purposes.
- **Persona-Based Page Access:** Pages are tailored to the user's persona; for example, freelancers will see job listings, while employers will see job posting pages.
- **Logout Functionality:** Users can securely log out of their accounts when needed.
- **Public/Private Routes:** Implementation of public routes accessible to all users and private routes restricted to authenticated users.
- **Role based Page Access:** Currently, the functionality to restrict page access based on user roles is pending implementation. It is not implemented yet.

#### User Profile Section:

- **User Details:** View details of the logged-in user.
- **GitHub Username Display:** If linked, display the GitHub username on the profile page.
- **GitHub Integration:** Showcase work repositories directly on the profile page by linking your GitHub account. Additionally, utilize pagination for better organization and navigation.

#### Freelancer Features:

- **Job Listings:** Browse through a comprehensive list of available jobs.
- **Pagination:** Navigate seamlessly through multiple pages of job listings.
- **Job Filters:** Easily refine job searches based on criteria such as county, salary, and experience.
- **Application Management:** Keep track of applied jobs conveniently in one place.
- **Quick Apply:** Streamline the application process by applying to jobs with just a few clicks.

#### Employer Features:

- **Job Posting:** Easily post a job by filling out a form to collect essential details such as job type, location, salary, and required skills.
- **Basic Form Validation:** Ensure data accuracy and completeness with built-in form validation.
- **View Posted Jobs:** Access and review posted job listings *(currently under development)*.
- **Applicant Counts:** Track the number of applicants for each job posting *(currently under development).*

## Tech Stack Used:

- **Typescript**
- **React.js**
- **React Router v6**
- **Styled Components**
- **React Testing Library**
- **Axios**
- **Mock Service Worker**

## Run Application:

- **Clone the repository**
- **Run npm install to install required dependencies**
- **Finally, `run npm dev` to run the application and open the browser to view the site on localhost.**

## Live Demo

View the live demo of the application here 👉 [Job Portal](https://crafted-job-portal.vercel.app). *( 😕 Bug with vercel deployment. Theme is not loading correctly)*

### Demo Credentials:


| Email         | Password   | Persona    |
| --------------- | ------------ | ------------ |
| ankit@abc.com | ankit@1234 | Freelancer |
| ria@abc.com   | ria@1234   | Freelancer |
| kirti@abc.com | kirti@1234 | Employer   |
| amit@abc.com  | amit@1234  | Employer   |
