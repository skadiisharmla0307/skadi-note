/* --- 回到頂端功能 --- */
let mybutton = document.getElementById("btn-back-to-top");
window.onscroll = function () {
  if (mybutton) {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
};

if (mybutton) {
  mybutton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* --- 卡片展開/收起功能 --- */
document.querySelectorAll('.card-header').forEach(header => {
  header.addEventListener('click', () => {
    const card = header.parentElement;
    const content = card.querySelector('.card-content');
    
    // 切換 active 狀態
    card.classList.toggle('active');

    if (card.classList.contains('active')) {
      // 展開：設為 scrollHeight (內容實際高度)
      // 考慮到 LaTeX 渲染，我們抓取最新的高度
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      // 收起
      content.style.maxHeight = "0";
    }
  });
});