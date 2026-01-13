const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
 
const config = getDefaultConfig(__dirname)

// Add resolver configuration for date-fns ESM modules
config.resolver.sourceExts.push('js', 'mjs', 'cjs');
 
module.exports = withNativeWind(config, { input: './global.css' }) 