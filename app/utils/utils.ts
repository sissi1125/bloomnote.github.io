/**
 * @description 判断是否为移动设备，ipad等平板为PC设备处理
 * 注意：nextjs中需要在页面挂载后使用
 */
export function isMobile() {
  // 判断是否为移动设备
  return /Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent);
}

export function isSafari() {
  // 检查是否包含"Safari"且不包含"Chrome"或"Edg"
  const isSafari = /Safari\//.test(window.navigator.userAgent) && !/Chrome|Edg/.test(window.navigator.userAgent);
  // @ts-ignore
  const isNotChromium = typeof window.chrome === 'undefined';

  return isSafari && isNotChromium;
}

export const getAgentType = () => {
  const isMobile1 = isMobile();
  const isMiniProgram = navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1;
  if (isMiniProgram) {
    return 'weapp';
  }
  if (isMobile1) {
    return 'mobile';
  }
  return 'pc';
};

export function getCurrentLanguage() {
  // 获取浏览器语言列表，优先使用用户偏好的语言
  const languages = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language];

  // 返回首选语言
  return languages[0] || 'en'; // 默认返回 'en'（英文）
}
