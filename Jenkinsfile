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
        stage('2. create projectblue') {
            steps {
              dir ("projectblue") {
                sh "mkdir ../bundle"  
              }
              sh "zip -rq bundle.zip ./projectblue"
            }
        }
    }
    post {
        always {
            echo "removed folder" 
            sh "rm -rf test2"
            sh "rm -rf bundle"
            sh "rm -rf bundle.zip"
        }
        success {
            echo "created artifact"
            archiveArtifacts '*.zip'           
        }
    }
}
