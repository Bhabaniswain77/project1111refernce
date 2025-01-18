import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

const ENDPOINT = "https://send.api.mailtrap.io/";
const TOKEN = "386c6c0e47b2a3571a8fc5dd2d84de5c"

const client = new MailtrapClient({endpoint:ENDPOINT,token:TOKEN})

export const mailtrapClient = new MailtrapClient({
	endpoint: process.env.MAILTRAP_ENDPOINT,
	token: process.env.MAILTRAP_TOKEN,
});

export const sender = {
	email: "mailtrap@demomailtrap.com",
	name: "DECOBEE",
};

const recipients = [
	{
		email:"bhabaniswain2002@gmail.com"
	},
];

client
	.send({
		from:sender,
		to:recipients,
		subject:"You are GOOD",
		text:"Congrats to send mail",
		category:"Integration Test"
	})
	.then(console.log,console.error)