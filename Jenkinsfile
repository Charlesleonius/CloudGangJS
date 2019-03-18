pipeline {
  agent any
  stages {
    stage('Build and Test') {
      steps {
        nodejs('NodeJS') {
          sh '''npm install
npm run test-jenkins'''
        }

      }
    }
  }
  environment {
    PORT = '3000'
  }
}