var dec;
var i;
// Create a new path and style it:


// Add 5 segment points to the path spread out
// over the width of the view:
    // Uncomment the following line and run the script again
    // to smooth the path:
    // path.smooth();
var maxPoints = new Point(view.size.width, view.size.height);
var data = {
	q: {
		sound: new Howl({
  		src: ['A/bubbles.mp3']
		}),
		color: '#1abc9c',
		shape: function (){
            var randomPoint = Point.random();
            var point = maxPoints * randomPoint;
            var dec = new Path.Circle(point, 500);
            dec.fillColor = this.color;
            dec.name="circle";
            decagon.push(dec);
            return dec;
        }
	},
	w: {
		sound: new Howl({
  		src: ['A/clay.mp3']
		}),
		color: '#2ecc71',
        shape: function () {
            var rectangle = new Rectangle(new Point(view.center+40), new Point(view.center)-100);
            var path = new Path.Rectangle(rectangle);
            path.strokeColor = this.color;
            path.name = "square";
            path.rotate(45);
            decagon.push(dec);
            return path;
		}

	},
    e: {
        sound: new Howl({
            src: ['A/confetti.mp3']
        }),
        color: '#3498db',
        shape: function () {
            for (var i = 0; i < 20; i++) {
                // The center position is a random point in the view:
                var path = new Path.Circle({
                    center: Point.random() * view.size,
                    radius: i / 20 + 20,
                    fillColor: this.color,
                    strokeColor: 'black'
                });
                path.fillColor.hue += i;
                path.name = 'candy';
                decagon.push(path);

            }
            console.log(path.name);
            return path;
        }
    },
	r: {
		sound: new Howl({
  		src: ['A/corona.mp3']
		}),
		color: '#9b59b6'
	},
		t: {
		sound: new Howl({
  		src: ['A/dotted-spiral.mp3']
		}),
		color: '#34495e'
	},
	y: {
		sound: new Howl({
  		src: ['A/flash-1.mp3']
		}),
		color: '#16a085'
	},
	u: {
		sound: new Howl({
  		src: ['A/flash-2.mp3']
		}),
		color: '#27ae60'
	},
	i: {
		sound: new Howl({
  		src: ['A/flash-3.mp3']
		}),
		color: '#2980b9'
	},
	o: {
		sound: new Howl({
			src: ['A/glimmer.mp3']
		}),
		color: '#8e44ad'
	},
	p: {
		sound: new Howl({
  		src: ['A/moon.mp3']
		}),
		color: '#2c3e50'
	},
	a: {
		sound: new Howl({
  		src: ['A/pinwheel.mp3']
		}),
		color: '#f1c40f'
	},
	s: {
		sound: new Howl({
  		src: ['A/piston-1.mp3']
		}),
		color: '#e67e22'
	},
		d: {
		sound: new Howl({
  		src: ['A/piston-2.mp3']
		}),
		color: '#e74c3c'
	},
	f: {
		sound: new Howl({
  		src: ['A/prism-1.mp3']
		}),
		color: '#95a5a6'
	},
	g: {
		sound: new Howl({
  		src: ['A/prism-2.mp3']
		}),
		color: '#f39c12'
	},
	h: {
		sound: new Howl({
  		src: ['A/prism-3.mp3']
		}),
		color: '#d35400'
	},
	j: {
		sound: new Howl({
  		src: ['A/splits.mp3']
		}),
		color: '#1abc9c'
	},
	k: {
		sound: new Howl({
  		src: ['A/squiggle.mp3']
		}),
		color: '#2ecc71'
	},
	l: {
		sound: new Howl({
  		src: ['A/strike.mp3']
		}),
		color: '#3498db'
	},
	z: {
		sound: new Howl({
  		src: ['A/suspension.mp3']
		}),
		color: '#9b59b6'
	},
	x: {
		sound: new Howl({
  		src: ['A/timer.mp3']
		}),
		color: '#34495e'
	},
	c: {
		sound: new Howl({
  		src: ['A/ufo.mp3']
		}),
		color: '#16a085'
	},
	v: {
		sound: new Howl({
  		src: ['A/veil.mp3']
		}),
		color: '#27ae60'
	},
	b: {
		sound: new Howl({
  		src: ['A/wipe.mp3']
		}),
		color: '#2980b9'
	},
	n: {
		sound: new Howl({
			src: ['A/zig-zag.mp3']
		}),
		color: '#8e44ad'
	},
	m: {
		sound: new Howl({
  		src: ['A/moon.mp3']
		}),
		color: '#2c3e50'
	}
}
var decagon=[];
function onKeyDown(event) {
    // When a key is pressed, set the content of the text item:
            data[event.key].sound.play();
            dec = data[event.key].shape();
            console.log(dec.name);

}

function onKeyUp(event) {
    // When a key is released, set the content of the text item:
    console.log( 'The ' + event.key + ' key was released!');
    console.log(i);
}
function onFrame(event) {
        for (i = 0; i < decagon.length; i++) {
        	if(decagon[i].name==='square') {
                decagon[i].strokeColor.hue += 5;
                decagon[i].scale(0.99);
                decagon[i].rotate(3);
            } else if(decagon[i].name==='candy'){
                decagon[i].position.x += view.size.width / 20;
            }else{
                decagon[i].fillColor.hue += 5;
                decagon[i].scale(0.9);
                decagon[i].rotate(3);
			}

        }


        // for (i = 0; i < decagon.length; i++) {
        //     decagon[i].fillColor.hue += 5;
        //     decagon[i].rotate(3);
        //     decagon[i].scale(0.9);
        // }

}