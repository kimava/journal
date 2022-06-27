# Journal

## Overview
React Redux에 기반한 Journal 앱입니다. <br/>
이메일 계정을 통한 회원가입 또는 구글이나 트위터 계정으로 로그인해 일기를 작성할 수 있습니다. <br/>
Demo Link: https://avajournal.netlify.app/

<br/>

## Purpose
- Redux를 이용한 상태 관리 및 데이터 흐름 이해
- Firebase provider login 외에 이메일로 회원 가입, 비밀번호 재설정 기능 구현
<br/>

## Tech Stack
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=redux&logoColor=white"/> <img src="https://img.shields.io/badge/React Router-CA4245?style=flat-square&logo=react-router&logoColor=white"/> <img src="https://img.shields.io/badge/styled-components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/>
<img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=white"/>
<br/>

#### Redux
하나의 스토어에서만 state를 관리할 수 있고 불변성, action을 통한 상태 반환 등으로 예측가능하다는 점에 강점이 있다고 판단해 선택했습니다.
러닝커브가 있지만 공식문서 튜토리얼이 상세해 학습이 편하다는 점도 선택의 중요한 이유가 되었습니다.

#### Firebase Auth & Realtime DB
백엔드 없이 Authentication과 Database를 구현하기 위해 선택하게 되었습니다. <br/>
이전 프로젝트에서는 provider를 이용한 로그인 기능만 구현했는데, Firebase 기능들을 더 깊이있게 다뤄보기 위해 이메일 계정으로 회원가입 및 로그인, 비밀번호 재설정 기능을 추가로 구현했습니다.

#### Styled-components
이전 프로젝트에서 점진적으로 일부 컴포넌트에만 styled-components를 적용했는데, 이번 프로젝트에서 전역적으로 사용해 global style, props 등 심화된 기능을 적용해 보기 위해 선택했습니다.


<br/>

## Features 
<img width="1440" alt="Screen Shot 2022-06-26 at 12 13 51 AM" src="https://user-images.githubusercontent.com/47381555/175779771-6913db5e-438b-4a6e-b397-b00fc3ba76dd.png">


```
- 이메일로 회원가입 후 로그인하거나 구글, 트위터 계정으로 로그인할 수 있습니다.
- 비밀번호를 잊었을 경우, 비밀번호 재설정 이메일을 발송하여 비밀번호를 변경할 수 있습니다.
- 제목, 일기 내용, 그 날의 기분 선택 후 저장할 수 있습니다.
- 오른쪽 리스트에서 VIEW 클릭 시 전체 페이지에서 작성한 일기를 확인하거나 수정 및 삭제할 수 있습니다.
- 리스트 오른쪽 상단 버튼 클릭하여 해당 일기를 수정하거나 삭제할 수 있습니다.
```
<br/>

## What I've learned
```
- React Redux를 이용한 CRUD 구현
- Redux 상태 변이의 흐름
- Redux Thunk & Async Thunk에 대한 이해
```

<br/>

## Review
```
- Redux 공식문서로 학습하면서, 아키텍쳐에 대해 충분히 고민해보지 않고 튜토리얼에 있는 트리 구조를 그대로 따랐던 점이 아쉬움.
- 테스트 코드 추가 필요
- 이미지 추가 기능, 다크 모드, 캘린더 뷰 등을 추가해 더 실용성 있는 앱 제공하기!
```



