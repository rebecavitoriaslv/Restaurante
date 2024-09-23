$(document).ready(function() {
    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItens = $('.nav-item a');

    $(window).on('scroll', function() {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();
        let activeSectionIndex = 0;

        if (scrollPosition > 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false; // Para sair do loop
            }
        });

        navItens.removeClass('active');
        $(navItens[activeSectionIndex]).addClass('active');
    });

    // Animações com ScrollReveal
    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'bottom', // Animação vindo de baixo
        duration: 1000,
        distance: '30%' // Distância maior para um efeito mais impactante
    });

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 2000,
        distance: '20%'
    });

    // Adicionando animação para avaliações
    ScrollReveal().reveal('.evaluation', { // Supondo que as avaliações tenham a classe '.evaluation'
        origin: 'top', // Animação vindo de cima
        duration: 1500,
        distance: '30%',
        interval: 200 // Intervalo entre as animações de cada avaliação
    });

    $(document).ready(function() {
        $('.nav-item a').on('click', function() {
            // Remove a classe active de todos os itens
            $('.nav-item').removeClass('active');
            
            // Adiciona a classe active ao item clicado
            $(this).parent().addClass('active');
    
            // Remove a classe active após um pequeno atraso (exemplo: 1 segundo)
            setTimeout(() => {
                $(this).parent().removeClass('active');
            }, 1000); // Ajuste o tempo conforme necessário
        });
    });
    });