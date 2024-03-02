import { FilterOptions } from "../constants/filters.constants";
import { JobDetailsType } from "../models/Jobs.types";
import { isDateWithinTimeFrame } from "./date.utils";

export const applyJobFilter = (jobsList: null | JobDetailsType[], newFilters: FilterOptions, searchQueries: string[] = []) => {
    if (jobsList === null) return []
    const filteredJobs = jobsList?.filter((job) => {
        if (newFilters.country) {
            if (job.country !== newFilters.country) {
                return false;
            }
        }

        if (newFilters.salaryRange) {
            if (job?.maxSalary > Number(newFilters.salaryRange)) {
                return false;
            }
        }

        if (newFilters.salaryType) {
            if (job?.salaryType !== newFilters.salaryType) {
                return false;
            }
        }

        if (newFilters.postingDate) {
            if (!isDateWithinTimeFrame(job.postedDate, newFilters.postingDate)) {
                return false;
            }
        }

        if (newFilters.workExperience) {
            // There is a bug in this filter.
            if (job.workExperience !== newFilters.workExperience) {
                return false;
            }
        }

        if (newFilters.jobType) {
            if (job.jobType !== newFilters.jobType) {
                return false;
            }
        }

        if (searchQueries.some((query) => query.length > 0)) {
            const titleMatch = job.title.includes(searchQueries[0]);
            const locationMatch = job.location.includes(searchQueries[1]);
            debugger
            if (!titleMatch || !locationMatch) { return false }
        }

        return true;
    });

    return filteredJobs;
};