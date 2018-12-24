node{
  def Namespace = "test-equivvy"
  def ImageName = "381850379063.dkr.ecr.us-east-1.amazonaws.com/client-equivvy-webapp-react"
  def Creds = "ecr:us-east-1:zfort_aws"
  try{
  stage('Checkout'){
      sh "git rev-parse --short HEAD > .git/commit-id"
      imageTag= readFile('.git/commit-id').trim()
}
  stage('RUN Unit Tests'){
      sh "npm install"
      sh "npm test"
  }
  stage('Docker Build, Push'){
    withDockerRegistry([credentialsId: "${Creds}", url: 'https://381850379063.dkr.ecr.us-east-1.amazonaws.com/']) {
      sh "docker build -t ${ImageName}:${imageTag} ."
      sh "docker push ${ImageName}"
        }
}
    stage('Deploy on K8s'){
sh "ansible-playbook /var/lib/jenkins/ansible/sayarapp-deploy/deploy.yml  --user=jenkins --extra-vars ImageName=${ImageName} --extra-vars imageTag=${imageTag} --extra-vars Namespace=${Namespace}"
    }
     } catch (err) {
      currentBuild.result = 'FAILURE'
    }
}
