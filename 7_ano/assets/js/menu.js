'use script'
const menuItems = [
  { text: 'Nem sempre existe um triângulo', sectionId: '#nemSempreExistemTriangulos' },
  { text: 'Circunferência tem perímetro?', sectionId: '#circunferenciaTemPerimetro' },
  { text: 'Qual é a maior pista de fórmula1?', sectionId: '#maiorPistaFormula1' },
  { text: 'A geometria das roupas', sectionId: '#geometriaDasRoupas' },
];

const menu = document.getElementById('menu');
const menuItemsContainer = document.getElementById('menuItems');

// Function to toggle menu open/close
function toggleMenu() {
  menu.classList.toggle('w-full');
  menu.classList.toggle('opacity-1');
  menu.classList.toggle('w-0');
  menu.classList.toggle('opacity-0');
  menu.classList.toggle('pointer-events-none');
}

function generateMenuItems() {
  menuItems.forEach((item, index) => {
    const li = document.createElement('li');
    if (index > 0)
      li.classList.add('border-t', 'border-t-beige-300')
    li.classList.add('text-destaque', 'text-yellow-800', 'py-6');

    const a = document.createElement('a');
    a.textContent = item.text;
    a.classList.add('hover:text-yellow-600', 'duration-300', 'cursor-pointer');
    a.addEventListener('click', () => {
      scrollToSection(item.sectionId);
      menuItemsContainer.querySelectorAll('a').forEach(link => {
        link.classList.remove('text-white');
      });
      a.classList.add('text-white');
    });

    li.appendChild(a);
    menuItemsContainer.appendChild(li);
  });
}

function scrollToSection(sectionId) {
  const section = document.querySelector(sectionId);
  const yOffset = -124; // Ajuste o valor conforme necessário
  const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: 'smooth' });
  toggleMenu();
}

// Call the function to generate menu items
generateMenuItems();