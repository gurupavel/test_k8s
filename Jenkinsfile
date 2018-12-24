pipeline {
    environment {
         registry = "https://381850379063.dkr.ecr.us-east-1.amazonaws.com"
         registryCredential = 'dockerregistry'
    }   

    agent {
        docker {
            image 'node:6-alpine' 
            args '-p 3000:3000' 
        }
    }
    stage('Docker Build, Push')
            {
              withDockerRegistry([credentialsId: "${registryCredential}", url: 'https://381850379063.dkr.ecr.us-east-1.amazonaws.com/']) 
                {
                  sh "docker build -t ${ImageName}:$BUILD_NUMBER ."
                  sh "docker push ${ImageName}"
                }
            }
    
  
}


