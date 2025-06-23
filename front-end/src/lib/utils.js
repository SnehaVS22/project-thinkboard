// utils.js
export function formatDate(dateStr) {//here it should be dateStr instead of date
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-IN", {//the code doesn't work if we don't have this code
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
