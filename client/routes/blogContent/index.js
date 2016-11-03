/**
 * Created by wyf on 2016/10/31.
 */
module.exports = {
    path: '/blog/:id',

    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('../../containers/BlogContent/BlogContent').default)
        })
    }
};