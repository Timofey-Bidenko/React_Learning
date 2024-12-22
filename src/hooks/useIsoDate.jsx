import { useEffect, useState } from "react";

function useIsoDate(isoDateString) {
  const [date, setDate] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const clientTimezoneOffsetMinutes = new Date().getTimezoneOffset();

  function getTargetOffset(isoDate) {
    const offsetMatch = isoDate.match(/([+-]\d{2}:\d{2}|Z)$/);
    if (!offsetMatch) return 0; // If no offset is found, assume UTC (0 offset)
    const offset = offsetMatch[1];
    if (offset === "Z") return 0; // Z means UTC, so offset is 0    
    // Parse offset like "+hh:mm" or "-hh:mm"
    const [hours, minutes] = offset.split(/[:+-]/).slice(1).map(Number);
    // Adjust sign based on whether it's "+" or "-"
    return (hours * 60 + minutes) * (offset.startsWith("+") ? -1 : 1);
    // const totalMinutes = hours * 60 + minutes;
    // return offset.startsWith("+") ? -totalMinutes : totalMinutes;
  }

  function adjustForTimezone(isoDate) {
    const originalDate = new Date(isoDate);
    const offsetDifference = getTargetOffset(isoDate) - clientTimezoneOffsetMinutes;
    return new Date(originalDate.getTime() + offsetDifference * 60 * 1000);
  }

  useEffect(() => {
    if (!isoDateString) {
      setError("Invalid ISO date string");
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    try {
      // Convert to a Date object AND adjust for timezone
      const adjustedDate = adjustForTimezone(isoDateString);

      // Extract values
      const options = { month: "short" }; // Get the first 3 letters of the month
      const month = adjustedDate.toLocaleString("en-US", options);
      const day = adjustedDate.getUTCDate();
      let hours = adjustedDate.getUTCHours();
      const minutes = adjustedDate.getUTCMinutes().toString().padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12; // Convert to 12-hour format

      // Format the result
      const formattedTime = `${month} ${day}, ${hours}:${minutes} ${ampm}`;
      setDate(formattedTime);
    } catch ({ message }) {
      console.log(message);
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, [isoDateString]);

  return [date, error, isLoading];
}

export default useIsoDate;
