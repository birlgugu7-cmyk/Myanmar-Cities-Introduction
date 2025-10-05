// 滚动触发动画
const contents = document.querySelectorAll('.content');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
  contents.forEach(c => {
    const top = c.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      c.classList.add('show');
    }
  });

  // 高亮导航
  sections.forEach((sec, i) => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight / 2 && top > -window.innerHeight / 2) {
      navLinks.forEach(a => a.classList.remove('active'));
      navLinks[i].classList.add('active');
    }
  });
});

// 视频弹窗
const modal = document.getElementById('videoModal');
document.getElementById('playVideo').addEventListener('click', () => {
  modal.classList.add('active');
});
modal.addEventListener('click', () => {
  modal.classList.remove('active');
});
