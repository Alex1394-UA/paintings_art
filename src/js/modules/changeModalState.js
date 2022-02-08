const changeModalState = (state) => {
    const artSize = document.querySelectorAll('#size'),
          artMaterial = document.querySelectorAll('#material'),
          artOption = document.querySelectorAll('#options'),
          artPromo = document.querySelectorAll('.promocode');
          

    function bindActionToElems(event, elem, prop) {
        elem.forEach((item) => {
            item.addEventListener(event, () => {
                state[prop] = item.value;              
                console.log(state);
            });
        });
        
    }

    bindActionToElems('change', artSize, 'size');
    bindActionToElems('change', artMaterial, 'material');
    bindActionToElems('change', artOption, 'option');
    bindActionToElems('input', artPromo, 'promocode');
};

export default changeModalState;