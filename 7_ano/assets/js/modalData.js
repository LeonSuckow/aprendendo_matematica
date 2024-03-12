'use script'

const modal1Data = [
  {
    content: `<p class="text-sm md:text-lg lg:text-xl">Um terreno quadrado foi dividido em quatro partes, como mostra
  o desenho abaixo. Uma parte foi destinada para a piscina, uma
  para a quadra, uma parte quadrada para o canteiro de flores e
  outra, também quadrada, para o gramado. Sabe-se que o
  perímetro da parte destinada ao gramado é de 20 m e o do
  canteiro de flores éde 12 m.Qual é o perímetro da parte
  destinada à piscina?</p>`
  },
  {
    content: `<p class="text-sm md:text-lg lg:text-xl"> Note que, como a parte delineada para o gramado é um quadrado
  e possui o perímetro de 20 m, os lados desse quadrado medem:
  <span class="inline-flex"
    ><img
      src="assets/img/numeros/20_4_5_m.svg"
      class="translate-y-1/2"
      alt=""
  /></span></p>`
  },
  {
    content: `<p class="text-sm md:text-lg lg:text-xl">O canteiro de flores, também sendo um quadrado, e com
  perímetro de 12 m, deverá possuir lados medindo: <span
    class="inline-flex"
    ><img
      src="assets/img/numeros/12_4_3_m.svg"
      class="translate-y-1/2"
      alt=""
  /></span></p>`},
  {
    content: ` <div class="flex justify-center z-20">
  <img
    src="assets/img/pscina_flores_gramado_quadra.png"
    class="object-contain"
    alt=""
  />
</div>`
  }
]


const modal2Data = [
  {
    content: `<p class="text-sm md:text-lg lg:text-xl">Lui zé professor de Educação Física. E sempre que leva os seus alunos para praticar esportes, ele inicia a aula com um alongamento e uma corrida ao redor daquadra. Sabe-se que Luiz geralmente pede que todos os alunos deem 3 voltas aoredor da quadra, que possui formato retangular com 16 metros de largura por 27metros de comprimento. </p>`
  },
  {
    content: `<p class="text-sm md:text-lg lg:text-xl"> Ao final da corrida, quantos metros cada aluno terá percorrido?</p>`
  },
  {
    content: `<p class="text-sm md:text-lg lg:text-xl">Como se trata de um retângulo, basta calcular a soma dos lados e depois multiplicar por 3, porque foram dadas 3 voltas.</p>`,
  },
  {
    content: ` <div class="flex justify-center z-20">
  <img
    src="assets/img/formula-5.svg"
    class="object-contain"
    alt=""
  />
</div>`
  },
  {
    content: ` <div class="flex justify-center z-20">
  <img
    src="assets/img/angulos_retangulo.png"
    class="object-contain"
    alt=""
  />
</div>`
  }
]



const modal3Data = [
  {
    content: `<p class="text-sm md:text-lg lg:text-xl">Para o reflorestamento de uma área, deve-se cercar totalmente, com tela, os lados deum terreno, exceto o lado margeado pelo rio, conforme afigura.</p>`
  },
  {
    content: ` <div class="flex justify-center z-20">
  <img
    src="assets/img/retangulo_rio.svg"
    class="object-contain"
    alt=""
  />
</div>`
  },
  {
    content: `<p class="text-sm md:text-lg lg:text-xl">Cada rolo de tela, que será comprado para a confecção da cerca, contém 48 metros de comprimento. Encontre a quantidade mínima de rolos que deve ser comprada para cercar esse terreno. </p>`
  },
  {
    content: `<p class="text-sm md:text-lg lg:text-xl">Note que, um dos lados é margeado pelo rio. Logo, devemos desconsiderar esse lado ao calcular o perímetro do terreno, pois não utilizaremos tela nesse lado.</p>`,
  },
  {
    content: `<p class=" lg:max-w-[80%] text-sm md:text-lg lg:text-xl">Desse modo, a quantidade de tela utilizada para cercar todo o terreno é igual a 81 +81 + 190 = 352 metros. Por outro lado, a tela é vendida em rolos de 48 m:</p>`,
  },
  {
    content: ` <div class="flex justify-center z-20">
    <img
    src="assets/img/numeros/352_48.svg"
    class="object-contain"
    alt=""
    />
    </div>`
  },
  {
    content: `<p class=" lg:max-w-[80%] text-sm md:text-lg lg:text-xl">Mas,7 rolos de tela não são suficientes para cercar o terreno, porque aindaficariam 16 metros sem cerca. Assim, a quantidade mínima de rolos para cercar oterreno é 7+1 = 8, embora o oitavo rolo não seja utilizado completamente. </p>`,
  },
]

const modal4Data = [
  {
    content: `<p class="text-sm md:text-lg lg:text-xl">Um ciclista deu 7500 pedaladas, cuja bicicleta tem pneus de 20 cm de raio. Usando a aproximação π = 3 e e supondo que cada pedalada corresponda a uma volta completa do pneu, calcule a distância percorrida pelo ciclista.</p>`
  },
  {
    content: `<p class="text-sm md:text-lg lg:text-xl">Observe que, com os dados do enunciado é possível calcular o comprimento de cada pedalada:</p>`
  },
  {
    content: ` <div class="flex justify-center z-20">
  <img
    src="assets/img/formula_6.svg"
    class="object-contain"
    alt=""
  />
</div>`
  },
  {
    content: `<p class="text-sm md:text-lg lg:text-xl">Como ele deu 7500 voltas, temos:</p>`
  },
  {
    content: ` <div class="flex justify-start z-20">
    <img
    src="assets/img/formula_7.svg"
    class="object-contain mb-40"
    alt=""
    />
    </div>`
  },
]



function renderModal(modalData) {
  if (modalData.length <= 0) throw new Error('Item não encontrado')
  let modalBg = document.querySelector(".modal-bg")
  modalBg.style.background = '#23519F'
  let modalContent = document.querySelector("#modal-content")
  let modalElement = ''
  for (let i = 0; i < modalData.length; i++) {
    const element = modalData[i].content;
    modalElement += `${element}`
  }

  const content = `<div class="flex flex-col gap-6 h-full">
                  ${modalElement}
                  <img
                  src="assets/img/mulher_com_duvida.png"
                  class="hidden lg:block object-contain absolute right-6 -bottom-0 max-w-0-[14.625rem] z-10"
                />
            </div>`;

  modalContent.innerHTML = content
  openModal();
}




function renderModalImage(imageSrc) {
  let modalContent = document.querySelector("#modal-content")
  let modalBg = document.querySelector(".modal-bg")
  modalBg.style.background = '#fff'
  const content = `<div class="flex items-center justify-center bg-white h-full gap-8 flex-col">
  <div class="sm-col-lg-row gap-8">
  <img
    src="${imageSrc}"
    class="block object-contain min-h-[25.5rem] "
    alt=""
  />
</div>
</div>`;

  modalContent.innerHTML = content
  openModal();
}