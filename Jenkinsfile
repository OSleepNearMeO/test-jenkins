pipeline {
    stages {
        stage('install') {
            steps {
                sh 'npm i'
            }
        }
        stage('Build') { 
            steps {
                sh 'npm run build'
            }
        }
    }
}
