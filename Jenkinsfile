pipeline {
    agent {
        docker {
            image 'node'
            args '-p 9010:3000'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                dir("app/react"){
                    sh 'pwd'
                    sh 'npm install'
                }
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
    post {
        success { 
            slackSend message: "SUCCESS - Build Started - ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)"
        }
        failure {
            slackSend message: "ERROR - Build Started - ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)"
        }
    }
}