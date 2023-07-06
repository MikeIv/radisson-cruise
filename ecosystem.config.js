module.exports = {
  apps: [
    {
      name: 'KorablikiNuxt',
      port: '3000',
      exec_mode: 'cluster',
      instances: '10',
      pwd: '/app',
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      max_memory_restart: '400M',
      out_file: "./out.log",
      error_file: "./error.log",
      merge_logs: true,
      log_date_format: "DD-MM HH:mm:ss Z",
      log_type: "format",
      //args: start -c ${process.cwd()}/nuxt.config.js,
    }
  ]
}