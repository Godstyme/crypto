$(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

document.addEventListener('DOMContentLoaded', function() {
var accordions = document.querySelectorAll('.custom-accordion-button');
accordions.forEach(function(accordion) {
    accordion.addEventListener('click', function() {
        var target = document.querySelector(this.getAttribute('data-bs-target'));
        if (target.style.display === 'block') {
            target.style.display = 'none';
        } else {
            target.style.display = 'block';
        }
    });
});
});