pipeline {
    environment {
         registry = "https://381850379063.dkr.ecr.us-east-1.amazonaws.com/"
         application = "client-equivvy-webapp-react"
         registryCredential = 'dockerregistry'
         image_name = registry + application+':$(BUILD_NUMBER)'
    }   

agent {
    docker {
      image 'node:6-alpine' 
      args '-p 3000:3000' 
       }
    }
stages {
    stage('Docker Build, Push')
            {
               steps{ 
                  withDockerRegistry([credentialsId: "${registryCredential}", url: $(registry)]) {
                  sh "docker build -t $(image_name)"
                  sh "docker push ${image_name}"
                                                } 
                   }
            }
    
       }
}


