// Simple date formatting utility to replace date-fns
export function format(date: Date, formatStr: string): string {
  const options: Intl.DateTimeFormatOptions = {};
  
  if (formatStr === "PPP") {
    // Full date format like "January 1, 2024"
    options.year = 'numeric';
    options.month = 'long';
    options.day = 'numeric';
  }
  
  return new Intl.DateTimeFormat('en-US', options).format(date);
}