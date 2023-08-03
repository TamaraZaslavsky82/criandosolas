import dotenv from 'dotenv'
dotenv.config()

export const config = {
    API_MAIL: process.env.SENDGRID_API_KEY
}