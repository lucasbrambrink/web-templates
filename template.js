$(document).ready(function() {
    $('.info-menu li').on('click', function (event) {
        event.preventDefault();

        var $this = $(this);
        var isActive = $this.hasClass('active');
        var symbol = isActive ? '-' : '+';
        var toggleDuration = 300;
        var timeOutDuration = isActive ? toggleDuration : 0;

        $this.toggleClass('active');
        $this.find('.menu-item').slideToggle(toggleDuration)
        setTimeout(function () {
           $this.children('span').html(symbol);
        }, timeOutDuration);
    });

});
