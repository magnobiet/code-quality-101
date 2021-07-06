module.exports = {
  '*.ts': () => 'npm run lint:script:fix',
  '*.{css,sass,scss}': () => 'npm run lint:style:fix',
};
