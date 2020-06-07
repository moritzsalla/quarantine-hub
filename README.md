# Quarantine Hub 🦠😷🏠

VR webrtc chat room using aframe & socketio

❗ Although webrtc is [officially supported by Safari](https://caniuse.com/#search=webrtc), I've been having problems with it. Use new releases of Chrome or Firefox (if you are using Edge what are you doing on Github?)

Uses [networked-aframe](https://www.npmjs.com/package/networked-aframe), a framework that adds webrtc and socketio support to aframe.

## Client

Deployed on Vercel

https://quarantine-hub.now.sh/

## Server

Running on Heroku (Free plan hence the server needs some time to fire up after a longer period of inactivity)

```
SERVER URL ws://quarantinehub-server.herokuapp.com:8080
```

## Resources

- https://www.npmjs.com/package/networked-aframe
- https://aframe.io/blog/arjs/

- https://robdodson.me/deploying-your-first-node-dot-js-and-socket-dot-io-app-to-heroku/
- https://devcenter.heroku.com/articles/node-websockets
- https://stackoverflow.com/questions/25013735/socket-io-nodejs-doesnt-work-on-heroku
- https://github.com/timanovsky/subdir-heroku-buildpack
