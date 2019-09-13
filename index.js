const fs = require('fs')
const path = require('path')
const url = require('url')

const Handlebars = require('handlebars')

const input = path.join('src', 'index.hbs')
const output = path.join('dist', 'index.html')

const template = Handlebars.compile(fs.readFileSync(input).toString())

const homepage = 'https://www.spectarlearning.com';

processed = template({
    host_url: 'https://tracingpaper-sl-email-template.netlify.com',
    links: {
        logo: homepage,
        hero: homepage + '#sl-courses',
        request: url.resolve(homepage, 'request'),
        nav: {
            home: homepage,
            courses: homepage + '#sl-courses',
            contact: homepage + '#sl-contact'
        },
        courses: {
            bigdata: url.resolve(homepage, 'course/4'),
            devops: url.resolve(homepage, 'course/3'),
            security: url.resolve(homepage, 'course/5'),
            business: url.resolve(homepage, 'course/6'),
            ai: url.resolve(homepage, 'course/7')
        },
        social: {
            twitter: 'https://twitter.com/SpectarG',
            linkedin: 'https://in.linkedin.com/company/spectar-group-pty-ltd',
            facebook: 'https://www.facebook.com/Spectar-Learning-103582474323569'
        }
    },
    batches: [
        {
            name: '1st Batch',
            from: '12 Sep 2019',
            to: '22 Sep 019'
        },
        {
            name: '2nd Batch',
            from: '12 Oct 2019',
            to: '22 Oct 019'
        }
    ]
})

fs.writeFileSync(output, Buffer.from(processed))