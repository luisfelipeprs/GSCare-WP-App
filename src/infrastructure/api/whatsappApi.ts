import axios, { AxiosResponse } from 'axios';

export const whatsappApi = {
    sendMessage: async (data: object): Promise<AxiosResponse> => {
        return axios({
            url: `https://graph.facebook.com/v20.0/${process.env.PHONE_NUMBER_ID}/messages`,
            method: 'POST',
            headers: {
                Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
                'Content-Type': 'application/json'
            },
            data
        });
    }
};
