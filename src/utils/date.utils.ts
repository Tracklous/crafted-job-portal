import { datePostingType } from "../constants/filters.constants";

function isWithinLast24Hours(date: string) {
    const twentyFourHoursAgo = new Date();
    twentyFourHoursAgo.setHours(twentyFourHoursAgo.getHours() - 24);
    return new Date(date) > twentyFourHoursAgo;
};

function isWithinLast7Days(date: string) {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    return new Date(date) > sevenDaysAgo;
};

function isWithinLastMonth(date: string) {
    const lastMonth = new Date();
    lastMonth.setMonth(lastMonth.getMonth() - 1);
    return new Date(date) > lastMonth;
};

export function isDateWithinTimeFrame(date: string, timeFrame: string) {
    const frames = timeFrame as datePostingType;

    switch (frames) {
        case 'All Time':
            return true; // Always true
        case 'Last 24 hours':
            return isWithinLast24Hours(date);
        case 'Last 7 days':
            return isWithinLast7Days(date);
        case 'Last month':
            return isWithinLastMonth(date);
        default:
            return false; // Invalid time frame
    }
}

