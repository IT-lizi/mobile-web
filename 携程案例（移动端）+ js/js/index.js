window.addEventListener('load', function() {
    var focus = this.document.querySelector('.focus');
    var ul = focus.children[0];
    var n = focus.offsetWidth;
    var ol = focus.children[1];

    var index = 0;

    var timer = setInterval(function() {
        index++;
        var translatex = -index * n;
        ul.style.transition = 'all .3s';
        ul.style.transform = 'translateX(' + translatex + 'px)';
    }, 2000);
    ul.addEventListener('transitionend', function() {
        if (index >= 3) {
            index = 0;
            ul.style.transition = 'none';
            var translatex = -index * n;
            ul.style.transform = 'translateX(' + translatex + 'px)';
        } else if (index < 0) {
            index = 2;
            ul.style.transition = 'none';
            var translatex = -index * n;
            ul.style.transform = 'translateX(' + translatex + 'px)';
        };
        ol.querySelector('.current').classList.remove('current');
        ol.children[index].classList.add('current');

    });
    var startX = 0;
    var moveX = 0;
    var flag = false;
    ul.addEventListener('touchstart', function(e) {
        startX = e.targetTouches[0].pageX;
        clearInterval(timer);

    });
    ul.addEventListener('touchmove', function(e) {
        moveX = e.targetTouches[0].pageX - startX;
        var translatex = -index * n + moveX;
        ul.style.transition = 'none';
        ul.style.transform = 'translateX(' + translatex + 'px)';
        flag = true;
    });
    ul.addEventListener('touchend', function(e) {
        if (flag) {
            if (Math.abs(moveX) >= 50) {
                if (moveX > 0) {
                    index--;
                } else {
                    index++;
                }

            }
            var translatex = -index * n;
            ul.style.transition = 'all .3s';
            ul.style.transform = 'translateX(' + translatex + 'px)';
        } else {
            var translatex = -index * n;
            ul.style.transition = 'all .3s';
            ul.style.transform = 'translateX(' + translatex + 'px)';
        }
        clearInterval(timer);
        timer = setInterval(function() {
            index++;
            var translatex = -index * n;
            ul.style.transition = 'all .3s';
            ul.style.transform = 'translateX(' + translatex + 'px)';
        }, 2000);
    });
})