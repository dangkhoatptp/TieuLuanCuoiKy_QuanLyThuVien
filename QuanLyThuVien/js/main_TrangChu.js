function clickNarbarItem(index) {
    var lineSelectItem = document.querySelector('.narbar__line-select-item');
    var narbarItem = document.getElementsByClassName('narbar__item');
    var containerHeader = document.querySelector('.container__header');
    var slidesItem = document.getElementsByClassName('slides__item');
    var slidesAddBook = document.querySelector('.slides__add-book');
    var slidesAddUser = document.querySelector('.slides__add-user');
    var slidesAddPMS = document.querySelector('.slides__add-pms');
    if(index == 0) {
        // di chuyển line màu xanh đến narbar item 1
        if(lineSelectItem.classList.contains('item-1')) lineSelectItem.classList.remove('item-1');
        if(lineSelectItem.classList.contains('item-2')) lineSelectItem.classList.remove('item-2');
        if(lineSelectItem.classList.contains('item-3')) lineSelectItem.classList.remove('item-3');

        if(!narbarItem[0].classList.contains('item-select')) narbarItem[0].classList.add('item-select');
        if(narbarItem[1].classList.contains('item-select')) narbarItem[1].classList.remove('item-select');
        if(narbarItem[2].classList.contains('item-select')) narbarItem[2].classList.remove('item-select');
        if(narbarItem[3].classList.contains('item-select')) narbarItem[3].classList.remove('item-select');

        // Thay tên header
        containerHeader.innerHTML = 'Quản lý sách';

        if(slidesItem[0].classList.contains('display-none')) slidesItem[0].classList.remove('display-none');
        if(!slidesItem[1].classList.contains('display-none')) slidesItem[1].classList.add('display-none');
        if(!slidesItem[2].classList.contains('display-none')) slidesItem[2].classList.add('display-none');
        if(!slidesItem[3].classList.contains('display-none')) slidesItem[3].classList.add('display-none');
    }
    if(index == 1) {
        // di chuyển line màu xanh đến narbar item 2
        if(!lineSelectItem.classList.contains('item-1')) lineSelectItem.classList.add('item-1');
        if(lineSelectItem.classList.contains('item-2')) lineSelectItem.classList.remove('item-2');
        if(lineSelectItem.classList.contains('item-3')) lineSelectItem.classList.remove('item-3');

        if(narbarItem[0].classList.contains('item-select')) narbarItem[0].classList.remove('item-select');
        if(!narbarItem[1].classList.contains('item-select')) narbarItem[1].classList.add('item-select');
        if(narbarItem[2].classList.contains('item-select')) narbarItem[2].classList.remove('item-select');
        if(narbarItem[3].classList.contains('item-select')) narbarItem[3].classList.remove('item-select');

        // Thay tên header
        containerHeader.innerHTML = 'Quản lý độc giả';

        if(!slidesItem[0].classList.contains('display-none')) slidesItem[0].classList.add('display-none');
        if(slidesItem[1].classList.contains('display-none')) slidesItem[1].classList.remove('display-none');
        if(!slidesItem[2].classList.contains('display-none')) slidesItem[2].classList.add('display-none');
        if(!slidesItem[3].classList.contains('display-none')) slidesItem[3].classList.add('display-none');
    }
    if(index == 2) {
        // di chuyển line màu xanh đến narbar item 3
        if(lineSelectItem.classList.contains('item-1')) lineSelectItem.classList.remove('item-1');
        if(!lineSelectItem.classList.contains('item-2')) lineSelectItem.classList.add('item-2');
        if(lineSelectItem.classList.contains('item-3')) lineSelectItem.classList.remove('item-3');

        if(narbarItem[0].classList.contains('item-select')) narbarItem[0].classList.remove('item-select');
        if(narbarItem[1].classList.contains('item-select')) narbarItem[1].classList.remove('item-select');
        if(!narbarItem[2].classList.contains('item-select')) narbarItem[2].classList.add('item-select');
        if(narbarItem[3].classList.contains('item-select')) narbarItem[3].classList.remove('item-select');

        // Thay tên header
        containerHeader.innerHTML = 'Quản lý phiếu mượn sách';

        if(!slidesItem[0].classList.contains('display-none')) slidesItem[0].classList.add('display-none');
        if(!slidesItem[1].classList.contains('display-none')) slidesItem[1].classList.add('display-none');
        if(slidesItem[2].classList.contains('display-none')) slidesItem[2].classList.remove('display-none');
        if(!slidesItem[3].classList.contains('display-none')) slidesItem[3].classList.add('display-none');
    }
    if(index == 3) {
        // di chuyển line màu xanh đến narbar item 4
        if(lineSelectItem.classList.contains('item-1')) lineSelectItem.classList.remove('item-1');
        if(lineSelectItem.classList.contains('item-2')) lineSelectItem.classList.remove('item-2');
        if(!lineSelectItem.classList.contains('item-3')) lineSelectItem.classList.add('item-3');

        if(narbarItem[0].classList.contains('item-select')) narbarItem[0].classList.remove('item-select');
        if(narbarItem[1].classList.contains('item-select')) narbarItem[1].classList.remove('item-select');
        if(narbarItem[2].classList.contains('item-select')) narbarItem[2].classList.remove('item-select');
        if(!narbarItem[3].classList.contains('item-select')) narbarItem[3].classList.add('item-select');

        // Thay tên header
        containerHeader.innerHTML = 'Thống kê';

        if(!slidesItem[0].classList.contains('display-none')) slidesItem[0].classList.add('display-none');
        if(!slidesItem[1].classList.contains('display-none')) slidesItem[1].classList.add('display-none');
        if(!slidesItem[2].classList.contains('display-none')) slidesItem[2].classList.add('display-none');
        if(slidesItem[3].classList.contains('display-none')) slidesItem[3].classList.remove('display-none');
    }

    if(!slidesAddBook.classList.contains('display-none')) slidesAddBook.classList.add('display-none');
    if(!slidesAddUser.classList.contains('display-none')) slidesAddUser.classList.add('display-none');
    if(!slidesAddPMS.classList.contains('display-none')) slidesAddPMS.classList.add('display-none');
}

function selectTypeOfSearch() {
    var typeOfSearch = document.getElementById('search__type-of-search');
    var inputSearch = document.getElementById('search__input-search');
    if(typeOfSearch.value == 1) inputSearch.setAttribute('placeholder', 'Nhập tên sách cần tìm...');
    else inputSearch.setAttribute('placeholder', 'Nhập tên tác giả cần tìm...');
}

function functionAddBook() {
    var slidesItem0 = document.getElementsByClassName('slides__item')[0];
    var slidesAddBook = document.querySelector('.slides__add-book');

    slidesItem0.classList.add('display-none');
    slidesAddBook.classList.remove('display-none');
}

function functionAddUser() {
    var slidesItem1 = document.getElementsByClassName('slides__item')[1];
    var slidesAddUser = document.querySelector('.slides__add-user');

    slidesItem1.classList.add('display-none');
    slidesAddUser.classList.remove('display-none');
}

function functionAddPMS() {
    var slidesItem2 = document.getElementsByClassName('slides__item')[2];
    var slidesAddPMS = document.querySelector('.slides__add-pms');

    slidesItem2.classList.add('display-none');
    slidesAddPMS.classList.remove('display-none');
}