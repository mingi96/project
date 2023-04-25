$(".k-primary").click(function () {
  // 1)회원가입 버튼을 눌렀을때 입력했는지 안했는지 확인하기
  const id = $("#login_id").val();
  const password = $("#exampleInputPassword1").val();
  const password2 = $("#exampleInputPassword2").val();
  const email = $("#exampleInputEmail1").val();
  let like = "";

  //중요. null, undefinded, ''(빈문자열), 0 => 무조건 false

  if (!id) {
    //아이디에 입력된게 없을때
    alert("아이디를 입력해주세요!");
    return;
  } else {
    //아이디가 입력이 됐을때
    if (!idCheck(id)) {
      //아이디 형식에 맞지 않을때
      alert("아이디 형식에 맞지 않습니다!");
      return;
    }
  }

  if (password == null) {
    //패스워드에 입력된게 없을때
    alert("비밀번호를 입력해주세요!");
    return;
  } else {
    if (!pwdCheck(password)) {
      //비밀번호 형식에 맞지 않을때
      alert("비밀번호는 특수문자/문자/숫자 포함 형태의 8~15자리 이내입니다.");
      return;
    }
  }

  if (password2 !== password) {
    alert("비밀번호가 일치하지 않습니다!");
    return;
  }

  if (email == null) {
    //이메일에 입력된게 없을때
    alert("이메일을 입력해주세요!");
    return;
  } else {
    //이메일이 입력이 됐을때
    if (!emailCheck(email)) {
      //이메일 형식에 맞지 않을때
      alert("이메일 형식에 맞지 않습니다!");
      return;
    }
  }
  alert("아이디: " + id + "\n" + "이메일: " + email + "\n" + "회원가입 완료");
});

// 정규식
function pwdCheck(pwd) {
  //특수문자 / 문자 / 숫자 포함 형태의 8~15자리 이내의 암호 정규식 ( 3 가지 조합)
  const reg = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
  return reg.test(pwd); //맞으면 true, 틀리면 false를 준다.
}

function emailCheck(email) {
  const reg =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  return reg.test(email); //맞으면 true, 틀리면 false를 준다.
}

function idCheck(id) {
  var regExp = /^[a-z]+[a-z0-9]{5,19}$/g;

  return regExp.test(id);
}
