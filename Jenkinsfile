pipeline {
    agent any
    stages {
       stage ('1. git clone') {
         steps {
           sh "mkdir projectblue"
           dir ("projectblue") {
              sh "pwd"
              git "https://github.com/MaximVrankenPXL/TOSIOS.git"
            }
          }
        }
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
        stage('create projectblue') {
            steps {
              dir ("projectblue") {
                sh "mkdir ../bundle"  
                //sh "mv ../* ../projectblue"
              }
              sh "zip -rq bundle.zip ./bundle"
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
