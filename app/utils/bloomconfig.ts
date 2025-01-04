export enum BloomNavEnum {
  /**
   * 首屏
   */
  HOME = 'home',
  /**
   * 功能
   */
  FEATURES = 'features',
  /**
   * 价格
   */
  PRICING = 'pricing',
  /**
   * 帮助
   */
  HELP = 'help',
  /**
   * 联系我们
   */
  CONTACT = 'contact',
}

const navSections = {
  [BloomNavEnum.FEATURES]: {
    zhName: '功能',
    enName: BloomNavEnum.FEATURES,
  },
  [BloomNavEnum.PRICING]: {
    zhName: '价格',
    enName: BloomNavEnum.PRICING,
  },
  [BloomNavEnum.HELP]: {
    zhName: '帮助',
    enName: BloomNavEnum.HELP,
  },
  [BloomNavEnum.CONTACT]: {
    zhName: '联系我们',
    enName: BloomNavEnum.CONTACT,
  },
};
export const appImagesConfig = [
    {
      url: '/images/blocks.png',
      style: { background: 'linear-gradient(180deg, rgba(35, 101, 151, 0.00)0%, #007CFF 100%)' },
    },
    {
      url: '/images/calendar.png',
      style: { background: 'linear-gradient(180deg, rgba(255, 205, 100, 0.00)0%, #FFCD64 100%)' },
    },
    {
      url: '/images/customize.png',
      style: { background: 'linear-gradient(180deg, rgba(0, 166, 86, 0.00)0%, #00A656 100%)' },
    },
    {
      url: '/images/divider.png',
      style: { background: 'linear-gradient(180deg, rgba(95, 57, 0, 0.00)0%, #5F3900 100%)' },
    },
    {
      url: '/images/icloud.png',
      style: { background: 'linear-gradient(180deg, rgba(162, 176, 0, 0.00)0%, #A2B000 100%)' },
    },
    {
      url: '/images/image-collage.png',
      style: { background: 'linear-gradient(180deg, rgba(0, 255, 113, 0.00)0%, rgba(0, 242, 107, 0.70) 100%)' },
    },
    {
      url: '/images/search.png',
      style: { background: 'linear-gradient(180deg, rgba(0, 255, 113, 0.00)0%, rgba(0, 242, 107, 0.70) 100%)' },
    },
    {
      url: '/images/summary.png',
      style: { background: 'linear-gradient(180deg, rgba(0, 255, 113, 0.00)0%, rgba(0, 242, 107, 0.70) 100%)' },
    },
    {
      url: '/images/tag.png',
      style: { background: 'linear-gradient(180deg, rgba(0, 255, 113, 0.00)0%, rgba(0, 242, 107, 0.70) 100%)' },
    },
    {
      url: '/images/timeline.png',
      style: { background: 'linear-gradient(180deg, rgba(0, 255, 113, 0.00)0%, rgba(0, 242, 107, 0.70) 100%)' },
    },
    {
      url: '/images/todos.png',
      style: { background: 'linear-gradient(180deg, rgba(0, 255, 113, 0.00)0%, rgba(0, 242, 107, 0.70) 100%)' },
    }
  ]