/**
 * Takoyaki Deploy Script
 * =======================
 *
 * Script used to deploy the app to gh-pages.
 */
const ghpages = require('gh-pages');

const options = {
  src: ['index.html', '.nojekyll', 'build/*']
};

ghpages.publish('.', options, err => {
  if (err)
    return console.error(err);

  console.log('Application upgraded!');
});
