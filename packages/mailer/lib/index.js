"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_html_to_text_1 = require("nodemailer-html-to-text");
const nodemailer_1 = __importDefault(require("nodemailer"));
const nodemailer_stub_transport_1 = __importDefault(require("nodemailer-stub-transport"));
const winston_1 = __importDefault(require("winston"));
class Mailer {
    constructor(opts, htmlToTextOptions) {
        const defaultOpts = {
            logger: winston_1.default,
            pool: true
        };
        const htmlToTextOpts = htmlToTextOptions || {};
        if (process.env.NODE_ENV === 'test') {
            this.transport = nodemailer_1.default.createTransport((0, nodemailer_stub_transport_1.default)());
        }
        else {
            this.transport = nodemailer_1.default.createTransport(opts, defaultOpts);
        }
        this.transport.use('compile', (0, nodemailer_html_to_text_1.htmlToText)(htmlToTextOpts));
    }
    /**
    @param {Object} mail nodemailer mail
    @returns Promise
    */
    send(mail) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.transport.sendMail(mail);
        });
    }
}
exports.default = Mailer;
