        // Particles.js configuration
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: '#d4af37' },
                shape: { type: 'circle' },
                opacity: {
                    value: 0.5,
                    random: true,
                    animation: { enable: true, speed: 1, minimumValue: 0.1, sync: false }
                },
                size: {
                    value: 3,
                    random: true,
                    animation: { enable: true, speed: 2, minimumValue: 0.1, sync: false }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#d4af37',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    outModes: { default: 'out' },
                    attract: { enable: false, rotateX: 600, rotateY: 1200 }
                }
            },
            interactivity: {
                detectsOn: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'repulse' },
                    onclick: { enable: true, mode: 'push' },
                    resize: true
                },
                modes: {
                    repulse: { distance: 100, duration: 0.4 },
                    push: { particles_nb: 4 }
                }
            },
            retina_detect: true
        });

        // Menu data
        const menuData = {
            main: [
                { 
                    name: 'Veggie Pizza', 
                    price: '$18.99', 
                    image: 'https://www.papajohns.com/vegetarian-pizza/img/vegetarian-hero.jpg',
                    description: 'A vibrant medley of fresh garden vegetables on our signature artisanal crust, finished with herb-infused olive oil.',
                    tags: ['Vegetarian', 'House Favorite']
                },
                { 
                    name: 'Cheese Pizza', 
                    price: '$16.99', 
                    image: 'https://www.papajohns.com/pizza-pages/img/hero.jpg',
                    description: 'Our classic pizza featuring a perfect blend of five premium cheeses atop our secret recipe tomato sauce.',
                    tags: ['Vegetarian', 'Classic']
                },
                { 
                    name: 'Burger & Fries Meal', 
                    price: '$21.99', 
                    image: 'https://www.sheknows.com/wp-content/uploads/2019/01/mcdonalds-bacon-items.jpg',
                    description: 'A juicy premium beef patty with all the fixings, served with golden crispy fries and our signature dipping sauce.',
                    tags: ['Popular', 'Comfort Food']
                },
                { 
                    name: 'Gourmet Burger Platter', 
                    price: '$24.99', 
                    image: 'https://www.seriouseats.com/thmb/d2DYiLy-rNKmxrW1gchCOZcGIWY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20210607-INNOUTBURGERS-JANJIGIAN-seriouseats-23-b2b8a505ff414272aab71590a8985b85.jpg',
                    description: 'Prime Angus beef with caramelized onions, aged cheddar, and truffle aioli, accompanied by gourmet sides.',
                    tags: ['Chef\'s Special', 'Premium']
                },
                { 
                    name: 'Artisanal Sandwich', 
                    price: '$19.99', 
                    image: 'https://www.allrecipes.com/thmb/m8Q8v8TmfCqVAXuxYIwu-DooSjw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ar-cold-sub-taste-test-main-2-4x3-9e302eec508149aea9b7853b28646c82.jpg',
                    description: 'Freshly baked sourdough filled with premium cold cuts, aged cheeses, and house-made condiments.',
                    tags: ['New', 'Seasonal']
                }
            ],
            sides: [
                { 
                    name: 'Falafel Plate', 
                    price: '$12.99', 
                    image: 'https://www.dimitrasdishes.com/wp-content/uploads/2021/03/WEB-WIDE-Side-Closeup-1024x683.jpg',
                    description: 'Crispy herb-infused chickpea fritters served with tahini sauce, fresh vegetables and warm pita bread.',
                    tags: ['Vegan', 'Gluten-Free Option']
                },
                { 
                    name: 'Corn Soup', 
                    price: '$9.99', 
                    image: 'https://therecipecritic.com/wp-content/uploads/2018/10/IMG_5960.jpg',
                    description: 'Creamy sweet corn soup with a hint of truffle, garnished with chives and crème fraîche.',
                    tags: ['Vegetarian', 'Seasonal']
                },
                { 
                    name: 'Cheese Bread', 
                    price: '$8.99', 
                    image: 'https://therecipecritic.com/wp-content/uploads/2020/02/cheesy_garlic_bread.jpg',
                    description: 'Warm artisan bread topped with garlic butter and a blend of melted premium cheeses.',
                    tags: ['Vegetarian', 'Shareable']
                },
                { 
                    name: 'Cheese Sticks', 
                    price: '$10.99', 
                    image: 'https://www.allrecipes.com/thmb/hubOWXvWGhHffS5-vKMU8-KEabI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/23596-fried-mozzarella-cheese-sticks-2x1-253-2599fbbad55d4608a7ea9a852d2f8ae5.jpg',
                    description: 'Hand-breaded mozzarella sticks, fried to golden perfection and served with marinara sauce.',
                    tags: ['Vegetarian', 'Popular']
                }
            ],
            desserts: [
                { 
                    name: 'Tiramisu', 
                    price: '$12.99', 
                    image: 'https://static01.nyt.com/images/2017/04/05/dining/05COOKING-TIRAMISU1/05COOKING-TIRAMISU1-square640.jpg',
                    description: 'Layers of coffee-soaked ladyfingers and mascarpone cream, dusted with premium cocoa powder.',
                    tags: ['Classic', 'Contains Alcohol']
                },
                { 
                    name: 'Chocolate Mousse', 
                    price: '$11.99', 
                    image: 'https://www.thehungrybites.com/wp-content/uploads/2016/11/easy-chocolate-mousse-cake-featured.jpg',
                    description: 'Silky smooth dark chocolate mousse topped with fresh berries and edible gold leaf.',
                    tags: ['Signature Dessert', 'Rich']
                },
                { 
                    name: 'Strawberry Cheesecake', 
                    price: '$13.99', 
                    image: 'https://sugarspunrun.com/wp-content/uploads/2023/06/Strawberry-cheesecake-recipe-6-of-8.jpg',
                    description: 'Creamy New York style cheesecake with a graham cracker crust and fresh strawberry compote.',
                    tags: ['Seasonal', 'Popular']
                }
            ],
            drinks: [
                { 
                    name: 'Custom Soda', 
                    price: '$5.99', 
                    image: 'https://media.istockphoto.com/id/1368679348/photo/glasses-of-soda.jpg',
                    description: 'House-made soda with your choice of natural fruit syrups and fresh herbs, served over ice.',
                    tags: ['Customizable', 'Refillable']
                },
                { 
                    name: 'Custom Boba', 
                    price: '$6.99', 
                    image: 'https://bubblepanda.com/cdn/shop/articles/bubble-tea-ingredients.jpg',
                    description: 'Handcrafted boba tea with premium loose leaf tea, your choice of milk, and tapioca pearls.',
                    tags: ['Customizable', 'Popular']
                },
                { 
                    name: 'Custom Shake', 
                    price: '$7.99', 
                    image: 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2020-07-how-to-make-a-milkshake-at-home%2F2020-06-08_AT-K19388',
                    description: 'Creamy milkshake made with artisanal ice cream and your choice of mix-ins and toppings.',
                    tags: ['Customizable', 'Indulgent']
                },
                { 
                    name: 'Mango Lassi', 
                    price: '$6.99', 
                    image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/mango-lassi-recipe.jpg',
                    description: 'Refreshing blend of ripe Alphonso mangoes, creamy yogurt, and a hint of cardamom.',
                    tags: ['Signature Drink', 'Seasonal']
                }
            ]
        };

        // Function to create menu items
        function createMenuItem(item) {
            const tagElements = item.tags ? item.tags.map(tag => `<span class="item-tag">${tag}</span>`).join('') : '';
            
            return `
                <div class="menu-item">
                    <img src="${item.image}" alt="${item.name}" class="item-image">
                    <div class="item-content">
                        <h3 class="item-name">${item.name}</h3>
                        <p class="item-description">${item.description}</p>
                        <div class="item-tags">
                            ${tagElements}
                        </div>
                        <p class="item-price">${item.price}</p>
                    </div>
                </div>
            `;
        }

        // Initialize menu items
        function initializeMenuItems() {
            Object.keys(menuData).forEach(category => {
                const container = document.getElementById(category);
                container.innerHTML = menuData[category].map(item => createMenuItem(item)).join('');
            });
        }

        // Category switching logic
        const categoryButtons = document.querySelectorAll('.category-button');
        const menuItemsContainers = document.querySelectorAll('.menu-items');

        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons and containers
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                menuItemsContainers.forEach(container => container.classList.remove('active'));

                // Add active class to clicked button and corresponding container
                button.classList.add('active');
                const category = button.dataset.category;
                document.getElementById(category).classList.add('active');

                // Trigger animation for newly visible items
                const items = document.getElementById(category).children;
                Array.from(items).forEach((item, index) => {
                    item.style.animation = `fadeInUp 0.5s forwards ${index * 0.1}s`;
                });
            });
        });

        // Intersection Observer for animation on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1
        });

        // Observe all menu items
        document.querySelectorAll('.menu-item').forEach(item => {
            observer.observe(item);
        });

        // Initialize menu on page load
        document.addEventListener('DOMContentLoaded', () => {
            initializeMenuItems();

            // Add hover effect for menu items
            const menuItems = document.querySelectorAll('.menu-item');
            menuItems.forEach(item => {
                item.addEventListener('mouseenter', () => {
                    item.style.transform = 'translateY(-10px)';
                    item.style.boxShadow = '0 10px 30px rgba(212, 175, 55, 0.2)';
                });

                item.addEventListener('mouseleave', () => {
                    item.style.transform = 'translateY(0)';
                    item.style.boxShadow = 'none';
                });
            });

            // Add smooth scroll behavior for discover button
            document.querySelector('.discover-button').addEventListener('click', (e) => {
                e.preventDefault();
                window.scrollTo({
                    top: document.querySelector('.menu-section').offsetTop,
                    behavior: 'smooth'
                });
            });

            // Add loading animation
            document.body.style.opacity = '0';
            requestAnimationFrame(() => {
                document.body.style.transition = 'opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
                document.body.style.opacity = '1';
            });
        });

        // Add parallax effect for menu items
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            document.querySelectorAll('.menu-item').forEach(item => {
                const speed = 0.05;
                const yPos = -(scrolled * speed);
                item.style.transform = `translateY(${yPos}px)`;
            });
        });

        // Optional: Add keyboard navigation for categories
        document.addEventListener('keydown', (e) => {
            const activeButton = document.querySelector('.category-button.active');
            const buttons = Array.from(categoryButtons);
            const currentIndex = buttons.indexOf(activeButton);

            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                const nextIndex = (currentIndex + 1) % buttons.length;
                buttons[nextIndex].click();
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                const prevIndex = (currentIndex - 1 + buttons.length) % buttons.length;
                buttons[prevIndex].click();
            }
        });
 const slides = [
            {
                image: 'https://www.maisonvalentina.net/en/inspiration-and-ideas/wp-content/uploads/2018/07/luxury_restaurants.jpg',
                title: 'La Verdure Dorée',
                subtitle: 'Where Luxury Meets Plant-Based Perfection'
            },
            {
                image: 'https://lux-life.digital/wp-content/uploads/2022/05/Luxury-Dining.jpg',
                title: 'Culinary Excellence',
                subtitle: 'Every Dish Tells a Story of Passion and Innovation'
            },
            {
                image: 'https://loveincorporated.blob.core.windows.net/contentimages/gallery/e3e1c2ee-dfa0-4c87-9e93-f5224ff250df-expensive_restaurants_hawaii.jpg',
                title: 'Nature\'s Finest',
                subtitle: 'Sustainably Sourced, Artfully Prepared'
            },
            {
                image: 'https://c.ndtvimg.com/2024-01/0ra76fjo_caviar_625x300_04_January_24.jpg',
                title: 'Elegant Dining',
                subtitle: 'An Atmosphere of Refined Sophistication'
            },
            {
                image: 'https://media.istockphoto.com/id/911987186/photo/exotic-restaurant-gourmet-food.jpg?s=612x612&w=0&k=20&c=PoUSQ_C-ULM4rPOGZECHzyQgV6SnErtfNDnhSaHcyKU=',
                title: 'Extraordinary Moments',
                subtitle: 'Creating Memories That Last a Lifetime'
            },
            {
                image: 'https://img.freepik.com/premium-photo/luxury-delicious-creative-molecular-food_201836-6408.jpg',
                title: 'Culinary Innovation',
                subtitle: 'Where Artistry Meets Gastronomy'
            },
            {
                image: 'https://media.istockphoto.com/id/664553476/photo/fancy-dinner.jpg?s=612x612&w=0&k=20&c=68TGJrNgf9wi5vWYXLMuGgvYsaZnu_pYU19iEmtemWs=',
                title: 'Divine Dining',
                subtitle: 'Experience the Height of Culinary Excellence'
            }
        ];

        const slider = document.querySelector('.slider');
        const sliderNav = document.querySelector('.slider-nav');
        let currentSlide = 0;
        let isTransitioning = false;

        // Initialize slides and navigation dots
        slides.forEach((slide, index) => {
            const slideElement = document.createElement('div');
            slideElement.className = `slide ${index === 0 ? 'active' : ''}`;
            slideElement.style.backgroundImage = `url(${slide.image})`;
            
            const content = document.createElement('div');
            content.className = 'slide-content';
            content.innerHTML = `
                <h1 class="slide-title">${slide.title}</h1>
                <p class="slide-subtitle">${slide.subtitle}</p>
                <a href="#" class="cta-button">Reserve Your Experience</a>
            `;
            
            slideElement.appendChild(content);
            slider.appendChild(slideElement);

            const dot = document.createElement('div');
            dot.className = `slider-dot ${index === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => {
                if (!isTransitioning) {
                    goToSlide(index);
                }
            });
            sliderNav.appendChild(dot);
        });

        function goToSlide(index) {
            if (currentSlide === index || isTransitioning) return;
            
            isTransitioning = true;
            const slides = document.querySelectorAll('.slide');
            const dots = document.querySelectorAll('.slider-dot');
            
            // Remove active classes
            slides[currentSlide].classList.remove('active');
            dots[currentSlide].classList.remove('active');
            
            // Update current slide
            currentSlide = index;
            
            // Add active classes
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
            
            // Reset transition lock after animation completes
            setTimeout(() => {
                isTransitioning = false;
            }, 1200); // Matches the CSS transition duration
        }

        function nextSlide() {
            if (!isTransitioning) {
                goToSlide((currentSlide + 1) % slides.length);
            }
        }

        // Auto-advance slides with pause on hover
        let slideInterval = setInterval(nextSlide, 7000); // Increased interval for better viewing

        slider.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });

        slider.addEventListener('mouseleave', () => {
            slideInterval = setInterval(nextSlide, 7000);
        });

        // Enhanced keyboard navigation with smooth transitions
        document.addEventListener('keydown', (e) => {
            if (!isTransitioning) {
                if (e.key === 'ArrowRight') {
                    goToSlide((currentSlide + 1) % slides.length);
                } else if (e.key === 'ArrowLeft') {
                    goToSlide((currentSlide - 1 + slides.length) % slides.length);
                }
            }
        });

        // Enhanced navbar scroll effect with smooth transitions
        let lastScroll = 0;
        const navbar = document.querySelector('.navbar');
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            // Add smooth transition for navbar hide/show
            if (currentScroll > lastScroll && currentScroll > 100) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }
            
            if (currentScroll > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            lastScroll = currentScroll;
        });

        // Smooth scroll for scroll indicator with enhanced animation
        document.querySelector('.scroll-indicator').addEventListener('click', () => {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });

        // Add loading animation with smooth fade-in
        window.addEventListener('load', () => {
            document.body.style.opacity = '0';
            requestAnimationFrame(() => {
                document.body.style.transition = 'opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
                document.body.style.opacity = '1';
            });
        });

        // Enhanced parallax effect for slides
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            document.querySelectorAll('.slide').forEach(slide => {
                const speed = 0.4;
                slide.style.transform = `translateY(${scrolled * speed}px) scale(${1 + scrolled * 0.0005})`;
            });
        });
  tsParticles.load("particles-js", {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#d4af37"
                },
                shape: {
                    type: "circle"
                },
                opacity: {
                    value: 0.5,
                    random: true
                },
                size: {
                    value: 3,
                    random: true
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#d4af37",
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    repulse: {
                        distance: 100,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });

        // Intersection Observer for scroll animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);

                    // If this is a stat number, start the counter
                    if (entry.target.classList.contains('stats-container')) {
                        startCounters();
                    }
                }
            });
        }, observerOptions);

        // Observe all elements with show-on-scroll class
        document.querySelectorAll('.show-on-scroll').forEach(element => {
            observer.observe(element);
        });

        // Number counter animation
        function startCounters() {
            const counters = document.querySelectorAll('.stat-number');
            const speed = 200;

            counters.forEach(counter => {
                const target = +counter.getAttribute('data-value');
                const increment = target / speed;

                let currentCount = 0;

                const updateCount = () => {
                    if (currentCount < target) {
                        currentCount += increment;
                        counter.textContent = Math.ceil(currentCount);
                        setTimeout(updateCount, 1);
                    } else {
                        counter.textContent = target;
                    }
                };

                updateCount();
            });
        }

        // Gallery hover effects
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('mouseenter', (e) => {
                const otherItems = document.querySelectorAll('.gallery-item:not(:hover)');
                otherItems.forEach(other => {
                    other.style.opacity = '0.7';
                    other.style.transform = 'scale(0.95)';
                });
            });

            item.addEventListener('mouseleave', (e) => {
                const allItems = document.querySelectorAll('.gallery-item');
                allItems.forEach(other => {
                    other.style.opacity = '1';
                    other.style.transform = 'scale(1)';
                });
            });
        });

        // Feature items hover effect
        document.querySelectorAll('.feature-item').forEach(item => {
            item.addEventListener('mouseenter', (e) => {
                item.querySelector('i').style.transform = 'scale(1.2) rotate(10deg)';
            });

            item.addEventListener('mouseleave', (e) => {
                item.querySelector('i').style.transform = 'scale(1) rotate(0deg)';
            });
        });

        // Smooth scroll for CTA button
        document.querySelector('.cta-button').addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = document.querySelector(e.target.getAttribute('href'));
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });

        // Add loading animation on page load
        window.addEventListener('load', () => {
            const elements = document.querySelectorAll('.show-on-scroll');
            elements.forEach((element, index) => {
                setTimeout(() => {
                    element.classList.add('fade-in');
                }, index * 200);
            });
        });
   particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: '#d4af37' },
                shape: { type: 'circle' },
                opacity: {
                    value: 0.5,
                    random: true,
                    animation: { enable: true, speed: 1, minimumValue: 0.1, sync: false }
                },
                size: {
                    value: 3,
                    random: true,
                    animation: { enable: true, speed: 2, minimumValue: 0.1, sync: false }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#d4af37',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    outModes: { default: 'out' },
                    attract: { enable: false, rotateX: 600, rotateY: 1200 }
                }
            },
            interactivity: {
                detectsOn: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'repulse' },
                    onclick: { enable: true, mode: 'push' },
                    resize: true
                },
                modes: {
                    repulse: { distance: 100, duration: 0.4 },
                    push: { particles_nb: 4 }
                }
            },
            retina_detect: true
        });

        // Menu data
        const menuData = {
            main: [
                { 
                    name: 'Veggie Pizza', 
                    price: '$18.99', 
                    image: 'https://www.papajohns.com/vegetarian-pizza/img/vegetarian-hero.jpg',
                    description: 'A vibrant medley of fresh garden vegetables on our signature artisanal crust, finished with herb-infused olive oil.',
                    tags: ['Vegetarian', 'House Favorite']
                },
                { 
                    name: 'Cheese Pizza', 
                    price: '$16.99', 
                    image: 'https://www.papajohns.com/pizza-pages/img/hero.jpg',
                    description: 'Our classic pizza featuring a perfect blend of five premium cheeses atop our secret recipe tomato sauce.',
                    tags: ['Vegetarian', 'Classic']
                },
                { 
                    name: 'Burger & Fries Meal', 
                    price: '$21.99', 
                    image: 'https://www.sheknows.com/wp-content/uploads/2019/01/mcdonalds-bacon-items.jpg',
                    description: 'A juicy premium beef patty with all the fixings, served with golden crispy fries and our signature dipping sauce.',
                    tags: ['Popular', 'Comfort Food']
                },
                { 
                    name: 'Gourmet Burger Platter', 
                    price: '$24.99', 
                    image: 'https://www.seriouseats.com/thmb/d2DYiLy-rNKmxrW1gchCOZcGIWY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20210607-INNOUTBURGERS-JANJIGIAN-seriouseats-23-b2b8a505ff414272aab71590a8985b85.jpg',
                    description: 'Prime Angus beef with caramelized onions, aged cheddar, and truffle aioli, accompanied by gourmet sides.',
                    tags: ['Chef\'s Special', 'Premium']
                },
                { 
                    name: 'Artisanal Sandwich', 
                    price: '$19.99', 
                    image: 'https://www.allrecipes.com/thmb/m8Q8v8TmfCqVAXuxYIwu-DooSjw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ar-cold-sub-taste-test-main-2-4x3-9e302eec508149aea9b7853b28646c82.jpg',
                    description: 'Freshly baked sourdough filled with premium cold cuts, aged cheeses, and house-made condiments.',
                    tags: ['New', 'Seasonal']
                }
            ],
            sides: [
                { 
                    name: 'Falafel Plate', 
                    price: '$12.99', 
                    image: 'https://www.dimitrasdishes.com/wp-content/uploads/2021/03/WEB-WIDE-Side-Closeup-1024x683.jpg',
                    description: 'Crispy herb-infused chickpea fritters served with tahini sauce, fresh vegetables and warm pita bread.',
                    tags: ['Vegan', 'Gluten-Free Option']
                },
                { 
                    name: 'Corn Soup', 
                    price: '$9.99', 
                    image: 'https://therecipecritic.com/wp-content/uploads/2018/10/IMG_5960.jpg',
                    description: 'Creamy sweet corn soup with a hint of truffle, garnished with chives and crème fraîche.',
                    tags: ['Vegetarian', 'Seasonal']
                },
                { 
                    name: 'Cheese Bread', 
                    price: '$8.99', 
                    image: 'https://therecipecritic.com/wp-content/uploads/2020/02/cheesy_garlic_bread.jpg',
                    description: 'Warm artisan bread topped with garlic butter and a blend of melted premium cheeses.',
                    tags: ['Vegetarian', 'Shareable']
                },
                { 
                    name: 'Cheese Sticks', 
                    price: '$10.99', 
                    image: 'https://www.allrecipes.com/thmb/hubOWXvWGhHffS5-vKMU8-KEabI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/23596-fried-mozzarella-cheese-sticks-2x1-253-2599fbbad55d4608a7ea9a852d2f8ae5.jpg',
                    description: 'Hand-breaded mozzarella sticks, fried to golden perfection and served with marinara sauce.',
                    tags: ['Vegetarian', 'Popular']
                }
            ],
            desserts: [
                { 
                    name: 'Tiramisu', 
                    price: '$12.99', 
                    image: 'https://static01.nyt.com/images/2017/04/05/dining/05COOKING-TIRAMISU1/05COOKING-TIRAMISU1-square640.jpg',
                    description: 'Layers of coffee-soaked ladyfingers and mascarpone cream, dusted with premium cocoa powder.',
                    tags: ['Classic', 'Contains Alcohol']
                },
                { 
                    name: 'Chocolate Mousse', 
                    price: '$11.99', 
                    image: 'https://www.thehungrybites.com/wp-content/uploads/2016/11/easy-chocolate-mousse-cake-featured.jpg',
                    description: 'Silky smooth dark chocolate mousse topped with fresh berries and edible gold leaf.',
                    tags: ['Signature Dessert', 'Rich']
                },
                { 
                    name: 'Strawberry Cheesecake', 
                    price: '$13.99', 
                    image: 'https://sugarspunrun.com/wp-content/uploads/2023/06/Strawberry-cheesecake-recipe-6-of-8.jpg',
                    description: 'Creamy New York style cheesecake with a graham cracker crust and fresh strawberry compote.',
                    tags: ['Seasonal', 'Popular']
                }
            ],
            drinks: [
                { 
                    name: 'Custom Soda', 
                    price: '$5.99', 
                    image: 'https://media.istockphoto.com/id/1368679348/photo/glasses-of-soda.jpg',
                    description: 'House-made soda with your choice of natural fruit syrups and fresh herbs, served over ice.',
                    tags: ['Customizable', 'Refillable']
                },
                { 
                    name: 'Custom Boba', 
                    price: '$6.99', 
                    image: 'https://bubblepanda.com/cdn/shop/articles/bubble-tea-ingredients.jpg',
                    description: 'Handcrafted boba tea with premium loose leaf tea, your choice of milk, and tapioca pearls.',
                    tags: ['Customizable', 'Popular']
                },
                { 
                    name: 'Custom Shake', 
                    price: '$7.99', 
                    image: 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2020-07-how-to-make-a-milkshake-at-home%2F2020-06-08_AT-K19388',
                    description: 'Creamy milkshake made with artisanal ice cream and your choice of mix-ins and toppings.',
                    tags: ['Customizable', 'Indulgent']
                },
                { 
                    name: 'Mango Lassi', 
                    price: '$6.99', 
                    image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/mango-lassi-recipe.jpg',
                    description: 'Refreshing blend of ripe Alphonso mangoes, creamy yogurt, and a hint of cardamom.',
                    tags: ['Signature Drink', 'Seasonal']
                }
            ]
        };

        // Function to create menu items
        function createMenuItem(item) {
            const tagElements = item.tags ? item.tags.map(tag => `<span class="item-tag">${tag}</span>`).join('') : '';
            
            return `
                <div class="menu-item">
                    <img src="${item.image}" alt="${item.name}" class="item-image">
                    <div class="item-content">
                        <h3 class="item-name">${item.name}</h3>
                        <p class="item-description">${item.description}</p>
                        <div class="item-tags">
                            ${tagElements}
                        </div>
                        <p class="item-price">${item.price}</p>
                    </div>
                </div>
            `;
        }

        // Initialize menu items
        function initializeMenuItems() {
            Object.keys(menuData).forEach(category => {
                const container = document.getElementById(category);
                container.innerHTML = menuData[category].map(item => createMenuItem(item)).join('');
            });
        }

        // Category switching logic
        const categoryButtons = document.querySelectorAll('.category-button');
        const menuItemsContainers = document.querySelectorAll('.menu-items');

        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons and containers
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                menuItemsContainers.forEach(container => container.classList.remove('active'));

                // Add active class to clicked button and corresponding container
                button.classList.add('active');
                const category = button.dataset.category;
                document.getElementById(category).classList.add('active');

                // Trigger animation for newly visible items
                const items = document.getElementById(category).children;
                Array.from(items).forEach((item, index) => {
                    item.style.animation = `fadeInUp 0.5s forwards ${index * 0.1}s`;
                });
            });
        });

        // Intersection Observer for animation on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1
        });

        // Observe all menu items
        document.querySelectorAll('.menu-item').forEach(item => {
            observer.observe(item);
        });

        // Initialize menu on page load
        document.addEventListener('DOMContentLoaded', () => {
            initializeMenuItems();

            // Add hover effect for menu items
            const menuItems = document.querySelectorAll('.menu-item');
            menuItems.forEach(item => {
                item.addEventListener('mouseenter', () => {
                    item.style.transform = 'translateY(-10px)';
                    item.style.boxShadow = '0 10px 30px rgba(212, 175, 55, 0.2)';
                });

                item.addEventListener('mouseleave', () => {
                    item.style.transform = 'translateY(0)';
                    item.style.boxShadow = 'none';
                });
            });

            // Add smooth scroll behavior for discover button
            document.querySelector('.discover-button').addEventListener('click', (e) => {
                e.preventDefault();
                window.scrollTo({
                    top: document.querySelector('.menu-section').offsetTop,
                    behavior: 'smooth'
                });
            });

            // Add loading animation
            document.body.style.opacity = '0';
            requestAnimationFrame(() => {
                document.body.style.transition = 'opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
                document.body.style.opacity = '1';
            });
        });

        // Add parallax effect for menu items
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            document.querySelectorAll('.menu-item').forEach(item => {
                const speed = 0.05;
                const yPos = -(scrolled * speed);
                item.style.transform = `translateY(${yPos}px)`;
            });
        });

        // Optional: Add keyboard navigation for categories
        document.addEventListener('keydown', (e) => {
            const activeButton = document.querySelector('.category-button.active');
            const buttons = Array.from(categoryButtons);
            const currentIndex = buttons.indexOf(activeButton);

            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                const nextIndex = (currentIndex + 1) % buttons.length;
                buttons[nextIndex].click();
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                const prevIndex = (currentIndex - 1 + buttons.length) % buttons.length;
                buttons[prevIndex].click();
            }
        });
   particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#d4af37'
                },
                shape: {
                    type: 'circle'
                },
                opacity: {
                    value: 0.5,
                    random: true
                },
                size: {
                    value: 3,
                    random: true
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#d4af37',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                }
            },
            retina_detect: true
        });

        // Form handling with animations
        document.getElementById('reservation-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = e.target.querySelector('.submit-btn');
            btn.innerHTML = 'Reservation Confirmed!';
            btn.style.background = '#2ecc71';
            
            setTimeout(() => {
                btn.innerHTML = 'Reserve Your Table';
                btn.style.background = '';
                e.target.reset();
            }, 3000);
        });

        // Newsletter form handling
        document.querySelector('.newsletter-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = e.target.querySelector('.newsletter-btn');
            const input = e.target.querySelector('.newsletter-input');
            btn.innerHTML = 'Subscribed!';
            btn.style.background = '#2ecc71';
            
            setTimeout(() => {
                btn.innerHTML = 'Subscribe';
                btn.style.background = '';
                input.value = '';
            }, 3000);
        });

        // Smooth scroll animation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
