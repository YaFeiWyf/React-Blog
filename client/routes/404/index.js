/**
 * Created by wyf on 2016/10/25.
 */
module.exports = {
    path: '404',

    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('components/layer/NotFoundPage'))
        }, 'NotFoundPage')
    }
};