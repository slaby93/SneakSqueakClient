If you encounter problem with ENOSPC run
```echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p```

## How to start:

### Development
In order to run development mode:

1) > npm install

1) Create `env.development.js` (Create copy of .env.development.js file)

2) > npm run dev