import { whatsappApi } from '../../infrastructure/api/whatsappApi';
require('dotenv').config();
const axios = require('axios')

// export const Language = {
//   English: 'en_US',
//   Portuguese: 'pt_BR',
// } as const;

export async function sendTemplateMessage(to: string, templateName: string): Promise<void> {
  try {
    console.log("ta chamando", to, templateName);
    
    const data = {
      messaging_product: 'whatsapp',
      to,
      type: 'template',
      template: {
        name: templateName,
        language: { code: 'en_US' }
      }
    };
    const response = await whatsappApi.sendMessage(data);
    console.log('Template message sent:', response.data);
  } catch (error) {
    console.error('Error sending template message:', error.message);
  }
}
