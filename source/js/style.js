var banner = document.getElementById('banner');

if (['/archives/', '/tags/'].includes(location.pathname)) {
  banner.style.backgroundPositionY = '20%';
}