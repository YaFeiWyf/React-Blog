/**
 * Created by wyf on 2016/10/25.
 */
module.exports = {
    path: '/login',

    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('../../components/LoginDialog/LoginDialog').default)
        })
    }
};