import dashboardData from "../data/dashboard.json";
import detailsData from "../data/details.json";

export function useMockData<T>(filePath: string): T | null {
  switch (filePath) {
    case "dashboard.json":
      return dashboardData as T;
    case "details.json":
      return detailsData as T;
    default:
      console.error("Unknown mock data file:", filePath);
      return null;
  }
}
