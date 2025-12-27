<div align="center">

  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbm91ZGw4N3B6M3AyZ3V6Z3V6Z3V6Z3V6Z3V6Z3V6Z3V6Z3V6Z3V6Z3V6/L8K62iTDkzGX6/giphy.gif" width="200" height="auto" alt="websocket-logo" />

  <h1>🚀 WebSocket Mastery</h1>
  
  <p>
    <b>Real-time communication, mastered.</b>
  </p>
  
  <p>
     A collection of backend projects, experiments, and learnings focused on <br/>
     <b>WebSockets, Socket.io, and Real-time Architectures</b>.
  </p>

  <p>
    <a href="https://github.com/iamKunalBhalerao/Websocket-Learns/graphs/contributors">
      <img src="https://img.shields.io/github/contributors/iamKunalBhalerao/Websocket-Learns?style=for-the-badge&color=blue" alt="Contributors" />
    </a>
    <a href="https://github.com/iamKunalBhalerao/Websocket-Learns/network/members">
      <img src="https://img.shields.io/github/forks/iamKunalBhalerao/Websocket-Learns?style=for-the-badge&color=orange" alt="Forks" />
    </a>
    <a href="https://github.com/iamKunalBhalerao/Websocket-Learns/stargazers">
      <img src="https://img.shields.io/github/stars/iamKunalBhalerao/Websocket-Learns?style=for-the-badge&color=yellow" alt="Stars" />
    </a>
    <a href="https://github.com/iamKunalBhalerao/Websocket-Learns/issues">
      <img src="https://img.shields.io/github/issues/iamKunalBhalerao/Websocket-Learns?style=for-the-badge&color=red" alt="Issues" />
    </a>
    <a href="https://github.com/iamKunalBhalerao/Websocket-Learns/blob/master/LICENSE">
      <img src="https://img.shields.io/github/license/iamKunalBhalerao/Websocket-Learns?style=for-the-badge&color=green" alt="License" />
    </a>
  </p>

  <h4>
    <a href="#-about">About</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-projects-roadmap">Projects</a> •
    <a href="#-getting-started">Getting Started</a>
  </h4>
</div>

<br />

---

### 🧐 About

Welcome to my **WebSocket Playground**! This repository serves as a monorepo for various backend implementations using WebSockets.

Most backend developers live in the request-response cycle (HTTP). This repo breaks that cycle. Here, I explore **full-duplex communication channels** over a single TCP connection. From simple chat apps to complex real-time gaming servers, this is where the magic happens.

### 🛠 Tech Stack

I am building these projects using the following technologies:

<div align="center">
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white" />
  <img src="https://img.shields.io/badge/ws-Library-black?style=for-the-badge&logo=polkadot&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white" />
</div>

---

### 📂 Projects Roadmap

Here is a list of the sub-projects included in this repository.

|  #  | Project Name                | Description                                                                   | Tech Used              | Status |
| :-: | :-------------------------- | :---------------------------------------------------------------------------- | :--------------------- | :----: |
| 01  | **Echo Server**             | A basic server that sends back whatever it receives. The "Hello World" of WS. | `ws`, `Node`           |   ✅   |
| 02  | **Live Chat API**           | Multi-room chat backend with user persistence.                                | `Socket.io`, `Express` |   ✅   |
| 03  | **Real-time Cursor**        | Tracking mouse movements of multiple users on a canvas.                       | `Socket.io`, `React`   |   🚧   |
| 04  | **Notification System**     | Pushing live system alerts to connected clients.                              | `ws`, `Redis`          |   🚧   |
| 05  | **Multiplayer Game Engine** | Handling game state, ticks, and player synchronization.                       | `Node`, `UDP/WS`       |   ⏳   |

> **Legend**: ✅ Completed | 🚧 In Progress | ⏳ Planned

---

### ⚡️ Getting Started

Follow these steps to run any of the projects locally.

#### 1. Clone the repository

```bash
git clone [https://github.com/iamKunalBhalerao/Websocket-Learns.git](https://github.com/iamKunalBhalerao/Websocket-Learns.git)
cd your-repo-name
bun dev
```
