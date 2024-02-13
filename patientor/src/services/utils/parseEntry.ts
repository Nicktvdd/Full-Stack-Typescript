import { Entry } from '../../types/Patient';

function checkRequiredFields(entries: Entry[]): boolean {
  for (const entry of entries) {
    const requiredFields = getRequiredFields(entry.type);
    if (!requiredFields.every(field => entry.fields.includes(field))) {
      return false;
    }
  }
  return true;
}

function getRequiredFields(entry: string): string[] {
  // Replace this with more logic to retrieve the required fields for each type
  switch (entry) {
	case "Hospital":
		return ["discharge.date", "discharge.criteria"];
	case "OccupationalHealthcare":
		return ["employerName", "sickLeave.startDate", "sickLeave.endDate"];
	case "HealthCheck":
		return ["healthCheckRating"];
	default:
		return [];
}
};

export default checkRequiredFields;
