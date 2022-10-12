// 获取汉堡按钮
var Btn = document.querySelector("header nav .content .Btn");
// 获取元素.sidebar
var sidebar = document.querySelector(".sidebar");
// 获取元素.sidebar .content
var sidebarContent = document.querySelector(".sidebar .content");

// 点击按钮显示侧边栏
Btn.onclick = function () {
    sidebar.style.display = "block";
    sidebarContent.classList.add("show");
    sidebarContent.classList.remove("hidden");
}

// 点击任何地方隐藏侧边栏
sidebar.onclick = function () {
    sidebarContent.classList.remove("show");
    sidebarContent.classList.add("hidden");
    setTimeout(() => {
        sidebar.style.display = "none";
    }, 900);
}