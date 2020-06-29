document.querySelector("input").addEventListener("change", function () {
    if (this.files[0]) {
        var fr = new FileReader();

        fr.addEventListener("load", function () {
            document.querySelector(".update").classList.add('hoverable');
            document.querySelector(".img-bg").style.backgroundImage = `url("${fr.result}")`;
        }, false);

        fr.readAsDataURL(this.files[0]);
    }
});
