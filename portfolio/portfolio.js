function GraphicDesign() {
  let pg1=document.querySelector("#VideoEditing")
    pg1.style.display="none"
    let pg2=document.querySelector("#GraphicDesign")
    pg2.style.display="block"
  }
function VideoEditing() {
  let pg1=document.querySelector("#VideoEditing")
    pg1.style.display="block"
    let pg2=document.querySelector("#GraphicDesign")
    pg2.style.display="none"
  }

function showAll() {
  let pg1=document.querySelector("#VideoEditing")
    pg1.style.display="block"
    let pg2=document.querySelector("#GraphicDesign")
    pg2.style.display="block"
}

// 页面加载时默认显示所有图片部分
window.onload = showAll;
