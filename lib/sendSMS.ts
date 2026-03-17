import twilio from "twilio";

const client = twilio(
process.env.TWILIO_ACCOUNT_SID,
process.env.TWILIO_AUTH_TOKEN
);

export async function sendSMS(phone:string,name:string,course:string){

await client.messages.create({
body:`Hello ${name}, your enrollment for ${course} at Quickstep Computer Center is confirmed.`,
from:process.env.TWILIO_PHONE,
to:phone
});

}