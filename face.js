let svg = d3.select("#face");
let width = +svg.attr("width");
let height = +svg.attr("height");

let faceGroup = svg.append('g')
    .attr('transform', `translate(${width / 2}, ${height / 2})`);

let head = faceGroup.append('circle')
    .attr('r', height / 2)
    .attr('fill', 'yellow')
    .attr('stroke', 'black');

let eyesGroup = faceGroup.append('g')
    .attr('transform', `translate(0, -${height / 4})`);

let leftEye = eyesGroup.append('circle')
    .attr('r', height / 16)
    .attr('cx', -width / 8);

let rightEye = eyesGroup.append('circle')
    .attr('r', height / 16)
    .attr('cx', width / 8);

let lips = faceGroup.append('path')
    .attr('d', d3.arc()({
        innerRadius: 0,
        outerRadius: width / 4,
        startAngle: Math.PI / 2,
        endAngle: Math.PI * 3 / 2
    }));

d3.select("body").on("mousemove", function(event) {
    let coords = d3.pointer(event);
    let cx = width / 2;
    let cy = height / 2;

    let dx = coords[0] - cx;
    let dy = coords[1] - cy;

    let angle = Math.atan2(dy, dx) * 180 / Math.PI;
    angle = angle < 0 ? angle + 360 : angle;

    let tiltAngle = (angle - 180) / 45;
    tiltAngle = Math.max(-90, Math.min(90, tiltAngle));

    faceGroup.attr("transform", `translate(${cx}, ${cy}) rotate(${tiltAngle})`);
});