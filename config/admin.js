module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4a41af4954a1d534d012ac0397e1c42b'),
  },
});
