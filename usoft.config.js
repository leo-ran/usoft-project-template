module.exports = {
    sass(config) {
        config.options = {
            implementation: require('sass'),
        }
        return config;
    }
}