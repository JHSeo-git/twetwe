# Auth

어플리케이션 로그인, 회원가입, 로그아웃 등 사용자 관리를 어떻게 하는지를 작성합니다.

## Intro

Backend를 baas인 Supabase를 사용합니다.
그래서 별도 서버를 두지 않고 Supabase에서 제공하는 Auth관리를 사용합니다.

## Entry

회원가입과 로그인을 별도로 구분하지 않고 사용자를 관리합니다.

회원가입/로그인 방법은 크게 2가지로 구분합니다.

- Email
- OAuth

### Email Entry

Email을 이용한 자체회원은 이메일을 기입하여 Entry합니다.

1. Email 입력
2. Entry 버튼 클릭
3. 신규 회원일 경우 자동으로 가입 처리
4. 입력한 Email로 로그인 할 수 있는 링크 발송
5. 해당 링크 클릭을 통한 로그인

### OAuth Entry

OAtuth 제공 리스트는 다음과 같습니다.

Supabase에서 제공되는 리스트에 한해 선택하였습니다.

- Github
- Google
- Apple
- Facebook
