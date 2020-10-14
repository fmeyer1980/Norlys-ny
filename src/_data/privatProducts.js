const fetch = require('node-fetch');

const key = process.env.TAEKSHAPE_API_KEY;
const projectId = process.env.TAEKSHAPE_PROJECT_ID;

const endponit = `https://api.takeshape.io/project/${projectId}/graphql`;

module.exports = async () => {
    const getPrivatProductsList = await fetch(endponit, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${key}`,
        },
        body: JSON.stringify({
            query: `
            {
                getPrivatProductsList{
                    items{
                        title
                    }
                  
                }
              }
      `,
        }),
    });
    const response = await getPrivatProductsList.json();

    return response.data.getPrivatProductsList.items;
};
