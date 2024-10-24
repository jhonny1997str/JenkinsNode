pipeline {
    agent any

    stages {
        stage('Verificar Node y npm') {
            steps {
                bat 'node -v'
                bat 'npm -v'
            }
        }

        stage('Verificar package.json') {
            steps {
                script {
                    if (!fileExists('package.json')) {
                        error 'package.json no encontrado en el workspace.'
                    }
                }
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
