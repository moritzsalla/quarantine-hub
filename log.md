
# Log

My moodboards can be accessed [here](https://www.sketch.com/s/7355a5e3-0e16-4dbc-86ee-561aff6f72e4).

### Description

In times of social distancing, vast efforts are being made to maintain and digitise communications between family members, friends and coworkers. Although this is necessary for the mental health of many, it does not take into account the importance of the encounter with strangers. 

Quarantine Hub is an online platform and multiplayer game for social interaction. Much like chat roulette, there is no task other than to interact with strangers. In Quarantine Hub, however, players are abstract avatars and don’t share any resemblance to their physical self visually. Once players approach another, microphones will be gradually turned on, enabling them to communicate through merely audio. This interaction is intimate yet anonymous, much like calling a stranger on the phone.

### Goals

- Bring people together in light and humorous ways during times of social distancing
- Play with anonymity and intimacy at the same time
- Create space for social interaction
Provocate?

Can I create anonymity and intimacy at the same time? → Is this uncomfortable?

### Design Values

1. Bring people together
2. Create respectful and inclusive space for everybody
3. Force people to interact with strangers

### Level Design

No levels. Amount of users acts as levels.

### Technologies

Backend
- Socketio
- Express
- Nodejs

Frontend 
- Unity or AFRAME

### Metric of Success

Google analytics
Hotjar (User tracking)

### Motivation 

During the corona crisis all measures are taken to maintain commmunication to family members, friends and coworkers.

However, there is a point that can be said about the importance of the encounter with strangers in our everyday life that. Strangers have been, to a large extent, removed  from our social lives. 

I want to create a game that revolves around one and only one thig — interacting with strangers. For this, I am looking into Second Life, Chat Roulette, multilayer games at large and call centers. All multiplayer games strive on the importance of interaction, though little make this interaction the narrative of the gameplay.

How can these non-physical interactions imitation or create the illusions of intimacy? Can there be intimacy and anonymity at the same time?

### Audience 

Internet users, people affected by COVID, humans that situationally live in the virtual, families, friends, strangers. People that are now forced to use online spaces daily.

## Process

### Finding the Concept

I am inspired by Studio Moniker's work for the dating platform Feeld ([see here](https://studiomoniker.com/projects/for-play)). Their approach to interaction on the web is novel in that it explores different senses than the web's focus on the visual. In doing so, Moniker is able to create an exiting, intimate yet annonymous atmosphere. 

The quarantine made me feel increasingly disconnected from my social contacts. Virtual communication tools seem to exclude many aspects that make a conversation worth having. It felt appropreate to explore the possibility space of social interaction within the internet. Moniker's conceptual approach felt like something I could build, refactor, and use as a starting point for my platform. 

### Exploring Unity

Unity seemed like the appropreate platform to build this on. It's mix of GUI and possibility for low level programming make it a powerful tool. The asset store offers various apps to integrate a Unity game with the socketio API in order to communicate with a server in real time. Unfortunately these plugins have bugs, can be hacky and most importantly (the one with the largest amount of documentation) doesn't support WebGL. WebGL and audio streaming are modern territory. Many browsers don't or half support features. You really want full control over what is happening, and don't want to be having to figure out somebody elses implementation. After a class discussion that made me aware of the difficulty of achieving proper audio streaming, I started looking for alternatives. 

### Refactoring to AFRAME

AFRAME is a delight for smaller scenes. It is component based, which to me make (being used to GUIs) makes a lot more sense than three's imperative API. When it comes to making creative 3D, composability is really important. There is a brilliant framework that sits on top of AFRAME called [networked-aframe](https://github.com/networked-aframe). This makes interacting with the socketio API super easy. The server code, as opposed to the unity equivalent, is pretty modular. It also offers support for directional audio through webrtc.

### Modelling

Once the logic working, I created the assets in Cinema4D. The base model for the faces is taken from 
