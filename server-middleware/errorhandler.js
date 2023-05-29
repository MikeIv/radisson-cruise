import { readFileSync } from 'node:fs';
export default function (req, res, next) {
    // if it's a stuff path for take
    if (decodeURI(req.url).match(/\/_ipx.*/) || decodeURI(req.url).match(/\/store.*/)) {
        // try to find file
        try { // if the file is found, show it
            readFileSync('static/'+ req.url.match(/img.*/)[0])
            next()
        } catch (error) { // if the file hasn't been found, rederect to custom error page
            res.writeHead(301, { Location: '/404' })
            res.end()
        }
    } else {
        next()
    }
}