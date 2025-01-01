
export enum BloomNavEnum {
  /**
   * 首屏
   */
  HOME = 'home',
  /**
   * 功能
   */
  FEATURES='features',
  /**
   * 价格
   */
  PRICING='pricing',
  /**
   * 帮助
   */
  HELP='help',
  /**
   * 联系我们
   */
  CONTACT='contact',
}




const navSections = {
  [BloomNavEnum.FEATURES]:{
    zhName:'功能',
    enName:BloomNavEnum.FEATURES,
  },
  [BloomNavEnum.PRICING]:{
    zhName:'价格',
    enName:BloomNavEnum.PRICING,
  },
  [BloomNavEnum.HELP]:{
    zhName:'帮助',
    enName:BloomNavEnum.HELP,
  },
  [BloomNavEnum.CONTACT]:{
    zhName:'联系我们',
    enName:BloomNavEnum.CONTACT,
  }

}