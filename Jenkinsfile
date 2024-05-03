pipeline {
    agent any
    stages {
        stage('Build') { 
            agent {
                docker { image 'node:20-alpine' }
            }
            steps {
                sh 'node --version'
                echo 'create fontend finish'
            }
        }
    }
    
}