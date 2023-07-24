import sgMail from '@sendgrid/mail'

import { config } from '../config/index.js'

export const sendMail = (msg) => {
    sgMail.setApiKey(config.API_MAIL)

    sgMail
        .send(msg)
        .then(() => { }, error => {
            console.error(error);

            if (error.response) {
                console.error(error.response.body)
            }
        });
}