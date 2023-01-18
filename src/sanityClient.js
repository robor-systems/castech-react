import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: process.env.REACT_APP_SANITY_DATASET,
    useCdn: true,
    apiVersion: "2021-03-25",
});
