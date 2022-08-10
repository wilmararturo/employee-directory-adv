module.exports = {
  apps: [
    {
      name: "employee-directory",
      script: "./server.js",
      exec_mode: "cluster",
      instances: 3,
      watch: true,
      increment_var: "PORT",
      env: {
        PORT: 3015,
        NODE_ENV: "development",
      },
    },
  ],
};
