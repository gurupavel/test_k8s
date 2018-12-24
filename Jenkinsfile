pipeline {
    environment {
         registry = "https://381850379063.dkr.ecr.us-east-1.amazonaws.com/"
         application = "client-equivvy-webapp-react"
         registryCredential = 'dockerregistry'
         image_name = "https://381850379063.dkr.ecr.us-east-1.amazonaws.com/client-equivvy-webapp-react" + ':$(BUILD_NUMBER)'
    }   

agent any
stages {
    stage('Docker Build, Push')
            {
               steps{ 
                  withDockerRegistry([credentialsId: "${registryCredential}", url: $(registry)]) {
                  sh "docker build -t ${image_name}"
                  sh "docker push ${image_name}"
                                               } 
                   }
            }
    
       }
}


