import { format } from "date-fns";

export function formatDate(date: Date): string {
    return format(new Date(date), "MMMM do, yyyy HH:mm") ?? "Date not available";
}

export function formatYear(date: Date): string {
    return format(new Date(date), "yyyy") ?? "Date not available";
}

export const slugify = (str: string) => {
    return str.toLowerCase().trim().replace(/[\s\W-]+/g, "-").replace(/^-+|-+$/g, "");
}