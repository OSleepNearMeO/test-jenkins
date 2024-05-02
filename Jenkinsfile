pipeline {
    agent any
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
                sh 'npm run build'
                sh 'docker build . -t "test-jenkins-fe"'
                sh 'docker run -d -p 9999:9999 test-jenkins-fe'
            }
        }
    }
    
}