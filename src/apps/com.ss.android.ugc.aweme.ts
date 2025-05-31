import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme',
  name: '抖音',
  groups: [
    {
      key: 0,
      name: '点赞',
      desc: '自动点赞操作', // 添加描述
      rules: [
        {
          fastQuery: true,
          excludeActivityIds: '.main.MainActivity',
          matches: '@ImageView < [vid="f5t"]',
          actionDelay: 300,
          actionMaximum: 1,
          // 可以添加快照URL用于验证
          snapshotUrls: [], // 这里可以添加相关截图的URL
        },
      ],
    },
    {
      key: 1,
      name: '收藏',
      desc: '自动收藏操作',
      rules: [
        {
          fastQuery: true,
          activityIds: '.main.MainActivity',
          matches: '[vid="d2v"]',
          actionDelay: 500,
          actionMaximum: 1,
          snapshotUrls: [],
        },
      ],
    },
  ],
});
