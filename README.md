# Apple 앨범 리스트 웹페이지 클론

## 프로젝트 구동 방법

### Heroku 배포 링크 접속

[https://stark-island-43868.herokuapp.com/](https://stark-island-43868.herokuapp.com/)

### 로컬 환경에서 webpack dev server로 실행

```
npm i
npm start

// localhost:3000 접속 후 테스트
```

### 로컬 환경에서 빌드 후 실행

```
npm i
npm run build

// public/index.html 실행 후 테스트
```

## 기술 스택

JavaScript, React, Emotion.js, Webpack, Babel, Eslint, Prettier

## 사용 방법

PC 환경에서는 왼쪽에 차례로 검색창, 날짜순 정렬, 아티스트 이름순 정렬, 순위순 정렬 버튼이 있습니다.  
모바일 환경에서는 상단에 동일한 검색창과 버튼들이 있습니다.

검색은 앨범 제목 또는 아티스트 이름으로 검색 가능합니다. 검색결과는 순위순으로 나타납니다.

정렬 버튼은 클릭 시 오름차순 / 내림차순으로 변경됩니다.  
현재 필터링된 앨범 리스트의 정보는 앨범 리스트 상단에 'OOOO XXX ORDER' 형태로 보여집니다.

데스크톱, 태블릿, 모바일 환경에 맞게 반응형으로 동작합니다.  
데스크톱 환경에서는 앨범자켓에 마우스를 올리면 앨범 자켓이 애니메이션으로 어둡게 표시됩니다.

앨범을 클릭할 시 앨범 상세 페이지로 이동됩니다.

빠르게 스크롤을 내리면 lazy loading 이 적용되어 불러오지 않은 이미지들이 불러와 지는것을 확인할 수 있습니다.
