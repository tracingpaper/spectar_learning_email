const fs = require('fs');

const input = "index.html.template";
const output = "index.html";
const local = "index.local.html";

const data = fs.readFileSync(input).toString();

const host_url = 'https://tracingpaper-sl-email-template.netlify.com';

// template replacing
const processed = data.replace(/\<\%host_url\%\>/g, host_url);
const localized = data.replace(/\<\%host_url\%\>\//g, '');

fs.writeFileSync(output, Buffer.from(processed));
fs.writeFileSync(local, Buffer.from(localized));