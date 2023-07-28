//添加一个图像切换器

let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};

//添加个性化欢迎信息

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

//这里用 localStorage 的 setItem() 函数来创建一个'name' 数据项，并把 myName 变量复制给它。最后将 textContent 属性设置为一个欢迎字符串加上这个新设置的名字。
//一直保存

// function setUserName() {
//     let myName = prompt("请输入你的名字。");
//     localStorage.setItem("name", myName);
//     myHeading.textContent = "Mozilla 酷毙了，" + myName;
//   }
function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = "Mozilla 酷毙了，" + myName;
    }
  }
  
  
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla 酷毙了，" + storedName;
  }
  
  myButton.onclick = function () {
    setUserName();
  };
  

/*  // 设置图片切换
let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute ('src','images/firefox2.png');
  } else {
    myImage.setAttribute ('src','images/firefox-icon.png');
  }
};

// 设置个性化欢迎信息
// 获取新按钮和标题的引用
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// 个性化欢迎信息设置函数
function setUserName() {
  let myName = prompt('请输入你的名字。');
  if (!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
  }
}

// 初始化代码：在页面初次读取时进行构造工作：
if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

// 为按钮设置 onclick 事件处理器：
myButton.onclick = function() {
  setUserName();
};*/