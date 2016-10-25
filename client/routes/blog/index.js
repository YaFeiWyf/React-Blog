/**
 * Created by wyf on 2016/10/25.
 */
module.exports = {
    path: 'baidu',

    getChildRoutes(partialNextState, cb) {
        require.ensure([], (require) => {
            cb(null, [
                require('./routes/result'),
                require('./routes/frequency')
            ])
        })
    },

    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('components/layer/BaiduPage'))
        }, 'BaiduPage')
    }
};