pipeline {
    agent any
    stages {
        stage('install'){
            sh 'npm i'
        }
        stage('Build') { 
            sh 'npm run build'
        }
    }
    
}