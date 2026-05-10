let logo = document.getElementById("logo");
let carre = document.getElementById("carre");
let marca = document.getElementById("marplaca");
let login = document.getElementById("login");
let back1 = document.getElementById("one");
let back2 = document.getElementById("two");
let back3 = document.getElementById("thr");
let back4 = document.getElementById("four");
let back5 = document.getElementById("five");
let back6 = document.getElementById("six");
let login_sys = document.getElementById("login_sys");

// NOVAS VARIÁVEIS (corrigidas)
const config = document.getElementById("config");
const janela = document.getElementById("janelaConfig");
const menu = document.getElementById("menu");
const topo = document.querySelector(".topo");

let arrastando = false;
let offsetX, offsetY;

// 🔧 DEV Tools
document.addEventListener("keydown", function (event) {
  if (event.key === "F9") {
    localStorage.clear();
    location.reload();
  }
});

// animação inicial
setTimeout(() => {
  marca.style.display = "block";
}, 2000);

// BOOT
setTimeout(() => {
  marca.style.display = "none";
  logo.style.display = "block";

  let bootBar = document.getElementById("boot_bar");
  let progressBar = document.getElementById("boot_progress");

  bootBar.style.display = "block";
  document.body.classList.add("boot-bg");

  let progress = 0;

  let interval = setInterval(() => {
    progress += Math.random() * 8;

    if (progress >= 100) {
      progress = 100;
      progressBar.style.width = progress + "%";

      clearInterval(interval);

      setTimeout(() => {
        bootBar.style.display = "none";
        Start();
      }, 500);
    } else {
      progressBar.style.width = progress + "%";
    }

  }, 150);

}, 5000);

// ========================

function Start() {
  let bar = document.getElementById("boot_bar");
  let ja_iniciou = localStorage.getItem("ja_iniciou");
  
  if (ja_iniciou === "1") {
    logo.style.display = "none";
    bar.style.display = "none";
    desktop();
  } else {
    let login_found = document.getElementById("login_found");

    document.body.classList.remove("boot-bg");
    logo.style.display = "none";
    bar.style.display = "none";

    login_found.style.display = "block";
    login.style.display = "block";
  }
}

// ========================

function login_start() {
  let userPC = document.getElementById("userPC").value;
  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;

  if (userPC === "" || user === "") {
    alert("Preencha os campos.");
    return;
  }

  login.style.display = "none";
  login_found.style.display = "none";

  localStorage.setItem("userPC", userPC);
  localStorage.setItem("user", user);
  localStorage.setItem("pass", pass);
  localStorage.setItem("ja_iniciou", "1");
  localStorage.setItem("wallpaper", "1")

  let bootBar = document.getElementById("boot_bar");
  let progressBar = document.getElementById("boot_progress");

  logo.style.display = "block";
  bootBar.style.display = "block";

  let progress = 0;

  let interval = setInterval(() => {
    progress += Math.random() * 8;

    if (progress >= 100) {
      progress = 100;
      progressBar.style.width = progress + "%";

      clearInterval(interval);

      setTimeout(() => {
        bootBar.style.display = "none";
        Start();
      }, 500);
    } else {
      progressBar.style.width = progress + "%";
    }

  }, 150);
}

// ========================

function desktop() {
  let bar = document.getElementById("boot_bar");

  document.body.classList.remove("boot-bg");

  logo.style.display = "none";
  bar.style.display = "none";

  if (localStorage.getItem("wallpaper") === "1") {
    document.body.style.backgroundColor = ("#00083B")

    back1.classList.remove("c");
    back2.classList.remove("c");
    back3.classList.remove("c");
    back4.classList.remove("c");
    back5.classList.remove("c");
    back6.classList.remove("c");

    back1.style.display = "block";
    back1.style.animation = "fadeIn 1s ease-in-out";

    setTimeout(() => {
      back2.style.display = "block";
      back2.style.animation = "fadeIn 1s ease-in-out";
    }, 500);

    setTimeout(() => {
      back3.style.display = "block";
      back3.style.animation = "fadeIn 1s ease-in-out";
    }, 1000);

    setTimeout(() => {
      back4.style.display = "block";
      back4.style.animation = "fadeIn 1s ease-in-out";
    }, 1500);

    setTimeout(() => {
      back5.style.display = "block";
      back5.style.animation = "fadeIn 1s ease-in-out";
    }, 2000);

    setTimeout(() => {
      back6.style.display = "block";
      back6.style.animation = "fadeIn 1s ease-in-out";
    }, 2500);}
    else{
    document.body.style.backgroundColor = ("#dfdfdf")

    back1.classList.add("c");
    back2.classList.add("c");
    back3.classList.add("c");
    back4.classList.add("c");
    back5.classList.add("c");
    back6.classList.add("c");

    back1.style.display = "block";
    back1.style.animation = "fadeIn 1s ease-in-out";

    setTimeout(() => {
      back2.style.display = "block";
      back2.style.animation = "fadeIn 1s ease-in-out";
    }, 500);

    setTimeout(() => {
      back3.style.display = "block";
      back3.style.animation = "fadeIn 1s ease-in-out";
    }, 1000);

    setTimeout(() => {
      back4.style.display = "block";
      back4.style.animation = "fadeIn 1s ease-in-out";
    }, 1500);

    setTimeout(() => {
      back5.style.display = "block";
      back5.style.animation = "fadeIn 1s ease-in-out";
    }, 2000);

    setTimeout(() => {
      back6.style.display = "block";
      back6.style.animation = "fadeIn 1s ease-in-out";
    }, 2500);
  }

  setTimeout(() => {
    let barra = document.getElementById("barra");
    let login_sys = document.getElementById("login_sys");

    let pass = localStorage.getItem("pass");

    if (pass === null || pass === "") {
      barra.style.display = "block";
    } else {
      let user = localStorage.getItem("user");
      let user_name = document.getElementById("user_sys");

      user_name.innerHTML = user;

      login_sys.style.display = "block";
    }

    function atualizarRelogio() {
      const agora = new Date();
      const horas = String(agora.getHours()).padStart(2, '0');
      const minutos = String(agora.getMinutes()).padStart(2, '0');
      document.getElementById('relogio').textContent = `${horas}:${minutos}`;
    }

    setInterval(atualizarRelogio, 1000);
    atualizarRelogio();

  }, 3000);
}

const enter_sys = () => {
  let pass = localStorage.getItem("pass");
  let pass_sys = document.getElementById("pass_sys").value;
  let user = localStorage.getItem("user");
  if (pass_sys === pass) {
    alert(`Senha correta! Bem-vindo ao sistema, ${user}`);
    login_sys.style.display = "none";

    login_sys.style.animation = "fadeOut 0.5s ease-in-out";

    setTimeout(() => {
    barra.style.display = "block";
    barra.style.animation = "fadeIn 0.5s ease-in-out";
    }, 500);

  } else {
    alert("Senha incorreta, tente novamente.");
  }
}

// ========================
// CONFIG (corrigido)

const abrirConfig = () => {
  janela.classList.toggle("act");
  menu.style.display = "none";
}

const fecharConfig = () => {
  janela.classList.remove("act");
}

const maxConfig = () => {
  const sist = document.querySelector(".sistema");
  const perso = document.querySelector(".personalizar");
  const segu = document.querySelector(".seguranca");
  const sobre = document.querySelector(".sobre");
  const mais = document.querySelector(".mais");
  const cont = document.querySelector(".conta");
  const wall_1 = document.getElementById("wall");
  const wall_2 = document.getElementById("wall2");

  if (janela.classList.contains("max")) {
    sist.classList.remove("max");
    perso.classList.remove("max");
    segu.classList.remove("max");
    sobre.classList.remove("max");
    mais.classList.remove("max");
    cont.classList.remove("max");
    janela.classList.remove("max");
    wall_1.classList.remove("max");
    wall_2.classList.remove("max");
  } else {
    wall_1.classList.add("max");
    wall_2.classList.add("max");
    sist.classList.add("max");
    perso.classList.add("max");
    segu.classList.add("max");
    sobre.classList.add("max");
    mais.classList.add("max");
    cont.classList.add("max");
    janela.classList.add("max");
  }
}

// ========================
// DRAG DA JANELA

if (topo) {
  topo.addEventListener("mousedown", (e) => {
    arrastando = true;
    offsetX = e.clientX - janela.offsetLeft;
    offsetY = e.clientY - janela.offsetTop;
  });

  document.addEventListener("mousemove", (e) => {
    if (arrastando) {
      janela.style.left = (e.clientX - offsetX) + "px";
      janela.style.top = (e.clientY - offsetY) + "px";
    }
  });

  document.addEventListener("mouseup", () => {
    arrastando = false;
  });
}

//abrir personalizar
const abrirper = () => {
  wall.classList.toggle("act");
  wall2.classList.toggle("act");
}

//escolher walls
const sewall1 = () => {
  
  setTimeout(() => {
    
    back1.classList.remove("c");
    back1.style.transition = "0.8s";
  }, 500);

  setTimeout(() => {
    back2.classList.remove("c");
    back2.style.transition = "0.8s";
  }, 1000);

  setTimeout(() => {
    back3.classList.remove("c");
    back3.style.transition = "0.8s";
  }, 1500); 

  setTimeout(() => {
    back4.classList.remove("c");
    back4.style.transition = "0.8s";
  } , 2000);

  setTimeout(() => {
    back5.classList.remove("c");
    back5.style.transition = "0.8s";
  }, 2500); 

  setTimeout(() => { 
    back6.classList.remove("c"); 
    back6.style.transition = "0.8s";
  }, 3000);

  setTimeout(() => {
    document.body.style.backgroundColor = "#00083B";
    document.body.style.transition = "0.8s";
  }, 3250);

  localStorage.setItem("wallpaper", "1");
}

const sewall2 = () => {
 

  setTimeout(() => {
    back1.classList.add("c");
    back1.style.transition = "0.8s";
  }, 500);

  setTimeout(() => {
    back2.classList.add("c");
    back2.style.transition = "0.8s";
  }, 1000);

  setTimeout(() => {
    back3.classList.add("c");
    back3.style.transition = "0.8s";
  }, 1500);

  setTimeout(() => {
    back4.classList.add("c");
    back4.style.transition = "0.8s";
  }, 2000);

  setTimeout(() => {
    back5.classList.add("c");
    back5.style.transition = "0.8s";
  }, 2500);

  setTimeout(() => {
    back6.classList.add("c");
    back6.style.transition = "0.8s";
  }, 3000);

  setTimeout(() => {
  document.body.style.backgroundColor = "#dfdfdf";
  document.body.style.transition = "0.8s";
  }, 3250);
  localStorage.setItem("wallpaper", "2");
}


function abr_menu() {
  let menu = document.getElementById("menu");
  if (menu.style.display === "block") {
    config.classList.remove("act");
    menu.style.display = "none";
  } else {
    config.classList.add("act");
    menu.style.display = "block";
  }
}

function abr_MenuRe() {
  let menuRe = document.getElementById("MenuRe");
  if (menuRe.style.display === "block") {
    menuRe.style.display = "none";
  } else {
    menuRe.style.display = "block";
  }
}