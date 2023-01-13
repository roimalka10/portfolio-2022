export function getSubPath(subPath) {
  return `/${subPath}`;
}

export function getRootPath() {
  return "/";
}

export function isCurrent(subPath) {
  return window.location.pathname.includes(subPath);
}
