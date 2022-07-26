## OLUSUKU
Rydex is a mobile application  to locate the nearest and affordable repair service provider , fuel providers and medical personels. 




## How to run your project
- Run expo start , and chose 'a' for android to run the android app
- npm start # you can open iOS, Android, or web from here, or run them directly with the commands below.
- npm run android
- npm run ios # requires an iOS device or macOS for access to an iOS simulator
- npm run web

## Frameworks used
- Expo / Expo CLI for development

## Clear Cache 
- npx react-native start --reset-cache

## Libraries used
- react-native-maps for maps

## Icon Source 
- Expo Vector icons : https://icons.expo.fyi/

## Start app if errors exist
cd android && ./gradlew cleanBuildCache && cd .. && watchman watch-del-all && rm -rf node_modules/ && rm -rf $TMPDIR/react-native-packager-cache-* && rm -rf $TMPDIR/metro-bundler-cache-* &&   yarn cache clean && yarn install &&  yarn start --reset-cache 

# Delete node modules and run
rm -rf node_modules && yarn install && react-native run-android

## Run app
npm run android

## Build APK ( React native CLI)
- npx react-native bundle --dev false --platform android --entry-file index.js --bundle-output ./android/app/src/main/assets/index.android.bundle --assets-dest ./android/app/src/main/res
- cd android
- Create debug build (RUN): ./gradlew assembleDebug

## Best way to run
Run expo start 
Type a : to emulate the android version 

## Create a release , Android Bundle (.aab)
- npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

- opens emulator : npx react-native run-android --variant=release
- cd android && ./gradlew bundleRelease -x bundleReleaseJsAndAssets

# Build , Automation and Release Management

- We use **Jest** for Unit Testing

**expo build:android** will be discontinued on January 4, 2023 from then on we will be using **eas build**




