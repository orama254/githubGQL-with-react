// create a db.js example and add the following inside the file...removed from version control 

const github = {
    baseUrl: "https://api.github.com/graphql",
    username: "<YOUR GITHUB USERNAME HERE>",
    headers: {
        "Content-Type": "application/json",
        Authorization: "bearer <YOUR ACCESS TOKEN HERE>",
    },
};

export default github;