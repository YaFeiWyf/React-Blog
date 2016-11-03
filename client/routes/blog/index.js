/**
 * Created by wyf on 2016/10/25.
 */
module.exports = {
    path: '/blog',

    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('../../containers/BlogContent/BlogContent'))
        })
    }
};