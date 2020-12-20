module.exports = {
  apps: [
    {
      name: "hogwarts-air",
      script: "index.js",
      watch: true,
      ignore_watch: ["node_modules"],
      env: {
        NODE_ENV: "development",
      },
    },
  ],

  deploy: {
    development: {
      user: "SSH_USERNAME",
      host: "SSH_HOSTMACHINE",
      ref: "origin/master",
      repo: "GIT_REPOSITORY",
      path: "DESTINATION_PATH",
      "pre-deploy-local": "",
      "post-deploy":
        "npm install && pm2 reload ecosystem.config.js --env development",
      "pre-setup": "",
    },
  },
};
