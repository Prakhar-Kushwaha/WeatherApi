# 🌦️ Weather API Application

This is a **React-based Weather App** built with **Vite**, providing fast development and hot reload capabilities. The app fetches live weather data and is deployed via **GitHub Pages**.

---

## Tech Stack

- **React** v19.0.0
- **Vite** (MIT Licensed)
- **JavaScript (JSX)**
- **GitHub Pages** for static site hosting

---

## Features

- Live weather updates
- Hot reload during development
- Works on local and connected networks
- Lightweight and fast performance

---

## 📦 Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone [text](https://github.com/Prakhar-Kushwaha/Weather-Api.git)
   cd wetherApi 


   
        #Install Dependencies
        npm install

        #To run app locally 
        npm run dev

        #To run on connected network 
        npm run dev -- --host
   ```


2. **Deployment Server is configured To**
```bash
    server: {
        host: '0.0.0.0',
        port: 4587
    }

```

<br>
<br>

3. **Deployment**
After change for deploying changes to Github pages : 
```bash

    #Install Dependencies
    npm install vite-plugin-gh-pages --save-dev

    #import githubPages in Vite.config.js
    import { defineConfig } from 'vite';
    import react from '@vitejs/plugin-react';
    import { ghPages } from 'vite-plugin-gh-pages';

    export default defineConfig({
    plugins: [react(), ghPages()],
    base: '/Weather-Api/', // Replace with your repository name
    });


    # Update scripts , in vite.config.js
    "scripts": {
        "dev": "vite",
        "build": "vite build",
        "preview": "vite preview",
        "deploy": "vite build && vite-gh-pages"
    }

    ##Run the following Comonds
    npm run deploy 
    # It will run the script defined in vite.config.js



```

---

**Author**: Prakhar Kushwaha  
**Date**: 13th April 2025 | Sunday  
**Licensed**: MIT

---
