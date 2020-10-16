window.onload = function() {
    var canvas = document.getElementById("canvas"),
        c = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        sun = particle.create(width / 2, height / 2, 0, 0),
        planet = particle.create(width / 2 + 200, height / 2, 10, -Math.PI / 2);

        

    sun.mass = 16000;

        
    
    update();
    
    function update() {
        c.clearRect(0, 0, width, height);

        planet.gravitateTo(sun);
        planet.update();

        c.beginPath();
        c.fillStyle = "#ffff00";
        c.arc(sun.position.getX(), sun.position.getY(), 20, 0, Math.PI * 2, false);
        c.fill();

        c.beginPath();
        c.fillStyle = "#0000ff";
        c.arc(planet.position.getX(), planet.position.getY(), 5, 0, Math.PI * 2, false);
        c.fill();



        // here we write our animation code
        

        

        requestAnimationFrame(update);
    
    }

};