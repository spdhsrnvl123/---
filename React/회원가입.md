# 🚀useState를 이용한 회원가입 기능 구현

App.tsx
```tsx
import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const emailHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const nameHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  const passwordHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const confirmPasswordHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setConfirmPassword(event.currentTarget.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      return alert("비밀번호와 비밀번호확인은 같아야 한다.");
    }
    console.log(`이메일 : ${email}`);
    console.log(`이름 : ${name}`);
    console.log(`패스워드 : ${password}`);

    setEmail("");
    setName("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>회원가입</h1>
      <form
        onSubmit={onSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          required
          onChange={emailHandler}
          value={email}
          placeholder="Email"
        />
        <input
          required
          onChange={nameHandler}
          value={name}
          placeholder="Name"
        />
        <input
          type="password"
          onChange={passwordHandler}
          value={password}
          placeholder="password"
        />
        <input
          type="password"
          onChange={confirmPasswordHandler}
          value={confirmPassword}
          placeholder="password1"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default App;

```

codesandbox : https://codesandbox.io/s/hoeweongaib-8iwv9c

참고 : https://velog.io/@ljieun97/react-로그인회원가입-FE-구현-useState
