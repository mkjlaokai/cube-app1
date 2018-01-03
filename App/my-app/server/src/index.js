import Glue from 'glue';

const Manifest = require('./manifest');

const composeOptions = {
  relativeTo: __dirname,
};

export default Glue.compose.bind(Glue, Manifest.get('/'), composeOptions);
