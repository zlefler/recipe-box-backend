import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [signedUp, setSignedup] = useState(false);

  function handleSubmit(e) {
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    })
      .then((res) => res.json())
      .then(() => setSignedup(true));
  }

  return (
    <div className="signup-div">
      <Form onFinish={handleSubmit}>
        <Form.Item label="Username" name="username">
          <Input
            className="signup"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Item>
        <Form.Item name="password" label="Password">
          <Input
            className="signup"
            type="password"
            id="sign_up_password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>
        <Form.Item name="password_confirmation" label="Password Confirmation">
          <Input
            className="signup"
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
      {signedUp && (
        <div>
          <p>
            You did it! Now you can <Link to="/">login.</Link>
          </p>
        </div>
      )}
    </div>
  );
}

export default SignUp;
