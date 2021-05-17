pipeline {
    agent any
    stages {
       stage ('1. git clone') {
         steps {
           sh "mkdir projectblue2"
           dir ("projectblue2") {
              sh "pwd"
              //git "https://github.com/MaximVrankenPXL/TOSIOS.git"
            }
          }
        }
        stage('2. create projectblue') {
            steps {
              dir ("projectblue2") {
                sh "mv ../* ../."
                sh "mkdir ../bundle"
                
              }
              sh "zip -rq bundle.zip ./projectblue2"
            }
        }
    }
    post {
        always {
            echo "removed folder" 
            //sh "rm -rf projectblue2"
            sh "rm -rf bundle"
        }
        success {
            echo "created artifact"
            archiveArtifacts '*.zip'           
        }
    }
}
