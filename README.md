# 준비중 - 아래 내용 수정필요

<br/>

## 프로젝트 소개

## 주요기능

1. 홈페이지 메인화면 팝업 관리
   - 메인 페이지에 나타나는 팝업 창을 관리합니다.
2. 공지사항 관리
   - 고객에게 중요한 정보를 쉽게 게시하고 업데이트합니다.
   - 일정한 형식으로 공지사항을 작성하고 기간설정, 공개/비공개 전환이 가능합니다.

## 시작하기

<details>
   <summary>1. 리포지토리 클론 후 IDE로 프로젝트 오픈</summary>

```
   git@github.com:medibuilder/cms-v2.git
```

</details>
<details>
   <summary>2. 패키지 종속성 설치</summary>

```
   yarn
   # or
   yarn install
```

</details>
<details>
   <summary>3. 실행</summary>

```
   npm start
   # or
   yarn start
   // package.json 에 'start' 스크립트에 'next dev --port 3000' 설정
```

</details>

## 주요기술 스택 / 라이브러리

<details>
   <summary>목록</summary>

- Next.js
  - version 12
- React
  - version 17
- Typescript
  - version 5
- redux
  - version 4.2.1
- react-query
- ant-design
  - version 5
- emotion css
- Docker
  - node
- AWS
  - EC2
  - S3
  - CloudFront
  - ECR
  - Codedeploy
- react-page/editor
- tinymce/tinymce-react
- axios
</details>

## 프로젝트 구조

<details>
   <summary>src/pages</summary>

```
├── api
├── before-after
│   ├── category.tsx
│   └── context.tsx
├── _app.tsx
├── _document.tsx
├── 404.tsx
├── event-period.tsx
├── event.tsx
├── home.tsx
├── index.tsx
├── login.tsx
├── notice.tsx
└── popup.tsx
```

</details>

<details>
   <summary>src/components</summary>

```
├── before-after-category
│    ├── BeforeAfterCategoryCard.tsx
│    ├── BeforeAfterSurgeryCard.tsx
│    ├── SubmitBeforeAfterCategoryDrawer.tsx
│    └── SubmitBeforeAfterSurgeryDrawer.tsx
├── before-after-content
│   ├── AfterPeriodInput.tsx
│   ├── BeforeAfterCard.tsx
│   ├── EditBeforeAfterDrawer.tsx
│   ├── HashTagRender.tsx
│   ├── SubmitBeforeAfterDrawer.tsx
│   └──  UploadBeforeAfterImage.tsx
├── common
│   ├── FooterComponent.tsx
│   ├── Head.tsx
│   ├── Loading.tsx
│   ├── Navigation.tsx
│   └── UploadImage.tsx
├── event
│   ├── EditEventDrawer.tsx
│   ├── EventCard.tsx
│   └── SubmitEventDrawer.tsx
├── event-period
│   ├── EditEventPeriodDrawer.tsx
│   ├── EventPeriodCard.tsx
│   └── SubmitEventPeriodDrawer.tsx
├── notice
│   ├── EditNoticeDrawer.tsx
│   ├── NoticeCard.tsx
│   ├── SubmitNoticeDrawer.tsx
│   └── TextEditor.tsx
└── popup
    ├── EditPopUpDrawer.tsx
    ├── PopUpCard.tsx
    └── SubmitPopUpDrawer.tsx
```

</details>

## 배포 흐름

1. github main 브랜치에 push
2. github action 코드 빌드 체크 및 도커이미지 빌드 후 AWS ECR에 푸시
3. codedeploy를 통해 ec2 배포
4. ec2 이전 버전의 컨테이너 종료 후, 새 버전의 컨테이너 실행

## 주요 ESLint 플러그인 및 규칙

- TypeScript 관련 규칙 및 설정.
- Prettier 스타일 가이드 적용.
- import 문 정렬 규칙 적용.
- sonarjs로 코드 품질 및 관련 규칙 적용.
- 사용하지 않는 import 문을 검사하고 제거.
