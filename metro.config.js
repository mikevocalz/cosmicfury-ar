// metro.config.js

// Learn more: https://docs.expo.dev/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

module.exports = (async () => {
  const config = getDefaultConfig(__dirname);

  // Add custom asset extensions
  config.resolver.assetExts.push(
    'obj',
    'mtl',
    'mp3',
    'JPG',
    'vrx',
    'hdr',
    'gltf',
    'glb',
    'bin',
    'arobject',
    'gif'
  );

  config.resolver.unstable_enablePackageExports = true;

  // Enable NativeWind
  return withNativeWind(config, { input: './global.css' });
})();
