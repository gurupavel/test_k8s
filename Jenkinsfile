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
stages {
    stage('Docker Build, Push')
            {
               steps{
                  script {
                  docker.build registry + ":$BUILD_NUMBER"
                   }
      }
            }
    
       }
}


