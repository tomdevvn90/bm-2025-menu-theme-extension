export default class BmMenuApi {

  STORE_ID = '';
  API_ENDPOINT = ''
  API_KEY = ''
  
  constructor(API_ENDPOINT, API_KEY, STORE_ID) {
    this.STORE_ID = `gid://shopify/Shop/${ STORE_ID }`;
    this.API_ENDPOINT = API_ENDPOINT;
    this.API_KEY = API_KEY;

    return this;
  }

  async __request(__url, data, method = 'GET') {
    const response = await fetch(`${ this.API_ENDPOINT }${ __url }`, {
      method,
      cache: "no-cache", 
      headers: {
        "Content-Type": "application/json",
        'api-key': this.API_KEY
      },
      body: JSON.stringify(data), 
    });

    return response.json();
  }

  async getMenu(menuID) {
    try {
      const res = await this.__request(`/content/item/bm2025menu/${ menuID }`);
      return res;
    } catch(err) {
      return false
    }
  }
}