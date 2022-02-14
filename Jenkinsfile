pipeline {
    agent {
        docker {
            image 'node:alpine3.14'
            args '-p 9010:3000 -v ./app/react:/var/www/html'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh './services/scripts/test.sh'
            }
        }
        stage('Deliver') {
            steps {
                sh './services/scripts/deploy.sh'
            }
        }

    }
}