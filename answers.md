Changed backend/index.js: updated default port from 4000 to 5003 to match the new backend configuration.
Changed frontend/vite.config.js: updated the proxy target to point to http://localhost:5003 so the frontend connects to the new backend port.
