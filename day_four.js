/*
 * OBJECT COMP
 */

/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
  const measurements = {
    length: a,
    width: b,
    area: a * b,
    perimeter: 2 * (a + b),
  };
  return measurements;
}

/*
 * REGEX
 */

function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
   */
  const re = /^([aeiou]).*\1$/i;

  return re;
}

/*
 * INHERITANCE
 */

class Rectangle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
}

/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */

Rectangle.prototype.area = function () {
  return this.w * this.h;
};

/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
class Square extends Rectangle {
  constructor(options) {
    super(options);
    this.w = options;
    this.h = options;
  }
}

/*
 * COUNT OBJECTS
 */

/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 *
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
  let count = 0;
  for (let i = 0; i < objects.length; i++) {
    if (objects[i].x === objects[i].y) {
      count++;
    }
  }
  return count;
}

/*
 * CLASSES
 */

/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */

class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  perimeter() {
    let totalLength = 0;
    for (let i = 0; i < this.sides.length; i++) {
      totalLength += this.sides[i];
    }
    return totalLength;
  }
}
