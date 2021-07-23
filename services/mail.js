const nodemailer = require('nodemailer');

const send = async({to, subject = "Gracias por registrarte ", html}) => {
    try {
        const transporter = nodemailer.createTransport({
            service: process.env.CORREO_SERVICE, 
            auth: {
                user: process.env.CORREO_USER, 
                pass: process.env.CORREO_PASSWORD,
            },
            tls : {
                rejectUnathorized: false,
            }
        });
        const mail = {
            from: '<noreply> No Reply <noreply>',
            to,
            subject, 
            html, 
        }
        const envio = await transporter.sendMail(mail);
        return envio.messageId;
            
    } catch (e) {
        console.log(e);
    }
}

module.exports = {send};