// See Configuration options
// https://www.npmjs.com/package/@usoft-fe/vue-cli


module.exports = {
    sass(config) {
        config.options = {
            implementation: require('sass'),
        }
        return config;
    }
}