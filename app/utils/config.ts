// keyframe动画组件离开可视区，恢复初始状态的默认配置
export const defaultLeaveOptions: KeyframeAnimationOptions = {
  duration: 100,
  fill: 'forwards',
};
export const defaultLeaveKeyframes: Keyframe[] = [
  {
    opacity: 0,
    transform: 'translate(0,0)',
  },
];

// TODO 媒体账号配置
export const mediaConfig = {
  appDownloadApple: 'https://apps.apple.com/us/app/mindtopia-relax-meditate/id6504386758?platform=vision',
  appDownloadMeta: 'https://www.meta.com/experiences/6914983818624073/',
  appDownloadUrl: 'https://www.meta.com/experiences/6914983818624073/',
  discord: 'https://discord.com/invite/QZSukTMESJ',
};

// 房间场景配置
export const sceneConfig = {
  light: [
    {
      url: '/videos/scenes/seabed-light.mp4',
      poster: 'https://appasset.xverse.cn/98/plane/ff8b28cb76584d199a566ada58d0b002/20240726175200.png',
      text: 'MARINE MANDALA',
      style: { background: 'linear-gradient(180deg, rgba(35, 101, 151, 0.00)0%, #007CFF 100%)' },
    },
    {
      url: '/videos/scenes/snow-light.mp4',
      poster: 'https://appasset.xverse.cn/98/plane/f0f0e91987e74b7595f28bac2b2b1a15/snow-light.png',
      text: 'WINTER SONATA',
      style: { background: 'linear-gradient(180deg, rgba(255, 205, 100, 0.00)0%, #FFCD64 100%)' },
    },
    {
      url: '/videos/scenes/valley-light.mp4',
      poster: 'https://appasset.xverse.cn/98/plane/414c5e18af6442d184535990c09d9bc3/valley-light-2.png',
      text: 'SECRET LAKE',
      style: { background: 'linear-gradient(180deg, rgba(0, 166, 86, 0.00)0%, #00A656 100%)' },
    },
    {
      url: '/videos/scenes/canyon-light.mp4',
      text: 'SUNRISE CANYON',
      poster: 'https://appasset.xverse.cn/98/plane/addc42c48fc14fb3bbef00e9cd666e17/canyon-light-2.png',
      style: { background: 'linear-gradient(180deg, rgba(95, 57, 0, 0.00)0%, #5F3900 100%)' },
    },
    {
      url: '/videos/scenes/rural-light.mp4',
      text: 'SUMMER FIELDS',
      poster: 'https://appasset.xverse.cn/98/plane/7a8424684d40409696718be2766e7b93/rural-light.png',
      style: { background: 'linear-gradient(180deg, rgba(162, 176, 0, 0.00)0%, #A2B000 100%)' },
    },
    {
      url: '/videos/scenes/garden-light.mp4',
      text: 'MISTY ZEN',
      poster: 'https://appasset.xverse.cn/98/plane/117ed2bde2494b7d93f3264f2f26f8ab/garden-light.png',
      style: { background: 'linear-gradient(180deg, rgba(0, 255, 113, 0.00)0%, rgba(0, 242, 107, 0.70) 100%)' },
    },
  ],
  dark: [
    {
      url: '/videos/scenes/seabed-dark.mp4',
      text: 'MARINE MANDALA',
      poster: 'https://appasset.xverse.cn/98/plane/a517119ab3ca488986bdb255007edf82/seabed-dark.png',
      style: { background: 'linear-gradient(180deg, transparent, #004980)' },
    },
    {
      url: '/videos/scenes/snow-dark.mp4',
      text: 'WINTER SONATA',
      poster: 'https://appasset.xverse.cn/98/plane/a539d7beab154cfb9a4ab569cd1b7226/snow-dark.png',
      style: { background: 'linear-gradient(180deg, transparent, #1D354F)' },
    },
    {
      url: '/videos/scenes/valley-dark.mp4',
      text: 'SECRET LAKE',
      poster: 'https://appasset.xverse.cn/98/plane/d1f8c75c57574034abf95fffb4dfe463/valley-dark.png',
      style: { background: 'linear-gradient(180deg, #00666600,#006666)' },
    },
    {
      url: '/videos/scenes/canyon-dark.mp4',
      text: 'SUNRISE CANYON',
      poster: 'https://appasset.xverse.cn/98/plane/17ce030521f2408388fe9c9267d206bb/canyon-dark.png',
      style: { background: 'linear-gradient(180deg, #7C443200, #7C4432)' },
    },
    {
      url: '/videos/scenes/rural-dark.mp4',
      text: 'SUMMER FIELDS',
      poster: 'https://appasset.xverse.cn/98/plane/4d7ff1ab8ab04ac7864dcb442f515e7b/rural-dark.png',
      style: { background: 'linear-gradient(180deg, #005F6500, #005F65)' },
    },
    {
      url: '/videos/scenes/garden-dark.mp4',
      text: 'MISTY ZEN',
      poster: 'https://appasset.xverse.cn/98/plane/be4ec4a817eb4414be1d884a1da74eff/garden-dark.png',
      style: { background: 'linear-gradient(180deg, #00485F00, #00485F)' },
    },
  ],
};

// 社区评论配置
export const communityCommentsConfig = [
  {
    id: '001',
    avatar: 'https://appasset.xverse.cn/98/plane/90ceefbd473541a2a0e82aa94db372a3/user-meizi.png',
    userName: 'MeiZi',
    extra: 'Amateur',
    comment: `“ It's like my own little paradise in VR form. If you're dealing with anxiety or just need a mental break, definitely give Mindtopia a try. Trust me, you won't regret it! ”`,
  },
  {
    id: '002',
    avatar: 'https://appasset.xverse.cn/98/plane/e98c6f2db88c49b29cf71e2123653ceb/user-jess.png',
    userName: 'Jess',
    extra: 'Amateur',
    comment: `"The sense of immersion and healing power of beating the singing bowl in the snow is something I can't find in any other app!" `,
  },
  {
    id: '003',
    avatar: 'https://appasset.xverse.cn/98/plane/d04ec24d09094ade965b038d86b90d87/rickon-avatar.png',
    userName: 'Rickon',
    extra: 'Designer',
    comment: `Buddy, listen to me. Try the breathing mode at Secret Lake, and you'll have the best meditation experience of your life.`,
  },
  {
    id: '004',
    avatar: 'https://appasset.xverse.cn/98/plane/6585c93a171f4125ac8217be1cb9f44c/neil-avatar.png',
    userName: 'Neil Cameron',
    extra: 'We-Media',
    comment: `I'm very impressed, vr scenery seems like a perfect fit for meditation. The guided meditation is great and the scenery is spectacular. It really helps shut the world out. Great value for money.`,
  },
];

export const communityVideosConfig = [
  {
    id: 'video-001',
    cover: 'https://appasset.xverse.cn/98/plane/800d39967de74f54b9c746a2fee48111/yb-cover-1.jpg',
    url: 'https://www.youtube.com/watch?v=6EBDppdgUvg',
  },
  {
    id: 'video-002',
    cover: 'https://appasset.xverse.cn/98/plane/580953aa61c2493e85d03f977c74883d/yb-cover-2.jpg',
    url: 'https://www.youtube.com/watch?v=gAriBErcQfE&t=1s',
  },
  {
    id: 'video-003',
    cover: 'https://appasset.xverse.cn/98/plane/e5e8029be52a4238a790d60ce4a0e317/yb-cover-3.jpg',
    url: 'https://www.youtube.com/watch?v=EQ5MylFrpFQ&t=176s',
  },
];
// 方形轮播图配置
export const mindtopiaSlickImg = [
  {
    id: 'mind-001',
    url: 'https://appasset.xverse.cn/98/plane/6202c45e6dd84c19ba58ff5fc6c0b61a/mind-slick-img-1.png',
    title: 'Connect',
  },
  {
    id: 'mind-002',
    url: 'https://appasset.xverse.cn/98/plane/2fce1eb13c354c199f4efd40340f958f/mind-slick-img-2.png',
    title: 'Share',
  },
  {
    id: 'mind-003',
    url: 'https://appasset.xverse.cn/98/plane/6ed75d231fa34db99a0bf9d2b918d9de/mind-slick-img-3.png',
    title: 'Get the\nlatest updates',
  },
];

export const accordionConfig = [
  {
    id: 'purchase',
    icon: 'https://appasset.xverse.cn/98/plane/1f5563b0e4dd432493231de7220211ec/purchase-icon.png',
    title: 'One-time Purchase Model',
    content: `Once purchased, it's yours for life! No monthly subscriptions—just a straightforward, cost-effective way to enjoy all six scenes and more.`,
  },
  {
    id: 'realistic-scene',
    icon: 'https://appasset.xverse.cn/98/plane/945ebb2d3b05479ab0c600072a6e45b6/check-icon.png',
    title: 'Realistic Scene Experiences',
    content: `Our highly immersive scenes are designed to replicate real-life settings, enhancing your sense of presence and immersion during meditation sessions.`,
  },
  {
    id: 'interaction',
    icon: 'https://appasset.xverse.cn/98/plane/6ee3e239de42407584b79b6d36bbe0ea/interaction-icon.png',
    title: 'Simplified Interaction',
    content: `We prioritize a streamlined and intuitive user interface, ensuring that interactions within the app are straightforward and user-friendly.`,
  },
  {
    id: 'updates',
    icon: 'https://appasset.xverse.cn/98/plane/0b6c83b56ed54319bc957dd8bae2973e/cloud-download-icon.png',
    title: 'Continuous Updates',
    content: `We strive to keep getting better with regular updates that bring new features and enhancements. We listen to your feedback to ensure your meditation journey remains fresh and fulfilling.`,
  },
];

export const mediaAccounts = [
  {
    id: 'ins-quest',
    reportData: 1,
    name: 'MINDTOPIA QUEST',
    accountUrl: 'https://www.instagram.com/mindtopia.xverse/',
    icon: 'https://appasset.xverse.cn/98/panorama/e11ca20b65fe4173ac9dec568f5667ad/instagram.png',
  },
  {
    id: 'ins-vision-pro',
    reportData: 2,
    name: 'MINDTOPIA VISION PRO',
    accountUrl: 'https://www.instagram.com/mindtopia.vp',
    icon: 'https://appasset.xverse.cn/98/panorama/e11ca20b65fe4173ac9dec568f5667ad/instagram.png',
  },
  {
    id: 'x-twitter',
    name: 'X',
    reportData: 3,
    accountUrl: 'https://twitter.com/MindtopiaVR',
    icon: 'https://appasset.xverse.cn/98/panorama/31387fef661041d097b9adf0726d45f4/x.png',
  },
  {
    id: 'facebook',
    reportData: 4,
    name: 'FACEBOOK',
    accountUrl: 'https://www.facebook.com/people/Mindtopia-VR/61557707281712/',
    icon: 'https://appasset.xverse.cn/98/panorama/71264deb98104f85b5eec6cfc49066b9/facebook.png',
  },
  {
    id: 'youtube',
    reportData: 5,
    name: 'YOUTUBE',
    accountUrl: 'https://www.youtube.com/@MindtopiaVR/videos',
    icon: 'https://appasset.xverse.cn/98/panorama/3016322b9602413e9b61083bc1fdefc4/youtube.png',
  },
];

// mindtopia demo视频
export const mindtopiaDemoVideo = [
  {
    type: 'explore',
    cover: 'https://appasset.xverse.cn/98/plane/a0488babc7204a66b8f13521d27de236/common-cover.png',
    url: 'https://appasset.xverse.cn/98/cg/489be3d32b304a76848261fbb06730dd/explore_1080P.mp4',
  },
  {
    type: 'meditate',
    cover: 'https://appasset.xverse.cn/98/plane/a0488babc7204a66b8f13521d27de236/common-cover.png',
    url: 'https://appasset.xverse.cn/98/cg/6e99f300470c4e05b428e7947a92a36b/meditate_1080P.mp4',
  },
  {
    type: 'breathe',
    cover: 'https://appasset.xverse.cn/98/plane/a0488babc7204a66b8f13521d27de236/common-cover.png',
    url: 'https://appasset.xverse.cn/98/cg/0bbde1d88d8b4d3f8d5fa8441016f3b0/breathe_1080P.mp4',
  },
  {
    type: 'mood-talk',
    cover: 'https://appasset.xverse.cn/98/plane/3ea6832ef8db438e893a530d79801565/mind-talk-cover.png',
    url: 'https://appasset.xverse.cn/98/cg/3b752aac2e444e89826a05802d84cdd4/moodtalk_1080P.mp4',
  },
];
