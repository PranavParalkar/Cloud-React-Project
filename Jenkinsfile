pipeline {
    agent any

    tools {
        nodejs 'Node18'
    }

    environment {
        ARTIFACT_DIR = "artifacts\\${env.BUILD_NUMBER}"
    }

    stages {

        stage('Source') {
            steps {
                echo "Source code checked out from Git"
                echo "Branch: ${env.GIT_BRANCH}"
                echo "Commit: ${env.GIT_COMMIT}"
            }
        }

        stage('Build') {
            steps {
                echo "Installing dependencies..."
                bat 'npm install'
                echo "Building React app..."
                bat 'npm run build'
                echo "Build complete. Output in dist/"
            }
        }

        stage('Archive Artifact') {
            steps {
                echo "Archiving versioned artifact for build #${env.BUILD_NUMBER}..."
                archiveArtifacts artifacts: 'dist/**/*', fingerprint: true
                echo "Artifact archived with build number ${env.BUILD_NUMBER}"
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploying build #${env.BUILD_NUMBER}..."
                bat '''
                    if not exist "deployed" mkdir deployed
                    if exist "deployed\\dist" rmdir /s /q "deployed\\dist"
                    xcopy /E /I /Y dist deployed\\dist
                '''
                echo "Deployment complete! Files are in the 'deployed' folder."
                echo "In a real setup, this stage would use AWS CodeDeploy or copy to a server."
            }
        }

    }

    post {
        success {
            echo "Pipeline SUCCESS — Build #${env.BUILD_NUMBER} deployed!"
        }
        failure {
            echo "Pipeline FAILED at build #${env.BUILD_NUMBER}. Check logs above."
        }
    }
}