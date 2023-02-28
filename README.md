# notion-blog

nestJS와 nextJS로 notion에 작성 한 글을 가져온 블로그 만들기

## Workspace

- `@local/back`: 백엔드 작업공간, back 폴더에 존재. (nest.js)
- `@local/front`: 프론트 작업공간, front 폴더에 존재. (next.js)
- `@local/shared`: 공통 모듈 작업공간, shared 폴더에 존재.
    - 사용하기 위해 `tsc` 사용 필수.

### How to use workspace

```bash
# use workspace script
$ yarn workspace [workspace] [script]
```

## Script

```bash
# shared file typescript compile. (use tsc)
$ yarn shared:update

# back start
$ yarn start:back
$ yarn start:back:dev

# front start
$ yarn start:front
$ yarn start:front:dev
```

## Version

### v0.1.0

```text
- Main 페이지만 제작되었습니다.
- 배너, 네이게이터, 블로그 포스팅 정보 일부보기, 소스정보 보기 등의 기능이 있습니다.
- 사용자 접속기기에 설정된 색상모드에 따라 페이지 색상이 변경되는 기능을 추가하였습니다.
```

### v0.1.1

```text
- Main 페이지만 수정되었습니다.
- 포스팅 이미지를 불러올 때 로딩 이미지를 표시합니다.
- 페이지 색상 모드를 변경 할 수 있는 스위치를 추가했습니다.
```

### v0.2.1

```text
- Posts 페이지를 생성했습니다.
- 네비게이션, 푸터는 메인페이지와 동일합니다.
- 스크롤이 하단으로 이동 할 때마다 새로운 포스팅 자료를 불러옵니다.
- 윈도우에서 스위치에 스크롤 버튼이 생기는 오류를 수정했습니다.
```

### v0.2.2

```text
- Posts 페이지만 업데이트 했습니다.
- 처음 페이지에서 10개의 포스트가 보이며 스크롤 시 다음 10개의 포스트가 보이도록 수정햇습니다.
- 카테고리 혹은 태그 클릭 시 해당 값으로 검색이 되도록 하였습니다.
- 타이틀이 제대로 표시되지 않던 오류를 수정했습니다.
```

### v0.3.0

```text
- Profile 페이지를 생성했습니다.
- 프로필 이미지와 간단한 정보를 볼 수 있도록 구성하였습니다.
```

### v0.3.1

```text
- 포스팅 데이터 타입이 올바르지 않을 경우 앱이 꺼지는 버그 해결
- 모드 스위치 버튼이 안눌리던 버그 수정
- Next.js의 기타 경고문 해결
```

### v0.3.2

```text
- 포스팅 데이터 캐시기능 추가, 캐시는 5분으로 세팅.
```

### v0.3.3

```text
- 포스트 카드 이미지 로딩 개선
- 문서 언어 속성 추가(ko)
```
