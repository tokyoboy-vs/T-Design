function toggleModal() {
    var modalContainer = document.getElementById('modalContainer');
    if (modalContainer.style.display == 'none')
        modalContainer.style.display = '';
    else if (modalContainer.style.display == '')
        modalContainer.style.display = 'none';
}