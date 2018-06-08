pipeline {
    agent any

    stages {
        stage('Run Unit Tests') {
            steps {
                sh "npm install"
                sh "npm test"
            }
        }
        stage('Deploy Application') {
            steps {
            	sh "npm start &"
            }
        }
        stage('Run Functional Tests') {
            steps {
                sh "npm run test-wdio"
            }
        }
    }
}