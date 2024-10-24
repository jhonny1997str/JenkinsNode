pipeline {
    agent any

    stages {
        stage('Verificar Node y npm') {
            steps {
                bat 'node -v'  // Verifica la versión de Node.js
                bat 'npm -v'   // Verifica la versión de npm
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
