<h1 align="center">react-native-zustand-repack</h1>

If you like any of my work, you can support me on: https://barelyhuman.dev/donate

[![](https://img.shields.io/badge/license-mit-black?style=for-the-badge)](LICENSE)

A simple boilerplate for react native with the following additions

## Features

- React Native Paper
- RN-Vector-Icons
- Zustand
- Re.Pack

## Usage

```sh
npx react-native init NewApp --template react-native-zustand-repack
```

## Icons

The boilerplate comes with RN-Vector-Icons setup already, though the only icons that are added to the actual app are `MaterialCommunityIcons.ttf`, to add the remaining you can go ahead and modify by going to the following files:

- `android/app/build.gradle` => `project.ext.vectoricons` and add the needed font files
- Open `Info.plist` in XCode or in the editor, look for `UIAppFonts` in the editor and `Fonts Provided By Application` in XCode and add more items to it and provide the values as the font files.

## Structure

The template comes with a set structure for

- components
- hooks
- navigators
- screens
- store (state)

You are free to modify any of these as none of them are hardcoded to the template and are free to change

## Contribute

The best way is to fork and raise pull requests for the existing issues and let the maintainer know that you are picking up and issue

## License

[MIT](LICENSE) &copy; Reaper
