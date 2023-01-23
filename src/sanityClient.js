import sanityClient from "@sanity/client";

let sanityClientInstance = {
    false_instance: true,
    fetch: async () => {
        return [];
    }
};

export default (() => {
    if (!sanityClientInstance.false_instance) {
        return sanityClientInstance;
    }

    try {

        sanityClientInstance = sanityClient({
            projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
            dataset: process.env.REACT_APP_SANITY_DATASET,
            useCdn: true,
            apiVersion: '2021-03-25',
        });
    } catch (error) {
        if (process.env.NODE_ENV === 'development') {
            console.error(error);
        }
    }

    return sanityClientInstance;
})()
