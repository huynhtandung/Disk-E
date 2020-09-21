module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    //'airbnb-base'
    'prettier'
  ],
  rules: {
    semi: 1, //phai co dau ; cuoi cau lenh
    quotes: [2, 'single'], //su dung dau ''
    'react/prop-types': 1, //phai co check prop types
    'react/jsx-max-props-per-line': [1, { maximum: 5 }], //moi dong chi chua toi da 2 props
    //indent : [1, "tab"], //quy dinh khoang cach thut le
    'no-unused-vars' : 0,
    'no-undef' : 0,
    'no-console' : 0,
    ' eslint-disable-next-line' : 0,
    'require-yield' : 0
  },
  plugins : ['prettier']
};
