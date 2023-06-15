import { format } from 'date-fns';

export const formatDate = (date: Date | string): string => {
    return format(new Date(date), 'MMM. yyyy');
}

export const formatTimeRemaining = (milliseconds: number): string => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const days = Math.floor(totalSeconds / 86400); // 86400 seconds in a day
    const hours = Math.floor((totalSeconds % 86400) / 3600); // 3600 seconds in an hour
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
};