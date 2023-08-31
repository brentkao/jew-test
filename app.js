const express = require('express');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const path = require('path')
const port = process.env.PORT ?? 3000;
const app = express();
app.use(express.json());
app.use(cookieParser());

const secretKey = 'your_secret_key';

// 資料庫模擬（實際情況中，使用真實的資料庫）
const users = [
    { id: 1, username: 'tns2@gmail.com', password: 'password1', name: 'User One' },
    { id: 2, username: 'user2', password: 'password2', name: 'User Two' }
];

// 設定靜態資源路徑
app.use(express.static(path.join(__dirname, 'dist')));

// 登入路由
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    let username = email;
    // 在實際情況中，你需要檢查資料庫中的使用者資料
    const user = users.find(u => u.username === username && u.password === password);
    
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    // 生成 JWT
    const token = jwt.sign({ id: user.id }, secretKey);
    
    // 將 JWT 存儲在 Cookie 中
    res.cookie('jwt', token, { httpOnly: true });
    
    res.json({ message: 'Login successful' });
});

// 取得使用者資訊路由
app.get('/profile', (req, res) => {
    const jwtCookie = req.cookies.jwt;
    
    if (!jwtCookie) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    
    // 驗證 JWT
    jwt.verify(jwtCookie, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token' });
        }
        
        // 在實際情況中，你可以使用解碼的使用者 ID 查詢資料庫取得使用者資料
        const user = users.find(u => u.id === decoded.id);
        
        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }
        
        res.json({ user });
    });
});

// 登出路由
app.get('/logout', (req, res) => {
    // 清除 JWT Cookie
    res.clearCookie('jwt');
    res.json({ message: 'Logout successful' });
});


// 這個路由將提供 index.html
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
  

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
