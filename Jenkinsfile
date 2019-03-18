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
    stage('Deploy') {
      steps {
        nodejs('NodeJS') {
          sh '''npm start
'''
        }

      }
    }
  }
  environment {
    PORT = '80'
  }
}