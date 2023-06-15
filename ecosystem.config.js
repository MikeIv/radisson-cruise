module.exports = {
    apps: [
        {
            name: 'nuxt-flotilia',
            exec_mode: 'cluster',
            instances: '5', // Or a number of instances
            cwd: '/app', // Эту строку надо подредактировать для сервака
            script: './node_modules/nuxt/bin/nuxt.js',
            args: 'start'
        },
        /*{
            name: 'nuxt-flotilia-dev',
            exec_mode: 'cluster',
            instances: '2', // Or a number of instances
            script: './node_modules/nuxt/bin/nuxt.js',
            args: 'start'
        }*/
    ]
}