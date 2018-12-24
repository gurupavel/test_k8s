pipeline {

    environment {
         registry = "https://381850379063.dkr.ecr.us-east-1.amazonaws.com/"
         application = "client-equivvy-webapp-react"
         registryCredential = 'ecr:us-east-1:zfort_aws'
         image_name = "381850379063.dkr.ecr.us-east-1.amazonaws.com/client-equivvy-webapp-react:${BUILD_NUMBER}"
    }

  agent any
  stages {
    stage('Build') {
      steps {
        sh 'docker build -t ${image_name} .'
      }
    }
    stage('Publish') {
      when {
        branch 'master'
      }
      steps {
              script{
                  docker.withRegistry(registry, registryCredential){  
                  docker.image(image_name).push() 
                         }
                    }
            }
      }
    stage('K8S applying'){
        steps{
              script {

                     withKubeConfig([credentialsId: 'zfort_k8s', serverUrl: 'https://api-zfort-k8s-local-vji2st-1869253548.us-east-1.elb.amazonaws.com']){
                         sh 'kubectl apply -f equivvy_deployment_client_equivvy_webapp_react.yml'
                         }
        
                  }
              

             }

            

      }
    }
  

post
 
    {
 
        always
 
        {
 
            // make sure that the Docker image is removed
 
            sh "docker rmi $image_name | true"
 
        }
 
    }

}


