pipeline {
    agent any

    stages {
        stage('Clonar repositorio') {
            steps {
                git 'https://github.com/jhonny1997str/JenkinsNode.git'
            }
        }

        stage('Verificar Node y npm') {
            steps {
                bat 'node -v'
                bat 'npm -v'
            }
        }

        stage('Instalar dependencias') {
            steps {
                bat 'npm install' // Instala las dependencias en Windows
            }
        }

        stage('Ejecutar pruebas') {
            steps {
                bat 'npm test' // Ejecuta las pruebas con Jest
            }
        }
    }
}
