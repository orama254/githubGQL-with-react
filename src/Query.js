const githubQuery = {
    query: `
    {
      viewer {
        name
      }
      search(query: "user:orama254 sort:updated-desc", type: REPOSITORY, first: 20) {
        nodes {
          ... on Repository {
            name
            description
            id
            url
          }
        }
      }
    }
    `
    ,
  };

  export default githubQuery