const canvas = d3.select(".canvas");

const svg = canvas.append('svg')
    .attr('height', window.innerHeight)
    .attr('width', window.innerWidth);


svg.append('rect')
    .attr('fill', '#0077be')
    .attr('y', 300 + 35)
    .attr('width', window.innerWidth)
    .attr('height', window.innerHeight - 335)


var position = [];
for (var i = 200; i <= window.innerWidth - 200; i += 5) {
    position.push(i);
}


function pickRandom(argument) {
    if (typeof argument === 'number') {
        return Math.floor(Math.random() * Math.floor(argument)) + 1;
    }
    if (Array.isArray(argument)) {
        return argument[Math.floor(Math.random() * argument.length)];
    }
}

let balloon = svg.append('circle')
    .attr('fill', '#FCD440')
    .attr('r', 35).attr('cy', 40).attr('cx', pickRandom(position));

const checkBalloon = [...document.getElementsByTagName('circle')].map(path => path.getAttribute('cx'));
console.log(checkBalloon);


balloon.on('click', (__) => {

    balloon.interrupt().attr('cy', 35).attr('cx', pickRandom(position));

    balloon.transition().attr('cy', 305).duration(1800).ease(d3.easeQuadIn).remove();

})
