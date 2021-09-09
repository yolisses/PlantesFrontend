module.exports = {
  root: true,
  extends: '@react-native-community',
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['api', './src/api'],
          ['map', './src/map'],
          ['auth', './src/auth'],
          ['chat', './src/chat'],
          ['form', './src/form'],
          ['post', './src/post'],
          ['show', './src/show'],
          ['user', './src/user'],
          ['alert', './src/alert'],
          ['modal', './src/modal'],
          ['store', './src/store'],
          ['trash', './src/trash'],
          ['utils', './src/utils'],
          ['camera', './src/camera'],
          ['common', './src/common'],
          ['comment', './src/comment'],
          ['publish', './src/publish'],
          ['navigation', './src/navigation'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json'],
      },
    },
  },
};
