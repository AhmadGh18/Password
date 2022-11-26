let somebutton = document.getElementById("smbt");
setTimeout(() => {
  let error = document.createElement("div");
  error.className = "errormsg";
  let msg = document.createTextNode("Some technincal error was updated!");
  let p = document.createElement("p");
  p.appendChild(msg);
  error.appendChild(p);
  let x = document.createElement("p");
  x.className = "x";
  let t = document.createTextNode("x");
  x.appendChild(t);
  error.append(x);
  somebutton.append(error);
  x.onclick = () => {
    x.parentElement.remove();
  };
}, 10000);



let a =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQR48STUVWXYZ1234_$abcgtrg1567890_@$";
let num = 8;

let d1 = new Date();
let div = document.querySelector(".div");
let rand = Math.floor(Math.random() * a.length);
let b = a.split("");
let icon = document.querySelector(".save-icon");
let rr = Math.ceil(Math.random() * (12 - 6) + 6);
let wrapper = document.querySelectorAll(".wrapper");
let btn = document.querySelector(".hold button");
var bool = 1;
let z = [];
btn.onclick = (e) => {
  z = [];
  e.preventDefault();
  for (let i = 0; i < Math.ceil(Math.random() * (12 - 6) + 6); i++) {
    z.push(b[Math.floor(Math.random() * b.length)]);
  }
  /**/

  let p = document.createElement("p");
  p.id = "pa";

  p.className = "pa";
  p.innerHTML = z.join("");
  let cop = document.createElement("button");

  div.appendChild(p);
  div.appendChild(cop);
  let tc = document.createTextNode("copy");
  cop.appendChild(tc);
  cop.id = "cop";
  var delet = document.createElement("button");
  let tz = document.createTextNode("delet");
  delet.appendChild(tz);
  div.appendChild(delet);
  delet.id = "cop";
  let save = document.createElement("button");
  let sv = document.createTextNode("save to device");
  save.appendChild(sv);
  div.appendChild(save);
  save.id = "cop";

  save.onclick = () => {
    let data = z.join("") + "  Generated on " + d1.toLocaleTimeString();
    saveTodevice(data); //function creted doen
  };
  let bb = document.getElementById("cop");
  cop.onclick = () => {
    navigator.clipboard.writeText(z.join(""));
    Swal.fire("Coppped to clipoard");
  };
  delet.onclick = () => {
    deletall(save, delet, cop, p);
  };
};
//
let div2 = document.getElementById("div2");

let number = document.getElementById("num");
let input2 = document.getElementById("input2");
let buttonforcustompass = document.getElementById("btnid");
buttonforcustompass.onclick = (e) => {
  let txt = input2.value.split("");

  let textt = [];
  for (let i = 0; i < number.value; i++) {
    textt.push(txt[Math.floor(Math.random() * number.value)]);
  }

  let pa = document.createElement("p");
  e.preventDefault();
  if (number.value == 0 || input2.value == " ") {
    Swal.fire("ma fek 0 y 7mar");
    e.preventDefault();
  } else {
    pa.className = "pa";
    pa.innerHTML = textt.join("");

    div2.appendChild(pa);

    let idk = document.createElement("button");
    div2.appendChild(idk);
    let le = document.createTextNode("copy");
    idk.appendChild(le);
    idk.id = "cop";
    idk.onclick = () => {
      navigator.clipboard.writeText(textt.join(""));
      Swal.fire("Coppped to clipoard");
    };
    let d = document.createElement("button");
    d.id = "cop";
    let lett = document.createTextNode("Delete");
    d.appendChild(lett);
    div2.appendChild(d);
    let donload = document.createElement("button");
    let cc = document.createTextNode("Downolaod");
    donload.appendChild(cc);
    div2.appendChild(donload);
    d.onclick = () => {
      deletall(d, idk, pa, donload);
    };
    donload.id = "cop";
    let info = textt.join("") + "  Generated on " + d1.toLocaleTimeString();
    donload.onclick = () => {
      saveTodevice(info);
    };
  }
  let bttt = document.querySelector(".pa");
  bttt.onclick = function () {
    navigator.clipboard.writeText(textt.join(""));
    Swal.fire("coppied");
  };
};

let body = document.querySelector("body");
let color = document.querySelector(".colorbtn");
color.onclick = () => {
  body.classList.toggle("bb");
  wrapper.classList.toggle("wrapper");
};

let div3 = document.querySelector(".d");
let Uname = document.getElementById("i1");
let age = document.getElementById("i2");
let btn3 = document.getElementById("btn3");
let rad1 = document.getElementById("rad1");
let rad2 = document.getElementById("rad2");
let chart = "67890_$_AsDiPlnQh_";
let down = document.createElement("p");
down.className = "pa";
btn3.onclick = (e) => {
  if (Uname.value == "" || age.value == "s") {
    e.preventDefault();

    Swal.fire("add nedded info");
  } else {
    let str = Uname.value.split("");

    if (rad2.checked) {
      e.preventDefault();

      let finalName = Uname.value + age.value;
      let fval = [];
      for (let i = 0; i < 4; i++) {
        fval.push(chart.charAt(Math.random() * chart.length));
      }

      let put = finalName.concat(fval.join(""));

      down.innerHTML = put;
      div3.appendChild(down);

      down.onclick = function () {
        navigator.clipboard.writeText(put);
        Swal.fire("coppied");
      };
    } else if (rad1.checked) {
      e.preventDefault();
      let x1 = [];
      for (let i = 0; i < Math.ceil(Math.random() * (12 - 6) + 6); i++) {
        x1.push(chart.charAt(Math.random() * chart.length));
      }
      var varia = Uname.value.concat(x1.join("")) + age.value;
      down.innerHTML = varia;
      div3.appendChild(down);
    }
  }
};

let saveTodevice = (data) => {
  const txttoblob = new Blob([data], { type: "text/plain" });
  const sfileName = "password.txt";
  let newLink = document.createElement("a");
  newLink.download = sfileName;
  icon.style.display = "block";
  setTimeout(() => {
    icon.style.display = "none";
  }, 4000);
  if (window.webkitURL != null) {
    newLink.href = window.webkitURL.createObjectURL(txttoblob);
  } else {
    newLink.href = window.URL.createObjectURL(txttoblob);
    newLink.style.display = "none";
    document.body.appendChild(newLink);
  }

  newLink.click();
};

let deletall = (a, b, c, d) => {
  a.remove();
  b.remove();
  c.remove();
  d.remove();
};

let emojie1 = document.querySelector(".emojie1");

let range = document.getElementById("range");
let pinp = document.getElementById("inp");
let rangeChange = (e) => {
  console.log(range.value);
  z = [];
  if (range.value >= 0 && range.value < 40) {
    for (let i = 0; i < Math.ceil(Math.random() * (8 - 6) + 6); i++) {
      z.push(b[Math.floor(Math.random() * 12)]);
    }

    pinp.innerHTML = z.join("");
    z = [];
  } else if (range.value > 30 && range.value < 60) {
    z = [];

    for (let i = 0; i < Math.ceil(Math.random() * (12 - 6) + 6); i++) {
      z.push(b[Math.floor(Math.random() * 20)]);
    }

    pinp.innerHTML = z.join("");
    z = [];
  } else if (range.value > 60) {
    z = [];
    for (let i = 0; i < Math.ceil(Math.random() * (20 - 9) + 6); i++) {
      z.push(b[Math.floor(Math.random() * b.length)]);
    }
    pinp.innerHTML = z.join("");
    z = [];
  }
  let imojie1 = document.querySelector(".imojie1");
  let imojie2 = document.querySelector(".imojie2");
  let imojie3 = document.querySelector(".imojie3");
  let imojie4 = document.querySelector(".imojie4");
  let imojie5 = document.querySelector(".imojie5");
  let imojie6 = document.querySelector(".imojie6");
  let imojie7 = document.querySelector(".imojie7");
  let imojie8 = document.querySelector(".imojie8");
  let imojie9 = document.querySelector(".imojie9");
  let imojie10 = document.querySelector(".imojie10");
  let imojie11 = document.querySelector(".imojie11");
  let vrange = range.value;
  if (vrange >= 0 && vrange < 10) {
    imojie1.style.display = "block"; //1
    imojie2.style.display = "none";
    imojie3.style.display = "none";
    imojie4.style.display = "none";
    imojie5.style.display = "none";
    imojie6.style.display = "none";
    imojie7.style.display = "none";
    imojie8.style.display = "none";
    imojie9.style.display = "none";
    imojie10.style.display = "none";
    imojie11.style.display = "none";
  } else if (vrange > 10 && vrange < 20) {
    imojie1.style.display = "none";
    imojie2.style.display = "block"; //2
    imojie3.style.display = "none";
    imojie4.style.display = "none";
    imojie5.style.display = "none";
    imojie6.style.display = "none";
    imojie7.style.display = "none";
    imojie8.style.display = "none";
    imojie9.style.display = "none";
    imojie10.style.display = "none";
    imojie11.style.display = "none";
  } else if (vrange > 20 && vrange < 30) {
    imojie1.style.display = "none";
    imojie2.style.display = "none";
    imojie3.style.display = "block"; //3
    imojie4.style.display = "none";
    imojie5.style.display = "none";
    imojie6.style.display = "none";
    imojie7.style.display = "none";
    imojie9.style.display = "none";
    imojie10.style.display = "none";
    imojie8.style.display = "none";
    imojie11.style.display = "none";
  } else if (vrange > 30 && vrange < 40) {
    imojie1.style.display = "none";
    imojie2.style.display = "none";
    imojie3.style.display = "none";
    imojie4.style.display = "block"; //4
    imojie5.style.display = "none";

    imojie6.style.display = "none";
    imojie7.style.display = "none";
    imojie11.style.display = "none";

    imojie8.style.display = "none";
    imojie9.style.display = "none";
    imojie10.style.display = "none";
  } else if (vrange > 40 && vrange < 50) {
    imojie1.style.display = "none";
    imojie2.style.display = "none";
    imojie3.style.display = "none";
    imojie4.style.display = "none";
    imojie5.style.display = "block"; //5
    imojie7.style.display = "none";

    imojie6.style.display = "none";
    imojie8.style.display = "none";
    imojie9.style.display = "none";
    imojie10.style.display = "none";
    imojie11.style.display = "none";

    imojie7.style.display = "none";
  } else if (vrange > 50 && vrange < 60) {
    imojie1.style.display = "none";
    imojie2.style.display = "none";
    imojie3.style.display = "none";
    imojie4.style.display = "none";
    imojie5.style.display = "none";
    imojie6.style.display = "block"; //6
    imojie7.style.display = "none";
    imojie8.style.display = "none";
    imojie9.style.display = "none";
    imojie10.style.display = "none";
    imojie11.style.display = "none";
  } else if (vrange > 60 && vrange < 70) {
    imojie1.style.display = "none";
    imojie2.style.display = "none";
    imojie3.style.display = "none";
    imojie4.style.display = "none";
    imojie5.style.display = "none";
    imojie6.style.display = "none";
    imojie7.style.display = "block"; //7
    imojie8.style.display = "none";
    imojie9.style.display = "none";
    imojie11.style.display = "none";

    imojie10.style.display = "none";
  } else if (vrange > 70 && vrange < 80) {
    imojie1.style.display = "none";
    imojie2.style.display = "none";
    imojie3.style.display = "none";
    imojie4.style.display = "none";
    imojie5.style.display = "none";
    imojie6.style.display = "none";
    imojie7.style.display = "none";
    imojie8.style.display = "block"; //8
    imojie9.style.display = "none";
    imojie10.style.display = "none";
    imojie11.style.display = "none";
  } else if (vrange > 80 && vrange < 90) {
    imojie1.style.display = "none";
    imojie2.style.display = "none";
    imojie3.style.display = "none";
    imojie4.style.display = "none";
    imojie5.style.display = "none";
    imojie6.style.display = "none";
    imojie7.style.display = "none";
    imojie8.style.display = "none";
    imojie9.style.display = "block";
    imojie10.style.display = "none";
    imojie11.style.display = "none";
  } else if (vrange > 90 && vrange < 100) {
    imojie1.style.display = "none";
    imojie2.style.display = "none";
    imojie3.style.display = "none";
    imojie4.style.display = "none";
    imojie5.style.display = "none";
    imojie6.style.display = "none";
    imojie7.style.display = "none";
    imojie8.style.display = "none";
    imojie9.style.display = "none";
    imojie10.style.display = "block";
    imojie11.style.display = "none";
  } else if (vrange > 90) {
    imojie1.style.display = "none";
    imojie2.style.display = "none";
    imojie3.style.display = "none";
    imojie4.style.display = "none";
    imojie5.style.display = "none";
    imojie6.style.display = "none";
    imojie7.style.display = "none";
    imojie8.style.display = "none";
    imojie9.style.display = "none";
    imojie10.style.display = "none";
    imojie11.style.display = "block";
  }
};

let list = document.querySelectorAll("li");
let dive = document.querySelector("body");
if (window.localStorage.getItem("color")) {
  dive.style.backgroundColor = window.localStorage.getItem("color");
  list.forEach((li) => {
    li.classList.remove("active");
  });
  document
    .querySelector(`[data-color="${window.localStorage.getItem("color")}"]`)
    .classList.add("active");
}

list.forEach((li) => {
  li.addEventListener("click", (e) => {
    list.forEach((li) => {
      li.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    dive.style.backgroundColor = e.currentTarget.dataset.color;
  });
});
let choose = document.querySelector(".choose");
let thmee = document.querySelector(".thmee");
thmee.addEventListener("click", (e) => {
  e.preventDefault();
  if (choose.style.display == "none") {
    choose.style.display = "block";
  } else {
    choose.style.display = "none";
  }
});
