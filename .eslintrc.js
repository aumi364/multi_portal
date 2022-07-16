module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:import/recommended"

    ],
    "parser": "@babel/eslint-parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module",
        "allowImportExportEverywhere": false,
        "babelOptions": {
            "presets": ["@babel/preset-react"]
        },
        "requireConfigFile": false,

    },
    "plugins": [
        "react","import"
    ],
    "overrides": [
        {
            "files": ["*.jsx", "*.js"]
        }
    ],
    "rules": {
        "no-unused-vars" :'warn',
        "react/jsx-uses-vars": "error",
        "import/no-unresolved": [2, { commonjs: true }]

    }
}
