// 動態取得圖片路徑
export default (path) => {
  const assets = import.meta.glob('/assets/images/**', { eager: true });
  return assets[path].default;
};
