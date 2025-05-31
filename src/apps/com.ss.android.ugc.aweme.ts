import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme',
  name: '抖音',
  groups: [
    {
      key: 0,
      name: '点赞',
      rules: [
        {
          fastQuery: true,
          excludeActivityIds: '.main.MainActivity',
          matches: '[vid="f5t"]',
        },
      ],
    },
    {
      key: 1,
      name: '收藏',
      rules: [
        {
          fastQuery: true,
          activityIds: '.main.MainActivity',
          matches: '[vid="d2v"]',
        },
      ],
    },
    {
      key: 2,
      name: '搜索',
      rules: [
        {
          fastQuery: true,
          activityIds: '.main.MainActivity',
          matches: '[vid="1g1"]',
        },
      ],
    },
    {
      key: 3,
      name: '搜索确定',
      rules: [
        {
          fastQuery: true,
          activityIds: '.search.activity.SearchResultActivity',
          matches: '[vid="3vw"]',
        },
      ],
    },
  ],
});
