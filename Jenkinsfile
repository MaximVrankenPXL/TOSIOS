pipeline {
    agent any
    stages {
        stage('git repo & clean') {
            steps {
                echo "begin"
                git credentialsId: 'ff18521d-0e16-4cc1-9e2b-c04385225281', url: 'https://github.com/MaximVrankenPXL/TOSIOS.git'
            }
        }
        stage('install') {
            steps {
                echo "leeg"
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
    }
  post {
    always {
      echo "remove"
      sh "rm -rf test2"
}
