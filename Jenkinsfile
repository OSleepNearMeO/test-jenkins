pipeline {
    agent any
    // tools {nodejs "nodejs"}
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
                sh 'npm run build'
            }
        }
        // stage('Test') {
        //     steps {
        //         sh './jenkins/scripts/test.sh'
        //     }
        // }
    //     stage('Deliver') { 
    //         steps {
    //             // sh 'npm run dev'
    //             // sh './jenkins/scripts/deliver.sh' 
    //             // input message: 'Finished using the web site? (Click "Proceed" to continue)' 
    //             // sh './jenkins/scripts/kill.sh' 
    //         }
    //     }
    }
    
}