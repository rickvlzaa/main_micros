module.exports = {
    apps: [{
        name: 'MAIN_MICROS',
        script: './index.js'
    }],
    deploy: {
        production: {
            user: 'rick',
            host: 'ec2-18-188-249-240.us-east-2.compute.amazonaws.com',
            key: '~/.ssh/aws_dev',
            ref: 'origin/master',
            repo: 'git@github.com:rickvlzaa/main_micros.git',
            path: '/home/rick/microservices/main',
            'post-deploy': 'npm install --only=production && pm2 startOrRestart ecosystem.config.js'
        }
    }
}