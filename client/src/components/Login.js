import { useState } from 'react';
import { Form, Button, Input } from 'antd';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => onLogin(user));
      }
    });
  }

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        name="name"
        label="Username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input
          className="login"
          type="text"
          id="name"
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input
          className="login"
          type="password"
          id="login_password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Login;
