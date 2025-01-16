export const getStore = async (graphql) => {
  const response = await graphql(`
  #graphql
  query shopInfo {
    shop {
      id
      name
      url
      myshopifyDomain
      plan {
        displayName
        partnerDevelopment
        shopifyPlus
      }
    }
  }
  `)

  return await response.json().then(({ data }) => {
    return data?.shop
  });
}
