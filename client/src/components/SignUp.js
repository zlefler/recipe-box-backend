import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [signedUp, setSignedup] = useState(false);
  const [failed, setFailed] = useState(false);

  function handleSubmit(e) {
    setSignedup(false);
    setFailed(false);
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
      .then((data) => {
        if (data['errors']) {
          setFailed(true);
        } else {
          setSignedup(true);
        }
      });
  }

  return (
    <div className="signup-div">
      <Form onFinish={handleSubmit}>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'You must have a username!' }]}
        >
          <Input
            className="signup input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: 'Please add a password.' }]}
        >
          <Input
            className="signup input"
            type="password"
            id="sign_up_password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="password_confirmation"
          label="Confirm your password:"
          rules={[{ required: true, message: 'Please confirm your password.' }]}
        >
          <Input
            className="signup input"
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
      {failed && (
        <div>
          <p>Sorry, I think you made a typo. Please try again.</p>
        </div>
      )}
    </div>
  );
}

export default SignUp;
