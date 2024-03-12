const modal1Data = [
  { text: "Face do poliedro.", imgUrl: 'assets/img/poliedro_part_1.png' },
  { text: "Aresta do poliedro.", imgUrl: 'assets/img/poliedro_part_2.png' },
  { text: "Vértice do poliedro.", imgUrl: 'assets/img/poliedro_part_3.png' }
]

function renderModal1(itemIndex) {
  if (itemIndex > modal1Data.length) throw new Error('Item não encontrado')

  let modalContent = document.querySelector("#modal-content")
  const content = `<div class="flex sm-col-lg-row">
              <div> 
                <span
                  class="inline-flex w-11 h-11 bg-red-800 rounded-full text-white items-center justify-center"
                  >${parseInt(itemIndex) + 1}</span
                >
                <span class="ml-5 text-xl">${modal1Data[itemIndex].text}</span>
              </div>
              <img src="${modal1Data[itemIndex].imgUrl}" alt="" />
            </div>`;

  modalContent.innerHTML = content

  openModal();
}


const modal2Data = [
  { imgUrl: 'assets/img/cubo.svg' },
  { imgUrl: 'assets/img/paralelepipedo.svg' },
  { imgUrl: 'assets/img/cilindro.svg' },
  { imgUrl: 'assets/img/piramide_hexagonal.svg' },
  { imgUrl: 'assets/img/cilindro_2.svg' },
  { imgUrl: 'assets/img/prisma_triangular.svg' },
  { imgUrl: 'assets/img/cone.svg' },
]

function renderModal2(itemIndex) {
  if (itemIndex > modal2Data.length) throw new Error('Item não encontrado')

  let modalContent = document.querySelector("#modal-content")
  const content = `<div class="flex items-center justify-center  gap-8 flex-col">
              <img src="${modal2Data[itemIndex].imgUrl}"  class="h-64 object-contain"  alt="" />
            </div>`;

  modalContent.innerHTML = content
  openModal();
}


const modal3Data =
  { text: ["Você sabia que a soma das faces opostas de um dado comum será sempre iguala 7? Se você tiver uma face com o número 1 voltada para cima, a face oposta (que está embaixo) será, obrigatoriamente, a de número 6.", "Se tivermos a face com o número 2 voltada para cima, a face oposta será, obrigatoriamente, a de número 5. E assim por diante."] }


function renderModalVoceSabia1(itemIndex) {
  if (itemIndex > modal2Data.length) throw new Error('Item não encontrado')

  let paragraph = ''

  for (let i = 0; i < modal3Data.text.length; i++) {
    const element = modal3Data.text[i];
    paragraph += `<p class="text-xl">${element}</p>`

  }

  let modalContent = document.querySelector("#modal-content")
  const content = `<div class="flex  items-center justify-center gap-8 flex-col">
                ${paragraph}
            </div>`;

  modalContent.innerHTML = content
  openModal();
}





const modal4Data = [
  { title: '1. Um décimo', text: 'É como ter 1 pedaço da pizza, se ela estivesse dividida em 10 partes iguais.' },
  { title: '2. Vinte e cinco centésimos', text: 'Agora, imagine cortar um pedaço grande da pizza, que representa 25% da pizza inteira. Isso seria 0.25 em termos decimais.' },
  { title: '3. Meio', text: 'Se você pegar metade da pizza, isso seria representado por 0,5. É como se você tivesse dividido a pizza ao meio.' },
  { title: '4. Um inteiro e setenta e cinco centésimos', text: 'Isso seria como ter uma pizza inteira e mais 75% de outra. Você pode pensar imaginar isso como ter uma pizza completa e um pedaço extra.' },
]


function renderModalGroup(itemIndex) {
  if (itemIndex > modal4Data.length) throw new Error('Item não encontrado')

  let modalContent = document.querySelector("#modal-content")
  const content = `<div class="flex  justify-center gap-8 flex-col">
                <h3 class="title-h3 italic">${modal4Data[itemIndex].title}</h3>
                <p>${modal4Data[itemIndex].text}</p>
            </div>`;

  modalContent.innerHTML = content
  openModal();
}


function renderModalImage(imageSrc) {
  let modalContent = document.querySelector("#modal-content")
  const content = `<div class="flex items-center justify-center gap-8  flex-col">
  <div class="sm-col-lg-row gap-8">
  <img
    src="${imageSrc}"
    class="block object-contain min-h-[17.5rem] "
    alt=""
  />
</div>
</div>`;

  modalContent.innerHTML = content
  openModal();
}