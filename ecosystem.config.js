module.exports = {
  apps: [
    {
      name: "lafetch-web",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000",
      cwd: "/home/ubuntu/LaFetch-web-app",

      instances: 1,                 
      exec_mode: "fork",

      node_args: "--max-old-space-size=2048", 

      max_memory_restart: "2200M",   
      autorestart: true,

      env: {
        NODE_ENV: "production",
        PORT: 3000
      }
    }
  ]
};
