pipeline {
    agent any
    stages {
       stage ('1. GIT CLONE') {
         steps {
              git url: "https://github.com/2TIN-Research-Project-SNB/research-project-snb2-rp2021.git"
          }
       }
       stage('2. MAKE ARTIFACT') {
            steps {
              script {
                myapp = docket.build("frederickdetrezpxl/dungeonkill:${env.BUILD_ID}")
              }
            }
        }
       stage('3. PUSH ARTIFACT') {
            steps {
              script {
                docket.withRegistry('https://registry.hub.docker.com','dockerhub') {
                  myapp.push("latest");
                  myapp.push("${env.BUILD_ID}");
              }
            }
        }
       stage('4. DEPLOY ARTIFACT') {
            steps {
              script {
                kubernetesDeploy(configs: "dungeonkill_dep.yml", kubeconfigId: "mykubeconfig")
              }
            }
        }
        
    }
}
