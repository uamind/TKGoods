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
          matches: '[vid="wqh"] > [vid="f6e"] > [vid="f6t"][desc^="未点赞"]',
          // matches: '[vid="viewpager"][desc="视频"] > [vid="5f0"] > [vid="vqo"] > [vid="jj"] > [vid="ilx"] > [vid="wqh"] > [vid="f6e"] > [vid="f6t"][desc^="未点赞"]',
          actionDelay: 300,
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
          matches:
            '[vid="wqh"] > [vid="d3d"] > [vid="d4a"][desc^="未选中"]',
          actionDelay: 500,
          snapshotUrls: [],
        },
      ],
    },
  ],
});
