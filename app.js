const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// 中间件 - 解析JSON
app.use(express.json());

// 中间件 - 日志记录
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// 根路径 - 欢迎页面
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Kiro + Jenkins Demo API',
    version: '1.0.0',
    endpoints: {
      hello: '/hello',
      info: '/info',
      health: '/health'
    }
  });
});

// /hello 接口 - 返回指定消息
app.get('/hello', (req, res) => {
  res.json({
    message: 'Hello from Kiro + Jenkins!',
    timestamp: new Date().toISOString()
  });
});

// /info 接口 - 返回应用信息
app.get('/info', (req, res) => {
  res.json({
    appName: 'Kiro + Jenkins Demo',
    version: '1.0.0',
    description: 'A simple Express app for testing Jenkins CI/CD',
    nodeVersion: process.version,
    platform: process.platform
  });
});

// /health 健康检查接口
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    uptime: process.uptime(),
    memory: process.memoryUsage()
  });
});

// 404 处理
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: 'The requested endpoint does not exist'
  });
});

// 错误处理中间件
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message
  });
});

// 启动服务器
app.listen(port, () => {
  console.log(`=================================`);
  console.log(`  Kiro + Jenkins Demo App`);
  console.log(`  Server running on port ${port}`);
  console.log(`=================================`);
  console.log(`Endpoints:`);
  console.log(`  GET /      - Welcome page`);
  console.log(`  GET /hello - Hello message`);
  console.log(`  GET /info  - App info`);
  console.log(`  GET /health - Health check`);
  console.log(`=================================`);
});

module.exports = app;