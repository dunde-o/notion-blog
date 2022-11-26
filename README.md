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