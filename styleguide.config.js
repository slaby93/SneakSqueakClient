const path = require('path');
const camelCase = require('lodash/camelCase');
const upperFirst = require('lodash/upperFirst');

module.exports = {
  title: 'SneakSqueak',
  getComponentPathLine: (componentPath) => {
    const dirname = path.dirname(componentPath, '.js');
    const name = dirname.split('/').slice(-1)[0];
    const componentName = upperFirst(camelCase(name));

    return `import ${componentName} from 'constructicon/${name}'`;
  },
  sections: [
    {
      name: 'Routes',
      components: () => ([
        path.resolve(__dirname, 'src/routes/App', 'index.js'),
        path.resolve(__dirname, 'src/routes/Authorize', 'index.js'),
        path.resolve(__dirname, 'src/routes/Dashboard', 'index.js'),
        path.resolve(__dirname, 'src/routes/GlobalWrapper', 'index.js'),
        path.resolve(__dirname, 'src/routes/GuestRoute.js'),
        path.resolve(__dirname, 'src/routes/ProtectedRoute.js'),
      ]),
    },
    {
      name: 'Elements',
      components: 'src/components/elements/**/index.js',
    },
    {
      name: 'Layout',
      components: 'src/components/layout/**/index.js',
    },
    {
      name: 'Special',
      components: 'src/components/special/**/index.js',
    },
  ],
};
