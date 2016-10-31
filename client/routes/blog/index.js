/**
 * Created by wyf on 2016/10/25.
 */
module.exports = {
    path: '/blog',

    getChildRoutes(partialNextState, cb) {
        require.ensure([], (require) => {
            cb(null, [
                require('../blogContent/index')
            ])
        })
    },

    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('../../containers/BlogContent/BlogContent'))
        })
    }
};