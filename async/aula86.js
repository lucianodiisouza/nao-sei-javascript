//  Sem callback os elementos não seriam executados em ordem
function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperai(m, t) {
  setTimeout(() => {
    console.log(m);
  }, t);
}

esperai("Teste 1", rand(1, 3));
esperai("Teste 2", rand(1, 3));
esperai("Teste 3", rand(1, 3));

// Com callback
function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaiCb(m, t, c) {
  setTimeout(() => {
    console.log(m);
    if (c) c();
  }, t);
}

esperaiCb("Teste 3", rand(1, 3), function () {
  esperaiCb("Teste 4", rand(1, 3), function () {
    esperaiCb("Teste 5", rand(1, 3));
  });
});

// com promisse

function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperai(m, t) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(m);
    }, t);
  });
}

esperai("Teste 6", rand(1, 3))
  .then((res) => {
    console.log(res);
    return esperai("Teste 7", rand(1, 3));
  })
  .then((res) => {
    console.log(res);
    return esperai("Teste 8", rand(1, 3));
  })
  .then((res) => {
    console.log(res);
  })
  .catch();
