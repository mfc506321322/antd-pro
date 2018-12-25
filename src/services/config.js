// 动态设置host
export const host = !/123.206.55.50/.test(window.location.host)?'http://169.254.71.233:15000': 'http://123.206.55.50:15000';
