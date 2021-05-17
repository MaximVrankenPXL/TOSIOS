pipeline {
    agent any
    stages {
        stage('git repo & clean') {
            steps {
                echo "begin"
                git credentialsId: 'ff18521d-0e16-4cc1-9e2b-c04385225281', url: 'https://github.com/MaximVrankenPXL/TOSIOS.git'
            }
        }
        stage('test') {
            steps {
                echo "leeg"
            }
        }
        stage('package') {
            steps {
                echo "einde"
            }
        }
        stage('package') {
            steps {
              dir ("test2") {
                 sh "mkdir ../projectblue"   
              }
              sh "zip -rq projectblue.zip ./projectblue" 
            }
        }
    }
    post {
        always {
            echo "removed folder" 
            sh "rm -rf test2"
            sh "rm -rf projectblue"
        }
        success {
            archiveArtifacts '*.zip'
            echo "created artifact"
        }
    }
}
