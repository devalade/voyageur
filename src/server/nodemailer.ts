import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "a8ff7975c4f4e9",
        pass: "cee06009862fba"
    }
})


type TMailOptions = {
    from?: string;
    to?: string;
    subject?: string;
    text?: string;
}


class MailService {
    private static mailOptions: TMailOptions;

    static from(value: string) {
        MailService.mailOptions = { ...MailService.mailOptions, from: value};
        return this;
    }

    static to(value: string) {
        MailService.mailOptions = { ...MailService.mailOptions, to: value};
        return this;
    }

    static subject(value: string) {
        MailService.mailOptions = { ...MailService.mailOptions, subject: value};
        return this;
    }

    static text(value: string) {
        MailService.mailOptions = { ...MailService.mailOptions, text: value};
        return this;
    }

    static send() {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        transporter.sendMail(MailService.mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email has been sent succesfully ' + info.response);
            }
        });
    }


}


export default new MailService();
