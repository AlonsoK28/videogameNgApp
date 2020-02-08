export const environment = {
  production: true,
  apiPROTOCOL: 'https://',
  apiHOST: 'api.rawg.io/api',
  apiPORT: "8888",
  get apiURL() {
    return `${this.apiPROTOCOL}${this.apiHOST}`;
  }
};
