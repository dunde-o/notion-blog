import { NotionPage } from "../types/models/notion";

export const dummyNotionPages: NotionPage[] = [
  {
    createTime: new Date(),
    updateTime: new Date(),
    coverImgUrl: "",
    iconImgUrl: "/assets/images/sample.jpeg",
    pageLink: "/",
    pageHead: {
      title: "today create",
      description: "today create data",
      category: "none",
      tag: ["tag1"],
    },
  },
  {
    createTime: new Date("2022-12-25T03:24:00"),
    updateTime: new Date("2022-12-25T03:24:00"),
    coverImgUrl: "",
    iconImgUrl: "/assets/images/sample.jpeg",
    pageLink: "/",
    pageHead: {
      title: "크리스마스 데이터",
      description: "크리스마스로 지정된 날짜의 데이터입니다.",
      category: "none",
      tag: ["tag1", "tag2"],
    },
  },
  {
    createTime: new Date("2022-11-11T03:24:00"),
    updateTime: new Date("2022-11-11T03:24:00"),
    coverImgUrl: "",
    iconImgUrl: "/assets/images/sample.jpeg",
    pageLink: "/",
    pageHead: {
      title: "과거자료 데이터",
      description: "과거자료의 데이터입니다.",
      category: "none",
      tag: ["tag1", "tag2", "tag3"],
    },
  },
  {
    createTime: new Date("2022-10-10T03:24:00"),
    updateTime: new Date("2022-10-10T03:24:00"),
    coverImgUrl: "",
    iconImgUrl: "/assets/images/sample.jpeg",
    pageLink: "/",
    pageHead: {
      title:
        "제목이 아주 긴 데이터입니다. 대충 제목이 길게 나왔을 때 어떻게 표현 될지 테스트를 위해서 사용됩니다.",
      description: "반대로 설명을 짧습니다.",
      category: "none",
      tag: ["tag1", "tag2"],
    },
  },
  {
    createTime: new Date("2022-10-10T03:24:00"),
    updateTime: new Date("2022-10-10T03:24:00"),
    coverImgUrl: "",
    iconImgUrl: "/assets/images/sample.jpeg",
    pageLink: "/",
    pageHead: {
      title: "설명이 긴 데이터",
      description:
        "설명이 매우 깁니다. 이 설명은 길게 표현될 때 어떻게 표현될 지 테스트를 하기 위해서 사용됩니다.",
      category: "none",
      tag: ["tag1", "tag2"],
    },
  },
  {
    createTime: new Date("2022-10-10T03:24:00"),
    updateTime: new Date("2022-10-10T03:24:00"),
    coverImgUrl: "",
    iconImgUrl: "/assets/images/sample.jpeg",
    pageLink: "/",
    pageHead: {
      title:
        "제목과 설명이 전부 길었을 때 데이터입니다. 양쪽 데이터 모두 길게 표현함으로 어떻게 표시될 지 확인해보기 위함입니다.",
      description:
        "두 데이터가 전부 길 때 표시되는 것을 확인하기 위한 더미 데이터입니다.",
      category: "none",
      tag: ["tag1", "tag2"],
    },
  },
  {
    createTime: new Date("2022-10-10T03:24:00"),
    updateTime: new Date("2022-10-10T03:24:00"),
    coverImgUrl: "",
    iconImgUrl: "/assets/images/sample.jpeg",
    pageLink: "/",
    pageHead: {
      title: "1",
      description: "극단적으로 짧은 제목",
      category: "dummy",
      tag: [],
    },
  },
  {
    createTime: new Date("2022-10-09T03:24:00"),
    updateTime: new Date("2022-10-09T03:24:00"),
    coverImgUrl: "",
    iconImgUrl: "/assets/images/sample.jpeg",
    pageLink: "/",
    pageHead: {
      title: "1",
      description: "중복 제목",
      category: "dummy",
      tag: ["tag1"],
    },
  },
  {
    createTime: new Date("2022-10-08T03:24:00"),
    updateTime: new Date("2022-10-08T03:24:00"),
    coverImgUrl: "",
    iconImgUrl: "/assets/images/sample.jpeg",
    pageLink: "/",
    pageHead: {
      title: "test",
      description: "test description",
      category: "test",
      tag: ["tag1", "tag2", "tag3"],
    },
  },
  {
    createTime: new Date("2022-10-07T03:24:00"),
    updateTime: new Date(),
    coverImgUrl: "",
    iconImgUrl: "/assets/images/sample.jpeg",
    pageLink: "/",
    pageHead: {
      title: "옛날에 생성했지만 최근에 업데이트",
      description: "옛날에 생성했지만 최근에 업데이트 한 데이터",
      category: "none",
      tag: ["tag2"],
    },
  },
];
