pipeline {
    agent any

    stages {
        stage('Setup') {
            steps {
                git branch: 'main', url: 'https://github.com/rm-oliveira/teste-e2e-ebac.git'
                bat 'npm install'
            }
        }
         stage('Teste') {
            steps {
                bat '''set N0_COLOR=1
                npx cypress run'''
            }
        }
    }
}