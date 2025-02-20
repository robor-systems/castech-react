import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: "ma48d4bd", 
  dataset: "production",
  useCdn: true,
  apiVersion: '2024-02-14',
});
