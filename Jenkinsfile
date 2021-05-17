pipeline {
    agent any
    stages {
       stage ('1. Make directory + move files') {
         steps {
           sh "mkdir projectblue2"
           mv "../* projectblue2/."
          }
        }
        stage('2. create projectblue2') {
            steps {
              dir ("projectblue2") {
                sh "mkdir ../bundle"
              }
              sh "zip -rq bundle.zip ./projectblue2"
            }
        }
    }
    post {
        always {
            echo "removed folder" 
            sh "rm -rf projectblue2"
            sh "rm -rf bundle"
        }
        success {
            echo "created artifact"
            archiveArtifacts '*.zip'           
        }
    }
}
