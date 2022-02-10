const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
          items = menu.querySelectorAll('li'),
          markAll = document.querySelectorAll('.portfolio-block'),
          no = document.querySelector('.portfolio-no');

    const typeFilter = (markType) => {
        markAll.forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn');            
        });

        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        if (markType) {
            markType.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            });
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
    };

    menu.addEventListener('click', (e) => {
        let target = e.target;
        
        if (target && target.tagName == "LI") {
            items.forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');
        }

        if (target.classList[0] == 'all') {
            typeFilter(markAll);    
        } else if (target.classList[0] == 'grandmother' ||
            target.classList[0] == 'granddad') {
            typeFilter();
        } else {
            let markSel = [];
            markAll.forEach(pic => {
                if (pic.classList[2] == target.classList[0]) {
                    markSel.push(pic);      
                }
        });
            typeFilter(markSel);
        }  
    });
};

export default filter;