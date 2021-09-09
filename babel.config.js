module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module:react-native-dotenv'],
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          api: './src/api',
          map: './src/map',
          auth: './src/auth',
          chat: './src/chat',
          form: './src/form',
          post: './src/post',
          show: './src/show',
          user: './src/user',
          alert: './src/alert',
          modal: './src/modal',
          store: './src/store',
          trash: './src/trash',
          utils: './src/utils',
          camera: './src/camera',
          common: './src/common',
          global: './src/global',
          comment: './src/comment',
          publish: './src/publish',
          storage: './src/storage',
          permission: './src/permission',
          navigation: './src/navigation',
        },
      },
    ],
  ],
};
