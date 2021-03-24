# OIDC Demo

## How to run?

### Install Packages

```bash
npm install
cd ios
pod install
cd ..
```

### Run ios app

```bash
npm run ios
```

## How to configure identity provider?

The identity provider parameters can be configured through the
config variable `OIDC_CONFIG` in `Apps.js`.

This relies on the npm package [react-native-app-auth](https://github.com/FormidableLabs/react-native-app-auth).
