/**
 * Parses a 'multipart/form-data' upload request
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
const path = require('path');
const os = require('os');
const fs = require('fs');

const API_KEY = process.env.API_KEY || 'SneaotDqvFyDe4fJ8MxKEoXLH0pktNMgSkyMxkXpt52CSQO5JPM7NXYnLnf2GF2s';
const rp = require("request-promise");
// Node.js doesn't have a built-in multipart/form-data parsing library.
// Instead, we can use the 'busboy' library from NPM to parse these requests.
const Busboy = require('busboy');

exports.uploadFile = (req, res) => {
  if (req.method === 'POST') {
    const busboy = new Busboy({ headers: req.headers });
    const tmpdir = os.tmpdir();

    // This object will accumulate all the fields, keyed by their name
    const fields = {};

    // This object will accumulate all the uploaded files, keyed by their name.
    const uploads = {};

    // This code will process each non-file field in the form.
    busboy.on('field', (fieldname, val) => {
      // TODO(developer): Process submitted field values here
      console.log(`Processed field ${fieldname}: ${val}.`);
      fields[fieldname] = val;
    });

    let fileWrites = [];

/*    busboy.on('file', (fieldname, file, filename) => {
      fileWrites.push(callProcess(path.join(tmpdir, filename)));
    });*/

    // This code will process each file uploaded.
    busboy.on('file', (fieldname, file, filename) => {
      // Note: os.tmpdir() points to an in-memory file system on GCF
      // Thus, any files in it must fit in the instance's memory.
      console.log(`Processed file ${filename}`);
      const filepath = path.join(tmpdir, filename);
      uploads[fieldname] = filepath;

      const writeStream = fs.createWriteStream(filepath);
      file.pipe(writeStream);

      // File was processed by Busboy; wait for it to be written to disk.
      const promise = new Promise((resolve, reject) => {
        file.on('end', () => {
          writeStream.end();
        });
        writeStream.on('finish', resolve);
        writeStream.on('error', reject);
      });
      fileWrites.push(promise);
    });

    // Triggered once all uploaded files are processed by Busboy.
    // We still need to wait for the disk writes (saves) to complete.
    busboy.on('finish', () => {
      Promise.all(fileWrites)
        .then(async () => {
          console.log('fileWrites', uploads)
          const response = await callProcess(uploads.file);
          console.log('response', response);
          fs.unlinkSync(uploads.file);
          res.send(response);
        });
    });

    busboy.end(req.rawBody);
  } else {
    // Return a "method not allowed" error
    res.status(405).end();
  }
};


async function callProcess(file, params = {}) {

  let formData = {
    file: []
  }

  formData.file.push({
    value: fs.createReadStream(file),
    options: {
      filename: file,
      contentType: 'image/jpg'
    }
  })

  formData = Object.assign({}, formData, params);

  const options = {
    method: 'POST',
    formData: formData,
    uri: `https://api.tabscanner.com/api/2/process`,
    headers: {
      'apikey': API_KEY
    }
  };

  const result = await rp(options)
  return JSON.parse(result)
}