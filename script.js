// function toggle() {
//     let menu = document.getElementById("menu-list")
//     if (menu.style.display === "none") {
//         menu.style.display = "flex";
//     } else {
//         menu.style.display = "none";
//     }
// }




function toggle() {
  const menuList = document.getElementById('menu-list');
  menuList.classList.toggle('show');
}