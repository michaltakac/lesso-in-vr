const s3 = require('s3');
const task = require('./task');

module.exports = task('deploy', () => Promise.resolve()
  .then(() => require('./build'))
  .then(() => new Promise((resolve, reject) => {
    const client = s3.createClient({
      s3Options: {
        region: 'eu-west-1',
        sslEnabled: false,
      },
    });
    const uploader = client.uploadDir({
      localDir: 'experiments/lesso-in-vr',
      deleteRemoved: true,
      s3Params: { Bucket: 'michaltakac.com' },
    });
    uploader.on('error', reject);
    uploader.on('end', resolve);
  }))
);
