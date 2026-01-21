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
      max_memory_restart: "2400M",

      min_uptime: "30s",
      max_restarts: 10,
      restart_delay: 5000,

      autorestart: true,

      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },

      // Enable logging
      error_file: "./logs/err.log",
      out_file: "./logs/out.log",
      log_date_format: "YYYY-MM-DD HH:mm Z",
    },
  ],
};
