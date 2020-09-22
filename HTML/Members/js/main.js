var list = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twentyone', 'twentytwo', 'twentythree', 'twentyfour', 'twentyfive',
'26', '27', '28', '29', '30'];
list.forEach(function (element) {
    document.getElementById(element).addEventListener("click", function () {
        var cls = document.getElementById(element).className;
        if (cls.includes("unchecked")) {
            document.getElementById(element).classList.remove("unchecked");
            document.getElementById(element).classList.add("checked");
        } else {
            document.getElementById(element).classList.remove("checked");
            document.getElementById(element).classList.add("unchecked");
        }
    });
});
