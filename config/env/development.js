module.exports = {
    db: 'mongodb://'+ process.env.IP + '/meandb',
    sessionSecret: 'developmentSessionSecret',
    facebook: {
        clientID: '1697043730515379',
        clientSecret: '8245b7901f66d9aedf1d850f297090e1',
        callbackURL: 'http://' + process.env.IP + '/oauth/facebook/callback'
    }
};