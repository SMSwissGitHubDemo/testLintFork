// .eslintrc.js example from https://www.geeksforgeeks.org/how-to-configure-eslint-for-react-projects/ 
{
    "extends": [
        "eslint:recommended",
        "plugin:import/errors",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended"
    ],
    "plugins": ["react", "import", "jsx-a11y"],
    "rules": {
        "react/prop-types": 0,
        "indent": ["error", 2],
        "linebreak-style": 1,
        "quotes": ["error", "double"]
    },
    "parserOptions": {
        "ecmaVersion": 2021,
        "sourceType": "module",
        "ecmaFeatures": {
        "jsx": true
        }
    },
    "env": {
        "es6": true,
        "browser": true,
        "node": true
    },
    "settings": {
        "react": {
        "version": "detect"
        }
    },
    "scripts": {
        "lint": "eslint \"src/**/*.{js,jsx}\"",
        "lint:fix": "eslint \"src/**/*.{js,jsx}\" --fix"
    }, 
}
    