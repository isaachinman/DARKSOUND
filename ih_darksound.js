(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1024,
	height: 768,
	fps: 24,
	color: "#000000",
	manifest: [
		{src:"images/flat1_room_1_picture1.jpg", id:"flat1_room_1_picture1"},
		{src:"images/flat1_room_2_picture1.jpg", id:"flat1_room_2_picture1"},
		{src:"images/flat1_room_2_picture2.jpg", id:"flat1_room_2_picture2"},
		{src:"images/flat1_room_3_picture1.jpg", id:"flat1_room_3_picture1"},
		{src:"images/flat1_room_4_picture1.jpg", id:"flat1_room_4_picture1"},
		{src:"images/flat1_room_4_picture2.jpg", id:"flat1_room_4_picture2"},
		{src:"images/flat1_room_5_picture1.jpg", id:"flat1_room_5_picture1"},
		{src:"images/flat1_room_5_picture2.jpg", id:"flat1_room_5_picture2"},
		{src:"images/flat1_room_6_picture1.jpg", id:"flat1_room_6_picture1"},
		{src:"images/flat1_room_6_picture2.jpg", id:"flat1_room_6_picture2"},
		{src:"images/flat2_room_1_picture1.jpg", id:"flat2_room_1_picture1"},
		{src:"images/flat2_room_2_picture1.jpg", id:"flat2_room_2_picture1"},
		{src:"images/flat2_room_3_picture1.jpg", id:"flat2_room_3_picture1"},
		{src:"images/flat2_room_3_picture2.jpg", id:"flat2_room_3_picture2"},
		{src:"images/flat2_room_4_picture1.jpg", id:"flat2_room_4_picture1"},
		{src:"images/flat2_room_4_picture2.jpg", id:"flat2_room_4_picture2"},
		{src:"images/flat2_room_5_picture1.jpg", id:"flat2_room_5_picture1"},
		{src:"images/flat2_room_5_picture2.jpg", id:"flat2_room_5_picture2"},
		{src:"images/flat3_room_1_picture1.jpg", id:"flat3_room_1_picture1"},
		{src:"images/flat3_room_1_picture2.jpg", id:"flat3_room_1_picture2"},
		{src:"images/flat3_room_1_picture3.jpg", id:"flat3_room_1_picture3"},
		{src:"images/flat3_room_1_picture4.jpg", id:"flat3_room_1_picture4"},
		{src:"images/flat3_room_2_picture1.jpg", id:"flat3_room_2_picture1"},
		{src:"images/flat3_room_3_picture1.jpg", id:"flat3_room_3_picture1"},
		{src:"images/flat3_room_3_picture2.jpg", id:"flat3_room_3_picture2"},
		{src:"images/flat3_room_4_picture1.jpg", id:"flat3_room_4_picture1"},
		{src:"images/flat3_room_4_picture2.jpg", id:"flat3_room_4_picture2"},
		{src:"images/flat3_room_4_picture3.jpg", id:"flat3_room_4_picture3"},
		{src:"images/flat3_room_4_picture4.jpg", id:"flat3_room_4_picture4"},
		{src:"images/flat3_room_5_picture1.jpg", id:"flat3_room_5_picture1"},
		{src:"images/flat3_room_6_picture1.jpg", id:"flat3_room_6_picture1"},
		{src:"images/flat3_room_6_picture2.jpg", id:"flat3_room_6_picture2"},
		{src:"images/flat4_room_1_picture1.jpg", id:"flat4_room_1_picture1"},
		{src:"images/flat4_room_2_picture1.jpg", id:"flat4_room_2_picture1"},
		{src:"images/flat4_room_2_picture2.jpg", id:"flat4_room_2_picture2"},
		{src:"images/flat4_room_2_picture3.jpg", id:"flat4_room_2_picture3"},
		{src:"images/flat4_room_2_picture4.jpg", id:"flat4_room_2_picture4"},
		{src:"images/flat4_room_3_picture1.jpg", id:"flat4_room_3_picture1"},
		{src:"images/flat4_room_4_picture1.jpg", id:"flat4_room_4_picture1"},
		{src:"images/flat4_room_4_picture2.jpg", id:"flat4_room_4_picture2"},
		{src:"images/flat4_room_4_picture3.jpg", id:"flat4_room_4_picture3"},
		{src:"images/flat4_room_4_picture4.jpg", id:"flat4_room_4_picture4"},
		{src:"images/flat4_room_5_picture1.jpg", id:"flat4_room_5_picture1"},
		{src:"images/flat4_room_6_picture1.jpg", id:"flat4_room_6_picture1"},
		{src:"images/flat5_room_1_picture1.jpg", id:"flat5_room_1_picture1"},
		{src:"images/flat5_room_2_picture1.jpg", id:"flat5_room_2_picture1"},
		{src:"images/flat5_room_2_picture2.jpg", id:"flat5_room_2_picture2"},
		{src:"images/flat5_room_2_picture3.jpg", id:"flat5_room_2_picture3"},
		{src:"images/flat5_room_3_picture1.jpg", id:"flat5_room_3_picture1"},
		{src:"images/flat5_room_3_picture2.jpg", id:"flat5_room_3_picture2"},
		{src:"images/flat5_room_4_picture1.jpg", id:"flat5_room_4_picture1"},
		{src:"images/flat5_room_4_picture2.jpg", id:"flat5_room_4_picture2"},
		{src:"images/flat5_room_4_picture3.jpg", id:"flat5_room_4_picture3"},
		{src:"images/flat5_room_4_picture4.jpg", id:"flat5_room_4_picture4"},
		{src:"images/flat5_room_5_picture1.jpg", id:"flat5_room_5_picture1"},
		{src:"images/flat5_room_5_picture2.jpg", id:"flat5_room_5_picture2"},
		{src:"images/flat5_room_5_picture3.jpg", id:"flat5_room_5_picture3"},
		{src:"images/flat5_room_5_picture4.jpg", id:"flat5_room_5_picture4"},
		{src:"images/flat6_room_1_picture1.jpg", id:"flat6_room_1_picture1"},
		{src:"images/flat6_room_1_picture2.jpg", id:"flat6_room_1_picture2"},
		{src:"images/flat6_room_2_picture1.jpg", id:"flat6_room_2_picture1"},
		{src:"images/flat6_room_2_picture2.jpg", id:"flat6_room_2_picture2"},
		{src:"images/flat6_room_3_picture1.jpg", id:"flat6_room_3_picture1"},
		{src:"images/flat6_room_3_picture2.jpg", id:"flat6_room_3_picture2"},
		{src:"images/flat6_room_4_picture1.jpg", id:"flat6_room_4_picture1"},
		{src:"images/flat6_room_4_picture2.jpg", id:"flat6_room_4_picture2"},
		{src:"images/flat6_room_5_picture1.jpg", id:"flat6_room_5_picture1"},
		{src:"images/flat6_room_5_picture2.jpg", id:"flat6_room_5_picture2"},
		{src:"images/flat6_room_6_picture1.jpg", id:"flat6_room_6_picture1"},
		{src:"images/flat6_room_6_picture2.jpg", id:"flat6_room_6_picture2"},
		{src:"images/flat6_room_7_picture1.jpg", id:"flat6_room_7_picture1"},
		{src:"images/flat6_room_7_picture2.jpg", id:"flat6_room_7_picture2"},
		{src:"images/flat6_room_8_picture1.jpg", id:"flat6_room_8_picture1"},
		{src:"images/flat6_room_8_picture2.jpg", id:"flat6_room_8_picture2"},
		{src:"images/flat6_room_8_picture3.jpg", id:"flat6_room_8_picture3"},
		{src:"images/flat6_room_9_picture1.jpg", id:"flat6_room_9_picture1"},
		{src:"images/flat6_room_9_picture2.jpg", id:"flat6_room_9_picture2"},
		{src:"images/flat6_room_9_picture3.jpg", id:"flat6_room_9_picture3"},
		{src:"images/flat7_room_1_picture1.jpg", id:"flat7_room_1_picture1"},
		{src:"images/flat7_room_1_picture2.jpg", id:"flat7_room_1_picture2"},
		{src:"images/flat7_room_1_picture3.jpg", id:"flat7_room_1_picture3"},
		{src:"images/flat7_room_1_picture4.jpg", id:"flat7_room_1_picture4"},
		{src:"images/flat7_room_2_picture1.jpg", id:"flat7_room_2_picture1"},
		{src:"images/flat7_room_2_picture2.jpg", id:"flat7_room_2_picture2"},
		{src:"images/flat7_room_2_picture3.jpg", id:"flat7_room_2_picture3"},
		{src:"images/flat7_room_2_picture4.jpg", id:"flat7_room_2_picture4"},
		{src:"images/flat7_room_2_picture5.jpg", id:"flat7_room_2_picture5"},
		{src:"images/flat7_room_3_picture1.jpg", id:"flat7_room_3_picture1"},
		{src:"images/flat7_room_4_picture1.jpg", id:"flat7_room_4_picture1"},
		{src:"images/flat7_room_4_picture2.jpg", id:"flat7_room_4_picture2"},
		{src:"images/flat7_room_5_picture1.jpg", id:"flat7_room_5_picture1"},
		{src:"images/flat7_room_6_picture1.jpg", id:"flat7_room_6_picture1"},
		{src:"images/flat7_room_6_picture2.jpg", id:"flat7_room_6_picture2"},
		{src:"images/flat7_room_6_picture3.jpg", id:"flat7_room_6_picture3"},
		{src:"images/mainbg.jpg", id:"mainbg"},
		{src:"images/stairs_picture1.jpg", id:"stairs_picture1"},
		{src:"images/stairs_picture10.jpg", id:"stairs_picture10"},
		{src:"images/stairs_picture11.jpg", id:"stairs_picture11"},
		{src:"images/stairs_picture12.jpg", id:"stairs_picture12"},
		{src:"images/stairs_picture13.jpg", id:"stairs_picture13"},
		{src:"images/stairs_picture2.jpg", id:"stairs_picture2"},
		{src:"images/stairs_picture3.jpg", id:"stairs_picture3"},
		{src:"images/stairs_picture4.jpg", id:"stairs_picture4"},
		{src:"images/stairs_picture5.jpg", id:"stairs_picture5"},
		{src:"images/stairs_picture6.jpg", id:"stairs_picture6"},
		{src:"images/stairs_picture7.jpg", id:"stairs_picture7"},
		{src:"images/stairs_picture8.jpg", id:"stairs_picture8"},
		{src:"images/stairs_picture9.jpg", id:"stairs_picture9"}
	]
};



// symbols:



(lib.flat1_room_1_picture1 = function() {
	this.initialize(img.flat1_room_1_picture1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat1_room_2_picture1 = function() {
	this.initialize(img.flat1_room_2_picture1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat1_room_2_picture2 = function() {
	this.initialize(img.flat1_room_2_picture2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat1_room_3_picture1 = function() {
	this.initialize(img.flat1_room_3_picture1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat1_room_4_picture1 = function() {
	this.initialize(img.flat1_room_4_picture1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat1_room_4_picture2 = function() {
	this.initialize(img.flat1_room_4_picture2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat1_room_5_picture1 = function() {
	this.initialize(img.flat1_room_5_picture1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat1_room_5_picture2 = function() {
	this.initialize(img.flat1_room_5_picture2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat1_room_6_picture1 = function() {
	this.initialize(img.flat1_room_6_picture1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat1_room_6_picture2 = function() {
	this.initialize(img.flat1_room_6_picture2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat2_room_1_picture1 = function() {
	this.initialize(img.flat2_room_1_picture1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat2_room_2_picture1 = function() {
	this.initialize(img.flat2_room_2_picture1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat2_room_3_picture1 = function() {
	this.initialize(img.flat2_room_3_picture1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat2_room_3_picture2 = function() {
	this.initialize(img.flat2_room_3_picture2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat2_room_4_picture1 = function() {
	this.initialize(img.flat2_room_4_picture1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat2_room_4_picture2 = function() {
	this.initialize(img.flat2_room_4_picture2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat2_room_5_picture1 = function() {
	this.initialize(img.flat2_room_5_picture1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat2_room_5_picture2 = function() {
	this.initialize(img.flat2_room_5_picture2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat3_room_1_picture1 = function() {
	this.initialize(img.flat3_room_1_picture1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat3_room_1_picture2 = function() {
	this.initialize(img.flat3_room_1_picture2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat3_room_1_picture3 = function() {
	this.initialize(img.flat3_room_1_picture3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat3_room_1_picture4 = function() {
	this.initialize(img.flat3_room_1_picture4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat3_room_2_picture1 = function() {
	this.initialize(img.flat3_room_2_picture1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat3_room_3_picture1 = function() {
	this.initialize(img.flat3_room_3_picture1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat3_room_3_picture2 = function() {
	this.initialize(img.flat3_room_3_picture2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat3_room_4_picture1 = function() {
	this.initialize(img.flat3_room_4_picture1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat3_room_4_picture2 = function() {
	this.initialize(img.flat3_room_4_picture2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat3_room_4_picture3 = function() {
	this.initialize(img.flat3_room_4_picture3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat3_room_4_picture4 = function() {
	this.initialize(img.flat3_room_4_picture4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat3_room_5_picture1 = function() {
	this.initialize(img.flat3_room_5_picture1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat3_room_6_picture1 = function() {
	this.initialize(img.flat3_room_6_picture1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat3_room_6_picture2 = function() {
	this.initialize(img.flat3_room_6_picture2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat4_room_1_picture1 = function() {
	this.initialize(img.flat4_room_1_picture1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat4_room_2_picture1 = function() {
	this.initialize(img.flat4_room_2_picture1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat4_room_2_picture2 = function() {
	this.initialize(img.flat4_room_2_picture2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat4_room_2_picture3 = function() {
	this.initialize(img.flat4_room_2_picture3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat4_room_2_picture4 = function() {
	this.initialize(img.flat4_room_2_picture4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat4_room_3_picture1 = function() {
	this.initialize(img.flat4_room_3_picture1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat4_room_4_picture1 = function() {
	this.initialize(img.flat4_room_4_picture1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat4_room_4_picture2 = function() {
	this.initialize(img.flat4_room_4_picture2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat4_room_4_picture3 = function() {
	this.initialize(img.flat4_room_4_picture3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat4_room_4_picture4 = function() {
	this.initialize(img.flat4_room_4_picture4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat4_room_5_picture1 = function() {
	this.initialize(img.flat4_room_5_picture1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat4_room_6_picture1 = function() {
	this.initialize(img.flat4_room_6_picture1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat5_room_1_picture1 = function() {
	this.initialize(img.flat5_room_1_picture1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat5_room_2_picture1 = function() {
	this.initialize(img.flat5_room_2_picture1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat5_room_2_picture2 = function() {
	this.initialize(img.flat5_room_2_picture2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat5_room_2_picture3 = function() {
	this.initialize(img.flat5_room_2_picture3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat5_room_3_picture1 = function() {
	this.initialize(img.flat5_room_3_picture1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat5_room_3_picture2 = function() {
	this.initialize(img.flat5_room_3_picture2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat5_room_4_picture1 = function() {
	this.initialize(img.flat5_room_4_picture1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat5_room_4_picture2 = function() {
	this.initialize(img.flat5_room_4_picture2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat5_room_4_picture3 = function() {
	this.initialize(img.flat5_room_4_picture3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat5_room_4_picture4 = function() {
	this.initialize(img.flat5_room_4_picture4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat5_room_5_picture1 = function() {
	this.initialize(img.flat5_room_5_picture1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat5_room_5_picture2 = function() {
	this.initialize(img.flat5_room_5_picture2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat5_room_5_picture3 = function() {
	this.initialize(img.flat5_room_5_picture3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat5_room_5_picture4 = function() {
	this.initialize(img.flat5_room_5_picture4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat6_room_1_picture1 = function() {
	this.initialize(img.flat6_room_1_picture1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat6_room_1_picture2 = function() {
	this.initialize(img.flat6_room_1_picture2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat6_room_2_picture1 = function() {
	this.initialize(img.flat6_room_2_picture1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat6_room_2_picture2 = function() {
	this.initialize(img.flat6_room_2_picture2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat6_room_3_picture1 = function() {
	this.initialize(img.flat6_room_3_picture1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat6_room_3_picture2 = function() {
	this.initialize(img.flat6_room_3_picture2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat6_room_4_picture1 = function() {
	this.initialize(img.flat6_room_4_picture1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat6_room_4_picture2 = function() {
	this.initialize(img.flat6_room_4_picture2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat6_room_5_picture1 = function() {
	this.initialize(img.flat6_room_5_picture1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat6_room_5_picture2 = function() {
	this.initialize(img.flat6_room_5_picture2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat6_room_6_picture1 = function() {
	this.initialize(img.flat6_room_6_picture1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat6_room_6_picture2 = function() {
	this.initialize(img.flat6_room_6_picture2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat6_room_7_picture1 = function() {
	this.initialize(img.flat6_room_7_picture1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat6_room_7_picture2 = function() {
	this.initialize(img.flat6_room_7_picture2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat6_room_8_picture1 = function() {
	this.initialize(img.flat6_room_8_picture1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat6_room_8_picture2 = function() {
	this.initialize(img.flat6_room_8_picture2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat6_room_8_picture3 = function() {
	this.initialize(img.flat6_room_8_picture3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat6_room_9_picture1 = function() {
	this.initialize(img.flat6_room_9_picture1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat6_room_9_picture2 = function() {
	this.initialize(img.flat6_room_9_picture2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat6_room_9_picture3 = function() {
	this.initialize(img.flat6_room_9_picture3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat7_room_1_picture1 = function() {
	this.initialize(img.flat7_room_1_picture1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat7_room_1_picture2 = function() {
	this.initialize(img.flat7_room_1_picture2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat7_room_1_picture3 = function() {
	this.initialize(img.flat7_room_1_picture3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat7_room_1_picture4 = function() {
	this.initialize(img.flat7_room_1_picture4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat7_room_2_picture1 = function() {
	this.initialize(img.flat7_room_2_picture1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat7_room_2_picture2 = function() {
	this.initialize(img.flat7_room_2_picture2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat7_room_2_picture3 = function() {
	this.initialize(img.flat7_room_2_picture3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat7_room_2_picture4 = function() {
	this.initialize(img.flat7_room_2_picture4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat7_room_2_picture5 = function() {
	this.initialize(img.flat7_room_2_picture5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat7_room_3_picture1 = function() {
	this.initialize(img.flat7_room_3_picture1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat7_room_4_picture1 = function() {
	this.initialize(img.flat7_room_4_picture1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat7_room_4_picture2 = function() {
	this.initialize(img.flat7_room_4_picture2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat7_room_5_picture1 = function() {
	this.initialize(img.flat7_room_5_picture1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat7_room_6_picture1 = function() {
	this.initialize(img.flat7_room_6_picture1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat7_room_6_picture2 = function() {
	this.initialize(img.flat7_room_6_picture2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.flat7_room_6_picture3 = function() {
	this.initialize(img.flat7_room_6_picture3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.mainbg = function() {
	this.initialize(img.mainbg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.stairs_picture1 = function() {
	this.initialize(img.stairs_picture1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.stairs_picture10 = function() {
	this.initialize(img.stairs_picture10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.stairs_picture11 = function() {
	this.initialize(img.stairs_picture11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.stairs_picture12 = function() {
	this.initialize(img.stairs_picture12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.stairs_picture13 = function() {
	this.initialize(img.stairs_picture13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.stairs_picture2 = function() {
	this.initialize(img.stairs_picture2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.stairs_picture3 = function() {
	this.initialize(img.stairs_picture3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.stairs_picture4 = function() {
	this.initialize(img.stairs_picture4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.stairs_picture5 = function() {
	this.initialize(img.stairs_picture5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.stairs_picture6 = function() {
	this.initialize(img.stairs_picture6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.stairs_picture7 = function() {
	this.initialize(img.stairs_picture7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.stairs_picture8 = function() {
	this.initialize(img.stairs_picture8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.stairs_picture9 = function() {
	this.initialize(img.stairs_picture9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.stairs_flatnav_btn_3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgV3Ax/MAAAhj+MArvAAAMAAABj+g");
	this.shape.setTransform(140.1,320);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,280.2,640);


(lib.stairs_flatnav_btn_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgY/Ax/MAAAhj+MAx/AAAMAAABj+g");
	this.shape.setTransform(160,320);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,320,640);


(lib.stairs_flatnav_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgcRA0hMAAAhpBMA4jAAAMAAABpBg");
	this.shape.setTransform(181.1,336.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,362.2,672.2);


(lib.stairs_btn_13 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("AyoZAMAAAgx/MAlQAAAMAAAAx/g");
	this.shape.setTransform(119.3,160);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,238.6,320);


(lib.stairs_btn_12 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("Eg7/Af9MAAAg/5MB3+AAAMAAAA/5g");
	this.shape.setTransform(384,204.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,768,409.1);


(lib.stairs_btn_11 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgY0A2RMAAAhshMAxpAAAMAAABshg");
	this.shape.setTransform(158.9,347.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,317.9,694.7);


(lib.stairs_btn_10 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("Egn/AeAMAAAg7/MBP/AAAMAAAA7/g");
	this.shape.setTransform(256,192);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,512,384);


(lib.stairs_btn_9 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("Egx/A3KMAAAhuTMBj+AAAMAAABuTg");
	this.shape.setTransform(320,353.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,706.2);


(lib.stairs_btn_8 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgQwA2/MAAAht+MAhhAAAMAAABt+g");
	this.shape.setTransform(107.3,352);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,214.7,704);


(lib.stairs_btn_7 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgfyAjAMAAAhF/MA/lAAAMAAABF/g");
	this.shape.setTransform(203.6,224);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,407.2,448);


(lib.stairs_btn_6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("Eg+0Ax/MAAAhj+MB9pAAAMAAABj+g");
	this.shape.setTransform(402.1,320);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,804.3,640);


(lib.stairs_btn_5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgT/A1XMAAAhqtMAn+AAAMAAABqtg");
	this.shape.setTransform(128,341.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,256,683.1);


(lib.stairs_btn_4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgdjAoAMAAAhP/MA7HAAAMAAABP/g");
	this.shape.setTransform(189.2,256);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,378.5,512);


(lib.stairs_btn_3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgY/AtAMAAAhZ/MAx/AAAMAAABZ/g");
	this.shape.setTransform(160,288);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,320,576);


(lib.stairs_btn_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgptAvLMAAAheVMBTbAAAMAAABeVg");
	this.shape.setTransform(267.1,302);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,534.1,604);


(lib.stairs_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("Egp+Ap/MAAAhT9MBT9AAAMAAABT9g");
	this.shape.setTransform(268.8,268.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,537.6,537.6);


(lib.flat7_room_6_btn_3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("AwjWqMAAAgtTMAhHAAAMAAAAtTg");
	this.shape.setTransform(106.1,145.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,212.1,290.1);


(lib.flat7_room_6_btn_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("Egn/AtAMAAAhZ/MBP/AAAMAAABZ/g");
	this.shape.setTransform(256,288);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,512,576);


(lib.flat7_room_6_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgmQAvhMAAAhfBMBMhAAAMAAABfBg");
	this.shape.setTransform(245,304.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,490,608.2);


(lib.flat7_room_5_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("Aq7V4MAAAgrvIV3AAMAAAArvg");
	this.shape.setTransform(70,140.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,140.1,280.2);


(lib.flat7_room_4_btn_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("Au/eAMAAAg7/Id+AAMAAAA7/g");
	this.shape.setTransform(96,192);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,192,384);


(lib.flat7_room_4_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgjJAT/MAAAgn+MBGTAAAMAAAAn+g");
	this.shape.setTransform(225.1,128);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,450.1,256);


(lib.flat7_room_3_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgIRA1JMAAAhqRIQjAAMAAABqRg");
	this.shape.setTransform(53.1,340.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,106.2,680.2);


(lib.flat7_room_2_btn_5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgYXAjAMAAAhF/MAwvAAAMAAABF/g");
	this.shape.setTransform(156.1,224);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,312.1,448);


(lib.flat7_room_2_btn_4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("A9/RCMAAAgiDMA7/AAAMAAAAiDg");
	this.shape.setTransform(192,109.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,384,218.1);


(lib.flat7_room_2_btn_3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("AxoT/MAAAgn+MAjRAAAMAAAAn+g");
	this.shape.setTransform(112.9,128);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,225.8,256);


(lib.flat7_room_2_btn_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("A7UZAMAAAgx/MA2pAAAMAAAAx/g");
	this.shape.setTransform(174.9,160);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,349.9,320);


(lib.flat7_room_2_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgftAjAMAAAhF/MA/bAAAMAAABF/g");
	this.shape.setTransform(203.1,224);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,406.1,448);


(lib.flat7_room_1_btn_4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgT/AwHMAAAhgNMAn+AAAMAAABgNg");
	this.shape.setTransform(128,308);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,256,616);


(lib.flat7_room_1_btn_3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgkZAeAMAAAg7/MBIzAAAMAAAA7/g");
	this.shape.setTransform(233.1,192);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,466.1,384);


(lib.flat7_room_1_btn_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgVsAhbMAAAhC1MArZAAAMAAABC1g");
	this.shape.setTransform(138.9,214);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,277.8,427.9);


(lib.flat7_room_1_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("Egd/Ax/MAAAhj+MA7/AAAMAAABj+g");
	this.shape.setTransform(192,320);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,384,640);


(lib.flat7_btn_4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AhyDCQgUABAAgVIAAlcQAAgTAUgBIDlAAQAUABAAATIAAFcQAAAVgUgBg");
	this.shape.setTransform(13.6,19.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,27.1,39);


(lib.flat7_btn_3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AhoC8QgTAAgBgUIAAlPQABgUATAAIDRAAQATAAABAUIAAFPQgBAUgTAAg");
	this.shape.setTransform(12.5,18.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,25,37.8);


(lib.flat7_btn_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AhpC/QgUAAAAgUIAAlVQAAgUAUAAIDTAAQAUAAAAAUIAAFVQAAAUgUAAg");
	this.shape.setTransform(12.7,19.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,25.3,38.3);


(lib.flat7_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AhrC8QgTAAgBgUIAAlPQABgUATAAIDWAAQAVAAgBAUIAAFPQABAUgVAAg");
	this.shape.setTransform(12.8,18.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,25.6,37.8);


(lib.flat6_room_9_btn_3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgV2Ak/MAAAhJ9MArtAAAMAAABJ9g");
	this.shape.setTransform(139.9,236.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,279.8,473.6);


(lib.flat6_room_9_btn_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EglTAQ8MAAAgh3MBKnAAAMAAAAh3g");
	this.shape.setTransform(238.9,108.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,477.7,216.9);


(lib.flat6_room_9_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgpoAx/MAAAhj+MBTQAAAMAAABj+g");
	this.shape.setTransform(266.5,320);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,533,640);


(lib.flat6_room_8_btn_3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgaEAtAMAAAhZ/MA0JAAAMAAABZ/g");
	this.shape.setTransform(167,288);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,334,576);


(lib.flat6_room_8_btn_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgRmAoAMAAAhP/MAjNAAAMAAABP/g");
	this.shape.setTransform(112.8,256);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,225.5,512);


(lib.flat6_room_8_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgmGAjAMAAAhF/MBMNAAAMAAABF/g");
	this.shape.setTransform(244,224);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,487.9,448);


(lib.flat6_room_7_btn_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("Egn/Az0MAAAhnoMBP/AAAMAAABnog");
	this.shape.setTransform(256,331.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,512,663.4);


(lib.flat6_room_7_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgcbAp2MAAAhTrMA43AAAMAAABTrg");
	this.shape.setTransform(182.1,267.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,364.1,535.8);


(lib.flat6_room_6_btn_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgZiAkhMAAAhJBMAzEAAAMAAABJBg");
	this.shape.setTransform(163.5,233.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,327,467.6);


(lib.flat6_room_6_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("Egf5A0GMAAAhoLMA/zAAAMAAABoLg");
	this.shape.setTransform(204.2,333.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,408.4,666.9);


(lib.flat6_room_5_btn_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EggJAzsMAAAhnXMBATAAAMAAABnXg");
	this.shape.setTransform(205.8,330.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,411.7,661.7);


(lib.flat6_room_5_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgOVAhcMAAAhC3IcqAAMAAABC3g");
	this.shape.setTransform(91.8,214);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,183.6,428.1);


(lib.flat6_room_4_btn_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgXBAtNMAAAhaaMAuDAAAMAAABaag");
	this.shape.setTransform(147.4,289.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,294.9,578.8);


(lib.flat6_room_4_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgcWAlGMAAAhKLMA4tAAAMAAABKLg");
	this.shape.setTransform(181.5,237.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,363.1,474.9);


(lib.flat6_room_3_btn_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("Egd/Ax/MAAAhj+MA7/AAAMAAABj+g");
	this.shape.setTransform(192,320);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,384,640);


(lib.flat6_room_3_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgXGAqIMAAAhUPMAuNAAAMAAABUPg");
	this.shape.setTransform(147.9,269.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,295.8,539.3);


(lib.flat6_room_2_btn_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgbZAz0MAAAhnoMA2zAAAMAAABnog");
	this.shape.setTransform(175.4,331.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,350.8,663.4);


(lib.flat6_room_2_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("Egb/A0PMAAAhodMA3/AAAMAAABodg");
	this.shape.setTransform(179.3,334.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,358.5,668.7);


(lib.flat6_room_1_btn_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgWLAuiMAAAhdDMAsXAAAMAAABdDg");
	this.shape.setTransform(142,297.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,284,595.6);


(lib.flat6_room_1_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgO/AmTMAAAhMlId+AAMAAABMlg");
	this.shape.setTransform(96,245.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,192,490.4);


(lib.flat6_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AiiC3QgUAAAAgUIAAlFQAAgUAUAAIFFAAQAUAAAAAUIAAFFQAAAUgUAAg");
	this.shape.setTransform(18.3,18.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,36.7,36.7);


(lib.flat5_room_5_btn_4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("Egn/A0qMAAAhpUMBP/AAAMAAABpUg");
	this.shape.setTransform(256,337.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,512,674.2);


(lib.flat5_room_5_btn_3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EhIAAhHMAAAhCOMCQBAAAMAAABCOg");
	this.shape.setTransform(461,212);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,922,424);


(lib.flat5_room_5_btn_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("Egi+A6NMAAAh0ZMBF9AAAMAAAB0Zg");
	this.shape.setTransform(223.9,372.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,447.9,745.1);


(lib.flat5_room_5_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EggpAgqMAAAhBTMBBTAAAMAAABBTg");
	this.shape.setTransform(209,209);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,418.1,418.1);


(lib.flat5_room_4_btn_4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgbyAx/MAAAhj+MA3lAAAMAAABj+g");
	this.shape.setTransform(177.9,320);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,355.9,640);


(lib.flat5_room_4_btn_3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("Egb+A3zMAAAhvlMA39AAAMAAABvlg");
	this.shape.setTransform(179.1,357.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,358.3,714.2);


(lib.flat5_room_4_btn_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("A4/WMMAAAgsXMAx/AAAMAAAAsXg");
	this.shape.setTransform(160,142.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,320,284.2);


(lib.flat5_room_4_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgimAinMAAAhFNMBFNAAAMAAABFNg");
	this.shape.setTransform(221.5,221.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,443.1,443.1);


(lib.flat5_room_3_btn_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgauAx/MAAAhj+MA1cAAAMAAABj+g");
	this.shape.setTransform(171.1,320);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,342.2,640);


(lib.flat5_room_3_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgakA1cMAAAhq3MA1JAAAMAAABq3g");
	this.shape.setTransform(170.1,342);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,340.3,684);


(lib.flat5_room_2_btn_3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgY/Ax/MAAAhj+MAx/AAAMAAABj+g");
	this.shape.setTransform(160,320);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,320,640);


(lib.flat5_room_2_btn_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgSGAx/MAAAhj+MAkNAAAMAAABj+g");
	this.shape.setTransform(115.9,320);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,231.8,640);


(lib.flat5_room_2_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("A7zb0MAAAg3nMA3nAAAMAAAA3ng");
	this.shape.setTransform(178,178);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,356.1,356.1);


(lib.flat5_room_1_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgZnAg0MAAAhBnMAzPAAAMAAABBng");
	this.shape.setTransform(164.1,210.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,328.1,420.1);


(lib.flat5_btn_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AicDpQgUAAAAgTIAAmrQAAgTAUgBIE5AAQAUABAAATIAAGrQAAATgUAAg");
	this.shape.setTransform(17.8,23.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,35.5,46.8);


(lib.flat5_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AiXDlQgUgBAAgTIAAmhQAAgTAUgBIEvAAQAUABAAATIAAGhQAAATgUABg");
	this.shape.setTransform(17.3,22.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,34.6,45.8);


(lib.flat4_room_6_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("Ap/P8IAA/3IT+AAIAAf3g");
	this.shape.setTransform(64,102);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,128,204.1);


(lib.flat4_room_5_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("AnAO/IAA9+IOBAAIAAd+g");
	this.shape.setTransform(44.9,96);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,89.9,192);


(lib.flat4_room_4_btn_4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgT/AlzMAAAhLlMAn+AAAMAAABLlg");
	this.shape.setTransform(128,242);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,256,484);


(lib.flat4_room_4_btn_3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("AwsQtMAAAghZMAhZAAAMAAAAhZg");
	this.shape.setTransform(107,107);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,213.9,213.9);


(lib.flat4_room_4_btn_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("Au/Y2MAAAgxrId+AAMAAAAxrg");
	this.shape.setTransform(96,159.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,192,318.1);


(lib.flat4_room_4_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("Egc5AtAMAAAhZ/MA5zAAAMAAABZ/g");
	this.shape.setTransform(185.1,288);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,370.1,576);


(lib.flat4_room_3_btn_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("AqTbVMAAAg2pIUnAAMAAAA2pg");
	this.shape.setTransform(66,175);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,132.1,350);


(lib.flat4_room_3_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgSRAtAMAAAhZ/MAkjAAAMAAABZ/g");
	this.shape.setTransform(117.1,288);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,234.1,576);


(lib.flat4_room_2_btn_4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("Egi/AvgMAAAhe/MBF/AAAMAAABe/g");
	this.shape.setTransform(224,304.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,448,608.2);


(lib.flat4_room_2_btn_3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("AurWLMAAAgsVIdXAAMAAAAsVg");
	this.shape.setTransform(94,142);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,188.1,284);


(lib.flat4_room_2_btn_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("Egu2AT/MAAAgn+MBdtAAAMAAAAn+g");
	this.shape.setTransform(300,128);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,599.9,256);


(lib.flat4_room_2_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("Egn/AT/MAAAgn+MBP/AAAMAAAAn+g");
	this.shape.setTransform(256,128);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,512,256);


(lib.flat4_room_1_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgMAAg0MAAAhBnIYBAAMAAABBng");
	this.shape.setTransform(76.9,210.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,153.9,420.2);


(lib.flat4_btn_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(66,66,66,0.008)").s().p("AiJFBQgUAAAAgUIAApZQAAgUAUAAIETAAQAUAAAAAUIAAJZQAAAUgUAAg");
	this.shape.setTransform(15.9,32.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,31.8,64.3);


(lib.flat4_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AiSFOQgUAAAAgUIAApzQAAgUAUAAIElAAQAUAAAAAUIAAJzQAAAUgUAAg");
	this.shape.setTransform(16.8,33.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,33.5,67);


(lib.flat3_room_6_btn_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("Eg5gAtAMAAAhZ/MBzBAAAMAAABZ/g");
	this.shape.setTransform(368.1,288);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,736.3,576);


(lib.flat3_room_6_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("A9MdNMAAAg6ZMA6ZAAAMAAAA6Zg");
	this.shape.setTransform(187,187);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,374,374);


(lib.flat3_room_5_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgT/A3AMAAAhuAMAn+AAAMAAABuAg");
	this.shape.setTransform(128,352.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,256,704.2);


(lib.flat3_room_4_btn_4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgwzAw0MAAAhhnMBhnAAAMAAABhng");
	this.shape.setTransform(312.5,312.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,625,625);


(lib.flat3_room_4_btn_3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("Egn/AcbMAAAg41MBP/AAAMAAAA41g");
	this.shape.setTransform(256,182);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,512,363.9);


(lib.flat3_room_4_btn_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("A9/eAMAAAg7/MA7/AAAMAAAA7/g");
	this.shape.setTransform(192,192);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,384,384);


(lib.flat3_room_4_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("Eg+qAvXMAAAhetMB9VAAAMAAABetg");
	this.shape.setTransform(401.1,303.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,802.3,606.2);


(lib.flat3_room_3_btn_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgT/AzlMAAAhnJMAn+AAAMAAABnJg");
	this.shape.setTransform(128,330.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,256,660.2);


(lib.flat3_room_3_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgiNAc6MAAAg5zMBEbAAAMAAAA5zg");
	this.shape.setTransform(219.1,185.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,438.1,370.1);


(lib.flat3_room_2_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgT/AoAMAAAhP/MAn+AAAMAAABP/g");
	this.shape.setTransform(128,256);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,256,512);


(lib.flat3_room_1_btn_4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgT/AuvMAAAhddMAn+AAAMAAABddg");
	this.shape.setTransform(128,299.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,256,598.2);


(lib.flat3_room_1_btn_3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("Egd/AtKMAAAhaTMA7/AAAMAAABaTg");
	this.shape.setTransform(192,289.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,384,578.2);


(lib.flat3_room_1_btn_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgVjAx/MAAAhj+MArHAAAMAAABj+g");
	this.shape.setTransform(138.1,320);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,276.1,640);


(lib.flat3_room_1_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("A4/bCMAAAg2DMAx/AAAMAAAA2Dg");
	this.shape.setTransform(160,173.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,320,346.2);


(lib.flat3_btn_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AiJE/QgUAAAAgTIAApXQAAgTAUgBIETAAQAUABAAATIAAJXQAAATgUAAg");
	this.shape.setTransform(15.9,32);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,31.8,64);


(lib.flat3_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ah9E/QgUAAAAgTIAApXQAAgTAUgBID7AAQAUABAAATIAAJXQAAATgUAAg");
	this.shape.setTransform(14.7,32);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,29.3,64);


(lib.flat2_room_5_btn_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("Aw2diMAAAg7DMAhtAAAMAAAA7Dg");
	this.shape.setTransform(107.9,189);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,215.9,378.1);


(lib.flat2_room_5_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgRpAx/MAAAhj+MAjTAAAMAAABj+g");
	this.shape.setTransform(113.1,320);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,226.1,640);


(lib.flat2_room_4_btn_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgSHAtAMAAAhZ/MAkPAAAMAAABZ/g");
	this.shape.setTransform(116.1,288);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,232.1,576);


(lib.flat2_room_4_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("A4/eyMAAAg9jMAx/AAAMAAAA9jg");
	this.shape.setTransform(160,197.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,320,394.1);


(lib.flat2_room_3_btn_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgXIAx/MAAAhj+MAuRAAAMAAABj+g");
	this.shape.setTransform(148.1,320);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,296.3,640);


(lib.flat2_room_3_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("Egq9A1SMAAAhqjMBV7AAAMAAABqjg");
	this.shape.setTransform(275.1,341);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,550.2,682);


(lib.flat2_room_2_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgLFAjKMAAAhGTIWLAAMAAABGTg");
	this.shape.setTransform(71,225.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,142.1,450.1);


(lib.flat2_room_1_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgMUAgBMAAAhABIYoAAMAAABABg");
	this.shape.setTransform(78.9,205);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,157.8,410);


(lib.flat2_btn_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AiGEIQgTAAgBgVIAAnmQABgTATgBIEMAAQAVABgBATIAAHmQABAVgVAAg");
	this.shape.setTransform(15.5,26.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,31,52.8);


(lib.flat2_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AiIEJQgUAAAAgUIAAnpQAAgUAUAAIERAAQAUAAAAAUIAAHpQAAAUgUAAg");
	this.shape.setTransform(15.8,26.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,31.5,53.1);


(lib.flat1_room_6_btn_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(66,66,66,0.008)").s().p("A2qZAMAAAgx/MAtVAAAMAAAAx/g");
	this.shape.setTransform(145.1,160);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,290.3,320);


(lib.flat1_room_6_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(66,66,66,0.008)").s().p("EgY/Ax/MAAAhj+MAx/AAAMAAABj+g");
	this.shape.setTransform(160,320);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,320,640);


(lib.flat1_room_5_btn_3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.008)").s().p("EgTfAkfMAAAhI9MAm+AAAMAAABI9g");
	this.shape.setTransform(124.8,233.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,249.6,467);


(lib.flat1_room_5_btn_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(66,66,66,0.008)").s().p("ArZauMAAAg1bIWzAAMAAAA1bg");
	this.shape.setTransform(73,171.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,146.1,342.1);


(lib.flat1_room_5_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(66,66,66,0.008)").s().p("A0JakMAAAg1HMAoTAAAMAAAA1Hg");
	this.shape.setTransform(129,170.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,258.1,340.2);


(lib.flat1_room_4_btn_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(66,66,66,0.008)").s().p("Aoab+MAAAg37IQ1AAMAAAA37g");
	this.shape.setTransform(54,179.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,107.9,358.1);


(lib.flat1_room_4_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(66,66,66,0.008)").s().p("EgY/AqLMAAAhUVMAx/AAAMAAABUVg");
	this.shape.setTransform(160,270);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,320,540);


(lib.flat1_room_3_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(66,66,66,0.008)").s().p("EgakAzjMAAAhnGMA1IAAAMAAABnGg");
	this.shape.setTransform(170.1,330);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,340.2,660);


(lib.flat1_room_2_btn_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(66,66,66,0.008)").s().p("EgNvAjUMAAAhGnIbfAAMAAABGng");
	this.shape.setTransform(88,226.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,176.1,452.1);


(lib.flat1_room_2_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(66,66,66,0.008)").s().p("EgY/A0VMAAAhoqMAx/AAAMAAABoqg");
	this.shape.setTransform(160,335);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,320,670);


(lib.flat1_room_1_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(66,66,66,0.008)").s().p("EgR4AqMMAAAhUXMAjwAAAMAAABUXg");
	this.shape.setTransform(114.5,270.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,229,540.2);


(lib.flat1_btn_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ah9EOQgUAAAAgUIAAnzQAAgUAUAAID7AAQAUAAAAAUIAAHzQAAAUgUAAg");
	this.shape.setTransform(14.6,27.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,29.3,54.2);


(lib.flat1_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Ah9EQQgUAAAAgUIAAn3QAAgUAUAAID7AAQAUAAAAAUIAAH3QAAAUgUAAg");
	this.shape.setTransform(14.6,27.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,29.3,54.5);


(lib.door_btn_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AjPB1QgUAAAAgUIAAjBQAAgUAUAAIGfAAQAUAAAAAUIAADBQAAAUgUAAg");
	this.shape.setTransform(22.9,11.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,45.8,23.6);


(lib.stairs_btn_3_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.008)").s().p("AitE/QgTgBgBgTIAApVQABgTATgBIFbAAQATABAAATIAAJVQAAATgTABg");
	this.shape_1.setTransform(19.4,31.9);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,38.8,63.8);


(lib.stairs_btn_2_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.008)").s().p("AiGFNQgTAAgBgUIAApxQABgUATAAIEMAAQAVAAgBAUIAAJxQABAUgVAAg");
	this.shape_1.setTransform(15.5,33.4);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,31,66.7);


(lib.stairs_btn_1_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.008)").s().p("AiEEGQgUAAAAgUIAAnjQAAgUAUAAIEJAAQAUAAAAAUIAAHjQAAAUgUAAg");
	this.shape_1.setTransform(15.4,26.3);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,30.8,52.5);


(lib.home_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(5,1,1).p("ACCAAQAAA1gmAnQgnAmg1AAQg1AAgmgmQgmgnAAg1QAAg1AmgmQAmgmA1AAQA1AAAnAmQAmAmAAA1g");
	this.shape.setTransform(13.1,13.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(102,102,102,0.008)").s().p("AhbBbQgmgmAAg1QAAg1AmgmQAmgmA1AAQA1AAAmAmQAnAmAAA1QAAA1gnAmQgmAng1AAQg1AAgmgng");
	this.shape_1.setTransform(13.1,13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,31.1,31.1);


(lib.fadein = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhP/A7/MAAAh3+MCf/AAAMAAAB3+g");
	this.shape.setTransform(512,384);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.darksound_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("DARKSOUND", "50px 'Jura'", "#FFFFFF");
	this.text.lineHeight = 52;
	this.text.lineWidth = 254;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A0jDqIAAnTMApHAAAIAAHTg");
	this.shape.setTransform(129.1,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.shape},{t:this.text}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,258.1,54.7);


(lib.black_bg = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhP/A7/MAAAh3+MCf/AAAMAAAB3+g");
	this.shape.setTransform(512,384);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.stairs_wrapper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.gotoAndStop(4);
		
		////////// BIND LOCAL TIMELINE TO VARIABLE //////////
		var stairs_timeline = this;
		////////// BIND LOCAL TIMELINE TO VARIABLE //////////
		
		// REMOVE ALL EVENT LISTENERS FUNCTION //
		function clearEventListeners_stairs() {
			stairs_timeline.home_btn_stairs.removeEventListener("click", home_btn_stairs.bind(this));
			stairs_timeline.home_btn_stairs.removeEventListener("mouseover", home_btn_stairsOpacity.bind(this));
			stairs_timeline.home_btn_stairs.removeEventListener("mouseout", home_btn_stairsOpacityOut.bind(this));
			stairs_timeline.stairs_btn_1.removeEventListener("click", stairs_btn_1.bind(this));
			stairs_timeline.stairs_btn_2.removeEventListener("click", stairs_btn_2.bind(this));
			stairs_timeline.stairs_btn_3.removeEventListener("click", stairs_btn_3.bind(this));
			stairs_timeline.stairs_btn_4.removeEventListener("click", stairs_btn_4.bind(this));
			stairs_timeline.stairs_btn_5.removeEventListener("click", stairs_btn_5.bind(this));
			stairs_timeline.stairs_btn_6.removeEventListener("click", stairs_btn_6.bind(this));
			stairs_timeline.stairs_btn_7.removeEventListener("click", stairs_btn_7.bind(this));
			stairs_timeline.stairs_btn_8.removeEventListener("click", stairs_btn_8.bind(this));
			stairs_timeline.stairs_btn_9.removeEventListener("click", stairs_btn_9.bind(this));
			stairs_timeline.stairs_btn_10.removeEventListener("click", stairs_btn_10.bind(this));
			stairs_timeline.stairs_btn_11.removeEventListener("click", stairs_btn_11.bind(this));
			stairs_timeline.stairs_btn_12.removeEventListener("click", stairs_btn_12.bind(this));
			stairs_timeline.stairs_btn_13.removeEventListener("click", stairs_btn_13.bind(this));
			stairs_timeline.stairs_flatnav_btn_1.removeEventListener("click", stairs_flatnav_btn_1.bind(this));
			stairs_timeline.stairs_flatnav_btn_2.removeEventListener("click", stairs_flatnav_btn_2.bind(this));
			stairs_timeline.stairs_flatnav_btn_3.removeEventListener("click", stairs_flatnav_btn_3.bind(this));
		}
		
		// ROOM TONE PLAY//
		roomtone.play();
		filter.frequency.value = 0;
		// END ROOM TONE PLAY//
		
		////////// HOME BUTTON //////////
		
		this.home_btn_stairs.addEventListener("click", home_btn_stairs.bind(this));
		
		function home_btn_stairs()
		{
			// STOP ROOM TONE //
			roomtone.pause();
			roomtone.currentTime = 0;
			// STOP MUSIC //
			party.pause();
			party.currentTime = 0;
			// GO OUTSIDE //
			exportRoot.animate();
			setTimeout(function() { exportRoot.wrapper.gotoAndStop(0); }, 500);
			// CLEAR TIMEOUTS //
			clearTimeouts_stairs();
			// CLEAR EVENTLISTENERS //
			clearEventListeners_stairs();
		}
		
		////////// HOME BUTTON //////////
		
		////////// HOME BUTTON ALPHA EFFECT //////////
		
		this.home_btn_stairs.alpha = 0.35;
		
		this.home_btn_stairs.addEventListener("mouseover", home_btn_stairsOpacity.bind(this));
		function home_btn_stairsOpacity()
		{
			this.home_btn_stairs.alpha = 0.5;
		}
		this.home_btn_stairs.addEventListener("mouseout", home_btn_stairsOpacityOut.bind(this));
		function home_btn_stairsOpacityOut()
		{
			this.home_btn_stairs.alpha = 0.35;
		}
		
		////////// END HOME BUTTON ALPHA EFFECT //////////
		
		
		////////// STAIRS BUTTONS //////////
		
		this.stairs_btn_1.addEventListener("click", stairs_btn_1.bind(this));
		
		function stairs_btn_1()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_stairs.push(setTimeout(function() { stairs_timeline.gotoAndStop(9); }, 500));
		}
		
		this.stairs_btn_2.addEventListener("click", stairs_btn_2.bind(this));
		
		function stairs_btn_2()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_stairs.push(setTimeout(function() { stairs_timeline.gotoAndStop(14); }, 500));
		}
		
		this.stairs_btn_3.addEventListener("click", stairs_btn_3.bind(this));
		
		function stairs_btn_3()
		{
			party.play();
			partyFilter.frequency.value = 20;
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_stairs.push(setTimeout(function() { stairs_timeline.gotoAndStop(19); }, 500));
		}
		
		this.stairs_btn_4.addEventListener("click", stairs_btn_4.bind(this));
		
		function stairs_btn_4()
		{
			filter.frequency.value = 40;
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_stairs.push(setTimeout(function() { stairs_timeline.gotoAndStop(24); }, 500));
		}
		
		this.stairs_btn_5.addEventListener("click", stairs_btn_5.bind(this));
		
		function stairs_btn_5()
		{
			filter.frequency.value = 60;
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_stairs.push(setTimeout(function() { stairs_timeline.gotoAndStop(29); }, 500));
		}
		
		this.stairs_btn_6.addEventListener("click", stairs_btn_6.bind(this));
		
		function stairs_btn_6()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_stairs.push(setTimeout(function() { stairs_timeline.gotoAndStop(34); }, 500));
		}
		
		this.stairs_btn_7.addEventListener("click", stairs_btn_7.bind(this));
		
		function stairs_btn_7()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_stairs.push(setTimeout(function() { stairs_timeline.gotoAndStop(39); }, 500));
		}
		
		this.stairs_btn_8.addEventListener("click", stairs_btn_8.bind(this));
		
		function stairs_btn_8()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_stairs.push(setTimeout(function() { stairs_timeline.gotoAndStop(44); }, 500));
		}
		
		this.stairs_btn_9.addEventListener("click", stairs_btn_9.bind(this));
		
		function stairs_btn_9()
		{
			filter.frequency.value = 80;
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_stairs.push(setTimeout(function() { stairs_timeline.gotoAndStop(49); }, 500));
		}
		
		this.stairs_btn_10.addEventListener("click", stairs_btn_10.bind(this));
		
		function stairs_btn_10()
		{
			filter.frequency.value = 120;
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_stairs.push(setTimeout(function() { stairs_timeline.gotoAndStop(54); }, 500));
		}
		
		this.stairs_btn_11.addEventListener("click", stairs_btn_11.bind(this));
		
		function stairs_btn_11()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_stairs.push(setTimeout(function() { stairs_timeline.gotoAndStop(59); }, 500));
		}
		
		this.stairs_btn_12.addEventListener("click", stairs_btn_12.bind(this));
		
		function stairs_btn_12()
		{
			// STOP MUSIC //
			party.pause();
			party.currentTime = 0;
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_stairs.push(setTimeout(function() { stairs_timeline.gotoAndStop(64); }, 500));
		}
		
		// exit button //
		
		this.stairs_btn_13.addEventListener("click", stairs_btn_13.bind(this));
		
		function stairs_btn_13()
		{
			// STOP ROOM TONE //
			roomtone.pause();
			roomtone.currentTime = 0;
			// STOP MUSIC //
			party.pause();
			party.currentTime = 0;
			// GO OUTSIDE //
			exportRoot.animate();
			setTimeout(function() { exportRoot.wrapper.gotoAndStop(0); }, 500);
			// CLEAR TIMEOUTS //
			clearTimeouts_stairs();
			// CLEAR EVENTLISTENERS //
			clearEventListeners_stairs();
		}
		
		////////// END STAIRS BUTTONS //////////
		
		
		////////// FLAT NAV BUTTONS //////////
		
		this.stairs_flatnav_btn_1.addEventListener("click", stairs_flatnav_btn_1.bind(this));
		
		function stairs_flatnav_btn_1()
		{
			// STOP ROOM TONE //
			roomtone.pause();
			roomtone.currentTime = 0;
			// STOP MUSIC //
			party.pause();
			party.currentTime = 0;
			// GO INTO FLAT //
			exportRoot.animate();
			setTimeout(function() { exportRoot.wrapper.gotoAndStop(4); }, 500);
			// CLEAR TIMEOUTS //
			clearTimeouts_stairs();
			// CLEAR EVENTLISTENERS //
			clearEventListeners_stairs();
		}
		
		this.stairs_flatnav_btn_2.addEventListener("click", stairs_flatnav_btn_2.bind(this));
		
		function stairs_flatnav_btn_2()
		{
			// STOP ROOM TONE //
			roomtone.pause();
			roomtone.currentTime = 0;
			// STOP MUSIC //
			party.pause();
			party.currentTime = 0;
			// GO INTO FLAT //
			exportRoot.animate();
			setTimeout(function() { exportRoot.wrapper.gotoAndStop(1); }, 500);
			// CLEAR TIMEOUTS //
			clearTimeouts_stairs();
			// CLEAR EVENTLISTENERS //
			clearEventListeners_stairs();
		}
		
		this.stairs_flatnav_btn_3.addEventListener("click", stairs_flatnav_btn_3.bind(this));
		
		function stairs_flatnav_btn_3()
		{
			// STOP ROOM TONE //
			roomtone.pause();
			roomtone.currentTime = 0;
			// STOP MUSIC //
			party.pause();
			party.currentTime = 0;
			// GO INTO FLAT //
			exportRoot.animate();
			setTimeout(function() { exportRoot.wrapper.gotoAndStop(7); }, 500);
			// CLEAR TIMEOUTS //
			clearTimeouts_stairs();
			// CLEAR EVENTLISTENERS //
			clearEventListeners_stairs();
		}
		
		////////// END FLAT NAV BUTTONS //////////
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(65));

	// home_btn
	this.home_btn_stairs = new lib.home_btn();
	this.home_btn_stairs.setTransform(32.6,32.6,0.958,0.958,0,0,0,13.1,13.1);
	new cjs.ButtonHelper(this.home_btn_stairs, 0, 1, 2, false, new lib.home_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.home_btn_stairs).wait(65));

	// stairs_btn_13
	this.stairs_btn_13 = new lib.stairs_btn_13();
	this.stairs_btn_13.setTransform(520.7,229,1,1,0,0,0,119.3,160);
	this.stairs_btn_13._off = true;
	new cjs.ButtonHelper(this.stairs_btn_13, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.stairs_btn_13).wait(64).to({_off:false},0).wait(1));

	// stairs_picture13
	this.instance = new lib.stairs_picture13();
	this.instance.setTransform(0.8,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(64).to({_off:false},0).wait(1));

	// stairs_btn_12
	this.stairs_btn_12 = new lib.stairs_btn_12();
	this.stairs_btn_12.setTransform(512,499.5,1,1,0,0,0,384,204.6);
	this.stairs_btn_12._off = true;
	new cjs.ButtonHelper(this.stairs_btn_12, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.stairs_btn_12).wait(59).to({_off:false},0).to({_off:true},1).wait(5));

	// stairs_picture12
	this.instance_1 = new lib.stairs_picture12();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({_off:false},0).to({_off:true},1).wait(5));

	// stairs_flatnav_btn_3
	this.stairs_flatnav_btn_3 = new lib.stairs_flatnav_btn_3();
	this.stairs_flatnav_btn_3.setTransform(588.1,384,1,1,0,0,0,140.1,320);
	this.stairs_flatnav_btn_3._off = true;
	new cjs.ButtonHelper(this.stairs_flatnav_btn_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.stairs_flatnav_btn_3).wait(54).to({_off:false},0).to({_off:true},1).wait(10));

	// stairs_btn_11
	this.stairs_btn_11 = new lib.stairs_btn_11();
	this.stairs_btn_11.setTransform(199.9,381.8,1,1,0,0,0,158.9,347.4);
	this.stairs_btn_11._off = true;
	new cjs.ButtonHelper(this.stairs_btn_11, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.stairs_btn_11).wait(54).to({_off:false},0).to({_off:true},1).wait(10));

	// stairs_picture11
	this.instance_2 = new lib.stairs_picture11();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(54).to({_off:false},0).to({_off:true},1).wait(10));

	// stairs_btn_10
	this.stairs_btn_10 = new lib.stairs_btn_10();
	this.stairs_btn_10.setTransform(640,256,1,1,0,0,0,256,192);
	this.stairs_btn_10._off = true;
	new cjs.ButtonHelper(this.stairs_btn_10, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.stairs_btn_10).wait(49).to({_off:false},0).to({_off:true},1).wait(15));

	// stairs_picture10
	this.instance_3 = new lib.stairs_picture10();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(49).to({_off:false},0).to({_off:true},1).wait(15));

	// stairs_btn_9
	this.stairs_btn_9 = new lib.stairs_btn_9();
	this.stairs_btn_9.setTransform(640,387.5,1,1,0,0,0,320,353.1);
	this.stairs_btn_9._off = true;
	new cjs.ButtonHelper(this.stairs_btn_9, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.stairs_btn_9).wait(44).to({_off:false},0).to({_off:true},1).wait(20));

	// stairs_picture9
	this.instance_4 = new lib.stairs_picture9();
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(44).to({_off:false},0).to({_off:true},1).wait(20));

	// stairs_flatnav_btn_2
	this.stairs_flatnav_btn_2 = new lib.stairs_flatnav_btn_2();
	this.stairs_flatnav_btn_2.setTransform(544,384,1,1,0,0,0,160,320);
	this.stairs_flatnav_btn_2._off = true;
	new cjs.ButtonHelper(this.stairs_flatnav_btn_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.stairs_flatnav_btn_2).wait(39).to({_off:false},0).to({_off:true},1).wait(25));

	// stairs_btn_8
	this.stairs_btn_8 = new lib.stairs_btn_8();
	this.stairs_btn_8.setTransform(880.6,379.7,1,1,0,0,0,107.3,352);
	this.stairs_btn_8._off = true;
	new cjs.ButtonHelper(this.stairs_btn_8, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.stairs_btn_8).wait(39).to({_off:false},0).to({_off:true},1).wait(25));

	// stairs_picture8
	this.instance_5 = new lib.stairs_picture8();
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(39).to({_off:false},0).to({_off:true},1).wait(25));

	// stairs_btn_7
	this.stairs_btn_7 = new lib.stairs_btn_7();
	this.stairs_btn_7.setTransform(308.5,288,1,1,0,0,0,203.6,224);
	this.stairs_btn_7._off = true;
	new cjs.ButtonHelper(this.stairs_btn_7, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.stairs_btn_7).wait(34).to({_off:false},0).to({_off:true},1).wait(30));

	// stairs_picture7
	this.instance_6 = new lib.stairs_picture7();
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(34).to({_off:false},0).to({_off:true},1).wait(30));

	// stairs_btn_6
	this.stairs_btn_6 = new lib.stairs_btn_6();
	this.stairs_btn_6.setTransform(493.9,384,1,1,0,0,0,402.1,320);
	this.stairs_btn_6._off = true;
	new cjs.ButtonHelper(this.stairs_btn_6, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.stairs_btn_6).wait(29).to({_off:false},0).to({_off:true},1).wait(35));

	// stairs_picture6
	this.instance_7 = new lib.stairs_picture6();
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(29).to({_off:false},0).to({_off:true},1).wait(35));

	// stairs_flatbtn_1
	this.stairs_flatnav_btn_1 = new lib.stairs_flatnav_btn_1();
	this.stairs_flatnav_btn_1.setTransform(437.1,400.1,1,1,0,0,0,181.1,336.1);
	this.stairs_flatnav_btn_1._off = true;
	new cjs.ButtonHelper(this.stairs_flatnav_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.stairs_flatnav_btn_1).wait(24).to({_off:false},0).to({_off:true},1).wait(40));

	// stairs_btn_5
	this.stairs_btn_5 = new lib.stairs_btn_5();
	this.stairs_btn_5.setTransform(832,389.1,1,1,0,0,0,128,341.6);
	this.stairs_btn_5._off = true;
	new cjs.ButtonHelper(this.stairs_btn_5, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.stairs_btn_5).wait(24).to({_off:false},0).to({_off:true},1).wait(40));

	// stairs_picture5
	this.instance_8 = new lib.stairs_picture5();
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(24).to({_off:false},0).to({_off:true},1).wait(40));

	// stairs_btn_4
	this.stairs_btn_4 = new lib.stairs_btn_4();
	this.stairs_btn_4.setTransform(284.3,320,1,1,0,0,0,189.2,256);
	this.stairs_btn_4._off = true;
	new cjs.ButtonHelper(this.stairs_btn_4, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.stairs_btn_4).wait(19).to({_off:false},0).to({_off:true},1).wait(45));

	// stairs_picture4
	this.instance_9 = new lib.stairs_picture4();
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(19).to({_off:false},0).to({_off:true},1).wait(45));

	// stairs_btn_3
	this.stairs_btn_3 = new lib.stairs_btn_3();
	this.stairs_btn_3.setTransform(672,352,1,1,0,0,0,160,288);
	this.stairs_btn_3._off = true;
	new cjs.ButtonHelper(this.stairs_btn_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.stairs_btn_3).wait(14).to({_off:false},0).to({_off:true},1).wait(50));

	// stairs_picture3
	this.instance_10 = new lib.stairs_picture3();
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(14).to({_off:false},0).to({_off:true},1).wait(50));

	// stairs_btn_2
	this.stairs_btn_2 = new lib.stairs_btn_2();
	this.stairs_btn_2.setTransform(673.5,338,1,1,0,0,0,267.1,301.9);
	this.stairs_btn_2._off = true;
	new cjs.ButtonHelper(this.stairs_btn_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.stairs_btn_2).wait(9).to({_off:false},0).to({_off:true},1).wait(55));

	// stairs_picture2
	this.instance_11 = new lib.stairs_picture2();
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(9).to({_off:false},0).to({_off:true},1).wait(55));

	// stairs_btn_1
	this.stairs_btn_1 = new lib.stairs_btn_1();
	this.stairs_btn_1.setTransform(652.8,327.8,1,1,0,0,0,268.8,268.8);
	this.stairs_btn_1._off = true;
	new cjs.ButtonHelper(this.stairs_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.stairs_btn_1).wait(4).to({_off:false},0).to({_off:true},1).wait(60));

	// stairs_picture1
	this.instance_12 = new lib.stairs_picture1();
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(4).to({_off:false},0).to({_off:true},1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17.6,17.6,29.8,29.8);


(lib.flat7_wrapper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.gotoAndStop(4);
		
		////////// BIND LOCAL TIMELINE TO VARIABLE //////////
		var flat7_timeline = this;
		////////// BIND LOCAL TIMELINE TO VARIABLE //////////
		
		// REMOVE ALL EVENT LISTENERS FUNCTION //
		function clearEventListeners_flat7() {
			flat7_timeline.home_btn_flat7.removeEventListener("click", home_btn_flat7);
			flat7_timeline.home_btn_flat7.removeEventListener("mouseover", home_btn_flat7Opacity);
			flat7_timeline.home_btn_flat7.removeEventListener("mouseout", home_btn_flat7OpacityOut);
			flat7_timeline.flat7_room_1_btn_1.removeEventListener("click", flat7_room_1_btn_1);
			flat7_timeline.flat7_room_1_btn_2.removeEventListener("click", flat7_room_1_btn_2);
			flat7_timeline.flat7_room_1_btn_3.removeEventListener("click", flat7_room_1_btn_3);
			flat7_timeline.flat7_room_1_btn_4.removeEventListener("click", flat7_room_1_btn_4);
			flat7_timeline.flat7_room_2_btn_1.removeEventListener("click", flat7_room_2_btn_1);
			flat7_timeline.flat7_room_2_btn_2.removeEventListener("click", flat7_room_2_btn_2);
			flat7_timeline.flat7_room_2_btn_3.removeEventListener("click", flat7_room_2_btn_3);
			flat7_timeline.flat7_room_2_btn_4.removeEventListener("click", flat7_room_2_btn_4);
			flat7_timeline.flat7_room_2_btn_5.removeEventListener("click", flat7_room_2_btn_5);
			flat7_timeline.flat7_room_3_btn_1.removeEventListener("click", flat7_room_3_btn_1);
			flat7_timeline.flat7_room_4_btn_1.removeEventListener("click", flat7_room_4_btn_1);
			flat7_timeline.flat7_room_4_btn_2.removeEventListener("click", flat7_room_4_btn_2);
			flat7_timeline.flat7_room_5_btn_1.removeEventListener("click", flat7_room_5_btn_1);
			flat7_timeline.flat7_room_6_btn_1.removeEventListener("click", flat7_room_6_btn_1);
			flat7_timeline.flat7_room_6_btn_2.removeEventListener("click", flat7_room_6_btn_2);
			flat7_timeline.flat7_room_6_btn_3.removeEventListener("click", flat7_room_6_btn_3);
		}
		
		// STOP SPEECH FUNCTION //
		function stopSpeech_flat7() {
			flat7_sound_1.pause();
			flat7_sound_1.currentTime = 0;
			flat7_sound_2.pause();
			flat7_sound_2.currentTime = 0;
			flat7_sound_3.pause();
			flat7_sound_3.currentTime = 0;
			flat7_sound_4.pause();
			flat7_sound_4.currentTime = 0;
			flat7_sound_5.pause();
			flat7_sound_5.currentTime = 0;
			
		}
		
		// PARTY MUSIC PLAY //
		partyFilter.frequency.value = 500;
		party.play();
		// END PARY MUSIC PLAY //
		
		// ROOM TONE PLAY //
		roomtone.play();
		// END ROOM TONE PLAY //
		
		////////// HOME BUTTON //////////
		
		this.home_btn_flat7.addEventListener("click", home_btn_flat7.bind(this));
		
		function home_btn_flat7()
		{
			// STOP ROOM TONE //
			roomtone.pause();
			roomtone.currentTime = 0;
			// STOP MUSIC //
			party.pause();
			party.currentTime = 0;
			// GO OUTSIDE //
			exportRoot.animate();
			setTimeout(function() { exportRoot.wrapper.gotoAndStop(0); }, 500);
			// STOP SPEECH //
			stopSpeech_flat7();
			// CLEAR TIMEOUTS //
			clearTimeouts_flat7();
			// CLEAR EVENTLISTENERS //
			clearEventListeners_flat7();
		}
		
		////////// HOME BUTTON //////////
		
		////////// HOME BUTTON ALPHA EFFECT //////////
		
		this.home_btn_flat7.alpha = 0.35;
		
		this.home_btn_flat7.addEventListener("mouseover", home_btn_flat7Opacity.bind(this));
		function home_btn_flat7Opacity()
		{
			this.home_btn_flat7.alpha = 0.5;
		}
		this.home_btn_flat7.addEventListener("mouseout", home_btn_flat7OpacityOut.bind(this));
		function home_btn_flat7OpacityOut()
		{
			this.home_btn_flat7.alpha = 0.35;
		}
		
		////////// END HOME BUTTON ALPHA EFFECT //////////
		
		////////// FLAT 7 BUTTONS //////////
		timeouts_flat7.push(setTimeout(function(){ flat7_sound_1.play(); }, 1000));
		
		this.flat7_room_1_btn_1.addEventListener("click", flat7_room_1_btn_1.bind(this));
		
		function flat7_room_1_btn_1()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat7.push(setTimeout(function() { flat7_timeline.gotoAndStop(9); }, 500));
			partyFilter.frequency.value = 800;
			flat7_sound_1.pause();
			flat7_sound_1.currentTime = 0;
			timeouts_flat7.push(setTimeout(function(){ flat7_sound_2.play(); }, 1000));
		}
		
		this.flat7_room_1_btn_2.addEventListener("click", flat7_room_1_btn_2.bind(this));
		
		function flat7_room_1_btn_2()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat7.push(setTimeout(function() { flat7_timeline.gotoAndStop(14); }, 500));
			flat7_sound_2.pause();
			flat7_sound_2.currentTime = 0;
			timeouts_flat7.push(setTimeout(function(){ flat7_sound_3.play(); }, 500));
		}
		
		this.flat7_room_1_btn_3.addEventListener("click", flat7_room_1_btn_3.bind(this));
		
		function flat7_room_1_btn_3()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat7.push(setTimeout(function() { flat7_timeline.gotoAndStop(19); }, 500));
			flat7_sound_3.pause();
			flat7_sound_3.currentTime = 0;
			timeouts_flat7.push(setTimeout(function(){ flat7_sound_4.play(); }, 2000));
		}
		
		this.flat7_room_1_btn_4.addEventListener("click", flat7_room_1_btn_4.bind(this));
		
		function flat7_room_1_btn_4()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat7.push(setTimeout(function() { flat7_timeline.gotoAndStop(24); }, 500));
			partyFilter.frequency.value = 20000;
		}
		
		this.flat7_room_2_btn_1.addEventListener("click", flat7_room_2_btn_1.bind(this));
		
		function flat7_room_2_btn_1()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat7.push(setTimeout(function() { flat7_timeline.gotoAndStop(29); }, 500));
		}
		
		this.flat7_room_2_btn_2.addEventListener("click", flat7_room_2_btn_2.bind(this));
		
		function flat7_room_2_btn_2()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat7.push(setTimeout(function() { flat7_timeline.gotoAndStop(34); }, 500));
		}
		
		this.flat7_room_2_btn_3.addEventListener("click", flat7_room_2_btn_3.bind(this));
		
		function flat7_room_2_btn_3()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat7.push(setTimeout(function() { flat7_timeline.gotoAndStop(39); }, 500));
		}
		
		this.flat7_room_2_btn_4.addEventListener("click", flat7_room_2_btn_4.bind(this));
		
		function flat7_room_2_btn_4()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat7.push(setTimeout(function() { flat7_timeline.gotoAndStop(44); }, 500));
		}
		
		this.flat7_room_2_btn_5.addEventListener("click", flat7_room_2_btn_5.bind(this));
		
		function flat7_room_2_btn_5()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat7.push(setTimeout(function() { flat7_timeline.gotoAndStop(49); }, 500));
			partyFilter.frequency.value = 500;
		}
		
		this.flat7_room_3_btn_1.addEventListener("click", flat7_room_3_btn_1.bind(this));
		
		function flat7_room_3_btn_1()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat7.push(setTimeout(function() { flat7_timeline.gotoAndStop(54); }, 500));
			partyFilter.frequency.value = 200;
			flat7_sound_4.pause();
			flat7_sound_4.currentTime = 0;
			timeouts_flat7.push(setTimeout(function(){ flat7_sound_5.play(); }, 300));
		}
		
		this.flat7_room_4_btn_1.addEventListener("click", flat7_room_4_btn_1.bind(this));
		
		function flat7_room_4_btn_1()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat7.push(setTimeout(function() { flat7_timeline.gotoAndStop(59); }, 500));
		}
		
		this.flat7_room_4_btn_2.addEventListener("click", flat7_room_4_btn_2.bind(this));
		
		function flat7_room_4_btn_2()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat7.push(setTimeout(function() { flat7_timeline.gotoAndStop(64); }, 500));
			partyFilter.frequency.value = 1000;
		}
		
		this.flat7_room_5_btn_1.addEventListener("click", flat7_room_5_btn_1.bind(this));
		
		function flat7_room_5_btn_1()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat7.push(setTimeout(function() { flat7_timeline.gotoAndStop(69); }, 500));
			partyFilter.frequency.value = 700;
		}
		
		this.flat7_room_6_btn_1.addEventListener("click", flat7_room_6_btn_1.bind(this));
		
		function flat7_room_6_btn_1()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat7.push(setTimeout(function() { flat7_timeline.gotoAndStop(74); }, 500));
			partyFilter.frequency.value = 500;
		}
		
		this.flat7_room_6_btn_2.addEventListener("click", flat7_room_6_btn_2.bind(this));
		
		function flat7_room_6_btn_2()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat7.push(setTimeout(function() { flat7_timeline.gotoAndStop(79); }, 500));
			partyFilter.frequency.value = 300;
		}
		
		// exit button //
		
		this.flat7_room_6_btn_3.addEventListener("click", flat7_room_6_btn_3.bind(this));
		
		function flat7_room_6_btn_3()
		{
			// STOP ROOM TONE //
			roomtone.pause();
			roomtone.currentTime = 0;
			// STOP MUSIC //
			party.pause();
			party.currentTime = 0;
			// GO OUTSIDE //
			exportRoot.animate();
			setTimeout(function() { exportRoot.wrapper.gotoAndStop(0); }, 500);
			// STOP SPEECH //
			stopSpeech_flat7();
			// CLEAR TIMEOUTS //
			clearTimeouts_flat7();
			// CLEAR EVENTLISTENERS //
			clearEventListeners_flat7();
		}
		
		
		
		
		////////// END FLAT 7 BUTTONS //////////
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(80));

	// home_btn
	this.home_btn_flat7 = new lib.home_btn();
	this.home_btn_flat7.setTransform(32.6,32.6,0.958,0.958,0,0,0,13.1,13.1);
	new cjs.ButtonHelper(this.home_btn_flat7, 0, 1, 2, false, new lib.home_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.home_btn_flat7).wait(80));

	// flat7_room_6_btn_3
	this.flat7_room_6_btn_3 = new lib.flat7_room_6_btn_3();
	this.flat7_room_6_btn_3.setTransform(234,227.1,1,1,0,0,0,106,145.1);
	this.flat7_room_6_btn_3._off = true;
	new cjs.ButtonHelper(this.flat7_room_6_btn_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat7_room_6_btn_3).wait(79).to({_off:false},0).wait(1));

	// flat7_room_6_picture3
	this.instance = new lib.flat7_room_6_picture3();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(79).to({_off:false},0).wait(1));

	// flat7_room_6_btn_2
	this.flat7_room_6_btn_2 = new lib.flat7_room_6_btn_2();
	this.flat7_room_6_btn_2.setTransform(320,416,1,1,0,0,0,256,288);
	this.flat7_room_6_btn_2._off = true;
	new cjs.ButtonHelper(this.flat7_room_6_btn_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat7_room_6_btn_2).wait(74).to({_off:false},0).to({_off:true},1).wait(5));

	// flat7_room_6_picture2
	this.instance_1 = new lib.flat7_room_6_picture2();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(74).to({_off:false},0).to({_off:true},1).wait(5));

	// flat7_room_6_btn_1
	this.flat7_room_6_btn_1 = new lib.flat7_room_6_btn_1();
	this.flat7_room_6_btn_1.setTransform(395.1,378.1,1,1,0,0,0,245,304.1);
	this.flat7_room_6_btn_1._off = true;
	new cjs.ButtonHelper(this.flat7_room_6_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat7_room_6_btn_1).wait(69).to({_off:false},0).to({_off:true},1).wait(10));

	// flat7_room_6_picture1
	this.instance_2 = new lib.flat7_room_6_picture1();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(69).to({_off:false},0).to({_off:true},1).wait(10));

	// flat7_room_5_btn_1
	this.flat7_room_5_btn_1 = new lib.flat7_room_5_btn_1();
	this.flat7_room_5_btn_1.setTransform(610.2,332.1,1,1,0,0,0,70,140.1);
	this.flat7_room_5_btn_1._off = true;
	new cjs.ButtonHelper(this.flat7_room_5_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat7_room_5_btn_1).wait(64).to({_off:false},0).to({_off:true},1).wait(15));

	// flat7_room_5_picture1
	this.instance_3 = new lib.flat7_room_5_picture1();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(64).to({_off:false},0).to({_off:true},1).wait(15));

	// flat7_room_4_btn_2
	this.flat7_room_4_btn_2 = new lib.flat7_room_4_btn_2();
	this.flat7_room_4_btn_2.setTransform(544,256,1,1,0,0,0,96,192);
	this.flat7_room_4_btn_2._off = true;
	new cjs.ButtonHelper(this.flat7_room_4_btn_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat7_room_4_btn_2).wait(59).to({_off:false},0).to({_off:true},1).wait(20));

	// flat7_room_4_picture2
	this.instance_4 = new lib.flat7_room_4_picture2();
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(59).to({_off:false},0).to({_off:true},1).wait(20));

	// flat7_room_4_btn_1
	this.flat7_room_4_btn_1 = new lib.flat7_room_4_btn_1();
	this.flat7_room_4_btn_1.setTransform(313.2,576,1,1,0,0,0,225.1,128);
	this.flat7_room_4_btn_1._off = true;
	new cjs.ButtonHelper(this.flat7_room_4_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat7_room_4_btn_1).wait(54).to({_off:false},0).to({_off:true},1).wait(25));

	// flat7_room_4_picture1
	this.instance_5 = new lib.flat7_room_4_picture1();
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(54).to({_off:false},0).to({_off:true},1).wait(25));

	// flat7_room_3_btn_1
	this.flat7_room_3_btn_1 = new lib.flat7_room_3_btn_1();
	this.flat7_room_3_btn_1.setTransform(501.1,404.1,1,1,0,0,0,53.1,340.1);
	this.flat7_room_3_btn_1._off = true;
	new cjs.ButtonHelper(this.flat7_room_3_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat7_room_3_btn_1).wait(49).to({_off:false},0).to({_off:true},1).wait(30));

	// flat7_room_3_picture1
	this.instance_6 = new lib.flat7_room_3_picture1();
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(49).to({_off:false},0).to({_off:true},1).wait(30));

	// flat7_room_2_btn_5
	this.flat7_room_2_btn_5 = new lib.flat7_room_2_btn_5();
	this.flat7_room_2_btn_5.setTransform(320.2,288,1,1,0,0,0,156.1,224);
	this.flat7_room_2_btn_5._off = true;
	new cjs.ButtonHelper(this.flat7_room_2_btn_5, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat7_room_2_btn_5).wait(44).to({_off:false},0).to({_off:true},1).wait(35));

	// flat7_room_2_picture5
	this.instance_7 = new lib.flat7_room_2_picture5();
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(44).to({_off:false},0).to({_off:true},1).wait(35));

	// flat7_room_2_btn_4
	this.flat7_room_2_btn_4 = new lib.flat7_room_2_btn_4();
	this.flat7_room_2_btn_4.setTransform(768,173,1,1,0,0,0,192,109);
	this.flat7_room_2_btn_4._off = true;
	new cjs.ButtonHelper(this.flat7_room_2_btn_4, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat7_room_2_btn_4).wait(39).to({_off:false},0).to({_off:true},1).wait(40));

	// flat7_room_2_picture4
	this.instance_8 = new lib.flat7_room_2_picture4();
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(39).to({_off:false},0).to({_off:true},1).wait(40));

	// flat7_room_2_btn_3
	this.flat7_room_2_btn_3 = new lib.flat7_room_2_btn_3();
	this.flat7_room_2_btn_3.setTransform(847.1,576,1,1,0,0,0,112.9,128);
	this.flat7_room_2_btn_3._off = true;
	new cjs.ButtonHelper(this.flat7_room_2_btn_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat7_room_2_btn_3).wait(34).to({_off:false},0).to({_off:true},1).wait(45));

	// flat7_room_2_picture3
	this.instance_9 = new lib.flat7_room_2_picture3();
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(34).to({_off:false},0).to({_off:true},1).wait(45));

	// flat7_room_2_btn_2
	this.flat7_room_2_btn_2 = new lib.flat7_room_2_btn_2();
	this.flat7_room_2_btn_2.setTransform(785.1,544,1,1,0,0,0,174.9,160);
	this.flat7_room_2_btn_2._off = true;
	new cjs.ButtonHelper(this.flat7_room_2_btn_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat7_room_2_btn_2).wait(29).to({_off:false},0).to({_off:true},1).wait(50));

	// flat7_room_2_picture2
	this.instance_10 = new lib.flat7_room_2_picture2();
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(29).to({_off:false},0).to({_off:true},1).wait(50));

	// flat7_room_2_btn_1
	this.flat7_room_2_btn_1 = new lib.flat7_room_2_btn_1();
	this.flat7_room_2_btn_1.setTransform(287.2,288,1,1,0,0,0,203.1,224);
	this.flat7_room_2_btn_1._off = true;
	new cjs.ButtonHelper(this.flat7_room_2_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat7_room_2_btn_1).wait(24).to({_off:false},0).to({_off:true},1).wait(55));

	// flat7_room_2_picture1
	this.instance_11 = new lib.flat7_room_2_picture1();
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(24).to({_off:false},0).to({_off:true},1).wait(55));

	// flat7_room_1_btn_4
	this.flat7_room_1_btn_4 = new lib.flat7_room_1_btn_4();
	this.flat7_room_1_btn_4.setTransform(576,396,1,1,0,0,0,128,307.9);
	this.flat7_room_1_btn_4._off = true;
	new cjs.ButtonHelper(this.flat7_room_1_btn_4, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat7_room_1_btn_4).wait(19).to({_off:false},0).to({_off:true},1).wait(60));

	// flat7_room_1_picture4
	this.instance_12 = new lib.flat7_room_1_picture4();
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(19).to({_off:false},0).to({_off:true},1).wait(60));

	// flat7_room_1_btn_3
	this.flat7_room_1_btn_3 = new lib.flat7_room_1_btn_3();
	this.flat7_room_1_btn_3.setTransform(317.2,512,1,1,0,0,0,233.1,192);
	this.flat7_room_1_btn_3._off = true;
	new cjs.ButtonHelper(this.flat7_room_1_btn_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat7_room_1_btn_3).wait(14).to({_off:false},0).to({_off:true},1).wait(65));

	// flat7_room_1_picture3
	this.instance_13 = new lib.flat7_room_1_picture3();
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(14).to({_off:false},0).to({_off:true},1).wait(65));

	// flat7_room_1_btn_2
	this.flat7_room_1_btn_2 = new lib.flat7_room_1_btn_2();
	this.flat7_room_1_btn_2.setTransform(821.1,490.1,1,1,0,0,0,138.9,214);
	this.flat7_room_1_btn_2._off = true;
	new cjs.ButtonHelper(this.flat7_room_1_btn_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat7_room_1_btn_2).wait(9).to({_off:false},0).to({_off:true},1).wait(70));

	// flat7_room_1_picture2
	this.instance_14 = new lib.flat7_room_1_picture2();
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(9).to({_off:false},0).to({_off:true},1).wait(70));

	// flat7_room_1_btn_1
	this.flat7_room_1_btn_1 = new lib.flat7_room_1_btn_1();
	this.flat7_room_1_btn_1.setTransform(256,384,1,1,0,0,0,192,320);
	this.flat7_room_1_btn_1._off = true;
	new cjs.ButtonHelper(this.flat7_room_1_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat7_room_1_btn_1).wait(4).to({_off:false},0).to({_off:true},1).wait(75));

	// flat7_room_1_picture1
	this.instance_15 = new lib.flat7_room_1_picture1();
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(4).to({_off:false},0).to({_off:true},1).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17.6,17.6,29.8,29.8);


(lib.flat6_wrapper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.gotoAndStop(4);
		
		////////// BIND LOCAL TIMELINE TO VARIABLE //////////
		var flat6_timeline = this;
		////////// BIND LOCAL TIMELINE TO VARIABLE //////////
		
		// REMOVE ALL EVENT LISTENERS FUNCTION //
		function clearEventListeners_flat6() {
			flat6_timeline.home_btn_flat6.removeEventListener("click", home_btn_flat6.bind(this));
			flat6_timeline.home_btn_flat6.removeEventListener("mouseover", home_btn_flat6Opacity.bind(this));
			flat6_timeline.home_btn_flat6.removeEventListener("mouseout", home_btn_flat6OpacityOut.bind(this));
			flat6_timeline.flat6_room_1_btn_1.removeEventListener("click", flat6_room_1_btn_1.bind(this));
			flat6_timeline.flat6_room_1_btn_2.removeEventListener("click", flat6_room_1_btn_2.bind(this));
			flat6_timeline.flat6_room_2_btn_1.removeEventListener("click", flat6_room_2_btn_1.bind(this));
			flat6_timeline.flat6_room_2_btn_2.removeEventListener("click", flat6_room_2_btn_2.bind(this));
			flat6_timeline.flat6_room_3_btn_1.removeEventListener("click", flat6_room_3_btn_1.bind(this));
			flat6_timeline.flat6_room_3_btn_2.removeEventListener("click", flat6_room_3_btn_2.bind(this));
			flat6_timeline.flat6_room_4_btn_1.removeEventListener("click", flat6_room_4_btn_1.bind(this));
			flat6_timeline.flat6_room_4_btn_2.removeEventListener("click", flat6_room_4_btn_2.bind(this));
			flat6_timeline.flat6_room_5_btn_1.removeEventListener("click", flat6_room_5_btn_1.bind(this));
			flat6_timeline.flat6_room_5_btn_2.removeEventListener("click", flat6_room_5_btn_2.bind(this));
			flat6_timeline.flat6_room_6_btn_1.removeEventListener("click", flat6_room_6_btn_1.bind(this));
			flat6_timeline.flat6_room_6_btn_2.removeEventListener("click", flat6_room_6_btn_2.bind(this));
			flat6_timeline.flat6_room_7_btn_1.removeEventListener("click", flat6_room_7_btn_1.bind(this));
			flat6_timeline.flat6_room_7_btn_2.removeEventListener("click", flat6_room_7_btn_2.bind(this));
			flat6_timeline.flat6_room_8_btn_1.removeEventListener("click", flat6_room_8_btn_1.bind(this));
			flat6_timeline.flat6_room_8_btn_2.removeEventListener("click", flat6_room_8_btn_2.bind(this));
			flat6_timeline.flat6_room_8_btn_3.removeEventListener("click", flat6_room_8_btn_3.bind(this));
			flat6_timeline.flat6_room_9_btn_1.removeEventListener("click", flat6_room_9_btn_1.bind(this));
			flat6_timeline.flat6_room_9_btn_2.removeEventListener("click", flat6_room_9_btn_2.bind(this));
			flat6_timeline.flat6_room_9_btn_3.removeEventListener("click", flat6_room_9_btn_3.bind(this));
		}
		
		// STOP SPEECH FUNCTION //
		function stopSpeech_flat6() {
			flat6_sound_1.pause();
			flat6_sound_1.currentTime = 0;
			flat6_sound_2.pause();
			flat6_sound_2.currentTime = 0;
			flat6_sound_3.pause();
			flat6_sound_3.currentTime = 0;
			flat6_sound_4.pause();
			flat6_sound_4.currentTime = 0;
			flat6_sound_5.pause();
			flat6_sound_5.currentTime = 0;
			flat6_sound_6.pause();
			flat6_sound_6.currentTime = 0;
		}
		
		// ROOM TONE PLAY //
		roomtone.play();
		// END ROOM TONE PLAY //
		
		
		////////// HOME BUTTON //////////
		
		this.home_btn_flat6.addEventListener("click", home_btn_flat6.bind(this));
		
		function home_btn_flat6()
		{
			// STOP ROOM TONE //
			roomtone.pause();
			roomtone.currentTime = 0;
			// GO OUTSIDE //
			exportRoot.animate();
			setTimeout(function() { exportRoot.wrapper.gotoAndStop(0); }, 500);
			// STOP SPEECH //
			stopSpeech_flat6();
			// CLEAR TIMEOUTS //
			clearTimeouts_flat6();
			// CLEAR EVENTLISTENERS //
			clearEventListeners_flat6();
		}
		
		////////// HOME BUTTON //////////
		
		////////// HOME BUTTON ALPHA EFFECT //////////
		
		this.home_btn_flat6.alpha = 0.35;
		
		this.home_btn_flat6.addEventListener("mouseover", home_btn_flat6Opacity.bind(this));
		function home_btn_flat6Opacity()
		{
			this.home_btn_flat6.alpha = 0.5;
		}
		this.home_btn_flat6.addEventListener("mouseout", home_btn_flat6OpacityOut.bind(this));
		function home_btn_flat6OpacityOut()
		{
			this.home_btn_flat6.alpha = 0.35;
		}
		
		////////// END HOME BUTTON ALPHA EFFECT //////////
		
		
		////////// FLAT 6 BUTTONS //////////
		
		this.flat6_room_1_btn_1.addEventListener("click", flat6_room_1_btn_1.bind(this));
		
		function flat6_room_1_btn_1()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat6.push(setTimeout(function() { flat6_timeline.gotoAndStop(9); }, 500));
		}
		
		this.flat6_room_1_btn_2.addEventListener("click", flat6_room_1_btn_2.bind(this));
		
		function flat6_room_1_btn_2()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat6.push(setTimeout(function() { flat6_timeline.gotoAndStop(14); }, 500));
		}
		
		this.flat6_room_2_btn_1.addEventListener("click", flat6_room_2_btn_1.bind(this));
		
		function flat6_room_2_btn_1()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat6.push(setTimeout(function() { flat6_timeline.gotoAndStop(19); }, 500));
			timeouts_flat6.push(setTimeout(function(){ flat6_sound_1.play(); }, 1000));
		}
		
		this.flat6_room_2_btn_2.addEventListener("click", flat6_room_2_btn_2.bind(this));
		
		function flat6_room_2_btn_2()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat6.push(setTimeout(function() { flat6_timeline.gotoAndStop(24); }, 500));
		}
		
		this.flat6_room_3_btn_1.addEventListener("click", flat6_room_3_btn_1.bind(this));
		
		function flat6_room_3_btn_1()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat6.push(setTimeout(function() { flat6_timeline.gotoAndStop(29); }, 500));
			flat6_sound_1.pause();
			flat6_sound_1.currentTime = 0;
			timeouts_flat6.push(setTimeout(function(){ flat6_sound_2.play(); }, 500));
		}
		
		this.flat6_room_3_btn_2.addEventListener("click", flat6_room_3_btn_2.bind(this));
		
		function flat6_room_3_btn_2()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat6.push(setTimeout(function() { flat6_timeline.gotoAndStop(34); }, 500));
			flat6_sound_2.pause();
			flat6_sound_2.currentTime = 0;
			timeouts_flat6.push(setTimeout(function(){ flat6_sound_3.play(); }, 3000));
		}
		
		this.flat6_room_4_btn_1.addEventListener("click", flat6_room_4_btn_1.bind(this));
		
		function flat6_room_4_btn_1()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat6.push(setTimeout(function() { flat6_timeline.gotoAndStop(39); }, 500));
			flat6_sound_3.pause();
			flat6_sound_3.currentTime = 0;
			timeouts_flat6.push(setTimeout(function(){ flat6_sound_4.play(); }, 1000));
		}
		
		this.flat6_room_4_btn_2.addEventListener("click", flat6_room_4_btn_2.bind(this));
		
		function flat6_room_4_btn_2()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat6.push(setTimeout(function() { flat6_timeline.gotoAndStop(44); }, 500));
		}
		
		this.flat6_room_5_btn_1.addEventListener("click", flat6_room_5_btn_1.bind(this));
		
		function flat6_room_5_btn_1()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat6.push(setTimeout(function() { flat6_timeline.gotoAndStop(49); }, 500));
		}
		
		this.flat6_room_5_btn_2.addEventListener("click", flat6_room_5_btn_2.bind(this));
		
		function flat6_room_5_btn_2()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat6.push(setTimeout(function() { flat6_timeline.gotoAndStop(54); }, 500));
			flat6_sound_4.pause();
			flat6_sound_4.currentTime = 0;
			timeouts_flat6.push(setTimeout(function(){ flat6_sound_5.play(); }, 500));
		}
		
		this.flat6_room_6_btn_1.addEventListener("click", flat6_room_6_btn_1.bind(this));
		
		function flat6_room_6_btn_1()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat6.push(setTimeout(function() { flat6_timeline.gotoAndStop(59); }, 500));
		}
		
		this.flat6_room_6_btn_2.addEventListener("click", flat6_room_6_btn_2.bind(this));
		
		function flat6_room_6_btn_2()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat6.push(setTimeout(function() { flat6_timeline.gotoAndStop(64); }, 500));
			flat6_sound_5.pause();
			flat6_sound_5.currentTime = 0;
			timeouts_flat6.push(setTimeout(function(){ flat6_sound_6.play(); }, 1000));
		}
		
		this.flat6_room_7_btn_1.addEventListener("click", flat6_room_7_btn_1.bind(this));
		
		function flat6_room_7_btn_1()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat6.push(setTimeout(function() { flat6_timeline.gotoAndStop(69); }, 500));
		}
		
		this.flat6_room_7_btn_2.addEventListener("click", flat6_room_7_btn_2.bind(this));
		
		function flat6_room_7_btn_2()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat6.push(setTimeout(function() { flat6_timeline.gotoAndStop(74); }, 500));
		}
		
		this.flat6_room_8_btn_1.addEventListener("click", flat6_room_8_btn_1.bind(this));
		
		function flat6_room_8_btn_1()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat6.push(setTimeout(function() { flat6_timeline.gotoAndStop(79); }, 500));
		}
		
		this.flat6_room_8_btn_2.addEventListener("click", flat6_room_8_btn_2.bind(this));
		
		function flat6_room_8_btn_2()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat6.push(setTimeout(function() { flat6_timeline.gotoAndStop(84); }, 500));
		}
		
		this.flat6_room_8_btn_3.addEventListener("click", flat6_room_8_btn_3.bind(this));
		
		function flat6_room_8_btn_3()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat6.push(setTimeout(function() { flat6_timeline.gotoAndStop(89); }, 500));
		}
		
		this.flat6_room_9_btn_1.addEventListener("click", flat6_room_9_btn_1.bind(this));
		
		function flat6_room_9_btn_1()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat6.push(setTimeout(function() { flat6_timeline.gotoAndStop(94); }, 500));
		}
		
		this.flat6_room_9_btn_2.addEventListener("click", flat6_room_9_btn_2.bind(this));
		
		function flat6_room_9_btn_2()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat6.push(setTimeout(function() { flat6_timeline.gotoAndStop(99); }, 500));
		}
		
		// exit button //
		
		this.flat6_room_9_btn_3.addEventListener("click", flat6_room_9_btn_3.bind(this));
		
		function flat6_room_9_btn_3()
		{
			// STOP ROOM TONE //
			roomtone.pause();
			roomtone.currentTime = 0;
			// GO OUTSIDE //
			exportRoot.animate();
			setTimeout(function() { exportRoot.wrapper.gotoAndStop(0); }, 500);
			// STOP SPEECH //
			stopSpeech_flat6();
			// CLEAR TIMEOUTS //
			clearTimeouts_flat6();
			// CLEAR EVENTLISTENERS //
			clearEventListeners_flat6();
		}
		
		// END FLAT 6 BUTTONS //
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(100));

	// home_btn
	this.home_btn_flat6 = new lib.home_btn();
	this.home_btn_flat6.setTransform(32.6,32.6,0.958,0.958,0,0,0,13.1,13.1);
	new cjs.ButtonHelper(this.home_btn_flat6, 0, 1, 2, false, new lib.home_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.home_btn_flat6).wait(100));

	// flat6_room_9_btn_3
	this.flat6_room_9_btn_3 = new lib.flat6_room_9_btn_3();
	this.flat6_room_9_btn_3.setTransform(180.1,275.3,1,1,0,0,0,139.9,236.8);
	this.flat6_room_9_btn_3._off = true;
	new cjs.ButtonHelper(this.flat6_room_9_btn_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat6_room_9_btn_3).wait(99).to({_off:false},0).wait(1));

	// flat6_room_9_picture3
	this.instance = new lib.flat6_room_9_picture3();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(99).to({_off:false},0).wait(1));

	// flat6_room_9_btn_2
	this.flat6_room_9_btn_2 = new lib.flat6_room_9_btn_2();
	this.flat6_room_9_btn_2.setTransform(430.8,531.6,1,1,0,0,0,238.8,108.4);
	this.flat6_room_9_btn_2._off = true;
	new cjs.ButtonHelper(this.flat6_room_9_btn_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat6_room_9_btn_2).wait(94).to({_off:false},0).to({_off:true},1).wait(5));

	// flat6_room_9_picture2
	this.instance_1 = new lib.flat6_room_9_picture2();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(94).to({_off:false},0).to({_off:true},1).wait(5));

	// flat6_room_9_btn_1
	this.flat6_room_9_btn_1 = new lib.flat6_room_9_btn_1();
	this.flat6_room_9_btn_1.setTransform(565.5,384,1,1,0,0,0,266.5,320);
	this.flat6_room_9_btn_1._off = true;
	new cjs.ButtonHelper(this.flat6_room_9_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat6_room_9_btn_1).wait(89).to({_off:false},0).to({_off:true},1).wait(10));

	// flat6_room_9_picture1
	this.instance_2 = new lib.flat6_room_9_picture1();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(89).to({_off:false},0).to({_off:true},1).wait(10));

	// flat6_room_8_btn_3
	this.flat6_room_8_btn_3 = new lib.flat6_room_8_btn_3();
	this.flat6_room_8_btn_3.setTransform(572.7,352,1,1,0,0,0,167,288);
	this.flat6_room_8_btn_3._off = true;
	new cjs.ButtonHelper(this.flat6_room_8_btn_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat6_room_8_btn_3).wait(84).to({_off:false},0).to({_off:true},1).wait(15));

	// flat6_room_8_picture3
	this.instance_3 = new lib.flat6_room_8_picture3();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(84).to({_off:false},0).to({_off:true},1).wait(15));

	// flat6_room_8_btn_2
	this.flat6_room_8_btn_2 = new lib.flat6_room_8_btn_2();
	this.flat6_room_8_btn_2.setTransform(752.8,320,1,1,0,0,0,112.8,256);
	this.flat6_room_8_btn_2._off = true;
	new cjs.ButtonHelper(this.flat6_room_8_btn_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat6_room_8_btn_2).wait(79).to({_off:false},0).to({_off:true},1).wait(20));

	// flat6_room_8_picture2
	this.instance_4 = new lib.flat6_room_8_picture2();
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(79).to({_off:false},0).to({_off:true},1).wait(20));

	// flat6_room_8_btn_1
	this.flat6_room_8_btn_1 = new lib.flat6_room_8_btn_1();
	this.flat6_room_8_btn_1.setTransform(716.1,288,1,1,0,0,0,244,224);
	this.flat6_room_8_btn_1._off = true;
	new cjs.ButtonHelper(this.flat6_room_8_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat6_room_8_btn_1).wait(74).to({_off:false},0).to({_off:true},1).wait(25));

	// flat6_room_8_picture1
	this.instance_5 = new lib.flat6_room_8_picture1();
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(74).to({_off:false},0).to({_off:true},1).wait(25));

	// flat6_room_7_btn_2
	this.flat6_room_7_btn_2 = new lib.flat6_room_7_btn_2();
	this.flat6_room_7_btn_2.setTransform(704,395.7,1,1,0,0,0,256,331.7);
	this.flat6_room_7_btn_2._off = true;
	new cjs.ButtonHelper(this.flat6_room_7_btn_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat6_room_7_btn_2).wait(69).to({_off:false},0).to({_off:true},1).wait(30));

	// flat6_room_7_picture2
	this.instance_6 = new lib.flat6_room_7_picture2();
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(69).to({_off:false},0).to({_off:true},1).wait(30));

	// flat6_room_7_btn_1
	this.flat6_room_7_btn_1 = new lib.flat6_room_7_btn_1();
	this.flat6_room_7_btn_1.setTransform(586,331.9,1,1,0,0,0,182.1,267.9);
	this.flat6_room_7_btn_1._off = true;
	new cjs.ButtonHelper(this.flat6_room_7_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat6_room_7_btn_1).wait(64).to({_off:false},0).to({_off:true},1).wait(35));

	// flat6_room_7_picture1
	this.instance_7 = new lib.flat6_room_7_picture1();
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(64).to({_off:false},0).to({_off:true},1).wait(35));

	// flat6_room_6_btn_2
	this.flat6_room_6_btn_2 = new lib.flat6_room_6_btn_2();
	this.flat6_room_6_btn_2.setTransform(462.5,315.3,1,1,0,0,0,163.5,233.8);
	this.flat6_room_6_btn_2._off = true;
	new cjs.ButtonHelper(this.flat6_room_6_btn_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat6_room_6_btn_2).wait(59).to({_off:false},0).to({_off:true},1).wait(40));

	// flat6_room_6_picture2
	this.instance_8 = new lib.flat6_room_6_picture2();
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(59).to({_off:false},0).to({_off:true},1).wait(40));

	// flat6_room_6_btn_1
	this.flat6_room_6_btn_1 = new lib.flat6_room_6_btn_1();
	this.flat6_room_6_btn_1.setTransform(780.2,383.4,1,1,0,0,0,204.2,333.4);
	this.flat6_room_6_btn_1._off = true;
	new cjs.ButtonHelper(this.flat6_room_6_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat6_room_6_btn_1).wait(54).to({_off:false},0).to({_off:true},1).wait(45));

	// flat6_room_6_picture1
	this.instance_9 = new lib.flat6_room_6_picture1();
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(54).to({_off:false},0).to({_off:true},1).wait(45));

	// flat6_room_5_btn_2
	this.flat6_room_5_btn_2 = new lib.flat6_room_5_btn_2();
	this.flat6_room_5_btn_2.setTransform(370.2,394.8,1,1,0,0,0,205.8,330.8);
	this.flat6_room_5_btn_2._off = true;
	new cjs.ButtonHelper(this.flat6_room_5_btn_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat6_room_5_btn_2).wait(49).to({_off:false},0).to({_off:true},1).wait(50));

	// flat6_room_5_picture2
	this.instance_10 = new lib.flat6_room_5_picture2();
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(49).to({_off:false},0).to({_off:true},1).wait(50));

	// flat6_room_5_btn_1
	this.flat6_room_5_btn_1 = new lib.flat6_room_5_btn_1();
	this.flat6_room_5_btn_1.setTransform(497.6,342,1,1,0,0,0,91.8,214);
	this.flat6_room_5_btn_1._off = true;
	new cjs.ButtonHelper(this.flat6_room_5_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat6_room_5_btn_1).wait(44).to({_off:false},0).to({_off:true},1).wait(55));

	// flat6_room_5_picture1
	this.instance_11 = new lib.flat6_room_5_picture1();
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(44).to({_off:false},0).to({_off:true},1).wait(55));

	// flat6_room_4_btn_2
	this.flat6_room_4_btn_2 = new lib.flat6_room_4_btn_2();
	this.flat6_room_4_btn_2.setTransform(236.6,383.8,1,1,0,0,0,147.4,289.4);
	this.flat6_room_4_btn_2._off = true;
	new cjs.ButtonHelper(this.flat6_room_4_btn_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat6_room_4_btn_2).wait(39).to({_off:false},0).to({_off:true},1).wait(60));

	// flat6_room_4_picture2
	this.instance_12 = new lib.flat6_room_4_picture2();
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(39).to({_off:false},0).to({_off:true},1).wait(60));

	// flat6_room_4_btn_1
	this.flat6_room_4_btn_1 = new lib.flat6_room_4_btn_1();
	this.flat6_room_4_btn_1.setTransform(202.5,493.5,1,1,0,0,0,181.5,237.5);
	this.flat6_room_4_btn_1._off = true;
	new cjs.ButtonHelper(this.flat6_room_4_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat6_room_4_btn_1).wait(34).to({_off:false},0).to({_off:true},1).wait(65));

	// flat6_room_4_picture1
	this.instance_13 = new lib.flat6_room_4_picture1();
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(34).to({_off:false},0).to({_off:true},1).wait(65));

	// flat6_room_3_btn_2
	this.flat6_room_3_btn_2 = new lib.flat6_room_3_btn_2();
	this.flat6_room_3_btn_2.setTransform(757.5,384,1,1,0,0,0,192,320);
	this.flat6_room_3_btn_2._off = true;
	new cjs.ButtonHelper(this.flat6_room_3_btn_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat6_room_3_btn_2).wait(29).to({_off:false},0).to({_off:true},1).wait(70));

	// flat6_room_3_picture2
	this.instance_14 = new lib.flat6_room_3_picture2();
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(29).to({_off:false},0).to({_off:true},1).wait(70));

	// flat6_room_3_btn_1
	this.flat6_room_3_btn_1 = new lib.flat6_room_3_btn_1();
	this.flat6_room_3_btn_1.setTransform(659.9,333.6,1,1,0,0,0,147.9,269.6);
	this.flat6_room_3_btn_1._off = true;
	new cjs.ButtonHelper(this.flat6_room_3_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat6_room_3_btn_1).wait(24).to({_off:false},0).to({_off:true},1).wait(75));

	// flat6_room_3_picture1
	this.instance_15 = new lib.flat6_room_3_picture1();
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(24).to({_off:false},0).to({_off:true},1).wait(75));

	// flat6_room_2_btn_2
	this.flat6_room_2_btn_2 = new lib.flat6_room_2_btn_2();
	this.flat6_room_2_btn_2.setTransform(208.6,395.7,1,1,0,0,0,175.4,331.7);
	this.flat6_room_2_btn_2._off = true;
	new cjs.ButtonHelper(this.flat6_room_2_btn_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat6_room_2_btn_2).wait(19).to({_off:false},0).to({_off:true},1).wait(80));

	// flat6_room_2_picture2
	this.instance_16 = new lib.flat6_room_2_picture2();
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(19).to({_off:false},0).to({_off:true},1).wait(80));

	// flat6_room_2_btn_1
	this.flat6_room_2_btn_1 = new lib.flat6_room_2_btn_1();
	this.flat6_room_2_btn_1.setTransform(780.7,398.3,1,1,0,0,0,179.2,334.3);
	this.flat6_room_2_btn_1._off = true;
	new cjs.ButtonHelper(this.flat6_room_2_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat6_room_2_btn_1).wait(14).to({_off:false},0).to({_off:true},1).wait(85));

	// flat6_room_2_picture1
	this.instance_17 = new lib.flat6_room_2_picture1();
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(14).to({_off:false},0).to({_off:true},1).wait(85));

	// flat6_room_1_btn_2
	this.flat6_room_1_btn_2 = new lib.flat6_room_1_btn_2();
	this.flat6_room_1_btn_2.setTransform(754,406.2,1,1,0,0,0,142,297.8);
	this.flat6_room_1_btn_2._off = true;
	new cjs.ButtonHelper(this.flat6_room_1_btn_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat6_room_1_btn_2).wait(9).to({_off:false},0).to({_off:true},1).wait(90));

	// flat6_room_1_picture2
	this.instance_18 = new lib.flat6_room_1_picture2();
	this.instance_18.setTransform(0,0.7);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(9).to({_off:false},0).to({_off:true},1).wait(90));

	// flat6_room_1_btn_1
	this.flat6_room_1_btn_1 = new lib.flat6_room_1_btn_1();
	this.flat6_room_1_btn_1.setTransform(608,330.9,1,1,0,0,0,96,245.2);
	this.flat6_room_1_btn_1._off = true;
	new cjs.ButtonHelper(this.flat6_room_1_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat6_room_1_btn_1).wait(4).to({_off:false},0).to({_off:true},1).wait(95));

	// flat6_room_1_picture1
	this.instance_19 = new lib.flat6_room_1_picture1();
	this.instance_19.setTransform(0,0.7);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(4).to({_off:false},0).to({_off:true},1).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17.6,17.6,29.8,29.8);


(lib.flat5_wrapper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.gotoAndStop(4);
		
		////////// BIND LOCAL TIMELINE TO VARIABLE //////////
		var flat5_timeline = this;
		////////// BIND LOCAL TIMELINE TO VARIABLE //////////
		
		// REMOVE ALL EVENT LISTENERS FUNCTION //
		function clearEventListeners_flat5() {
			flat5_timeline.home_btn_flat5.removeEventListener("click", home_btn_flat5.bind(this));
			flat5_timeline.home_btn_flat5.removeEventListener("mouseover", home_btn_flat5Opacity.bind(this));
			flat5_timeline.home_btn_flat5.removeEventListener("mouseout", home_btn_flat5OpacityOut.bind(this));
			flat5_timeline.flat5_room_1_btn_1.removeEventListener("click", flat5_room_1_btn_1.bind(this));
			flat5_timeline.flat5_room_2_btn_1.removeEventListener("click", flat5_room_2_btn_1.bind(this));
			flat5_timeline.flat5_room_2_btn_2.removeEventListener("click", flat5_room_2_btn_2.bind(this));
			flat5_timeline.flat5_room_2_btn_3.removeEventListener("click", flat5_room_2_btn_3.bind(this));
			flat5_timeline.flat5_room_3_btn_1.removeEventListener("click", flat5_room_3_btn_1.bind(this));
			flat5_timeline.flat5_room_3_btn_2.removeEventListener("click", flat5_room_3_btn_2.bind(this));
			flat5_timeline.flat5_room_4_btn_1.removeEventListener("click", flat5_room_4_btn_1.bind(this));
			flat5_timeline.flat5_room_4_btn_2.removeEventListener("click", flat5_room_4_btn_2.bind(this));
			flat5_timeline.flat5_room_4_btn_3.removeEventListener("click", flat5_room_4_btn_3.bind(this));
			flat5_timeline.flat5_room_4_btn_4.removeEventListener("click", flat5_room_4_btn_4.bind(this));
			flat5_timeline.flat5_room_5_btn_1.removeEventListener("click", flat5_room_5_btn_1.bind(this));
			flat5_timeline.flat5_room_5_btn_2.removeEventListener("click", flat5_room_5_btn_2.bind(this));
			flat5_timeline.flat5_room_5_btn_3.removeEventListener("click", flat5_room_5_btn_3.bind(this));
			flat5_timeline.flat5_room_5_btn_4.removeEventListener("click", flat5_room_5_btn_4.bind(this));
		}
		
		// ROOM TONE PLAY //
		roomtone.play();
		// END ROOM TONE PLAY //
		
		// GAMING PLAY//
		gamingGain.gain.value = 1.0;
		gaming.play();
		// END GAMING PLAY//
		
		// DISHES PLAY//
		dishesGain.gain.value = 0.1;
		dishes.play();
		// END DISHES PLAY//
		
		////////// HOME BUTTON //////////
		
		this.home_btn_flat5.addEventListener("click", home_btn_flat5.bind(this));
		
		function home_btn_flat5()
		{
			// STOP ROOM TONE //
			roomtone.pause();
			roomtone.currentTime = 0;
			// STOP GAMING //
			gaming.pause();
			gaming.currentTime = 0;
			// STOP DISHES //
			dishes.pause();
			dishes.currentTime = 0;
			// STOP TEETH //
			teeth.pause();
			teeth.currentTime = 0;
			// GO OUTSIDE //
			exportRoot.animate();
			setTimeout(function() { exportRoot.wrapper.gotoAndStop(0); }, 500);
			// CLEAR TIMEOUTS //
			clearTimeouts_flat5();
			// CLEAR EVENTLISTENERS //
			clearEventListeners_flat5();
		}
		
		////////// HOME BUTTON //////////
		
		////////// HOME BUTTON ALPHA EFFECT //////////
		
		this.home_btn_flat5.alpha = 0.35;
		
		this.home_btn_flat5.addEventListener("mouseover", home_btn_flat5Opacity.bind(this));
		function home_btn_flat5Opacity()
		{
			this.home_btn_flat5.alpha = 0.5;
		}
		this.home_btn_flat5.addEventListener("mouseout", home_btn_flat5OpacityOut.bind(this));
		function home_btn_flat5OpacityOut()
		{
			this.home_btn_flat5.alpha = 0.35;
		}
		
		////////// END HOME BUTTON ALPHA EFFECT //////////
		
		
		////////// FLAT 5 BUTTONS //////////
		
		this.flat5_room_1_btn_1.addEventListener("click", flat5_room_1_btn_1.bind(this));
		
		function flat5_room_1_btn_1()
		{
			gamingGain.gain.value = 0.25;
			dishesGain.gain.value = 0.5;
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat5.push(setTimeout(function() { flat5_timeline.gotoAndStop(9); }, 500));
		}
		
		this.flat5_room_2_btn_1.addEventListener("click", flat5_room_2_btn_1.bind(this));
		
		function flat5_room_2_btn_1()
		{
			dishesGain.gain.value = 1.0;
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat5.push(setTimeout(function() { flat5_timeline.gotoAndStop(14); }, 500));
		}
		
		this.flat5_room_2_btn_2.addEventListener("click", flat5_room_2_btn_2.bind(this));
		
		function flat5_room_2_btn_2()
		{
			gamingGain.gain.value = 0.5;
			dishesGain.gain.value = 0.75;
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat5.push(setTimeout(function() { flat5_timeline.gotoAndStop(19); }, 500));
		}
		
		this.flat5_room_2_btn_3.addEventListener("click", flat5_room_2_btn_3.bind(this));
		
		function flat5_room_2_btn_3()
		{
			gamingGain.gain.value = 1.0;
			dishesGain.gain.value = 0.1;
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat5.push(setTimeout(function() { flat5_timeline.gotoAndStop(24); }, 500));
		}
		
		this.flat5_room_3_btn_1.addEventListener("click", flat5_room_3_btn_1.bind(this));
		
		function flat5_room_3_btn_1()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat5.push(setTimeout(function() { flat5_timeline.gotoAndStop(29); }, 500));
		}
		
		this.flat5_room_3_btn_2.addEventListener("click", flat5_room_3_btn_2.bind(this));
		
		function flat5_room_3_btn_2()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat5.push(setTimeout(function() { flat5_timeline.gotoAndStop(34); }, 500));
			gamingGain.gain.value = 0.1;
			dishesGain.gain.value = 0.001;
		}
		
		this.flat5_room_4_btn_1.addEventListener("click", flat5_room_4_btn_1.bind(this));
		
		function flat5_room_4_btn_1()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat5.push(setTimeout(function() { flat5_timeline.gotoAndStop(39); }, 500));
		}
		
		this.flat5_room_4_btn_2.addEventListener("click", flat5_room_4_btn_2.bind(this));
		
		function flat5_room_4_btn_2()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat5.push(setTimeout(function() { flat5_timeline.gotoAndStop(44); }, 500));
		}
		
		this.flat5_room_4_btn_3.addEventListener("click", flat5_room_4_btn_3.bind(this));
		
		function flat5_room_4_btn_3()
		{
			teeth.play();
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat5.push(setTimeout(function() { flat5_timeline.gotoAndStop(49); }, 500));
		}
		
		this.flat5_room_4_btn_4.addEventListener("click", flat5_room_4_btn_4.bind(this));
		
		function flat5_room_4_btn_4()
		{
			teethGain.gain.value = 0.5;
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat5.push(setTimeout(function() { flat5_timeline.gotoAndStop(54); }, 500));
		}
		
		this.flat5_room_5_btn_1.addEventListener("click", flat5_room_5_btn_1.bind(this));
		
		function flat5_room_5_btn_1()
		{
			teethGain.gain.value = 1.0;
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat5.push(setTimeout(function() { flat5_timeline.gotoAndStop(59); }, 500));
		}
		
		this.flat5_room_5_btn_2.addEventListener("click", flat5_room_5_btn_2.bind(this));
		
		function flat5_room_5_btn_2()
		{
			teethGain.gain.value = 0.25;
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat5.push(setTimeout(function() { flat5_timeline.gotoAndStop(64); }, 500));
		}
		
		this.flat5_room_5_btn_3.addEventListener("click", flat5_room_5_btn_3.bind(this));
		
		function flat5_room_5_btn_3()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat5.push(setTimeout(function() { flat5_timeline.gotoAndStop(69); }, 500));
		}
		
		// exit button //
		
		this.flat5_room_5_btn_4.addEventListener("click", flat5_room_5_btn_4.bind(this));
		
		function flat5_room_5_btn_4()
		{
			// STOP TEETH //
			teeth.pause();
			teeth.currentTime = 0;
			// STOP ROOM TONE //
			roomtone.pause();
			roomtone.currentTime = 0;
			// STOP GAMING //
			gaming.pause();
			gaming.currentTime = 0;
			// STOP DISHES //
			dishes.pause();
			dishes.currentTime = 0;
			// GO OUTSIDE //
			exportRoot.animate();
			setTimeout(function() { exportRoot.wrapper.gotoAndStop(0); }, 500);
			// CLEAR TIMEOUTS //
			clearTimeouts_flat5();
			// CLEAR EVENTLISTENERS //
			clearEventListeners_flat5();
		}
		
		// END FLAT 5 BUTTONS //
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(71));

	// home_btn
	this.home_btn_flat5 = new lib.home_btn();
	this.home_btn_flat5.setTransform(32.6,32.6,0.958,0.958,0,0,0,13.1,13.1);
	new cjs.ButtonHelper(this.home_btn_flat5, 0, 1, 2, false, new lib.home_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.home_btn_flat5).to({_off:true},70).wait(1));

	// flat5_room_5_btn_4
	this.flat5_room_5_btn_4 = new lib.flat5_room_5_btn_4();
	this.flat5_room_5_btn_4.setTransform(704,381.1,1,1,0,0,0,256,337.1);
	this.flat5_room_5_btn_4._off = true;
	new cjs.ButtonHelper(this.flat5_room_5_btn_4, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat5_room_5_btn_4).wait(69).to({_off:false},0).to({_off:true},1).wait(1));

	// flat5_room_5_picture4
	this.instance = new lib.flat5_room_5_picture4();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(69).to({_off:false},0).to({_off:true},1).wait(1));

	// flat5_room_5_btn_3
	this.flat5_room_5_btn_3 = new lib.flat5_room_5_btn_3();
	this.flat5_room_5_btn_3.setTransform(515,236,1,1,0,0,0,460.9,212);
	this.flat5_room_5_btn_3._off = true;
	new cjs.ButtonHelper(this.flat5_room_5_btn_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat5_room_5_btn_3).wait(64).to({_off:false},0).to({_off:true},1).wait(6));

	// flat5_room_5_picture3
	this.instance_1 = new lib.flat5_room_5_picture3();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(64).to({_off:false},0).to({_off:true},1).wait(6));

	// flat5_room_5_btn_2
	this.flat5_room_5_btn_2 = new lib.flat5_room_5_btn_2();
	this.flat5_room_5_btn_2.setTransform(236.1,383.7,1,1,0,0,0,223.9,372.6);
	this.flat5_room_5_btn_2._off = true;
	new cjs.ButtonHelper(this.flat5_room_5_btn_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat5_room_5_btn_2).wait(59).to({_off:false},0).to({_off:true},1).wait(11));

	// flat5_room_5_picture2
	this.instance_2 = new lib.flat5_room_5_picture2();
	this.instance_2.setTransform(0.2,1.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({_off:false},0).to({_off:true},1).wait(11));

	// flat5_room_5_btn_1
	this.flat5_room_5_btn_1 = new lib.flat5_room_5_btn_1();
	this.flat5_room_5_btn_1.setTransform(257.1,509,1,1,0,0,0,209,209);
	this.flat5_room_5_btn_1._off = true;
	new cjs.ButtonHelper(this.flat5_room_5_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat5_room_5_btn_1).wait(54).to({_off:false},0).to({_off:true},1).wait(16));

	// flat5_room_5_picture1
	this.instance_3 = new lib.flat5_room_5_picture1();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(54).to({_off:false},0).to({_off:true},1).wait(16));

	// flat5_room_4_btn_4
	this.flat5_room_4_btn_4 = new lib.flat5_room_4_btn_4();
	this.flat5_room_4_btn_4.setTransform(654.1,384,1,1,0,0,0,177.9,320);
	this.flat5_room_4_btn_4._off = true;
	new cjs.ButtonHelper(this.flat5_room_4_btn_4, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat5_room_4_btn_4).wait(49).to({_off:false},0).to({_off:true},1).wait(21));

	// flat5_room_4_picture4
	this.instance_4 = new lib.flat5_room_4_picture4();
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(49).to({_off:false},0).to({_off:true},1).wait(21));

	// flat5_room_4_btn_3
	this.flat5_room_4_btn_3 = new lib.flat5_room_4_btn_3();
	this.flat5_room_4_btn_3.setTransform(819.1,381.1,1,1,0,0,0,179.1,357.1);
	this.flat5_room_4_btn_3._off = true;
	new cjs.ButtonHelper(this.flat5_room_4_btn_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat5_room_4_btn_3).wait(44).to({_off:false},0).to({_off:true},1).wait(26));

	// flat5_room_4_picture3
	this.instance_5 = new lib.flat5_room_4_picture3();
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(44).to({_off:false},0).to({_off:true},1).wait(26));

	// flat5_room_4_btn_2
	this.flat5_room_4_btn_2 = new lib.flat5_room_4_btn_2();
	this.flat5_room_4_btn_2.setTransform(622,462.1,1,1,0,0,0,160,142.1);
	this.flat5_room_4_btn_2._off = true;
	new cjs.ButtonHelper(this.flat5_room_4_btn_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat5_room_4_btn_2).wait(39).to({_off:false},0).to({_off:true},1).wait(31));

	// flat5_room_4_picture2
	this.instance_6 = new lib.flat5_room_4_picture2();
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(39).to({_off:false},0).to({_off:true},1).wait(31));

	// flat5_room_4_btn_1
	this.flat5_room_4_btn_1 = new lib.flat5_room_4_btn_1();
	this.flat5_room_4_btn_1.setTransform(285.5,507.6,1,1,0,0,0,221.5,221.5);
	this.flat5_room_4_btn_1._off = true;
	new cjs.ButtonHelper(this.flat5_room_4_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat5_room_4_btn_1).wait(34).to({_off:false},0).to({_off:true},1).wait(36));

	// flat5_room_4_picture1
	this.instance_7 = new lib.flat5_room_4_picture1();
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(34).to({_off:false},0).to({_off:true},1).wait(36));

	// flat5_room_3_btn_2
	this.flat5_room_3_btn_2 = new lib.flat5_room_3_btn_2();
	this.flat5_room_3_btn_2.setTransform(619.1,384,1,1,0,0,0,171.1,320);
	this.flat5_room_3_btn_2._off = true;
	new cjs.ButtonHelper(this.flat5_room_3_btn_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat5_room_3_btn_2).wait(29).to({_off:false},0).to({_off:true},1).wait(41));

	// flat5_room_3_picture2
	this.instance_8 = new lib.flat5_room_3_picture2();
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(29).to({_off:false},0).to({_off:true},1).wait(41));

	// flat5_room_3_btn_1
	this.flat5_room_3_btn_1 = new lib.flat5_room_3_btn_1();
	this.flat5_room_3_btn_1.setTransform(810.1,382,1,1,0,0,0,170.1,342);
	this.flat5_room_3_btn_1._off = true;
	new cjs.ButtonHelper(this.flat5_room_3_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat5_room_3_btn_1).wait(24).to({_off:false},0).to({_off:true},1).wait(46));

	// flat5_room_3_picture1
	this.instance_9 = new lib.flat5_room_3_picture1();
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(24).to({_off:false},0).to({_off:true},1).wait(46));

	// flat5_room_2_btn_3
	this.flat5_room_2_btn_3 = new lib.flat5_room_2_btn_3();
	this.flat5_room_2_btn_3.setTransform(800,384,1,1,0,0,0,160,320);
	this.flat5_room_2_btn_3._off = true;
	new cjs.ButtonHelper(this.flat5_room_2_btn_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat5_room_2_btn_3).wait(19).to({_off:false},0).to({_off:true},1).wait(51));

	// flat5_room_2_picture3
	this.instance_10 = new lib.flat5_room_2_picture3();
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(19).to({_off:false},0).to({_off:true},1).wait(51));

	// flat5_room_2_btn_2
	this.flat5_room_2_btn_2 = new lib.flat5_room_2_btn_2();
	this.flat5_room_2_btn_2.setTransform(844.1,384,1,1,0,0,0,115.9,320);
	this.flat5_room_2_btn_2._off = true;
	new cjs.ButtonHelper(this.flat5_room_2_btn_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat5_room_2_btn_2).wait(14).to({_off:false},0).to({_off:true},1).wait(56));

	// flat5_room_2_picture2
	this.instance_11 = new lib.flat5_room_2_picture2();
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(14).to({_off:false},0).to({_off:true},1).wait(56));

	// flat5_room_2_btn_1
	this.flat5_room_2_btn_1 = new lib.flat5_room_2_btn_1();
	this.flat5_room_2_btn_1.setTransform(276.1,370,1,1,0,0,0,178,178);
	this.flat5_room_2_btn_1._off = true;
	new cjs.ButtonHelper(this.flat5_room_2_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat5_room_2_btn_1).wait(9).to({_off:false},0).to({_off:true},1).wait(61));

	// flat5_room_2_picture1
	this.instance_12 = new lib.flat5_room_2_picture1();
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(9).to({_off:false},0).to({_off:true},1).wait(61));

	// flat5_room_1_btn_1
	this.flat5_room_1_btn_1 = new lib.flat5_room_1_btn_1();
	this.flat5_room_1_btn_1.setTransform(818,258.2,1,1,0,0,0,164.1,210.1);
	this.flat5_room_1_btn_1._off = true;
	new cjs.ButtonHelper(this.flat5_room_1_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat5_room_1_btn_1).wait(4).to({_off:false},0).to({_off:true},1).wait(66));

	// flat5_room_1_picture1
	this.instance_13 = new lib.flat5_room_1_picture1();
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(4).to({_off:false},0).to({_off:true},1).wait(66));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17.6,17.6,29.8,29.8);


(lib.flat4_wrapper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.gotoAndStop(4);
		
		////////// BIND LOCAL TIMELINE TO VARIABLE //////////
		var flat4_timeline = this;
		////////// BIND LOCAL TIMELINE TO VARIABLE //////////
		
		// REMOVE ALL EVENT LISTENERS FUNCTION //
		function clearEventListeners_flat4() {
			flat4_timeline.home_btn_flat4.removeEventListener("click", home_btn_flat4.bind(this));
			flat4_timeline.home_btn_flat4.removeEventListener("mouseover", home_btn_flat4Opacity.bind(this));
			flat4_timeline.home_btn_flat4.removeEventListener("mouseout", home_btn_flat4OpacityOut.bind(this));
			flat4_timeline.flat4_room_1_btn_1.removeEventListener("click", flat4_room_1_btn_1.bind(this));
			flat4_timeline.flat4_room_2_btn_1.removeEventListener("click", flat4_room_2_btn_1.bind(this));
			flat4_timeline.flat4_room_2_btn_2.removeEventListener("click", flat4_room_2_btn_2.bind(this));
			flat4_timeline.flat4_room_2_btn_3.removeEventListener("click", flat4_room_2_btn_3.bind(this));
			flat4_timeline.flat4_room_2_btn_4.removeEventListener("click", flat4_room_2_btn_4.bind(this));
			flat4_timeline.flat4_room_3_btn_1.removeEventListener("click", flat4_room_3_btn_1.bind(this));
			flat4_timeline.flat4_room_3_btn_2.removeEventListener("click", flat4_room_3_btn_2.bind(this));
			flat4_timeline.flat4_room_4_btn_1.removeEventListener("click", flat4_room_4_btn_1.bind(this));
			flat4_timeline.flat4_room_4_btn_2.removeEventListener("click", flat4_room_4_btn_2.bind(this));
			flat4_timeline.flat4_room_4_btn_3.removeEventListener("click", flat4_room_4_btn_3.bind(this));
			flat4_timeline.flat4_room_4_btn_4.removeEventListener("click", flat4_room_4_btn_4.bind(this));
			flat4_timeline.flat4_room_5_btn_1.removeEventListener("click", flat4_room_5_btn_1.bind(this));
			flat4_timeline.flat4_room_6_btn_1.removeEventListener("click", flat4_room_6_btn_1.bind(this));
		}
		
		// ROOM TONE PLAY//
		roomtone.play();
		// END ROOM TONE PLAY//
		
		// DINNER PLAY//
		dinnerFilter.frequency.value = 0;
		dinner.play();
		// END DINNER PLAY//
		
		
		////////// HOME BUTTON //////////
		
		this.home_btn_flat4.addEventListener("click", home_btn_flat4.bind(this));
		
		function home_btn_flat4()
		{
			// STOP ROOM TONE //
			roomtone.pause();
			roomtone.currentTime = 0;
			// STOP DINNER //
			dinner.pause();
			dinner.currentTime = 0;
			// GO OUTSIDE //
			exportRoot.animate();
			setTimeout(function() { exportRoot.wrapper.gotoAndStop(0); }, 500);
			// CLEAR TIMEOUTS //
			clearTimeouts_flat4();
			// CLEAR EVENTLISTENERS //
			clearEventListeners_flat4();
		}
		
		////////// HOME BUTTON //////////
		
		////////// HOME BUTTON ALPHA EFFECT //////////
		
		this.home_btn_flat4.alpha = 0.35;
		
		this.home_btn_flat4.addEventListener("mouseover", home_btn_flat4Opacity.bind(this));
		function home_btn_flat4Opacity()
		{
			this.home_btn_flat4.alpha = 0.5;
		}
		this.home_btn_flat4.addEventListener("mouseout", home_btn_flat4OpacityOut.bind(this));
		function home_btn_flat4OpacityOut()
		{
			this.home_btn_flat4.alpha = 0.35;
		}
		
		////////// END HOME BUTTON ALPHA EFFECT //////////
		
		////////// FLAT 2 BUTTONS //////////
		
		this.flat4_room_1_btn_1.addEventListener("click", flat4_room_1_btn_1.bind(this));
		
		function flat4_room_1_btn_1()
		{
			dinnerFilter.frequency.value = 15000;
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat4.push(setTimeout(function() { flat4_timeline.gotoAndStop(9); }, 500));
		}
		
		this.flat4_room_2_btn_1.addEventListener("click", flat4_room_2_btn_1.bind(this));
		
		function flat4_room_2_btn_1()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat4.push(setTimeout(function() { flat4_timeline.gotoAndStop(14); }, 500));
		}
		
		this.flat4_room_2_btn_2.addEventListener("click", flat4_room_2_btn_2.bind(this));
		
		function flat4_room_2_btn_2()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat4.push(setTimeout(function() { flat4_timeline.gotoAndStop(19); }, 500));
		}
		
		this.flat4_room_2_btn_3.addEventListener("click", flat4_room_2_btn_3.bind(this));
		
		function flat4_room_2_btn_3()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat4.push(setTimeout(function() { flat4_timeline.gotoAndStop(24); }, 500));
		}
		
		this.flat4_room_2_btn_4.addEventListener("click", flat4_room_2_btn_4.bind(this));
		
		function flat4_room_2_btn_4()
		{
			dinnerFilter.frequency.value = 200;
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat4.push(setTimeout(function() { flat4_timeline.gotoAndStop(29); }, 500));
		}
		
		this.flat4_room_3_btn_1.addEventListener("click", flat4_room_3_btn_1.bind(this));
		
		function flat4_room_3_btn_1()
		{
			dinnerFilter.frequency.value = 0;
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat4.push(setTimeout(function() { flat4_timeline.gotoAndStop(34); }, 500));
		}
		
		this.flat4_room_3_btn_2.addEventListener("click", flat4_room_3_btn_2.bind(this));
		
		function flat4_room_3_btn_2()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat4.push(setTimeout(function() { flat4_timeline.gotoAndStop(59); }, 500));
		}
		
		this.flat4_room_4_btn_1.addEventListener("click", flat4_room_4_btn_1.bind(this));
		
		function flat4_room_4_btn_1()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat4.push(setTimeout(function() { flat4_timeline.gotoAndStop(39); }, 500));
		}
		
		this.flat4_room_4_btn_2.addEventListener("click", flat4_room_4_btn_2.bind(this));
		
		function flat4_room_4_btn_2()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat4.push(setTimeout(function() { flat4_timeline.gotoAndStop(44); }, 500));
		}
		
		this.flat4_room_4_btn_3.addEventListener("click", flat4_room_4_btn_3.bind(this));
		
		function flat4_room_4_btn_3()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat4.push(setTimeout(function() { flat4_timeline.gotoAndStop(49); }, 500));
		}
		
		this.flat4_room_4_btn_4.addEventListener("click", flat4_room_4_btn_4.bind(this));
		
		function flat4_room_4_btn_4()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat4.push(setTimeout(function() { flat4_timeline.gotoAndStop(54); }, 500));
		}
		
		this.flat4_room_5_btn_1.addEventListener("click", flat4_room_5_btn_1.bind(this));
		
		function flat4_room_5_btn_1()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat4.push(setTimeout(function() { flat4_timeline.gotoAndStop(59); }, 500));
		}
		
		// exit button //
		
		this.flat4_room_6_btn_1.addEventListener("click", flat4_room_6_btn_1.bind(this));
		
		function flat4_room_6_btn_1()
		{
			// STOP ROOM TONE //
			roomtone.pause();
			roomtone.currentTime = 0;
			// STOP DINNER //
			dinner.pause();
			dinner.currentTime = 0;
			// GO OUTSIDE //
			exportRoot.animate();
			setTimeout(function() { exportRoot.wrapper.gotoAndStop(0); }, 500);
			// CLEAR TIMEOUTS //
			clearTimeouts_flat4();
			// CLEAR EVENTLISTENERS //
			clearEventListeners_flat4();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(60));

	// home_btn
	this.home_btn_flat4 = new lib.home_btn();
	this.home_btn_flat4.setTransform(32.6,32.6,0.958,0.958,0,0,0,13.1,13.1);
	new cjs.ButtonHelper(this.home_btn_flat4, 0, 1, 2, false, new lib.home_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.home_btn_flat4).wait(60));

	// flat4_room_6_btn_1
	this.flat4_room_6_btn_1 = new lib.flat4_room_6_btn_1();
	this.flat4_room_6_btn_1.setTransform(832,194.1,1,1,0,0,0,64,102);
	this.flat4_room_6_btn_1._off = true;
	new cjs.ButtonHelper(this.flat4_room_6_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat4_room_6_btn_1).wait(59).to({_off:false},0).wait(1));

	// flat4_room_6_picture1
	this.instance = new lib.flat4_room_6_picture1();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:false},0).wait(1));

	// flat4_room_5_btn_1
	this.flat4_room_5_btn_1 = new lib.flat4_room_5_btn_1();
	this.flat4_room_5_btn_1.setTransform(595.1,416,1,1,0,0,0,44.9,96);
	this.flat4_room_5_btn_1._off = true;
	new cjs.ButtonHelper(this.flat4_room_5_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat4_room_5_btn_1).wait(54).to({_off:false},0).to({_off:true},1).wait(5));

	// flat4_room_5_picture1
	this.instance_1 = new lib.flat4_room_5_picture1();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(54).to({_off:false},0).to({_off:true},1).wait(5));

	// flat4_room_4_btn_4
	this.flat4_room_4_btn_4 = new lib.flat4_room_4_btn_4();
	this.flat4_room_4_btn_4.setTransform(704,462.1,1,1,0,0,0,128,242);
	this.flat4_room_4_btn_4._off = true;
	new cjs.ButtonHelper(this.flat4_room_4_btn_4, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat4_room_4_btn_4).wait(49).to({_off:false},0).to({_off:true},1).wait(10));

	// flat4_room_4_picture4
	this.instance_2 = new lib.flat4_room_4_picture4();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(49).to({_off:false},0).to({_off:true},1).wait(10));

	// flat4_room_4_btn_3
	this.flat4_room_4_btn_3 = new lib.flat4_room_4_btn_3();
	this.flat4_room_4_btn_3.setTransform(847.2,581.2,1,1,0,0,0,107,107);
	this.flat4_room_4_btn_3._off = true;
	new cjs.ButtonHelper(this.flat4_room_4_btn_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat4_room_4_btn_3).wait(44).to({_off:false},0).to({_off:true},1).wait(15));

	// flat4_room_4_picture3
	this.instance_3 = new lib.flat4_room_4_picture3();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(44).to({_off:false},0).to({_off:true},1).wait(15));

	// flat4_room_4_btn_2
	this.flat4_room_4_btn_2 = new lib.flat4_room_4_btn_2();
	this.flat4_room_4_btn_2.setTransform(864,569.2,1,1,0,0,0,96,159.1);
	this.flat4_room_4_btn_2._off = true;
	new cjs.ButtonHelper(this.flat4_room_4_btn_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat4_room_4_btn_2).wait(39).to({_off:false},0).to({_off:true},1).wait(20));

	// flat4_room_4_picture2
	this.instance_4 = new lib.flat4_room_4_picture2();
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(39).to({_off:false},0).to({_off:true},1).wait(20));

	// flat4_room_4_btn_1
	this.flat4_room_4_btn_1 = new lib.flat4_room_4_btn_1();
	this.flat4_room_4_btn_1.setTransform(545.2,370,1,1,0,0,0,185.1,288);
	this.flat4_room_4_btn_1._off = true;
	new cjs.ButtonHelper(this.flat4_room_4_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat4_room_4_btn_1).wait(34).to({_off:false},0).to({_off:true},1).wait(25));

	// flat4_room_4_picture1
	this.instance_5 = new lib.flat4_room_4_picture1();
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(34).to({_off:false},0).to({_off:true},1).wait(25));

	// flat4_room_3_btn_2
	this.flat4_room_3_btn_2 = new lib.flat4_room_3_btn_2();
	this.flat4_room_3_btn_2.setTransform(602.2,465.1,1,1,0,0,0,66,175);
	this.flat4_room_3_btn_2._off = true;
	new cjs.ButtonHelper(this.flat4_room_3_btn_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat4_room_3_btn_2).wait(29).to({_off:false},0).to({_off:true},1).wait(30));

	// flat4_room_3_btn_1
	this.flat4_room_3_btn_1 = new lib.flat4_room_3_btn_1();
	this.flat4_room_3_btn_1.setTransform(245,370,1,1,0,0,0,117,288);
	this.flat4_room_3_btn_1._off = true;
	new cjs.ButtonHelper(this.flat4_room_3_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat4_room_3_btn_1).wait(29).to({_off:false},0).to({_off:true},1).wait(30));

	// flat4_room_3_picture1
	this.instance_6 = new lib.flat4_room_3_picture1();
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(29).to({_off:false},0).to({_off:true},1).wait(30));

	// flat4_room2_btn_4
	this.flat4_room_2_btn_4 = new lib.flat4_room_2_btn_4();
	this.flat4_room_2_btn_4.setTransform(534,384.1,1,1,0,0,0,224,304.1);
	this.flat4_room_2_btn_4._off = true;
	new cjs.ButtonHelper(this.flat4_room_2_btn_4, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat4_room_2_btn_4).wait(24).to({_off:false},0).to({_off:true},1).wait(35));

	// flat4_room_2_picture4
	this.instance_7 = new lib.flat4_room_2_picture4();
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(24).to({_off:false},0).to({_off:true},1).wait(35));

	// flat4_room_2_btn_3
	this.flat4_room_2_btn_3 = new lib.flat4_room_2_btn_3();
	this.flat4_room_2_btn_3.setTransform(766.2,306.1,1,1,0,0,0,94,142);
	this.flat4_room_2_btn_3._off = true;
	new cjs.ButtonHelper(this.flat4_room_2_btn_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat4_room_2_btn_3).wait(19).to({_off:false},0).to({_off:true},1).wait(40));

	// flat4_room_2_picture3
	this.instance_8 = new lib.flat4_room_2_picture3();
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(19).to({_off:false},0).to({_off:true},1).wait(40));

	// flat4_room_2_btn_2
	this.flat4_room_2_btn_2 = new lib.flat4_room_2_btn_2();
	this.flat4_room_2_btn_2.setTransform(660,192,1,1,0,0,0,299.9,128);
	this.flat4_room_2_btn_2._off = true;
	new cjs.ButtonHelper(this.flat4_room_2_btn_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat4_room_2_btn_2).wait(14).to({_off:false},0).to({_off:true},1).wait(45));

	// flat4_room_2_picture2
	this.instance_9 = new lib.flat4_room_2_picture2();
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(14).to({_off:false},0).to({_off:true},1).wait(45));

	// flat4_room_2_btn_1
	this.flat4_room_2_btn_1 = new lib.flat4_room_2_btn_1();
	this.flat4_room_2_btn_1.setTransform(640,512,1,1,0,0,0,256,128);
	this.flat4_room_2_btn_1._off = true;
	new cjs.ButtonHelper(this.flat4_room_2_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat4_room_2_btn_1).wait(9).to({_off:false},0).to({_off:true},1).wait(50));

	// flat4_room_2_picture1
	this.instance_10 = new lib.flat4_room_2_picture1();
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(9).to({_off:false},0).to({_off:true},1).wait(50));

	// flat4_room_1_btn_1
	this.flat4_room_1_btn_1 = new lib.flat4_room_1_btn_1();
	this.flat4_room_1_btn_1.setTransform(563.1,402.1,1,1,0,0,0,76.9,210.1);
	this.flat4_room_1_btn_1._off = true;
	new cjs.ButtonHelper(this.flat4_room_1_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat4_room_1_btn_1).wait(4).to({_off:false},0).to({_off:true},1).wait(55));

	// flat4_room_1_picture1
	this.instance_11 = new lib.flat4_room_1_picture1();
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(4).to({_off:false},0).to({_off:true},1).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17.6,17.6,29.8,29.8);


(lib.flat3_wrapper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.gotoAndStop(4);
		
		////////// BIND LOCAL TIMELINE TO VARIABLE //////////
		var flat3_timeline = this;
		////////// BIND LOCAL TIMELINE TO VARIABLE //////////
		
		// REMOVE ALL EVENT LISTENERS FUNCTION //
		function clearEventListeners_flat3() {
			flat3_timeline.home_btn_flat3.removeEventListener("click", home_btn_flat3.bind(this));
			flat3_timeline.home_btn_flat3.removeEventListener("mouseover", home_btn_flat3Opacity.bind(this));
			flat3_timeline.home_btn_flat3.removeEventListener("mouseout", home_btn_flat3OpacityOut.bind(this));
			flat3_timeline.flat3_room_1_btn_1.removeEventListener("click", flat3_room_1_btn_1.bind(this));
			flat3_timeline.flat3_room_1_btn_2.removeEventListener("click", flat3_room_1_btn_2.bind(this));
			flat3_timeline.flat3_room_1_btn_3.removeEventListener("click", flat3_room_1_btn_3.bind(this));
			flat3_timeline.flat3_room_1_btn_4.removeEventListener("click", flat3_room_1_btn_4.bind(this));
			flat3_timeline.flat3_room_2_btn_1.removeEventListener("click", flat3_room_2_btn_1.bind(this));
			flat3_timeline.flat3_room_3_btn_1.removeEventListener("click", flat3_room_3_btn_1.bind(this));
			flat3_timeline.flat3_room_3_btn_2.removeEventListener("click", flat3_room_3_btn_2.bind(this));
			flat3_timeline.flat3_room_4_btn_1.removeEventListener("click", flat3_room_4_btn_1.bind(this));
			flat3_timeline.flat3_room_4_btn_2.removeEventListener("click", flat3_room_4_btn_2.bind(this));
			flat3_timeline.flat3_room_4_btn_3.removeEventListener("click", flat3_room_4_btn_3.bind(this));
			flat3_timeline.flat3_room_4_btn_4.removeEventListener("click", flat3_room_4_btn_4.bind(this));
			flat3_timeline.flat3_room_5_btn_1.removeEventListener("click", flat3_room_5_btn_1.bind(this));
			flat3_timeline.flat3_room_6_btn_1.removeEventListener("click", flat3_room_6_btn_1.bind(this));
			flat3_timeline.flat3_room_6_btn_2.removeEventListener("click", flat3_room_6_btn_2.bind(this));
		}
		
		// STOP SPEECH FUNCTION //
		function stopSpeech_flat3() {
			flat3_sound_1.pause();
			flat3_sound_1.currentTime = 0;
			flat3_sound_2.pause();
			flat3_sound_2.currentTime = 0;
			flat3_sound_3.pause();
			flat3_sound_3.currentTime = 0;
			flat3_sound_4.pause();
			flat3_sound_4.currentTime = 0;
			flat3_sound_5.pause();
			flat3_sound_5.currentTime = 0;
			flat3_sound_6.pause();
			flat3_sound_6.currentTime = 0;
			flat3_sound_7.pause();
			flat3_sound_7.currentTime = 0;
			flat3_sound_8.pause();
			flat3_sound_8.currentTime = 0;
		}
		
		// WALK PLAY//
		walk.play();
		walkFilter.frequency.value = 20000;
		// END WALK PLAY//
		
		////////// HOME BUTTON //////////
		
		this.home_btn_flat3.addEventListener("click", home_btn_flat3.bind(this));
		
		function home_btn_flat3()
		{
			// WALK STOP //
			walk.pause();
			walk.currentTime = 0;
			// GO OUTSIDE //
			exportRoot.animate();
			setTimeout(function() { exportRoot.wrapper.gotoAndStop(0); }, 500);
			// STOP SPEECH //
			stopSpeech_flat3();
			// CLEAR TIMEOUTS //
			clearTimeouts_flat3();
			// CLEAR EVENTLISTENERS //
			clearEventListeners_flat3();
		}
		
		////////// HOME BUTTON //////////
		
		////////// HOME BUTTON ALPHA EFFECT //////////
		
		this.home_btn_flat3.alpha = 0.35;
		
		this.home_btn_flat3.addEventListener("mouseover", home_btn_flat3Opacity.bind(this));
		function home_btn_flat3Opacity()
		{
			this.home_btn_flat3.alpha = 0.5;
		}
		this.home_btn_flat3.addEventListener("mouseout", home_btn_flat3OpacityOut.bind(this));
		function home_btn_flat3OpacityOut()
		{
			this.home_btn_flat3.alpha = 0.35;
		}
		
		////////// END HOME BUTTON ALPHA EFFECT //////////
		
		
		////////// FLAT 3 BUTTONS //////////
		
		this.flat3_room_1_btn_1.addEventListener("click", flat3_room_1_btn_1.bind(this));
		
		function flat3_room_1_btn_1()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat3.push(setTimeout(function() { flat3_timeline.gotoAndStop(9); }, 500));
			timeouts_flat3.push(setTimeout(function(){ flat3_sound_1.play(); }, 1000));
		}
		
		this.flat3_room_1_btn_2.addEventListener("click", flat3_room_1_btn_2.bind(this));
		
		function flat3_room_1_btn_2()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat3.push(setTimeout(function() { flat3_timeline.gotoAndStop(14); }, 500));
			flat3_sound_1.pause();
			flat3_sound_1.currentTime = 0;
			timeouts_flat3.push(setTimeout(function(){ flat3_sound_2.play(); }, 2000));
		}
		
		this.flat3_room_1_btn_3.addEventListener("click", flat3_room_1_btn_3.bind(this));
		
		function flat3_room_1_btn_3()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat3.push(setTimeout(function() { flat3_timeline.gotoAndStop(19); }, 500));
		}
		
		this.flat3_room_1_btn_4.addEventListener("click", flat3_room_1_btn_4.bind(this));
		
		function flat3_room_1_btn_4()
		{
			walkFilter.frequency.value = 1000;
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat3.push(setTimeout(function() { flat3_timeline.gotoAndStop(24); }, 500));
			flat3_sound_2.pause();
			flat3_sound_2.currentTime = 0;
			timeouts_flat3.push(setTimeout(function(){ flat3_sound_3.play(); }, 1000));
		}
		
		this.flat3_room_2_btn_1.addEventListener("click", flat3_room_2_btn_1.bind(this));
		
		function flat3_room_2_btn_1()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat3.push(setTimeout(function() { flat3_timeline.gotoAndStop(29); }, 500));
			flat3_sound_3.pause();
			flat3_sound_3.currentTime = 0;
			timeouts_flat3.push(setTimeout(function(){ flat3_sound_4.play(); }, 3000));
		}
		
		this.flat3_room_3_btn_1.addEventListener("click", flat3_room_3_btn_1.bind(this));
		
		function flat3_room_3_btn_1()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat3.push(setTimeout(function() { flat3_timeline.gotoAndStop(34); }, 500));
			flat3_sound_4.pause();
			flat3_sound_4.currentTime = 0;
			timeouts_flat3.push(setTimeout(function(){ flat3_sound_5.play(); }, 1000));
		}
		
		this.flat3_room_3_btn_2.addEventListener("click", flat3_room_3_btn_2.bind(this));
		
		function flat3_room_3_btn_2()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat3.push(setTimeout(function() { flat3_timeline.gotoAndStop(39); }, 500));
			flat3_sound_5.pause();
			flat3_sound_5.currentTime = 0;
			timeouts_flat3.push(setTimeout(function(){ flat3_sound_6.play(); }, 2000));
		}
		
		this.flat3_room_4_btn_1.addEventListener("click", flat3_room_4_btn_1.bind(this));
		
		function flat3_room_4_btn_1()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat3.push(setTimeout(function() { flat3_timeline.gotoAndStop(44); }, 500));
		}
		
		this.flat3_room_4_btn_2.addEventListener("click", flat3_room_4_btn_2.bind(this));
		
		function flat3_room_4_btn_2()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat3.push(setTimeout(function() { flat3_timeline.gotoAndStop(49); }, 500));
			flat3_sound_6.pause();
			flat3_sound_6.currentTime = 0;
			timeouts_flat3.push(setTimeout(function(){ flat3_sound_7.play(); }, 1000));
		}
		
		this.flat3_room_4_btn_3.addEventListener("click", flat3_room_4_btn_3.bind(this));
		
		function flat3_room_4_btn_3()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat3.push(setTimeout(function() { flat3_timeline.gotoAndStop(54); }, 500));
		}
		
		this.flat3_room_4_btn_4.addEventListener("click", flat3_room_4_btn_4.bind(this));
		
		function flat3_room_4_btn_4()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat3.push(setTimeout(function() { flat3_timeline.gotoAndStop(59); }, 500));
		}
		
		this.flat3_room_5_btn_1.addEventListener("click", flat3_room_5_btn_1.bind(this));
		
		function flat3_room_5_btn_1()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat3.push(setTimeout(function() { flat3_timeline.gotoAndStop(64); }, 500));
			flat3_sound_7.pause();
			flat3_sound_7.currentTime = 0;
			timeouts_flat3.push(setTimeout(function(){ flat3_sound_8.play(); }, 1000));
		}
		
		this.flat3_room_6_btn_1.addEventListener("click", flat3_room_6_btn_1.bind(this));
		
		function flat3_room_6_btn_1()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat3.push(setTimeout(function() { flat3_timeline.gotoAndStop(69); }, 500));
		}
		
		// exit button //
		
		this.flat3_room_6_btn_2.addEventListener("click", flat3_room_6_btn_2.bind(this));
		
		function flat3_room_6_btn_2()
		{
			// WALK STOP //
			walk.pause();
			walk.currentTime = 0;
			// GO OUTSIDE //
			exportRoot.animate();
			setTimeout(function() { exportRoot.wrapper.gotoAndStop(0); }, 500);
			// STOP SPEECH //
			stopSpeech_flat3();
			// CLEAR TIMEOUTS //
			clearTimeouts_flat3();
			// CLEAR EVENTLISTENERS //
			clearEventListeners_flat3();
		}
		
		
		
		////////// END FLAT 3 BUTTONS //////////
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(70));

	// home_btn
	this.home_btn_flat3 = new lib.home_btn();
	this.home_btn_flat3.setTransform(32.6,32.6,0.958,0.958,0,0,0,13.1,13.1);
	new cjs.ButtonHelper(this.home_btn_flat3, 0, 1, 2, false, new lib.home_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.home_btn_flat3).wait(70));

	// flat3_room_6_btn_2
	this.flat3_room_6_btn_2 = new lib.flat3_room_6_btn_2();
	this.flat3_room_6_btn_2.setTransform(560.1,352,1,1,0,0,0,368.1,288);
	this.flat3_room_6_btn_2._off = true;
	new cjs.ButtonHelper(this.flat3_room_6_btn_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat3_room_6_btn_2).wait(69).to({_off:false},0).wait(1));

	// flat3_room_6_picture2
	this.instance = new lib.flat3_room_6_picture2();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(69).to({_off:false},0).wait(1));

	// flat3_room_6_btn_1
	this.flat3_room_6_btn_1 = new lib.flat3_room_6_btn_1();
	this.flat3_room_6_btn_1.setTransform(635,271.1,1,1,0,0,0,187,187);
	this.flat3_room_6_btn_1._off = true;
	new cjs.ButtonHelper(this.flat3_room_6_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat3_room_6_btn_1).wait(64).to({_off:false},0).to({_off:true},1).wait(5));

	// flat3_room_6_picture1
	this.instance_1 = new lib.flat3_room_6_picture1();
	this.instance_1.setTransform(0.2,1.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(64).to({_off:false},0).to({_off:true},1).wait(5));

	// flat3_room_5_btn_1
	this.flat3_room_5_btn_1 = new lib.flat3_room_5_btn_1();
	this.flat3_room_5_btn_1.setTransform(256,374.1,1,1,0,0,0,128,352.1);
	this.flat3_room_5_btn_1._off = true;
	new cjs.ButtonHelper(this.flat3_room_5_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat3_room_5_btn_1).wait(59).to({_off:false},0).to({_off:true},1).wait(10));

	// flat3_room_5_picture1
	this.instance_2 = new lib.flat3_room_5_picture1();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({_off:false},0).to({_off:true},1).wait(10));

	// flat3_room_4_btn_4
	this.flat3_room_4_btn_4 = new lib.flat3_room_4_btn_4();
	this.flat3_room_4_btn_4.setTransform(662.5,396.4,1,1,0,0,0,312.4,312.4);
	this.flat3_room_4_btn_4._off = true;
	new cjs.ButtonHelper(this.flat3_room_4_btn_4, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat3_room_4_btn_4).wait(54).to({_off:false},0).to({_off:true},1).wait(15));

	// flat3_room_4_picture4
	this.instance_3 = new lib.flat3_room_4_picture4();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(54).to({_off:false},0).to({_off:true},1).wait(15));

	// flat3_room_4_btn_3
	this.flat3_room_4_btn_3 = new lib.flat3_room_4_btn_3();
	this.flat3_room_4_btn_3.setTransform(320,522.1,1,1,0,0,0,256,182);
	this.flat3_room_4_btn_3._off = true;
	new cjs.ButtonHelper(this.flat3_room_4_btn_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat3_room_4_btn_3).wait(49).to({_off:false},0).to({_off:true},1).wait(20));

	// flat3_room_4_picture3
	this.instance_4 = new lib.flat3_room_4_picture3();
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(49).to({_off:false},0).to({_off:true},1).wait(20));

	// flat3_room_4_btn_2
	this.flat3_room_4_btn_2 = new lib.flat3_room_4_btn_2();
	this.flat3_room_4_btn_2.setTransform(704,512,1,1,0,0,0,192,192);
	this.flat3_room_4_btn_2._off = true;
	new cjs.ButtonHelper(this.flat3_room_4_btn_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat3_room_4_btn_2).wait(44).to({_off:false},0).to({_off:true},1).wait(25));

	// flat3_room_4_picture2
	this.instance_5 = new lib.flat3_room_4_picture2();
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(44).to({_off:false},0).to({_off:true},1).wait(25));

	// flat3_room_4_btn_1
	this.flat3_room_4_btn_1 = new lib.flat3_room_4_btn_1();
	this.flat3_room_4_btn_1.setTransform(529.1,379.1,1,1,0,0,0,401.1,303.1);
	this.flat3_room_4_btn_1._off = true;
	new cjs.ButtonHelper(this.flat3_room_4_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat3_room_4_btn_1).wait(39).to({_off:false},0).to({_off:true},1).wait(30));

	// flat3_room_4_picture1
	this.instance_6 = new lib.flat3_room_4_picture1();
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(39).to({_off:false},0).to({_off:true},1).wait(30));

	// flat3_room_3_btn_2
	this.flat3_room_3_btn_2 = new lib.flat3_room_3_btn_2();
	this.flat3_room_3_btn_2.setTransform(640,394.1,1,1,0,0,0,128,330.1);
	this.flat3_room_3_btn_2._off = true;
	new cjs.ButtonHelper(this.flat3_room_3_btn_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat3_room_3_btn_2).wait(34).to({_off:false},0).to({_off:true},1).wait(35));

	// flat3_room_3_picture2
	this.instance_7 = new lib.flat3_room_3_picture2();
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(34).to({_off:false},0).to({_off:true},1).wait(35));

	// flat3_room_3_btn_1
	this.flat3_room_3_btn_1 = new lib.flat3_room_3_btn_1();
	this.flat3_room_3_btn_1.setTransform(767.3,547.2,1,1,0,0,0,219.1,185.1);
	this.flat3_room_3_btn_1._off = true;
	new cjs.ButtonHelper(this.flat3_room_3_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat3_room_3_btn_1).wait(29).to({_off:false},0).to({_off:true},1).wait(40));

	// flat3_room_3_picture1
	this.instance_8 = new lib.flat3_room_3_picture1();
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(29).to({_off:false},0).to({_off:true},1).wait(40));

	// flat3_room_2_btn_1
	this.flat3_room_2_btn_1 = new lib.flat3_room_2_btn_1();
	this.flat3_room_2_btn_1.setTransform(640,448,1,1,0,0,0,128,256);
	this.flat3_room_2_btn_1._off = true;
	new cjs.ButtonHelper(this.flat3_room_2_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat3_room_2_btn_1).wait(24).to({_off:false},0).to({_off:true},1).wait(45));

	// flat3_room_2_picture1
	this.instance_9 = new lib.flat3_room_2_picture1();
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(24).to({_off:false},0).to({_off:true},1).wait(45));

	// flat3_room_1_btn_4
	this.flat3_room_1_btn_4 = new lib.flat3_room_1_btn_4();
	this.flat3_room_1_btn_4.setTransform(700,427.1,1,1,0,0,0,128,299.1);
	this.flat3_room_1_btn_4._off = true;
	new cjs.ButtonHelper(this.flat3_room_1_btn_4, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat3_room_1_btn_4).wait(19).to({_off:false},0).to({_off:true},1).wait(50));

	// flat3_room_1_picture4
	this.instance_10 = new lib.flat3_room_1_picture4();
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(19).to({_off:false},0).to({_off:true},1).wait(50));

	// flat3_room_1_btn_3
	this.flat3_room_1_btn_3 = new lib.flat3_room_1_btn_3();
	this.flat3_room_1_btn_3.setTransform(256,377.2,1,1,0,0,0,192,289.1);
	this.flat3_room_1_btn_3._off = true;
	new cjs.ButtonHelper(this.flat3_room_1_btn_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat3_room_1_btn_3).wait(14).to({_off:false},0).to({_off:true},1).wait(55));

	// flat3_room_1_picture3
	this.instance_11 = new lib.flat3_room_1_picture3();
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(14).to({_off:false},0).to({_off:true},1).wait(55));

	// flat3_room_1_btn_2
	this.flat3_room_1_btn_2 = new lib.flat3_room_1_btn_2();
	this.flat3_room_1_btn_2.setTransform(202.1,384,1,1,0,0,0,138.1,320);
	this.flat3_room_1_btn_2._off = true;
	new cjs.ButtonHelper(this.flat3_room_1_btn_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat3_room_1_btn_2).wait(9).to({_off:false},0).to({_off:true},1).wait(60));

	// flat3_room_1_picture2
	this.instance_12 = new lib.flat3_room_1_picture2();
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(9).to({_off:false},0).to({_off:true},1).wait(60));

	// flat3_room_1_btn_1
	this.flat3_room_1_btn_1 = new lib.flat3_room_1_btn_1();
	this.flat3_room_1_btn_1.setTransform(800,365.1,1,1,0,0,0,160,173.1);
	this.flat3_room_1_btn_1._off = true;
	new cjs.ButtonHelper(this.flat3_room_1_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat3_room_1_btn_1).wait(4).to({_off:false},0).to({_off:true},1).wait(65));

	// flat3_room_1_picture1
	this.instance_13 = new lib.flat3_room_1_picture1();
	this.instance_13.setTransform(0.2,1.1);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(4).to({_off:false},0).to({_off:true},1).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17.6,17.6,29.8,29.8);


(lib.flat2_wrapper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.gotoAndStop(4);
		
		////////// BIND LOCAL TIMELINE TO VARIABLE //////////
		var flat2_timeline = this;
		////////// BIND LOCAL TIMELINE TO VARIABLE //////////
		
		// REMOVE ALL EVENT LISTENERS FUNCTION //
		function clearEventListeners_flat2() {
			flat2_timeline.home_btn_flat2.removeEventListener("click", home_btn_flat2.bind(this));
			flat2_timeline.home_btn_flat2.removeEventListener("mouseover", home_btn_flat2Opacity.bind(this));
			flat2_timeline.home_btn_flat2.removeEventListener("mouseout", home_btn_flat2OpacityOut.bind(this));
			flat2_timeline.flat2_room_1_btn_1.removeEventListener("click", flat2_room_1_btn_1.bind(this));
			flat2_timeline.flat2_room_2_btn_1.removeEventListener("click", flat2_room_2_btn_1.bind(this));
			flat2_timeline.flat2_room_3_btn_1.removeEventListener("click", flat2_room_3_btn_1.bind(this));
			flat2_timeline.flat2_room_3_btn_2.removeEventListener("click", flat2_room_3_btn_2.bind(this));
			flat2_timeline.flat2_room_4_btn_1.removeEventListener("click", flat2_room_4_btn_1.bind(this));
			flat2_timeline.flat2_room_4_btn_2.removeEventListener("click", flat2_room_4_btn_2.bind(this));
			flat2_timeline.flat2_room_5_btn_1.removeEventListener("click", flat2_room_5_btn_1.bind(this));
			flat2_timeline.flat2_room_5_btn_2.removeEventListener("click", flat2_room_5_btn_2.bind(this));
		}
		
		// STOP SPEECH FUNCTION //
		function stopSpeech_flat2() {
			flat2_sound_1.pause();
			flat2_sound_1.currentTime = 0;
			flat2_sound_2.pause();
			flat2_sound_2.currentTime = 0;
			flat2_sound_3.pause();
			flat2_sound_3.currentTime = 0;
			flat2_sound_4.pause();
			flat2_sound_4.currentTime = 0;
			flat2_sound_5.pause();
			flat2_sound_5.currentTime = 0;
			flat2_sound_6.pause();
			flat2_sound_6.currentTime = 0;
			flat2_sound_7.pause();
			flat2_sound_7.currentTime = 0;
		}
		
		// ROOM TONE PLAY//
		roomtone.play();
		// END ROOM TONE PLAY//
		
		// SLEEP PLAY//
		sleepFilter.frequency.value = 0;
		sleep.play();
		// END SLEEP PLAY//
		
		////////// HOME BUTTON //////////
		
		this.home_btn_flat2.addEventListener("click", home_btn_flat2.bind(this));
		
		function home_btn_flat2()
		{
			// STOP ROOM TONE //
			roomtone.pause();
			roomtone.currentTime = 0;
			// STOP SLEEP //
			sleep.pause();
			sleep.currentTime = 0;
			// GO OUTSIDE //
			exportRoot.animate();
			setTimeout(function() { exportRoot.wrapper.gotoAndStop(0); }, 500);
			// STOP SPEECH //
			stopSpeech_flat2();
			// CLEAR TIMEOUTS //
			clearTimeouts_flat2();
			// CLEAR EVENTLISTENERS //
			clearEventListeners_flat2();
		}
		
		////////// HOME BUTTON //////////
		
		////////// HOME BUTTON ALPHA EFFECT //////////
		
		this.home_btn_flat2.alpha = 0.35;
		
		this.home_btn_flat2.addEventListener("mouseover", home_btn_flat2Opacity.bind(this));
		function home_btn_flat2Opacity()
		{
			this.home_btn_flat2.alpha = 0.5;
		}
		this.home_btn_flat2.addEventListener("mouseout", home_btn_flat2OpacityOut.bind(this));
		function home_btn_flat2OpacityOut()
		{
			this.home_btn_flat2.alpha = 0.35;
		}
		
		////////// END HOME BUTTON ALPHA EFFECT //////////
		
		
		////////// FLAT 2 BUTTONS //////////
		
		this.flat2_room_1_btn_1.addEventListener("click", flat2_room_1_btn_1.bind(this));
		
		function flat2_room_1_btn_1()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat2.push(setTimeout(function() { flat2_timeline.gotoAndStop(9); }, 500));
			timeouts_flat2.push(setTimeout(function(){ flat2_sound_1.play(); }, 1000));
		}
		
		this.flat2_room_2_btn_1.addEventListener("click", flat2_room_2_btn_1.bind(this));
		
		function flat2_room_2_btn_1()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat2.push(setTimeout(function() { flat2_timeline.gotoAndStop(14); }, 500));
			flat2_sound_1.pause();
			flat2_sound_1.currentTime = 0;
			timeouts_flat2.push(setTimeout(function(){ flat2_sound_2.play(); }, 2000));
		}
		
		this.flat2_room_3_btn_1.addEventListener("click", flat2_room_3_btn_1.bind(this));
		
		function flat2_room_3_btn_1()
		{
			sleepFilter.frequency.value = 200;
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat2.push(setTimeout(function() { flat2_timeline.gotoAndStop(19); }, 500));
			flat2_sound_2.pause();
			flat2_sound_2.currentTime = 0;
			timeouts_flat2.push(setTimeout(function(){ flat2_sound_3.play(); }, 3000));
		}
		
		this.flat2_room_3_btn_2.addEventListener("click", flat2_room_3_btn_2.bind(this));
		
		function flat2_room_3_btn_2()
		{
			sleepFilter.frequency.value = 1000;
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat2.push(setTimeout(function() { flat2_timeline.gotoAndStop(24); }, 500));
			flat2_sound_3.pause();
			flat2_sound_3.currentTime = 0;
			timeouts_flat2.push(setTimeout(function(){ flat2_sound_4.play(); }, 1000));
		}
		
		this.flat2_room_4_btn_1.addEventListener("click", flat2_room_4_btn_1.bind(this));
		
		function flat2_room_4_btn_1()
		{
			sleepFilter.frequency.value = 10000;
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat2.push(setTimeout(function() { flat2_timeline.gotoAndStop(29); }, 500));
			flat2_sound_4.pause();
			flat2_sound_4.currentTime = 0;
			timeouts_flat2.push(setTimeout(function(){ flat2_sound_5.play(); }, 2000));
		}
		
		this.flat2_room_4_btn_2.addEventListener("click", flat2_room_4_btn_2.bind(this));
		
		function flat2_room_4_btn_2()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat2.push(setTimeout(function() { flat2_timeline.gotoAndStop(34); }, 500));
			sleepFilter.frequency.value = 750;
			flat2_sound_5.pause();
			flat2_sound_5.currentTime = 0;
			timeouts_flat2.push(setTimeout(function(){ flat2_sound_6.play(); }, 3000));
		}
		
		this.flat2_room_5_btn_1.addEventListener("click", flat2_room_5_btn_1.bind(this));
		
		function flat2_room_5_btn_1()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat2.push(setTimeout(function() { flat2_timeline.gotoAndStop(39); }, 500));
			sleepFilter.frequency.value = 250;
			flat2_sound_6.pause();
			flat2_sound_6.currentTime = 0;
			timeouts_flat2.push(setTimeout(function(){ flat2_sound_7.play(); }, 1000));
		}
		
		// exit button //
		
		this.flat2_room_5_btn_2.addEventListener("click", flat2_room_5_btn_2.bind(this));
		
		function flat2_room_5_btn_2()
		{
			// STOP ROOM TONE //
			roomtone.pause();
			roomtone.currentTime = 0;
			// STOP SLEEP //
			sleep.pause();
			sleep.currentTime = 0;
			// GO OUTSIDE //
			exportRoot.animate();
			setTimeout(function() { exportRoot.wrapper.gotoAndStop(0); }, 500);
			// STOP SPEECH //
			stopSpeech_flat2();
			// CLEAR TIMEOUTS //
			clearTimeouts_flat2();
			// CLEAR EVENTLISTENERS //
			clearEventListeners_flat2();
		}
		
		
		
		
		////////// END FLAT 2 BUTTONS //////////
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(40));

	// home_btn
	this.home_btn_flat2 = new lib.home_btn();
	this.home_btn_flat2.setTransform(32.6,32.6,0.958,0.958,0,0,0,13.1,13.1);
	new cjs.ButtonHelper(this.home_btn_flat2, 0, 1, 2, false, new lib.home_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.home_btn_flat2).wait(40));

	// flat2_room_5_btn_2
	this.flat2_room_5_btn_2 = new lib.flat2_room_5_btn_2();
	this.flat2_room_5_btn_2.setTransform(596.1,293.1,1,1,0,0,0,107.9,189);
	this.flat2_room_5_btn_2._off = true;
	new cjs.ButtonHelper(this.flat2_room_5_btn_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat2_room_5_btn_2).wait(39).to({_off:false},0).wait(1));

	// flat2_room_5_picture2
	this.instance = new lib.flat2_room_5_picture2();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).wait(1));

	// flat2_room_5_btn_1
	this.flat2_room_5_btn_1 = new lib.flat2_room_5_btn_1();
	this.flat2_room_5_btn_1.setTransform(177,384,1,1,0,0,0,113,320);
	this.flat2_room_5_btn_1._off = true;
	new cjs.ButtonHelper(this.flat2_room_5_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat2_room_5_btn_1).wait(34).to({_off:false},0).to({_off:true},1).wait(5));

	// flat2_room_5_picture1
	this.instance_1 = new lib.flat2_room_5_picture1();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({_off:false},0).to({_off:true},1).wait(5));

	// flat2_room_4_btn_2
	this.flat2_room_4_btn_2 = new lib.flat2_room_4_btn_2();
	this.flat2_room_4_btn_2.setTransform(160,388,1,1,0,0,0,116,288);
	this.flat2_room_4_btn_2._off = true;
	new cjs.ButtonHelper(this.flat2_room_4_btn_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat2_room_4_btn_2).wait(29).to({_off:false},0).to({_off:true},1).wait(10));

	// flat2_room_4_picture2
	this.instance_2 = new lib.flat2_room_4_picture2();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({_off:false},0).to({_off:true},1).wait(10));

	// flat2_room_4_btn_1
	this.flat2_room_4_btn_1 = new lib.flat2_room_4_btn_1();
	this.flat2_room_4_btn_1.setTransform(800,283.1,1,1,0,0,0,160,197.1);
	this.flat2_room_4_btn_1._off = true;
	new cjs.ButtonHelper(this.flat2_room_4_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat2_room_4_btn_1).wait(24).to({_off:false},0).to({_off:true},1).wait(15));

	// flat2_room_4_picture1
	this.instance_3 = new lib.flat2_room_4_picture1();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24).to({_off:false},0).to({_off:true},1).wait(15));

	// flat2_room_3_btn_2
	this.flat2_room_3_btn_2 = new lib.flat2_room_3_btn_2();
	this.flat2_room_3_btn_2.setTransform(788.1,384,1,1,0,0,0,148.1,320);
	this.flat2_room_3_btn_2._off = true;
	new cjs.ButtonHelper(this.flat2_room_3_btn_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat2_room_3_btn_2).wait(19).to({_off:false},0).to({_off:true},1).wait(20));

	// flat2_room_3_picture2
	this.instance_4 = new lib.flat2_room_3_picture2();
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).to({_off:true},1).wait(20));

	// flat2_room_3_btn_1
	this.flat2_room_3_btn_1 = new lib.flat2_room_3_btn_1();
	this.flat2_room_3_btn_1.setTransform(297.1,363,1,1,0,0,0,275.1,341);
	this.flat2_room_3_btn_1._off = true;
	new cjs.ButtonHelper(this.flat2_room_3_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat2_room_3_btn_1).wait(14).to({_off:false},0).to({_off:true},1).wait(25));

	// flat2_room_3_picture1
	this.instance_5 = new lib.flat2_room_3_picture1();
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({_off:false},0).to({_off:true},1).wait(25));

	// flat2_room_2_btn_1
	this.flat2_room_2_btn_1 = new lib.flat2_room_2_btn_1();
	this.flat2_room_2_btn_1.setTransform(733.2,383.2,1,1,0,0,0,71,225.1);
	this.flat2_room_2_btn_1._off = true;
	new cjs.ButtonHelper(this.flat2_room_2_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat2_room_2_btn_1).wait(9).to({_off:false},0).to({_off:true},1).wait(30));

	// flat2_room_2_picture1
	this.instance_6 = new lib.flat2_room_2_picture1();
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({_off:false},0).to({_off:true},1).wait(30));

	// flat2_room_1_btn_1
	this.flat2_room_1_btn_1 = new lib.flat2_room_1_btn_1();
	this.flat2_room_1_btn_1.setTransform(881.1,371.1,1,1,0,0,0,78.9,205);
	this.flat2_room_1_btn_1._off = true;
	new cjs.ButtonHelper(this.flat2_room_1_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat2_room_1_btn_1).wait(4).to({_off:false},0).to({_off:true},1).wait(35));

	// flat2_room_1_picture1
	this.instance_7 = new lib.flat2_room_1_picture1();
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(4).to({_off:false},0).to({_off:true},1).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17.6,17.6,29.8,29.8);


(lib.flat1_wrapper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.gotoAndStop(4);
		
		////////// BIND LOCAL TIMELINE TO VARIABLE //////////
		var flat1_timeline = this;
		////////// BIND LOCAL TIMELINE TO VARIABLE //////////
		
		// REMOVE ALL EVENT LISTENERS FUNCTION //
		function clearEventListeners_flat1() {
			flat1_timeline.home_btn_flat1.removeEventListener("click", home_btn_flat1.bind(this));
			flat1_timeline.home_btn_flat1.removeEventListener("mouseover", home_btn_flat1Opacity.bind(this));
			flat1_timeline.home_btn_flat1.removeEventListener("mouseout", home_btn_flat1OpacityOut.bind(this));
			flat1_timeline.flat1_room_1_btn_1.removeEventListener("click", flat1_room_1_btn_1.bind(this));
			flat1_timeline.flat1_room_2_btn_1.removeEventListener("click", flat1_room_2_btn_1.bind(this));
			flat1_timeline.flat1_room_2_btn_2.removeEventListener("click", flat1_room_2_btn_2.bind(this));
			flat1_timeline.flat1_room_3_btn_1.removeEventListener("click", flat1_room_3_btn_1.bind(this));
			flat1_timeline.flat1_room_4_btn_1.removeEventListener("click", flat1_room_4_btn_1.bind(this));
			flat1_timeline.flat1_room_4_btn_2.removeEventListener("click", flat1_room_4_btn_2.bind(this));
			flat1_timeline.flat1_room_5_btn_1.removeEventListener("click", flat1_room_5_btn_1.bind(this));
			flat1_timeline.flat1_room_5_btn_2.removeEventListener("click", flat1_room_5_btn_2.bind(this));
			flat1_timeline.flat1_room_5_btn_3.removeEventListener("click", flat1_room_5_btn_3.bind(this));
			flat1_timeline.flat_1_room_6_btn_1.removeEventListener("click", flat_1_room_6_btn_1.bind(this));
			flat1_timeline.flat1_room_6_btn_2.removeEventListener("click", flat1_room_6_btn_2.bind(this));
		}
		
		// STOP SPEECH FUNCTION //
		function stopSpeech_flat1() {
			flat1_sound_1.pause();
			flat1_sound_1.currentTime = 0;
			flat1_sound_2.pause();
			flat1_sound_2.currentTime = 0;
			flat1_sound_3.pause();
			flat1_sound_3.currentTime = 0;
			flat1_sound_4.pause();
			flat1_sound_4.currentTime = 0;
		}
		
		// ROOM TONE PLAY//
		roomtone.play();
		// END ROOM TONE PLAY//
		
		
		////////// HOME BUTTON //////////
		
		this.home_btn_flat1.addEventListener("click", home_btn_flat1.bind(this));
		
		function home_btn_flat1()
		{
			// STOP ROOM TONE //
			roomtone.pause();
			roomtone.currentTime = 0;
			// GO OUTSIDE //
			exportRoot.animate();
			setTimeout(function() { exportRoot.wrapper.gotoAndStop(0); }, 500);
			// STOP FIRE //
			fire.pause();
			fire.currentTime = 0;
			// STOP SPEECH //
			stopSpeech_flat1();
			// CLEAR TIMEOUTS //
			clearTimeouts_flat1();
			// CLEAR EVENTLISTENERS //
			clearEventListeners_flat1();
		}
		
		////////// HOME BUTTON //////////
		
		////////// HOME BUTTON ALPHA EFFECT //////////
		
		this.home_btn_flat1.alpha = 0.35;
		
		this.home_btn_flat1.addEventListener("mouseover", home_btn_flat1Opacity.bind(this));
		function home_btn_flat1Opacity()
		{
			this.home_btn_flat1.alpha = 0.5;
		}
		this.home_btn_flat1.addEventListener("mouseout", home_btn_flat1OpacityOut.bind(this));
		function home_btn_flat1OpacityOut()
		{
			this.home_btn_flat1.alpha = 0.35;
		}
		
		////////// END HOME BUTTON ALPHA EFFECT //////////
		
		////////// FLAT 1 BUTTONS //////////
		
		this.flat1_room_1_btn_1.addEventListener("click", flat1_room_1_btn_1.bind(this));
		
		function flat1_room_1_btn_1() {
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat1.push(setTimeout(function() { flat1_timeline.gotoAndStop(9); }, 500));
			timeouts_flat1.push(setTimeout(function(){ flat1_sound_1.play(); }, 1000));
		}
		
		this.flat1_room_2_btn_1.addEventListener("click", flat1_room_2_btn_1.bind(this));
		
		function flat1_room_2_btn_1()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat1.push(setTimeout(function() { flat1_timeline.gotoAndStop(14); }, 500));
			flat1_sound_1.pause();
			flat1_sound_1.currentTime = 0;
			timeouts_flat1.push(setTimeout(function(){ flat1_sound_2.play(); }, 2000));
		}
		
		this.flat1_room_2_btn_2.addEventListener("click", flat1_room_2_btn_2.bind(this));
		
		function flat1_room_2_btn_2()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat1.push(setTimeout(function() { flat1_timeline.gotoAndStop(19); }, 500));
			fireGain.gain.value = 0.5;
			fire.play();
			flat1_sound_2.pause();
			flat1_sound_2.currentTime = 0;
			timeouts_flat1.push(setTimeout(function(){ flat1_sound_3.play(); }, 3000));
		}
		
		this.flat1_room_3_btn_1.addEventListener("click", flat1_room_3_btn_1.bind(this));
		
		function flat1_room_3_btn_1()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat1.push(setTimeout(function() { flat1_timeline.gotoAndStop(24); }, 500));
			fireGain.gain.value = 1.5;
			flat1_sound_3.pause();
			flat1_sound_3.currentTime = 0;
			timeouts_flat1.push(setTimeout(function(){ flat1_sound_4.play(); }, 500));
		}
		
		this.flat1_room_4_btn_1.addEventListener("click", flat1_room_4_btn_1.bind(this));
		
		function flat1_room_4_btn_1()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat1.push(setTimeout(function() { flat1_timeline.gotoAndStop(29); }, 500));
		}
		
		this.flat1_room_4_btn_2.addEventListener("click", flat1_room_4_btn_2.bind(this));
		
		function flat1_room_4_btn_2()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat1.push(setTimeout(function() { flat1_timeline.gotoAndStop(34); }, 500));
			// STOP FIRE //
			fire.pause();
			fire.currentTime = 0;
		}
		
		this.flat1_room_5_btn_1.addEventListener("click", flat1_room_5_btn_1.bind(this));
		
		function flat1_room_5_btn_1()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat1.push(setTimeout(function() { flat1_timeline.gotoAndStop(39); }, 500));
		}
		
		this.flat1_room_5_btn_2.addEventListener("click", flat1_room_5_btn_2.bind(this));
		
		function flat1_room_5_btn_2()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat1.push(setTimeout(function() { flat1_timeline.gotoAndStop(44); }, 500));
		}
		
		// exit button //
		
		this.flat1_room_5_btn_3.addEventListener("click", flat1_room_5_btn_3.bind(this));
		
		function flat1_room_5_btn_3()
		{
			flat1_sound_4.pause();
			flat1_sound_4.currentTime = 0;
			// STOP ROOM TONE //
			roomtone.pause();
			roomtone.currentTime = 0;
			// GO OUTSIDE //
			exportRoot.animate();
			setTimeout(function() { exportRoot.wrapper.gotoAndStop(0); }, 500);
			// STOP SPEECH //
			stopSpeech_flat1();
			// CLEAR TIMEOUTS //
			clearTimeouts_flat1();
			// CLEAR EVENTLISTENERS //
			clearEventListeners_flat1();
		}
		
		this.flat_1_room_6_btn_1.addEventListener("click", flat_1_room_6_btn_1.bind(this));
		
		function flat_1_room_6_btn_1()
		{
			// ANIMATE TRANSITION //
			exportRoot.animate();
			// GO TO NEXT //
			timeouts_flat1.push(setTimeout(function() { flat1_timeline.gotoAndStop(49); }, 500));
		}
		
		// exit button //
		
		this.flat1_room_6_btn_2.addEventListener("click", flat1_room_6_btn_2.bind(this));
		
		function flat1_room_6_btn_2()
		{
			// STOP ROOM TONE //
			roomtone.pause();
			roomtone.currentTime = 0;
			// GO OUTSIDE //
			exportRoot.animate();
			setTimeout(function() { exportRoot.wrapper.gotoAndStop(0); }, 500);
			// STOP FIRE //
			fire.pause();
			fire.currentTime = 0;
			// STOP SPEECH //
			stopSpeech_flat1();
			// CLEAR TIMEOUTS //
			clearTimeouts_flat1();
			// CLEAR EVENTLISTENERS //
			clearEventListeners_flat1();
		}
		
		
		////////// END FLAT 1 BUTTONS //////////
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(50));

	// home_btn
	this.home_btn_flat1 = new lib.home_btn();
	this.home_btn_flat1.setTransform(32.6,32.6,0.958,0.958,0,0,0,13.1,13.1);
	new cjs.ButtonHelper(this.home_btn_flat1, 0, 1, 2, false, new lib.home_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.home_btn_flat1).wait(50));

	// flat1_room_6_btn_2
	this.flat1_room_6_btn_2 = new lib.flat1_room_6_btn_2();
	this.flat1_room_6_btn_2.setTransform(849.1,224,1,1,0,0,0,145.1,160);
	this.flat1_room_6_btn_2._off = true;
	new cjs.ButtonHelper(this.flat1_room_6_btn_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat1_room_6_btn_2).wait(49).to({_off:false},0).wait(1));

	// flat1_room_6_picture2
	this.instance = new lib.flat1_room_6_picture2();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off:false},0).wait(1));

	// flat1_room_6_btn_1
	this.flat_1_room_6_btn_1 = new lib.flat1_room_6_btn_1();
	this.flat_1_room_6_btn_1.setTransform(224,384,1,1,0,0,0,160,320);
	this.flat_1_room_6_btn_1._off = true;
	new cjs.ButtonHelper(this.flat_1_room_6_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat_1_room_6_btn_1).wait(44).to({_off:false},0).to({_off:true},1).wait(5));

	// flat1_room_6_picture1
	this.instance_1 = new lib.flat1_room_6_picture1();
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(44).to({_off:false},0).to({_off:true},1).wait(5));

	// flat1_room_5_btn_2
	this.flat1_room_5_btn_2 = new lib.flat1_room_5_btn_2();
	this.flat1_room_5_btn_2.setTransform(289.1,299.1,1,1,0,0,0,73,171.1);
	this.flat1_room_5_btn_2._off = true;
	new cjs.ButtonHelper(this.flat1_room_5_btn_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat1_room_5_btn_2).wait(39).to({_off:false},0).to({_off:true},1).wait(10));

	// flat1_room_5_picture2
	this.instance_2 = new lib.flat1_room_5_picture2();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({_off:false},0).to({_off:true},1).wait(10));

	// flat1_room_5_btn_3
	this.flat1_room_5_btn_3 = new lib.flat1_room_5_btn_3();
	this.flat1_room_5_btn_3.setTransform(157.3,278.5,1,1,0,0,0,124.8,233.5);
	this.flat1_room_5_btn_3._off = true;
	new cjs.ButtonHelper(this.flat1_room_5_btn_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat1_room_5_btn_3).wait(34).to({_off:false},0).to({_off:true},1).wait(15));

	// flat1_room_5_btn_1
	this.flat1_room_5_btn_1 = new lib.flat1_room_5_btn_1();
	this.flat1_room_5_btn_1.setTransform(857.2,554.1,1,1,0,0,0,129,170.1);
	this.flat1_room_5_btn_1._off = true;
	new cjs.ButtonHelper(this.flat1_room_5_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat1_room_5_btn_1).wait(34).to({_off:false},0).to({_off:true},1).wait(15));

	// flat1_room_5_picture1
	this.instance_3 = new lib.flat1_room_5_picture1();
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(34).to({_off:false},0).to({_off:true},1).wait(15));

	// flat1_room_4_btn_2
	this.flat1_room_4_btn_2 = new lib.flat1_room_4_btn_2();
	this.flat1_room_4_btn_2.setTransform(394.1,243.1,1,1,0,0,0,54,179.1);
	this.flat1_room_4_btn_2._off = true;
	new cjs.ButtonHelper(this.flat1_room_4_btn_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat1_room_4_btn_2).wait(29).to({_off:false},0).to({_off:true},1).wait(20));

	// flat1_room_4_picture2
	this.instance_4 = new lib.flat1_room_4_picture2();
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(29).to({_off:false},0).to({_off:true},1).wait(20));

	// flat1_room_4_btn_1
	this.flat1_room_4_btn_1 = new lib.flat1_room_4_btn_1();
	this.flat1_room_4_btn_1.setTransform(800,434,1,1,0,0,0,160,269.9);
	this.flat1_room_4_btn_1._off = true;
	new cjs.ButtonHelper(this.flat1_room_4_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat1_room_4_btn_1).wait(24).to({_off:false},0).to({_off:true},1).wait(25));

	// flat1_room_4_picture1
	this.instance_5 = new lib.flat1_room_4_picture1();
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(24).to({_off:false},0).to({_off:true},1).wait(25));

	// flat1_room_3_btn_1
	this.flat1_room_3_btn_1 = new lib.flat1_room_3_btn_1();
	this.flat1_room_3_btn_1.setTransform(618.1,374,1,1,0,0,0,170.1,330);
	this.flat1_room_3_btn_1._off = true;
	new cjs.ButtonHelper(this.flat1_room_3_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat1_room_3_btn_1).wait(19).to({_off:false},0).to({_off:true},1).wait(30));

	// flat1_room_3_picture1
	this.instance_6 = new lib.flat1_room_3_picture1();
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({_off:false},0).to({_off:true},1).wait(30));

	// flat1_room_2_btn_2
	this.flat1_room_2_btn_2 = new lib.flat1_room_2_btn_2();
	this.flat1_room_2_btn_2.setTransform(651.2,387.2,1,1,0,0,0,88,226.1);
	this.flat1_room_2_btn_2._off = true;
	new cjs.ButtonHelper(this.flat1_room_2_btn_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat1_room_2_btn_2).wait(14).to({_off:false},0).to({_off:true},1).wait(35));

	// flat1_room_2_picture2
	this.instance_7 = new lib.flat1_room_2_picture2();
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(14).to({_off:false},0).to({_off:true},1).wait(35));

	// flat1_room_2_btn_1
	this.flat1_room_2_btn_1 = new lib.flat1_room_2_btn_1();
	this.flat1_room_2_btn_1.setTransform(224,369,1,1,0,0,0,160,335);
	this.flat1_room_2_btn_1._off = true;
	new cjs.ButtonHelper(this.flat1_room_2_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat1_room_2_btn_1).wait(9).to({_off:false},0).to({_off:true},1).wait(40));

	// flat1_room_2_picture1
	this.instance_8 = new lib.flat1_room_2_picture1();
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(9).to({_off:false},0).to({_off:true},1).wait(40));

	// flat1_room_1_btn_1
	this.flat1_room_1_btn_1 = new lib.flat1_room_1_btn_1();
	this.flat1_room_1_btn_1.setTransform(141.5,385.1,1,1,0,0,0,114.5,270.1);
	this.flat1_room_1_btn_1._off = true;
	new cjs.ButtonHelper(this.flat1_room_1_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat1_room_1_btn_1).wait(4).to({_off:false},0).to({_off:true},1).wait(45));

	// flat1_room_1_picture1
	this.instance_9 = new lib.flat1_room_1_picture1();
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(4).to({_off:false},0).to({_off:true},1).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17.6,17.6,29.8,29.8);


(lib.wrapper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		////////// BIND LOCAL TIMELINE TO VARIABLE //////////
		var wrapper_timeline = this;
		////////// BIND LOCAL TIMELINE TO VARIABLE //////////
		
		////////// BIND CHILD TIMELINES TO VARIABLE //////////
		var flat1_nav = this.flat1_wrapper
		var flat2_nav = this.flat2_wrapper
		var flat3_nav = this.flat3_wrapper
		var flat4_nav = this.flat4_wrapper
		var flat5_nav = this.flat5_wrapper
		var flat6_nav = this.flat6_wrapper
		var flat7_nav = this.flat7_wrapper
		var stairs_nav = this.stairs_wrapper
		
		// REMOVE ALL EVENT LISTENERS FUNCTION //
		function clearEventListeners_wrapper() {
			wrapper_timeline.home_btn.removeEventListener("click", home_btn);
			wrapper_timeline.home_btn.removeEventListener("mouseover", home_btnOpacity);
			wrapper_timeline.home_btn.removeEventListener("mouseout", home_btnOpacityOut);
			wrapper_timeline.flat1_btn_1.removeEventListener("click", flat1_btn_1);
			wrapper_timeline.flat1_btn_2.removeEventListener("click", flat1_btn_2);
			wrapper_timeline.flat2_btn_1.removeEventListener("click", flat2_btn_1);
			wrapper_timeline.flat2_btn_2.removeEventListener("click", flat2_btn_2);
			wrapper_timeline.flat3_btn_1.removeEventListener("click", flat3_btn_1);
			wrapper_timeline.flat3_btn_2.removeEventListener("click", flat3_btn_2);
			wrapper_timeline.flat4_btn_1.removeEventListener("click", flat4_btn_1);
			wrapper_timeline.flat4_btn_2.removeEventListener("click", flat4_btn_2);
			wrapper_timeline.flat5_btn_1.removeEventListener("click", flat5_btn_1);
			wrapper_timeline.flat5_btn_2.removeEventListener("click", flat5_btn_2);
			wrapper_timeline.flat6_btn_1.removeEventListener("click", flat6_btn_1);
			wrapper_timeline.flat7_btn_1.removeEventListener("click", flat7_btn_1);
			wrapper_timeline.flat7_btn_2.removeEventListener("click", flat7_btn_2);
			wrapper_timeline.flat7_btn_3.removeEventListener("click", flat7_btn_3);
			wrapper_timeline.flat7_btn_4.removeEventListener("click", flat7_btn_4);
			wrapper_timeline.stairs_btn_1.removeEventListener("click", stairs_btn_1);
			wrapper_timeline.stairs_btn_2.removeEventListener("click", stairs_btn_2);
			wrapper_timeline.stairs_btn_3.removeEventListener("click", stairs_btn_3);
			wrapper_timeline.door_btn_1.removeEventListener("click", door_btn_1);
		}
		
		
		// MAINLOOP PLAY//
		mainloop.play();
		filter.frequency.value = 20000;
		// END MAINLOOP PLAY//
		
		
		// MAIN THEME PLAY//
		maintheme.play();
		// END MAIN THEME PLAY//
		
		
		////////// HOME BUTTON //////////
		this.home_btn.addEventListener("click", home_btn.bind(this));
		
		function home_btn()
		{
			// STOP MAINLOOP //
			mainloop.pause();
			mainloop.currentTime = 0;
			// STOP MAIN THEME //
			maintheme.pause();
			maintheme.currentTime = 0;
			// ANIMATE TRANSITION //
			exportRoot.animate();
			setTimeout(function() { exportRoot.gotoAndStop(0); }, 500);
			// CLEAR EVENTLISTENERS //
			clearEventListeners_wrapper();
		}
		////////// HOME BUTTON //////////
		
		////////// HOME BUTTON ALPHA EFFECT //////////
		this.home_btn.alpha = 0.35;
		
		this.home_btn.addEventListener("mouseover", home_btnOpacity.bind(this));
		function home_btnOpacity()
		{
			this.home_btn.alpha = 0.5;
		}
		this.home_btn.addEventListener("mouseout", home_btnOpacityOut.bind(this));
		function home_btnOpacityOut()
		{
			this.home_btn.alpha = 0.35;
		}
		////////// END HOME BUTTON ALPHA EFFECT //////////
		
		
		
		////////// FLAT 1 BUTTONS //////////
		
		this.flat1_btn_1.addEventListener("click", flat1_btn_1.bind(this));
		
		function flat1_btn_1()
		{	
			// STOP MAINLOOP //
			mainloop.pause();
			mainloop.currentTime = 0;
			// STOP MAIN THEME //
			maintheme.pause();
			maintheme.currentTime = 0;
			// ANIMATE TRANSITION //
			exportRoot.animate();
			setTimeout(function() { wrapper_timeline.gotoAndStop(1); flat1_nav.gotoAndStop(0); }, 500);
			// CLEAR EVENTLISTENERS //
			clearEventListeners_wrapper();
		}
		this.flat1_btn_2.addEventListener("click", flat1_btn_2.bind(this));
		
		function flat1_btn_2()
		{
			// STOP MAINLOOP //
			mainloop.pause();
			mainloop.currentTime = 0;
			// STOP MAIN THEME //
			maintheme.pause();
			maintheme.currentTime = 0;
			// ANIMATE TRANSITION //
			exportRoot.animate();
			setTimeout(function() { wrapper_timeline.gotoAndStop(1); flat1_nav.gotoAndStop(0); flat1_nav.gotoAndStop(14); }, 500);
			// CLEAR EVENTLISTENERS //
			clearEventListeners_wrapper();
		}
		
		////////// END FLAT 1 BUTTONS //////////
		
		////////// FLAT 2 BUTTONS //////////
		
		this.flat2_btn_1.addEventListener("click", flat2_btn_1.bind(this));
		
		function flat2_btn_1()
		{	
			// STOP MAINLOOP //
			mainloop.pause();
			mainloop.currentTime = 0;
			// STOP MAIN THEME //
			maintheme.pause();
			maintheme.currentTime = 0;
			// ANIMATE TRANSITION //
			exportRoot.animate();
			setTimeout(function() { wrapper_timeline.gotoAndStop(2); flat2_nav.gotoAndStop(0); }, 500);
			// CLEAR EVENTLISTENERS //
			clearEventListeners_wrapper();
		}
		this.flat2_btn_2.addEventListener("click", flat2_btn_2.bind(this));
		
		function flat2_btn_2()
		{
			// STOP MAINLOOP //
			mainloop.pause();
			mainloop.currentTime = 0;
			// STOP MAIN THEME //
			maintheme.pause();
			maintheme.currentTime = 0;
			// ANIMATE TRANSITION //
			exportRoot.animate();
			setTimeout(function() { wrapper_timeline.gotoAndStop(2); flat2_nav.gotoAndStop(0); flat2_nav.gotoAndStop(14); }, 500);
			// CLEAR EVENTLISTENERS //
			clearEventListeners_wrapper();
		}
		
		////////// END FLAT 2 BUTTONS //////////
		
		////////// FLAT 3 BUTTONS //////////
		
		this.flat3_btn_1.addEventListener("click", flat3_btn_1.bind(this));
		
		function flat3_btn_1()
		{	
			// STOP MAINLOOP //
			mainloop.pause();
			mainloop.currentTime = 0;
			// STOP MAIN THEME //
			maintheme.pause();
			maintheme.currentTime = 0;
			// ANIMATE TRANSITION //
			exportRoot.animate();
			setTimeout(function() { wrapper_timeline.gotoAndStop(3); flat3_nav.gotoAndStop(0); }, 500);
			// CLEAR EVENTLISTENERS //
			clearEventListeners_wrapper();
		}
		this.flat3_btn_2.addEventListener("click", flat3_btn_2.bind(this));
		
		function flat3_btn_2()
		{
			// STOP MAINLOOP //
			mainloop.pause();
			mainloop.currentTime = 0;
			// STOP MAIN THEME //
			maintheme.pause();
			maintheme.currentTime = 0;
			// ANIMATE TRANSITION //
			exportRoot.animate();
			setTimeout(function() { wrapper_timeline.gotoAndStop(3); flat3_nav.gotoAndStop(0); flat3_nav.gotoAndStop(14); }, 500);
			// CLEAR EVENTLISTENERS //
			clearEventListeners_wrapper();
		}
		
		////////// END FLAT 3 BUTTONS //////////
		
		////////// FLAT 4 BUTTONS //////////
		
		this.flat4_btn_1.addEventListener("click", flat4_btn_1.bind(this));
		
		function flat4_btn_1()
		{
			// STOP MAINLOOP //
			mainloop.pause();
			mainloop.currentTime = 0;
			// STOP MAIN THEME //
			maintheme.pause();
			maintheme.currentTime = 0;
			// ANIMATE TRANSITION //
			exportRoot.animate();
			setTimeout(function() { wrapper_timeline.gotoAndStop(4); flat4_nav.gotoAndStop(0); }, 500);
			// CLEAR EVENTLISTENERS //
			clearEventListeners_wrapper();
		}
		this.flat4_btn_2.addEventListener("click", flat4_btn_2.bind(this));
		
		function flat4_btn_2()
		{
			// STOP MAINLOOP //
			mainloop.pause();
			mainloop.currentTime = 0;
			// STOP MAIN THEME //
			maintheme.pause();
			maintheme.currentTime = 0;
			// ANIMATE TRANSITION //
			exportRoot.animate();
			setTimeout(function() { wrapper_timeline.gotoAndStop(4); flat4_nav.gotoAndStop(0); }, 500);
			// CLEAR EVENTLISTENERS //
			clearEventListeners_wrapper();
		}
		
		////////// END FLAT 4 BUTTONS //////////
		
		////////// FLAT 5 BUTTONS //////////
		
		this.flat5_btn_1.addEventListener("click", flat5_btn_1.bind(this));
		
		function flat5_btn_1()
		{
			// STOP MAINLOOP //
			mainloop.pause();
			mainloop.currentTime = 0;
			// STOP MAIN THEME //
			maintheme.pause();
			maintheme.currentTime = 0;
			// ANIMATE TRANSITION //
			exportRoot.animate();
			setTimeout(function() { wrapper_timeline.gotoAndStop(5); flat5_nav.gotoAndStop(0); }, 500);
			// CLEAR EVENTLISTENERS //
			clearEventListeners_wrapper();
		}
		this.flat5_btn_2.addEventListener("click", flat5_btn_2.bind(this));
		
		function flat5_btn_2()
		{
			// STOP MAINLOOP //
			mainloop.pause();
			mainloop.currentTime = 0;
			// STOP MAIN THEME //
			maintheme.pause();
			maintheme.currentTime = 0;
			// ANIMATE TRANSITION //
			exportRoot.animate();
			setTimeout(function() { wrapper_timeline.gotoAndStop(5); flat5_nav.gotoAndStop(0);flat5_nav.gotoAndStop(14); }, 500);
			// CLEAR EVENTLISTENERS //
			clearEventListeners_wrapper();
		}
		
		////////// END FLAT 5 BUTTONS //////////
		
		////////// FLAT 6 BUTTONS //////////
		
		this.flat6_btn_1.addEventListener("click", flat6_btn_1.bind(this));
		
		function flat6_btn_1()
		{
			// STOP MAINLOOP //
			mainloop.pause();
			mainloop.currentTime = 0;
			// STOP MAIN THEME //
			maintheme.pause();
			maintheme.currentTime = 0;
			// ANIMATE TRANSITION //
			exportRoot.animate();
			setTimeout(function() { wrapper_timeline.gotoAndStop(6); flat6_nav.gotoAndStop(0); }, 500);
			// CLEAR EVENTLISTENERS //
			clearEventListeners_wrapper();
		}
		
		////////// END FLAT 6 BUTTONS //////////
		
		////////// FLAT 7 BUTTONS //////////
		
		this.flat7_btn_1.addEventListener("click", flat7_btn_1.bind(this));
		
		function flat7_btn_1()
		{	
			// STOP MAINLOOP //
			mainloop.pause();
			mainloop.currentTime = 0;
			// STOP MAIN THEME //
			maintheme.pause();
			maintheme.currentTime = 0;
			// ANIMATE TRANSITION //
			exportRoot.animate();
			setTimeout(function() { wrapper_timeline.gotoAndStop(7); flat7_nav.gotoAndStop(0); }, 500);
			// CLEAR EVENTLISTENERS //
			clearEventListeners_wrapper();
		}
		this.flat7_btn_2.addEventListener("click", flat7_btn_2.bind(this));
		
		function flat7_btn_2()
		{
			// STOP MAINLOOP //
			mainloop.pause();
			mainloop.currentTime = 0;
			// STOP MAIN THEME //
			maintheme.pause();
			maintheme.currentTime = 0;
			// ANIMATE TRANSITION //
			exportRoot.animate();
			setTimeout(function() { wrapper_timeline.gotoAndStop(7); flat7_nav.gotoAndStop(0); }, 500);
			// CLEAR EVENTLISTENERS //
			clearEventListeners_wrapper();
		}
		
		this.flat7_btn_3.addEventListener("click", flat7_btn_3.bind(this));
		
		function flat7_btn_3()
		{	
			// STOP MAINLOOP //
			mainloop.pause();
			mainloop.currentTime = 0;
			// STOP MAIN THEME //
			maintheme.pause();
			maintheme.currentTime = 0;
			// ANIMATE TRANSITION //
			exportRoot.animate();
			setTimeout(function() { wrapper_timeline.gotoAndStop(7); flat7_nav.gotoAndStop(0); flat7_nav.gotoAndStop(9); }, 500);
			// CLEAR EVENTLISTENERS //
			clearEventListeners_wrapper();
		}
		this.flat7_btn_4.addEventListener("click", flat7_btn_4.bind(this));
		
		function flat7_btn_4()
		{
			// STOP MAINLOOP //
			mainloop.pause();
			mainloop.currentTime = 0;
			// STOP MAIN THEME //
			maintheme.pause();
			maintheme.currentTime = 0;
			// ANIMATE TRANSITION //
			exportRoot.animate();
			setTimeout(function() { wrapper_timeline.gotoAndStop(7); flat7_nav.gotoAndStop(0); flat7_nav.gotoAndStop(9); }, 500);
			// CLEAR EVENTLISTENERS //
			clearEventListeners_wrapper();
		}
		
		////////// END FLAT 7 BUTTONS //////////
		
		
		////////// STAIR BUTTONS //////////
		
		this.stairs_btn_1.addEventListener("click", stairs_btn_1.bind(this));
		
		function stairs_btn_1()
		{	
			// STOP MAINLOOP //
			mainloop.pause();
			mainloop.currentTime = 0;
			// STOP MAIN THEME //
			maintheme.pause();
			maintheme.currentTime = 0;
			// ANIMATE TRANSITION //
			exportRoot.animate();
			setTimeout(function() { wrapper_timeline.gotoAndStop(10); stairs_nav.gotoAndStop(0); stairs_nav.gotoAndStop(34); }, 500);
			// CLEAR EVENTLISTENERS //
			clearEventListeners_wrapper();
		}
		this.stairs_btn_2.addEventListener("click", stairs_btn_2.bind(this));
		
		function stairs_btn_2()
		{
			// STOP MAINLOOP //
			mainloop.pause();
			mainloop.currentTime = 0;
			// STOP MAIN THEME //
			maintheme.pause();
			maintheme.currentTime = 0;
			// ANIMATE TRANSITION //
			exportRoot.animate();
			setTimeout(function() { wrapper_timeline.gotoAndStop(10); stairs_nav.gotoAndStop(0); stairs_nav.gotoAndStop(19); }, 500);
			// CLEAR EVENTLISTENERS //
			clearEventListeners_wrapper();
		}
		this.stairs_btn_3.addEventListener("click", stairs_btn_3.bind(this));
		
		function stairs_btn_3()
		{	
			// STOP MAINLOOP //
			mainloop.pause();
			mainloop.currentTime = 0;
			// STOP MAIN THEME //
			maintheme.pause();
			maintheme.currentTime = 0;
			// ANIMATE TRANSITION //
			exportRoot.animate();
			setTimeout(function() { wrapper_timeline.gotoAndStop(10); stairs_nav.gotoAndStop(0); }, 500);
			// CLEAR EVENTLISTENERS //
			clearEventListeners_wrapper();
		}
		
		////////// END STAIR BUTTONS //////////
		
		////////// DOOR BUTTON //////////
		
		this.door_btn_1.addEventListener("click", door_btn_1.bind(this));
		
		function door_btn_1()
		{	
			// STOP MAINLOOP //
			mainloop.pause();
			mainloop.currentTime = 0;
			// STOP MAIN THEME //
			maintheme.pause();
			maintheme.currentTime = 0;
			// ANIMATE TRANSITION //
			exportRoot.animate();
			setTimeout(function() { wrapper_timeline.gotoAndStop(10); stairs_nav.gotoAndStop(0); }, 500);
			// CLEAR EVENTLISTENERS //
			clearEventListeners_wrapper();
		}
		
		////////// END DOOR BUTTON //////////
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20));

	// home_btn
	this.home_btn = new lib.home_btn();
	this.home_btn.setTransform(32.6,32.6,0.958,0.958,0,0,0,13.1,13.1);
	new cjs.ButtonHelper(this.home_btn, 0, 1, 2, false, new lib.home_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.home_btn).to({_off:true},1).wait(19));

	// door_btn_1
	this.door_btn_1 = new lib.door_btn_1();
	this.door_btn_1.setTransform(585.6,540.1,1,1.244,0,0,0,22.9,11.8);
	new cjs.ButtonHelper(this.door_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.door_btn_1).to({_off:true},1).wait(19));

	// stairs_btn_1(top)
	this.stairs_btn_1 = new lib.stairs_btn_1_1();
	this.stairs_btn_1.setTransform(513.2,313.8,1,1,0,0,0,15.3,26.2);
	new cjs.ButtonHelper(this.stairs_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.stairs_btn_1).to({_off:true},1).wait(19));

	// stairs_btn_2(mid)
	this.stairs_btn_2 = new lib.stairs_btn_2_1();
	this.stairs_btn_2.setTransform(514.2,414.7,1,1,0,0,0,15.5,33.4);
	new cjs.ButtonHelper(this.stairs_btn_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.stairs_btn_2).to({_off:true},1).wait(19));

	// stairs_btn_3(bottom)
	this.stairs_btn_3 = new lib.stairs_btn_3_1();
	this.stairs_btn_3.setTransform(515.8,553.5,1,1,0,0,0,19.4,31.9);
	new cjs.ButtonHelper(this.stairs_btn_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.stairs_btn_3).to({_off:true},1).wait(19));

	// stairs_wrapper
	this.stairs_wrapper = new lib.stairs_wrapper();
	this.stairs_wrapper.setTransform(512,384,1,1,0,0,0,512,384);
	this.stairs_wrapper._off = true;

	this.timeline.addTween(cjs.Tween.get(this.stairs_wrapper).wait(10).to({_off:false},0).to({_off:true},1).wait(9));

	// flat7_btn_1
	this.flat7_btn_1 = new lib.flat7_btn_1();
	this.flat7_btn_1.setTransform(460.8,229,1,1,0,0,0,12.8,18.9);
	new cjs.ButtonHelper(this.flat7_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat7_btn_1).to({_off:true},1).wait(19));

	// flat7_btn_2
	this.flat7_btn_2 = new lib.flat7_btn_2();
	this.flat7_btn_2.setTransform(494.8,229.2,1,1,0,0,0,12.7,19.1);
	new cjs.ButtonHelper(this.flat7_btn_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat7_btn_2).to({_off:true},1).wait(19));

	// flat7_btn_3
	this.flat7_btn_3 = new lib.flat7_btn_3();
	this.flat7_btn_3.setTransform(529.2,229.5,1,1,0,0,0,12.5,18.9);
	new cjs.ButtonHelper(this.flat7_btn_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat7_btn_3).to({_off:true},1).wait(19));

	// flat7_btn_4
	this.flat7_btn_4 = new lib.flat7_btn_4();
	this.flat7_btn_4.setTransform(562.5,230.1,1,1,0,0,0,13.6,19.5);
	new cjs.ButtonHelper(this.flat7_btn_4, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat7_btn_4).to({_off:true},1).wait(19));

	// flat7_wrapper
	this.flat7_wrapper = new lib.flat7_wrapper();
	this.flat7_wrapper.setTransform(512,384,1,1,0,0,0,512,384);
	this.flat7_wrapper._off = true;

	this.timeline.addTween(cjs.Tween.get(this.flat7_wrapper).wait(7).to({_off:false},0).to({_off:true},1).wait(12));

	// flat6_btn_1
	this.flat6_btn_1 = new lib.flat6_btn_1();
	this.flat6_btn_1.setTransform(655.5,538.2,1,1,0,0,0,18.3,18.3);
	new cjs.ButtonHelper(this.flat6_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat6_btn_1).to({_off:true},1).wait(19));

	// flat6_wrapper
	this.flat6_wrapper = new lib.flat6_wrapper();
	this.flat6_wrapper.setTransform(512,384,1,1,0,0,0,512,384);
	this.flat6_wrapper._off = true;

	this.timeline.addTween(cjs.Tween.get(this.flat6_wrapper).wait(6).to({_off:false},0).to({_off:true},1).wait(13));

	// flat5_btn_1
	this.flat5_btn_1 = new lib.flat5_btn_1();
	this.flat5_btn_1.setTransform(373.8,546.8,1,1,0,0,0,17.2,22.9);
	new cjs.ButtonHelper(this.flat5_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat5_btn_1).to({_off:true},1).wait(19));

	// flat5_btn_2
	this.flat5_btn_2 = new lib.flat5_btn_2();
	this.flat5_btn_2.setTransform(444.4,545.5,1,1,0,0,0,17.8,23.4);
	new cjs.ButtonHelper(this.flat5_btn_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat5_btn_2).to({_off:true},1).wait(19));

	// flat5_wrapper
	this.flat5_wrapper = new lib.flat5_wrapper();
	this.flat5_wrapper.setTransform(512,384,1,1,0,0,0,512,384);
	this.flat5_wrapper._off = true;

	this.timeline.addTween(cjs.Tween.get(this.flat5_wrapper).wait(5).to({_off:false},0).to({_off:true},1).wait(14));

	// flat4_btn_1
	this.flat4_btn_1 = new lib.flat4_btn_1();
	this.flat4_btn_1.setTransform(582.5,414.6,1,1,0,0,0,16.8,33.5);
	new cjs.ButtonHelper(this.flat4_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat4_btn_1).to({_off:true},1).wait(19));

	// flat4_btn_2
	this.flat4_btn_2 = new lib.flat4_btn_2();
	this.flat4_btn_2.setTransform(649,413,1,1,0,0,0,15.8,32.1);
	new cjs.ButtonHelper(this.flat4_btn_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat4_btn_2).to({_off:true},1).wait(19));

	// flat4_wrapper
	this.flat4_wrapper = new lib.flat4_wrapper();
	this.flat4_wrapper.setTransform(512,384,1,1,0,0,0,512,384);
	this.flat4_wrapper._off = true;

	this.timeline.addTween(cjs.Tween.get(this.flat4_wrapper).wait(4).to({_off:false},0).to({_off:true},1).wait(15));

	// flat3_btn_1
	this.flat3_btn_1 = new lib.flat3_btn_1();
	this.flat3_btn_1.setTransform(379,416,1,1,0,0,0,14.7,32);
	new cjs.ButtonHelper(this.flat3_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat3_btn_1).to({_off:true},1).wait(19));

	// flat3_btn_2
	this.flat3_btn_2 = new lib.flat3_btn_2();
	this.flat3_btn_2.setTransform(446.7,415.5,1,1,0,0,0,15.8,32);
	new cjs.ButtonHelper(this.flat3_btn_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat3_btn_2).to({_off:true},1).wait(19));

	// flat3_wrapper
	this.flat3_wrapper = new lib.flat3_wrapper();
	this.flat3_wrapper.setTransform(512,384,1,1,0,0,0,512,384);
	this.flat3_wrapper._off = true;

	this.timeline.addTween(cjs.Tween.get(this.flat3_wrapper).wait(3).to({_off:false},0).to({_off:true},1).wait(16));

	// flat2_btn_1
	this.flat2_btn_1 = new lib.flat2_btn_1();
	this.flat2_btn_1.setTransform(577.7,313.8,1,1,0,0,0,15.8,26.5);
	new cjs.ButtonHelper(this.flat2_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat2_btn_1).to({_off:true},1).wait(19));

	// flat2_btn_2
	this.flat2_btn_2 = new lib.flat2_btn_2();
	this.flat2_btn_2.setTransform(641.7,313.7,1,1,0,0,0,15.5,26.4);
	new cjs.ButtonHelper(this.flat2_btn_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat2_btn_2).to({_off:true},1).wait(19));

	// flat2_wrapper
	this.flat2_wrapper = new lib.flat2_wrapper();
	this.flat2_wrapper.setTransform(512,384,1,1,0,0,0,512,384);
	this.flat2_wrapper._off = true;

	this.timeline.addTween(cjs.Tween.get(this.flat2_wrapper).wait(2).to({_off:false},0).to({_off:true},1).wait(17));

	// flat1_btn_1
	this.flat1_btn_1 = new lib.flat1_btn_1();
	this.flat1_btn_1.setTransform(383.5,314.9,1,1,0,0,0,14.6,27.2);
	new cjs.ButtonHelper(this.flat1_btn_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat1_btn_1).to({_off:true},1).wait(19));

	// flat1_btn_2
	this.flat1_btn_2 = new lib.flat1_btn_2();
	this.flat1_btn_2.setTransform(448.2,315.3,1,1,0,0,0,14.6,27.1);
	new cjs.ButtonHelper(this.flat1_btn_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.flat1_btn_2).to({_off:true},1).wait(19));

	// flat1_wrapper
	this.flat1_wrapper = new lib.flat1_wrapper();
	this.flat1_wrapper.setTransform(512,384,1,1,0,0,0,512,384);
	this.flat1_wrapper._off = true;

	this.timeline.addTween(cjs.Tween.get(this.flat1_wrapper).wait(1).to({_off:false},0).to({_off:true},1).wait(18));

	// main_photo
	this.instance = new lib.mainbg();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(19));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhP/A7/MAAAh3+MCf/AAAMAAAB3+g");
	this.shape.setTransform(512,384);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


// stage content:



(lib.ih_darksound = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		// STOP //
		this.stop();
		
		// CREATE TRANSITION MASK //
		var transitionMask = new createjs.Shape();
		transitionMask.graphics.beginFill("#000").drawRect(0, 0, 1024, 768);
		transitionMask.alpha = 0;
		stage.addChild(transitionMask);
		
		// TRANSITION FUNCTIONS //
		this.animate = function() {
			
		this.animateStart = function() {
			createjs.Tween.get(transitionMask).to({alpha: 1},500).call(this.animateOut);
		}
		this.animateOut = function() {
			createjs.Tween.get(transitionMask).to({alpha: 0},500).call(this.doneAnimating);
		}
		
		this.doneAnimating = function() {
		    createjs.Ticker.removeEventListener("tick", stage);
			stage.removeChild(transitionMask);
		}
		
		exportRoot.animateStart();
		
		}
		
		// DARKSOUND_BTN GOTOANDSTOP //
		this.darksound_btn.addEventListener("click", darksound_btnGo.bind(this));
		function darksound_btnGo()
		{
			this.play();
		}
		// END DARKSOUND BTN //
		
		//DARKSOUND_BTN SET ALPHA
		this.darksound_btn.alpha = 0.75;
		
		//DARKSOUND_BTN ALPHA EVENT
		this.darksound_btn.addEventListener("mouseover", darksound_btnOpacity.bind(this));
		function darksound_btnOpacity()
		{
			this.darksound_btn.alpha = 1;
		}
		this.darksound_btn.addEventListener("mouseout", darksound_btnOpacityOut.bind(this));
		function darksound_btnOpacityOut()
		{
			this.darksound_btn.alpha = 0.75;
		}
	}
	this.frame_4 = function() {
		this.stop();
		this.wrapper.gotoAndStop(1);
		this.wrapper.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1));

	// darksound_btn
	this.darksound_btn = new lib.darksound_btn();
	this.darksound_btn.setTransform(514,386,1,1,0,0,0,129,27.3);
	new cjs.ButtonHelper(this.darksound_btn, 0, 1, 2, false, new lib.darksound_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.darksound_btn).to({_off:true},1).wait(4));

	// fade-in
	this.instance = new lib.fadein("synched",0);
	this.instance.setTransform(512,384,1,1,0,0,0,512,384);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},4).wait(1));

	// wrapper
	this.instance_1 = new lib.mainbg();

	this.instance_2 = new lib.black_bg("synched",0);
	this.instance_2.setTransform(512,384,1,1,0,0,0,512,384);

	this.wrapper = new lib.wrapper();
	this.wrapper.setTransform(512,384,1,1,0,0,0,512,384);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).to({state:[{t:this.wrapper}]},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(512,384,1024,768);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;