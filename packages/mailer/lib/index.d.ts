declare class Mailer {
    /**
    @param {Object} opts nodemailer transport options
    @param {Object} htmlToTextOptions for nodemailer html to text module
    */
    transport: any;
    constructor(opts: any, htmlToTextOptions: any);
    /**
    @param {Object} mail nodemailer mail
    @returns Promise
    */
    send(mail: any): Promise<any>;
}
export default Mailer;
