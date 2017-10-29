module.exports = {
  'globDirectory': 'server/public/',
  'globPatterns': [
    '**/*.{js,gz,png,xml,ico,json,svg,html,map}'
  ],
  'swSrc': 'src/sw.js',
  'swDest': 'server/public/sw.js',
  'globIgnores': [
    '../../workbox-cli-config.js'
  ]
}
