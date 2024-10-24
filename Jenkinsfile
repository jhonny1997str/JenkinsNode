pipeline {
    agent any

    stages {
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
