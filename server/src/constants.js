export const DB_NAME = 'HPA_Database';

export const API = '/api';

const thirtyDaysInMilliseconds = 30 * 24 * 60 * 60 * 1000;

export const ResponseOptions = {
  httpOnly: true,
  maxAge: thirtyDaysInMilliseconds,
  sameSite: 'None',
  secure: true,
};
