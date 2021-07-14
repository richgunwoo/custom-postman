module.exports = {
    devOptions: {
      port: 3000,
      routes: [
            {
            match: 'routes',
            src: '.*',
            dest: '/index.html',
            },
        ],
    }
  }