pipeline {
    agent any

    stages {
        stage('Clonar Repositorio') {
            steps {
                script {
                    echo 'Clonando el repositorio desde GitHub...'
                    git 'https://github.com/jhonny1997str/JenkinsNode.git'
                }
            }
        }

        stage('Verificar Node y npm') {
            steps {
                script {
                    echo 'Verificando versiones de Node.js y npm...'
                    bat 'node -v'
                    bat 'npm -v'
                }
            }
        }

        stage('Verificar package.json') {
            steps {
                script {
                    echo 'Verificando la existencia de package.json...'
                    if (!fileExists('package.json')) {
                        error 'package.json no encontrado en el workspace.'
                    }
                }
            }
        }

        stage('Instalar dependencias') {
            steps {
                script {
                    echo 'Instalando dependencias...'
                    bat 'npm install' // Instala las dependencias en Windows
                }
            }
        }

        stage('Ejecutar pruebas') {
            steps {
                script {
                    echo 'Ejecutando pruebas con Jest...'
                    bat 'npm test' // Ejecuta las pruebas con Jest
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline completado con éxito!'
        }
        failure {
            echo 'Pipeline fallido. Revisar logs para más detalles.'
        }
        always {
            echo 'Finalizando pipeline.'
        }
    }
}
