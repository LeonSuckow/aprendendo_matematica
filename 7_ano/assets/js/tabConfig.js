'use script'

const config = [
  {
    buttonClass: "bg-yellow-800",
    contentClass: 'bg-yellow-800',

    content: `
      <p>
        Para que seja possível a construção de um triângulo, é necessário que a medida do lado maior seja menor do que a soma dos outros dois lados.
      </p>
      <div class="flex justify-center">
        <img src="assets/img/triangulo.svg" class="object-contain" alt="" />
      </div>
    `
  },
  {
    buttonClass: "bg-red-800 text-white",
    contentClass: 'bg-red-800 text-white',
    content: `<p>
    Note que só é possível formar um triângulo com a seguinte propriedade:
      </p>
    <div class="sm-col-lg-row gap-8">
    <p class="lg:min-w-[22.1875rem]">Se o lado afor menor,então, a < b + c. <br>Se o lado b for menor,então, b < a + c. <br>Se o lado c for menor,então, c < a + b.</p>
    <img src="assets/img/triangulos.svg" alt="" />
  </div>`
  },
  {
    buttonClass: "bg-blue-800 text-yellow-800",
    contentClass: 'bg-blue-800 text-white',
    content: `
    <h2 class="text-xl">Sabemos que:</h2>
    <div class="flex">
      <div class="flex flex-col gap-8 lg:min-w-[15.8125rem]">
        <p>A condição de existência dos triângulos é:</p>
        <img src="assets/img/numeros/calculo_triangulos.svg" class="lg:max-w-[7rem]" alt="" />
      </div>
      <div class="flex flex-col gap-8 lg:border-l-[3px] border-white lg: pl-8">
        <p>
          Para construir um triângulo é preciso que a medida do lado
          maior seja menor que a soma das medidas dos outros lados.
        </p>
        <p>
          Observe que: 4> 1 + 2 <br />
          Portanto, não existe <br />
          um triângulo com <br />
          estas medidas.
        </p>
      </div>
    </div>
    `
  }
];

let buttonActive = "";

function renderNavButtons(config) {
  const navButtonsList = document.getElementById("nav-buttons-list");
  config.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = "flex items-end"
    const button = document.createElement("button");
    button.className = `${item.buttonClass} w-[7.875rem] rounded-t-[3.125rem] h-[4.0625rem] transition-all duration-200 flex items-center justify-center text-destaque text-4xl`;
    button.innerText = index + 1;
    button.onclick = () => {
      const buttons = navButtonsList.querySelectorAll('button');
      buttons.forEach(btn => btn.style.height = `4.0625rem`);
      button.style.height = `5.5625rem`;
      renderNavContent(item.content, item.contentClass);
    };

    let defaultNavActive = index === 0;
    if (defaultNavActive) {
      button.click()
    }
    li.appendChild(button);
    navButtonsList.appendChild(li);
  });
}

let oldClassContent = ''
function renderNavContent(content, contentClass) {
  const navContent = document.getElementById("nav-content");

  if (oldClassContent) {
    const oldClassList = oldClassContent.split(' ');
    oldClassList.forEach(className => {
      navContent.classList.remove(className);
    });
  }

  if (contentClass) {
    const newClassList = contentClass.split(' ');
    newClassList.forEach(className => {
      navContent.classList.add(className);
    });
  }

  navContent.innerHTML = content;
  oldClassContent = contentClass;
}

renderNavButtons(config);