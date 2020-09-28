# Simple CORS proxy 

Very simple CORS proxy server using express + node-fetch


### 🔧 Installation

Clone this project:

```
git clone https://github.com/jmunox/simple-cors-proxy.git your-proxy
cd your-proxy
npm install
```

### ⚙️ Usage

- Run `npm start` then open http://localhost:4321/
- Set query parameter `url` => the remote URL to proxy 

Example: 
```
http://localhost:4321/?url=https://github.com

```

### License
MIT