pipeline {
    environment {
        registry = "https://381850379063.dkr.ecr.us-east-1.amazonaws.com/"
        application = "client-equivvy-webapp-react"
        registryCredential = 'ecr:us-east-1:zfort_aws'
        image_name = "381850379063.dkr.ecr.us-east-1.amazonaws.com/client-equivvy-webapp-react"

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
                  docker.image(image_name).push('${GIT_COMMIT}') 
                         }
                    }
            }
      }

        stage('Deploy on kubernetes') {
            steps {
                kubernetesDeploy(
                    kubeconfigId: 'zfort_k8s',
                    configs: 'equivvy_deployment_client_equivvy_webapp_react.yml',
                    enableConfigSubstitution: false
                )
            }
        }
    }
}
