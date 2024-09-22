import { axiosInstance } from "./apiConfig";

// *NOTES*
// 1) USE axios for non token requests
// 2) use api for tokened requests

interface submitContactFormType {
  name: string;
  email: string;
  content: string;
  file?: any;
}

class Api {
  api;
  constructor() {
    this.api = axiosInstance;
  }

  submitContactForm = async (data: submitContactFormType) => {
    try {
      const response = await this.api.post("contact", JSON.stringify(data));
      return response;
    } catch (error) {
      throw error;
    }
  };
}

const api = new Api();
Object.freeze(api);
export default api;
