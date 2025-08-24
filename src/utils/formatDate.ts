export function formatTimestamp(date: Date): string {
  const now = new Date();
  const timestamp = new Date(date);
  
  // If the date is today, show only time
  if (timestamp.toDateString() === now.toDateString()) {
    return timestamp.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  }
  
  // If the date is within the last 7 days, show the day name
  const diffTime = Math.abs(now.getTime() - timestamp.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays <= 7) {
    return timestamp.toLocaleDateString('en-US', { weekday: 'long' });
  }
  
  // Otherwise show the full date
  return timestamp.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: timestamp.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
  });
}