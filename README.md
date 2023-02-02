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