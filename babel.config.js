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
          assets: './assets',

          api: './src/api',
          dev: './src/dev',
          map: './src/map',
          auth: './src/auth',
          chat: './src/chat',
          form: './src/form',
          home: './src/home',
          post: './src/post',
          send: './src/send',
          show: './src/show',
          user: './src/user',
          alert: './src/alert',
          modal: './src/modal',
          trash: './src/trash',
          utils: './src/utils',
          camera: './src/camera',
          common: './src/common',
          global: './src/global',
          search: './src/search',
          comment: './src/comment',
          profile: './src/profile',
          publish: './src/publish',
          storage: './src/storage',
          permission: './src/permission',
          navigation: './src/navigation',
        },
      },
    ],
  ],
};
