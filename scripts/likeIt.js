$('.like-button').click(function (event) {
    var currentCount = +this.nextElementSibling.textContent;
    this.nextElementSibling.textContent = ++currentCount;
});