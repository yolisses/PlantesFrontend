module.exports = {
  root: true,
  extends: '@react-native-community',
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['assets', './assets'],

          ['api', './src/api'],
          ['dev', './src/dev'],
          ['map', './src/map'],
          ['auth', './src/auth'],
          ['chat', './src/chat'],
          ['form', './src/form'],
          ['home', './src/home'],
          ['post', './src/post'],
          ['send', './src/send'],
          ['show', './src/show'],
          ['user', './src/user'],
          ['alert', './src/alert'],
          ['modal', './src/modal'],
          ['trash', './src/trash'],
          ['utils', './src/utils'],
          ['camera', './src/camera'],
          ['common', './src/common'],
          ['global', './src/global'],
          ['search', './src/search'],
          ['comment', './src/comment'],
          ['profile', './src/profile'],
          ['publish', './src/publish'],
          ['navigation', './src/navigation'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json'],
      },
    },
  },
};
