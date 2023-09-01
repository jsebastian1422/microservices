import express from 'express';

import variables from './variables.routes';

const api = express();
api.use('/api/variables',variables);
export default api;