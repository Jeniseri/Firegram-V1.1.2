import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [password, setPassword] = useState('');
  const [passwordRequired, setPasswordRequired] = useState(true);
  const [passwordAccepted, setPasswordAccepted] = useState(false);

  const types = ['image/png', 'image/jpeg'];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpg)');
    }
  };

  const checkPassword = (e) => {
    e.preventDefault();

    if (password === '123454321') {
      setPasswordAccepted(true);
      setPasswordRequired(false);
      alert('Password Accepted! Hai Guyss!!');
    } else {
      alert('Password salah. Akses ditolak.');
    }
  };

  return (
    <form>
      {passwordRequired && !passwordAccepted ? (
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={passwordStyle}
          />
          <button onClick={checkPassword} style={submitButtonStyle}>Submit</button>
        </div>
      ) : (
        <>
          <label>
            <input type="file" onChange={handleChange} />
            <span>+</span>
          </label>
          <div className="output">
            {error && <div className="error">{error}</div>}
            {file && <div>{file.name}</div>}
            {file && <ProgressBar file={file} setFile={setFile} />}
          </div>
        </>
      )}
    </form>
  );
};

const passwordStyle = {
  background: 'var(--primary)',
  color: 'white',
};

const submitButtonStyle = {
  background: 'var(--primary)',
  color: 'var(--secondary)',
};

export default UploadForm;
