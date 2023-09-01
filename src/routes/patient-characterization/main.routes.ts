import express from 'express';

import affiliateTypeId from './affiliate_type_id.routes';
import affiliate from './affiliate.routes';
import gender from './gender.routes';
import sexualOrientation from './sexual_orientation.routes';
import genderIdentity from './gender_identity.routes';
import race from './race.routes';
import ethnicity from './ethnicity.routes';
import maritalStatus from './marital_status.routes';
import cellCodes from './cell_codes.routes';
import educationLevel from './eductation_level.routes';
import occupation from './occupation.routes';
import typeHouse from './type_house.routes';
import typeResidenceZone from './type_residence_zone.routes';
import country from './country.routes';
import states from './state.routes';
import city from './city.routes';
import socialClass from './social_class.routes';
import commune from './commune.routes';
import patient from './patient.routes';
import neighborHood from './neighborhood.routes';
import entity from './entity.routes';

const api = express();

api.use('/api/affiliate-type-id', affiliateTypeId);
api.use('/api/affiliate', affiliate);
api.use('/api/gender', gender);
api.use('/api/sexual-orientation', sexualOrientation);
api.use('/api/gender-identity', genderIdentity);
api.use('/api/race', race);
api.use('/api/ethnicity', ethnicity);
api.use('/api/marital-status', maritalStatus);
api.use('/api/cell-codes', cellCodes);
api.use('/api/education-level', educationLevel);
api.use('/api/occupation', occupation);
api.use('/api/type-house', typeHouse);
api.use('/api/type-residence-zone', typeResidenceZone);
api.use('/api/country', country);
api.use('/api/states', states);
api.use('/api/city', city);
api.use('/api/social-class', socialClass);
api.use('/api/commune', commune);
api.use('/api/patient', patient);
api.use('/api/neighborHood', neighborHood);
api.use('/api/entity', entity);

export default api;