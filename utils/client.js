/** @format */

import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "azzoa0uc",
  dataset: "production",
  apiVersion: "2021-08-31",
  useCdn: true,
});
