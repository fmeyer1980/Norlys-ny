const fetch = require('node-fetch');

const key = process.env.TAEKSHAPE_API_KEY;
const projectId = process.env.TAEKSHAPE_PROJECT_ID;

const endponit = `https://api.takeshape.io/project/${projectId}/graphql`;

module.exports = async () => {
  const getPrivat = await fetch(endponit, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify({
      query: `
            {
                getPrivat{
                  title
                  metaDec
                  hero{
                    headline
                    subHeadline
                    image{
                        path
                    }
                    video{
                        path
                    }
                  }
                  about{
                    headline
                    bodyTextHtml
                  }
                  featuredProducts{
                    title
                    pageHeadline
                    summary
                    featuredProductsLargeSize
                    color{
                      hex
                    }
                    coverImage{
                      path
                    }
                  }
                  cta{
                    headline
                    bodyTextHtml
                    image{
                      path
                    }
                  }
                }
              }
      `,
    }),
  });
  const response = await getPrivat.json();

  return response.data.getPrivat;
};
