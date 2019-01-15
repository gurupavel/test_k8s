pipeline {
  agent any
  stages {


stage('Build') {
      steps {
        sh 'echo "Docker build image"'
        sh 'docker build -t ${image_name} .'
      }
    }
    stage('Publish') {
      when {
        branch 'master'
      }
      steps {
        script {
          docker.withRegistry(registry, registryCredential){
            docker.image(image_name).push('${GIT_COMMIT}')
          }
        }

      }
    }


    stage('Deploy on kubernetes') {
      steps {
       configFileProvider([configFile(fileId: '35b09e42-54db-47e5-9b53-d08712e763e4', targetLocation: '',variable: 'k8s_settings')]) {
          sh 'echo "kube apply"'  
          
        }
      }
    }
  }
  environment {
    registry = 'https://381850379063.dkr.ecr.us-east-1.amazonaws.com/'
    application = 'client-equivvy-webapp-react'
    registryCredential = 'ecr:us-east-1:zfort_aws'
    image_name = '381850379063.dkr.ecr.us-east-1.amazonaws.com/client-equivvy-webapp-react'
  }
   post
  {
        success {

        slackSend channel: '#web',
                  color: 'good',
                  message: "The pipeline ${currentBuild.fullDisplayName} Success"
        }
        failure {
            slackSend channel: '#web',
                  color: 'good',
                  message: "The pipeline ${currentBuild.fullDisplayName} FAILED"
        }
    }
}
