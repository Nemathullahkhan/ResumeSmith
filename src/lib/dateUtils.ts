import { format } from "date-fns";

export function formatDate(dateString: string): string {
  if (!dateString) return "";
  const date = new Date(dateString);
  return format(date, "MMM-yyyy"); // Example: "May-2020"
}
