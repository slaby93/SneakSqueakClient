/* globals importScripts WorkboxSW */
importScripts('workbox-sw.prod.v2.1.0.js')

const workboxSW = new WorkboxSW()
workboxSW.precache([])
