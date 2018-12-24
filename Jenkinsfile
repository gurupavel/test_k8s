node{
  def Namespace = "test-equivvy"
  def ImageName = "381850379063.dkr.ecr.us-east-1.amazonaws.com/client-equivvy-webapp-react"
  def Creds = "ecr:us-east-1:zfort_aws"
  try{

  stage('Docker Build, Push'){
    withDockerRegistry([credentialsId: "${Creds}", url: 'https://381850379063.dkr.ecr.us-east-1.amazonaws.com/']) {
      sh "docker build -t ${ImageName}:77777 ."
      sh "docker push ${ImageName}:77777"
        }
}
    stage('Deploy on K8s'){
        sh "ls -lash"
        sh "kubectl --kubeconfig=k8sconfig apply -f equivvy_deployment_client_equivvy_webapp_react.yml"
    }
     } catch (err) {
      currentBuild.result = 'FAILURE'
    }
}
