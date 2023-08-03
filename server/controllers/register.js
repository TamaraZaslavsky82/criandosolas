import { sendMail } from "../utils/sendMail.js"

export const register = (req, res) => {
    const { name, email, password } = req.body

    const msg = {
        to: email,
        from: "urbanbuy8@gmail.com",
        subject: `Hola ${name}, Gracias por ser parte de Criando Solas!`,
        text: `Hola ${name}`,
        html: `<h1>Hola ${name}</h1>`
    }
    sendMail(msg)

    res.json({ message: 'Hello World' })
}