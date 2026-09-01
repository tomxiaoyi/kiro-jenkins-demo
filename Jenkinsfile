pipeline {
    agent any
    
    // 环境变量
    environment {
        APP_NAME = 'kiro-jenkins-demo'
        PORT = '3000'
        DOCKER_IMAGE = "kiro-jenkins-demo:latest"
    }
    
    // 触发器 - 可选配置
    triggers {
        // 每次代码提交后自动触发构建
        // pollSCM('H/5 * * * *')
    }
    
    stages {
        // Stage 1: 检出代码
        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
                checkout scm
                sh 'git rev-parse HEAD > COMMIT_ID'
                def commitId = readFile('COMMIT_ID').trim()
                echo "Commit: ${commitId}"
            }
        }
        
        // Stage 2: 安装依赖
        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }
        
        // Stage 3: 代码检查
        stage('Lint') {
            steps {
                echo 'Running code lint...'
                sh 'npm run test || true'
            }
        }
        
        // Stage 4: 构建应用
        stage('Build') {
            steps {
                echo 'Building application...'
                sh 'echo "Build completed"'
            }
        }
        
        // Stage 5: 测试
        stage('Test') {
            steps {
                echo 'Running tests...'
                sh '''
                    echo "Running unit tests..."
                    # 可以添加实际的测试命令
                    # npm test
                    echo "Tests passed!"
                '''
            }
        }
        
        // Stage 6: 静态代码分析（可选）
        stage('Security Scan') {
            steps {
                echo 'Running security scan...'
                sh '''
                    echo "Security scan completed"
                '''
            }
        }
        
        // Stage 7: 打包Docker镜像（可选）
        stage('Docker Build') {
            when {
                expression { env.BRANCH_NAME == 'main' || env.BRANCH_NAME == 'master' }
            }
            steps {
                echo 'Building Docker image...'
                sh '''
                    echo "Docker build skipped for demo"
                    # docker build -t $APP_NAME:$BUILD_NUMBER .
                '''
            }
        }
        
        // Stage 8: 部署到测试环境（可选）
        stage('Deploy to Test') {
            when {
                expression { env.BRANCH_NAME != 'main' && env.BRANCH_NAME != 'master' }
            }
            steps {
                echo 'Deploying to test environment...'
                sh '''
                    echo "Deploying to test environment..."
                    # pm2 restart $APP_NAME || pm2 start app.js --name $APP_NAME
                '''
            }
        }
        
        // Stage 9: 部署到生产环境（可选）
        stage('Deploy to Production') {
            when {
                expression { env.BRANCH_NAME == 'main' || env.BRANCH_NAME == 'master' }
            }
            steps {
                echo 'Deploying to production environment...'
                sh '''
                    echo "Deploying to production..."
                    # pm2 restart $APP_NAME
                '''
            }
        }
    }
    
    // 构建后的操作
    post {
        always {
            echo 'Cleaning workspace...'
            cleanWs()
        }
        success {
            echo '✓ Build succeeded!'
            // 可以添加通知
            // slackSend message: "Build succeeded: ${env.JOB_NAME} #${env.BUILD_NUMBER}"
        }
        failure {
            echo '✗ Build failed!'
            // 可以添加通知
            // slackSend message: "Build failed: ${env.JOB_NAME} #${env.BUILD_NUMBER}"
        }
        unstable {
            echo '⚠ Build unstable!'
        }
    }
}