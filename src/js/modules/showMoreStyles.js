import { getResource } from "../services/requests";

const showMoreStyles = (trigger, wrapper) => {
    const btn = document.querySelector(trigger);
        //   cards = document.querySelectorAll(styles); - для предыдущей версии

   /*  cards.forEach(card => {
        card.classList.add('animated', 'fadeInUp');
    });

    btn.addEventListener('click', () => {
        cards.forEach(card => {
            card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
            card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
        });
        // btn.style.display = 'none';
        btn.remove();
    }); */

    btn.addEventListener('click', function() {
        // getResource('http://localhost:3000/styles') - вариант с сервером
        getResource('assets/db.json')
            .then(res => createCards(res.styles)) //.styles для варинта без серв
            .catch(error => console.log(error));

        this.remove();
    });

    function createCards(response) {
        response.forEach(({src, title, link}) => {
            let card = document.createElement('div');

            card.classList.add('animated', 'fadeInUp','col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

            card.innerHTML = `
                <div class="styles-block">
                    <img src=${src} alt="style">
                    <h4>${title}</h4>
                    <a href=${link}>Подробнее</a>
                </div>
            `;

            document.querySelector(wrapper).appendChild(card);
        });
    }

        /* <div class="hidden-lg hidden-md hidden-sm hidden-xs styles-2">
            <div class=styles-block>
                <img src=assets/img/styles-6.jpg alt>
                <h4>Поп-арт</h4>
                <a href="#">Подробнее</a>
            </div>
        </div> */
};

export default showMoreStyles;