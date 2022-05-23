import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../../_actions/user_action';
import { useNavigate } from 'react-router-dom';
import DaumPostCode from 'react-daum-postcode';

export default function Register(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [Nickname, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [PasswordConfirm, setPasswordConfirm] = useState('');
  const [Address, setAddress] = useState('');
  const [DetailAddress, setDetailAddress] = useState('');
  const [Name, setName] = useState('');
  const [CEOName, setCEOName] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [Info, setInfo] = useState('');
  const [open, setOpen] = useState(false);

  const onEmailHandler = e => {
    setEmail(e.currentTarget.value);
  };
  const onPasswordHandler = e => {
    setPassword(e.currentTarget.value);
  };
  const onPasswordConfirmHandler = e => {
    setPasswordConfirm(e.currentTarget.value);
  };
  const onAddressHandler = data => {
    setAddress(data.address);
    setOpen(false);
  };
  const onPostHandler = e => {
    setOpen(true);
  };
  const onDetailAddressHandler = e => {
    setDetailAddress(e.currentTarget.value);
  };
  const onNameHandler = e => {
    setName(e.currentTarget.value);
  };
  const onCEONameHandler = e => {
    setCEOName(e.currentTarget.value);
  };
  const onPhoneNumberHandler = e => {
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(e.currentTarget.value)) {
      setPhoneNumber(e.currentTarget.value);
    }
  };
  const onInfoHandler = e => {
    setInfo(e.currentTarget.value);
  };
  const onSubmitHandler = e => {
    e.preventDefault();

    if (!Nickname) {
      return alert('아이디를 입력해주세요.');
    } else if (!Password) {
      return alert('비밀번호를 입력해주세요.');
    } else if (!PasswordConfirm) {
      return alert('비밀번호 확인을 입력해주세요.');
    } else if (!Address) {
      return alert('주소를 입력해주세요.');
    } else if (!Name) {
      return alert('기업 이름을 입력해주세요.');
    } else if (!CEOName) {
      return alert('기업 대표자명을 입력해주세요.');
    } else if (!PhoneNumber) {
      return alert('대표 번호를 입력해주세요.');
    } else if (Password !== PasswordConfirm) {
      return alert('비밀번호와 비밀번호 확인은 같아야합니다.');
    }

    const body = {
      id: Nickname,
      password: Password,
      address: Address,
      detailAddress: DetailAddress,
      name: Name,
      ceoName: CEOName,
      phoneNumber: PhoneNumber,
      type: props.name,
      info: Info,
    };

    dispatch(registerUser(body)).then(response => {
      if (response.payload.isSuccess) {
        alert(response.payload.message);
        navigate('/users/login');
      } else {
        alert(response.payload.message);
      }
    });
  };

  useEffect(() => {
    if (PhoneNumber.length === 9) {
      setPhoneNumber(PhoneNumber.replace(/-/g, '').replace(/(\d{2})(\d{3})(\d{4})/, '$1-$2-$3'));
    } else if (PhoneNumber.length === 10) {
      setPhoneNumber(PhoneNumber.replace(/-/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
    } else if (PhoneNumber.length === 12) {
      setPhoneNumber(PhoneNumber.replace(/-/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
    } else if (PhoneNumber.length === 13) {
      setPhoneNumber(PhoneNumber.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
    }
  }, [PhoneNumber]);

  return (
    <>
      <div style={{ margin: '0 auto', width: '400px' }}>
        <form id="frmIdLogin" target="_top" autoComplete="off" method="POST" onSubmit={onSubmitHandler}>
          <ul className="panel_wrap">
            <li className="panel_item">
              <div className="panel_inner" role="tabpanel" aria-controls="loginid">
                <div className="id_pw_wrap">
                  <div className="input_row" id="id_line">
                    <input
                      type="text"
                      id="id"
                      name="id"
                      placeholder="아이디"
                      value={Nickname}
                      onChange={onEmailHandler}
                      title="아이디"
                      className="input_text"
                      maxLength="20"
                    />
                  </div>
                  <div className="input_row" id="pw_line">
                    <input
                      type="password"
                      id="pw"
                      name="pw"
                      placeholder="비밀번호"
                      value={Password}
                      onChange={onPasswordHandler}
                      title="비밀번호"
                      className="input_text"
                      maxLength="16"
                      minLength="6"
                    />
                  </div>
                  <div className="input_row" id="pwConfirm_line">
                    <input
                      type="password"
                      id="pwConfirm"
                      name="pwConfirm"
                      placeholder="비밀번호 확인"
                      value={PasswordConfirm}
                      onChange={onPasswordConfirmHandler}
                      title="비밀번호 확인"
                      className="input_text"
                      maxLength="16"
                      minLength="6"
                    />
                  </div>
                  <div className="input_row" id="name_line">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="기업 이름"
                      value={Name}
                      onChange={onNameHandler}
                      title="기업 이름"
                      className="input_text"
                    />
                  </div>
                  <div className="input_row" id="ceo_line">
                    <input
                      type="text"
                      id="ceo_name"
                      name="ceo_name"
                      placeholder="기업 대표자명"
                      value={CEOName}
                      onChange={onCEONameHandler}
                      title="기업 대표자명"
                      className="input_text"
                    />
                  </div>
                  <div className="input_row" id="phone_line">
                    <input
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder="대표 번호"
                      value={PhoneNumber}
                      onChange={onPhoneNumberHandler}
                      title="대표 번호"
                      className="input_text"
                      minLength="11"
                    />
                  </div>
                  <div className="input_row" id="address_line">
                    <input
                      type="text"
                      id="address"
                      name="address"
                      placeholder="주소"
                      value={Address}
                      onClick={onPostHandler}
                      onChange={onAddressHandler}
                      title="주소"
                      className="input_text"
                      readOnly
                    />
                    {open ? (
                      <DaumPostCode style={{ height: '470px' }} onComplete={onAddressHandler} className="post-code"></DaumPostCode>
                    ) : null}
                  </div>
                  <div className="input_row" id="detail_address_line">
                    <input
                      type="text"
                      id="detail_address"
                      name="detail_address"
                      placeholder="상세 주소"
                      value={DetailAddress}
                      onChange={onDetailAddressHandler}
                      title="상세 주소"
                      className="input_text"
                    />
                  </div>
                  <div className="input_row" id="info_line">
                    <input
                      type="text"
                      id="info"
                      name="info"
                      placeholder="기업 소개"
                      value={Info}
                      onChange={onInfoHandler}
                      title="기업 소개"
                      className="input_text"
                    />
                  </div>
                </div>
                <div className="btn_login_wrap">
                  <button type="submit" className="btn_login" id="log.login">
                    <span className="btn_text">가입완료</span>
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </form>
      </div>
    </>
  );
}
