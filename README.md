# Quarantine Hub 🦠😷🏠

VR webrtc chat room using aframe & socketio

❗ Although webrtc is [officially supported by Safari](https://caniuse.com/#search=webrtc), I've been having problems with it. Use new releases of Chrome or Firefox (if you are using Edge what are you doing on Github?)

Uses [networked-aframe](https://www.npmjs.com/package/networked-aframe), a framework that adds webrtc and socketio support to aframe.

## About

In times of social distancing, vast efforts are being made to maintain and digitise communications between family members, friends and coworkers. Although this is necessary for the mental health of many, it does not take into account the importance of the encounter with strangers. 

Quarantine Hub is an online platform and multiplayer game for social interaction. Much like chat roulette, there is no task other than to interact with strangers. In Quarantine Hub, however, players are abstract avatars and don’t share any resemblance to their physical self visually. Once players approach another, microphones will be gradually turned on, enabling them to communicate through merely audio. This interaction is intimate yet anonymous, much like calling a stranger on the phone.

[Check out my moodboard / process](https://www.sketch.com/s/7355a5e3-0e16-4dbc-86ee-561aff6f72e4)

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
