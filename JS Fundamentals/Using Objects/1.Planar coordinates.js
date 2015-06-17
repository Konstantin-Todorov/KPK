// Write functions for working with shapes in standard Planar coordinate system.
// Points are represented by coordinates P(X, Y)
// Lines are represented by two points, marking their beginning and ending L(P1(X1,Y1), P2(X2,Y2))
// Calculate the distance between two points.
// Check if three segment lines can form a triangle.

function buildPoint(cordX, cordY) {
    var point = {
        x: cordX,
        y: cordY
    };
    return point;
}

function buildLine(p1, p2) {
    var line = {
        point1: p1,
        point2: p2,
        distance: function() {
            var a = Math.max(this.point1.x, this.point2.x) - Math.min(this.point1.x, this.point2.x);
            var b = Math.max(this.point1.y, this.point2.y) - Math.min(this.point1.y, this.point2.y);
            return Math.sqrt(a * a + b * b);
        }
    };
    return line;
}

function trianglePossible(dist1, dist2, dist3) {
    if (((dist1 + dist2) > dist3) && ((dist1 + dist3) > dist2) && ((dist3 + dist2) > dist1)) {
        console.log('With this lines we can make a triangle!');
    } else {
        console.log('With this lines we cannot make a triangle!');
    }
}

var point1 = buildPoint(3, 5);
var point2 = buildPoint(7, 8);
var point3 = buildPoint(-1, 9);
var point4 = buildPoint(3, 9);
var point5 = buildPoint(3, 6);
var point6 = buildPoint(4, 2);
var point7 = buildPoint(5, -5);
var point8 = buildPoint(-5, 5);


var line1 = buildLine(point1, point2);
var line2 = buildLine(point3, point4);
var line3 = buildLine(point5, point6);
var line4 = buildLine(point7, point8);

console.log('Line 1 distance: ' + line1.distance().toFixed(2));
console.log('Line 2 distance: ' + line2.distance().toFixed(2));
console.log('Line 3 distance: ' + line3.distance().toFixed(2));
console.log('Line 4 distance: ' + line4.distance().toFixed(2));

console.log('\nLines 1,2,3:');
trianglePossible(line1.distance(), line2.distance(), line3.distance()); // can make triangle

console.log('Lines 1,2,4:');
trianglePossible(line1.distance(), line2.distance(), line4.distance()); // cannot make triangle