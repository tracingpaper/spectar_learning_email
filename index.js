const fs = require('fs');

const input = "index.html.template";
const output = "index.html";

const data = fs.readFileSync(input).toString();

const host_url = 'https://tracingpaper-sl-email-template.netlify.com';

// template replacing
const processed = data.replace(/\<\%host_url\%\>/g, host_url);

fs.writeFileSync(output, Buffer.from(processed));