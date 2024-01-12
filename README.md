# 리팩토링 계획서

---

## 구현 예정 목록

- [X] 페이지 구분 - /, /about, /projects, /contact
- [ ] 전체적인 UI 변경
- [X] projects.json 추가 (디비에서 가져와서 생성)
- [ ] 프로젝트 상세 글 페이지 추가 - /projects/[projectTitle]
- [ ] 상태 관리 라이브러리 (선택)
- [ ] 리팩토링


## 상세 설명

### 1. 페이지 구분 

- [X] 루트 별로 페이지 생성

### 2. 전체적인 UI 변경 

- [ ] 스토리북 도입도 고민하기
- [X] 파일, 컴포넌트 구조 잡기
- [X] 서버, 클라이언트 구분하기
- [X] 페이지 구현
  - [X] HomePage
  - [X] AboutPage
  - [X] ProjectsPage
  - [X] ContactPage

### 3. projects.json

- [X] 디비에서 데이터 읽기
  - [X] notion api 사용하기
- [X] 읽어온 데이터 가공하기 (원하는 형태로)
  ```
  type Project = {
    title : string; //=> 프로젝트 제목
    id : string; //=> 게시물 가져올 때 해당 블록(상세 게시물 페이지 블록) id가 필요하다.
    image : string //=> 프로젝트 대표 이미지( 카드에서 보여준다. )
    description : {
      people : string //=> 작업 인원
      term : string //=> 작업 기간
      paragraph: string // => 무슨 프로젝트인지 한 줄로 설명 (key 값 변경될 수 있음)
    };
    pinned : boolean //=> 첫 화면에 꼭 보여야 하는 중요한 프로젝트 표시
    category: 'FrontEnd' | 'BackEnd' | 'FullStack' => 프로젝트 게시물 카테고리(기능 구현 파트)  
  }       
  ```
- [X] json 형태로 만들기 
- [X] json 파일 불러서 읽는 함수 만들기 - /src/service/data.ts

### 4. 프로젝트 상세 글 페이지 추가

- [ ] 경로 : /projects/[projectTitle]
- [ ] 노션 상세 게시물 페이지에서 게시물 export 하기
- [ ] 게시물 마크다운 형식으로 변환하기
- [ ] 마크다운 읽는(불러오는) 함수 만들기 - /src/service/posts.ts
- [ ] 마크다운 파싱하기 - 라이브러리 사용
- [ ] 페이지에 내용 뿌려주기
- [ ] 프로젝트 상세 게시물 업데이트하기

### 5. 상태 관리 라이브러리 (선택)

- [ ] RTK(ReduxToolkit), Zustand, Recoil 비교하기
- [ ] 사용법 익히기

### 리팩토링

#### 성능/기능/편의성 개선

- [X] Next.js에서 제공하는 Link, Font, Image 등 적극 활용 - 최적화
  - [ ] 각 태그들이 어떤 기능이 있는지 공부하기
- [ ] SEO 향상
  - [ ] meta
  - [ ] sementic tag
  - [ ] ...more 
- [ ] 반응형 확인하기
  - [X] 모바일
  - [X] 태블릿, 데스크탑 등
  - [ ] 다양한 기기, 브라우저, OS에서 테스트해보기

#### 유지보수 

- [ ] 크기 단위 (e.g. rem) 통일하기 ( 1rem = 10px )
- [ ] tailwindconfig.js 활용하여 중복코드 줄이기
- [ ] 함수명, 변수명은 기능을 한번에 알 수 있게 명시적으로 작성
- [ ] 하나의 함수는 하나의 기능만
- [ ] 타입스크립트 확인하기
- [ ] README.md 작성하기
  - [ ] 파일 구조, 컴포넌트 구조 - 트리 
  - [ ] 이력서에서 포로젝트 상세 설명에 해당하는 코드
- [ ] 테스트 코드 작성하기(선택) - Jest



## 회고 목록

- 각 기술스택 사용한 이유, 활용한 예시(코드)
  - [ ] 프로젝트 Portfolio 상세 설명 업데이트
  - [ ] 이력서 업데이트 
- 새로 알게된, 다시 알게된 (공부한) 부분
  - [ ] 블로그 글 작성
  - [ ] 프로젝트 Portfolio 상세 설명 업데이트
  - [ ] 이력서 업데이트
- 어려웠던, 힘들었던 부분, 오래 걸린 부분 등 
  - [ ] 블로그 글 작성
  - [ ] 프로젝트 Portfolio 상세 설명 업데이트    
- 아쉬운 부분
  - [ ] 프로젝트 Portfolio 상세 설명 업데이트
 
---

# 개인 포트폴리오 사이트 

## 결과물
v0.1.0 [kimyoungen.com](kimyoungen.com)

## 작업 인원, 작업 기간
1명(본인), 2023.12 ~ 2024.01

## 버전
- node v20.9.0
- npm 10.1.0

## 기술 스택
- TypeScript v5
- Next.js v14.0.4
- Tailwind CSS v3.3.0

- notionhq/client v2.2.14 
- github REST API

- gsap
- react-markdown
- react-multi-carousel

- eslint, prettier

## 프로젝트 구조

```
Home ( / )
├── About ( /about )
├── Projects ( /projects )
|        └── [projectId] ( /projects/[projectId] )
└── Contact ( /contact )
```

## 프로젝트 둘러보기

<table>
 <tr>
   <th>Home</th>
   <th>About</th>
   <th>Projects</th>
   <th>Contact</th>
 </tr>
 <tr>
   <td>[gif]</td>
   <td>[gif]</td>
   <td>[gif]</td>
   <td>[gif]</td>
 </tr>
</table>


## 기능 소개
- 반응형으로 만들어 모바일 환경의 사용자들의 편의성을 높였습니다.
- tailwind.config.js 에서 반복적으로 사용되는 값을 지정해 개발할 때의 편의성을 높였습니다.
- 보안과 사용자의 편의성을 위해 서버에서 데이터를 가져왔습니다.
  - 보안을 위해 API key 값은 .env 파일에 넣어 사용했는데, 클라이언트 측에서는 아예 가져올 수 없게 NEXT_PUBLIC 을 붙이지 않았습니다.
  - 컴포넌트에 async를 붙여 컴포넌트 자체에서 데이터를 서버로부터 가져올 수 있게 했습니다. 
  
  
   







