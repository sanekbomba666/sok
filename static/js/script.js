document.addEventListener('DOMContentLoaded', function() {
    // Инициализация слайдера
    const slider = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');
    const arrowLeft = document.querySelector('.slider-arrow.left');
    const arrowRight = document.querySelector('.slider-arrow.right');
    
    let currentSlide = 0;
    const slideCount = slides.length;
    
 
    function goToSlide(index) {
        if (index < 0) {
            index = slideCount - 1;
        } else if (index >= slideCount) {
            index = 0;
        }
        
        slider.style.transform = `translateX(-${index * 100}%)`;
   
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
        
        currentSlide = index;
    }
    
    let slideInterval = setInterval(() => {
        goToSlide(currentSlide + 1);
    }, 5000);

    const sliderContainer = document.querySelector('.news-slider');
    sliderContainer.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });

    sliderContainer.addEventListener('mouseleave', () => {
        slideInterval = setInterval(() => {
            goToSlide(currentSlide + 1);
        }, 5000);
    });
    
   
    arrowLeft.addEventListener('click', () => {
        goToSlide(currentSlide - 1);
    });
    
    arrowRight.addEventListener('click', () => {
        goToSlide(currentSlide + 1);
    });
    

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
    });

  
    generateProductCards();
});



    const readyGrid = document.querySelectorAll('.products-grid')[0];
    const proGrid = document.querySelectorAll('.products-grid')[1];

    productsData.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <div class="product-price">${product.price}</div>
                <a href="#" class="btn">Подробнее</a>
            </div>
        `;

        if (product.type === 'ready') {
            readyGrid.appendChild(card);
        } else {
            proGrid.appendChild(card);
        }
    });

    
    const elements = document.querySelectorAll('.element');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });
    
    elements.forEach(el => observer.observe(el));

    // Замените alert на это, если хотите модальное окно
const modal = document.createElement('div');
modal.innerHTML = `
    <div class="modal-overlay">
        <div class="modal-content">
            <h3>Заказ сборки: ${pcName}</h3>
            <form>
                <input type="text" placeholder="Ваше имя" required>
                <input type="tel" placeholder="Телефон" required>
                <button type="submit">Отправить заявку</button>
            </form>
        </div>
    </div>
`;
document.body.appendChild(modal);