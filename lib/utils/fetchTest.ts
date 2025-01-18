export const fetchTest = async () => {
    const response = await fetch(
      "https://graphql.contentful.com/content/v1/spaces/w5hr8ul3sv67/environments/master",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer RMPCkZYfSPQZbYigLfmc_dH8CNPtNrbJmyZOCJKMDME`, // Replace with your actual token
        },
        body: JSON.stringify({
          query: `
            query {
              blogPostCollection(limit: 2) {
                items {
                  title
                  slug
                }
              }
            }
          `,
        }),
      }
    );
  
    const data = await response.json();
  
    if (!response.ok) {
      console.error("Error:", data.errors || response.statusText);
      return null;
    }
  
    return data;
  };
  