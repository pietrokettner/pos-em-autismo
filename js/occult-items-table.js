document.addEventListener('DOMContentLoaded', function() {
    const rows = document.querySelectorAll('.table-row');
    
    rows.forEach(row => {
        row.addEventListener('click', function() {
            const infoConteudo = this.querySelector('.infoConteudo');
            const icon = this.querySelector('.toggle-btn .material-icons');
            const textTable = this.querySelector('.textTable');
            
            infoConteudo.classList.toggle('open');
            
            this.querySelector('.toggle-btn').classList.toggle('active');
            
            textTable.classList.toggle('active');
        });
    });
});