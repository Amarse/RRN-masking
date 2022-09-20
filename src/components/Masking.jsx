import  { React, useState } from "react";

const Masking = () => {
  const [first, setFirst] = useState('');
  const [seconds, setSeconds] = useState('');
  const [message, setMessage] = useState('');
  // const [firstErr, setFirstErr] = useState(false);
  // const [secondsErr, setSecondsErr] = useState(false);

  const validFirst = (first) => {
    const regex = new RegExp(
      '^(?:[0-9]{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[1,2][0-9]|3[0,1]))$'
    );
    return regex.test(first);
  };

  const validSeconds = (seconds) => {
    const regex = new RegExp('^[1-4][0-9]{6}$');
    return regex.test(seconds);
  };

  const checkFirst = (first) => {
    setFirst(first);
    setMessage(validFirst(first) ? '' : '틀렸습니다.');

    if (first.length === 0) {
      setMessage('');
    }
  };

  const checkSeconds = (seconds) => {
    setSeconds(seconds);
    setMessage(validSeconds(seconds) ? '' : '틀렸습니다.');
  };
  return (
    <div>
      <p>주민등록번호</p>
      <input
        name='first'
        onChange={(e) => checkFirst(e.target.value)}
        value={first}
        placeholder='주민번호앞자리'
        maxlength='6'
      />
      -
      <input
        name='seconds'
        onChange={(e) => checkSeconds(e.target.value)}
        value={seconds}
        placeholder='OOOOOOO'
        maxlength='7'
      />
      <p>{message}</p>
    </div>
  );
};


export default Masking;