pipeline {
    agent {
        docker {
            image 'node:16.14.0'
            args '-p 9010:3000 -u root:root'
            reuseNode true
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                dir("app/react"){
                    echo env.graphql-url
                    sh 'npm install'
                }
            }
        }
        stage('Deliver') {
            steps {
                sh "chmod +x -R ${env.WORKSPACE}/services/scripts"
                sh './services/scripts/deploy.sh'
                input message: 'Matar el contenedor? (Click "Proceed" para aceptar)'
                sh './jenkins/scripts/kill.sh'
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