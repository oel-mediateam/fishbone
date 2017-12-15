(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ok_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAWBIIgfhEIgTAYIAAAsIgYAAIAAiOIAYAAIAAA/IAvg/IAgAAIgsA3IAuBXg");
	this.shape.setTransform(49.5,23.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnA5QgRgVAAgjQAAgZAIgRQAHgQANgIQALgIARAAQAaAAAPATQAQATAAAjQAAAkgRAUQgOASgaAAQgZAAgOgRgAgWglQgJAMAAAZQgBAYAKANQAKAMAMAAQAOAAAKgMQAIgNABgYQgBgZgIgMQgKgLgOgBQgOABgIALg");
	this.shape_1.setTransform(36.6,23.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bg
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0099FF").s().p("AlsDcQg6AAgCg6IAAk/QAAg+A8AAILZAAQA8AAAAA+IAAE/QgCA6g6AAg");
	this.shape_2.setTransform(42.5,22);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066FF").s().p("AlsA7Qg8AAAAg9IAAg4QACA6A6AAILZAAQA6AAACg6IAAA4QAAA9g8AAg");
	this.shape_3.setTransform(42.5,44.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,85,50);


(lib.ok_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRBWIAAhIIg/hjIAqAAIAmBEIAphEIAoAAIhABjIAABIg");
	this.shape.setTransform(109.9,25.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAwBWIgPgnIhDAAIgOAnIglAAIBDirIAjAAIBFCrgAgYASIAuAAIgWg/g");
	this.shape_1.setTransform(93.1,25.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAgBWIguhQIgcAcIAAA0IgjAAIAAirIAjAAIAABMIBFhMIAvAAIhBBDIBEBog");
	this.shape_2.setTransform(76.7,25.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag8BBQgWgXAAgpQAAgZAIgSQAFgNALgLQAKgKAMgFQAQgHAUAAQAmAAAXAYQAWAXAAApQAAAqgWAXQgXAYgmAAQglAAgXgYgAghgsQgOAPAAAdQAAAdAOAPQANAPAUAAQAVAAANgPQANgPAAgdQAAgdgMgPQgNgOgWAAQgUAAgNAOg");
	this.shape_3.setTransform(57.9,25.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bg
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#333333").ss(2,1,1).p("AsgkSIZBAAQAxAAAAAxIAAHDQAAAxgxAAI5BAAQgxAAAAgxIAAnDQAAgxAxAAg");
	this.shape_4.setTransform(85,27.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AsgETQgxAAAAgxIAAnDQAAgxAxAAIZBAAQAxAAAAAxIAAHDQAAAxgxAAg");
	this.shape_5.setTransform(85,27.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,172,57);


(lib.hitarea_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EglGAZZMAAAgyxMBKNAAAMAAAAyxg");
	this.shape.setTransform(237.5,162.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.hitarea_mc, new cjs.Rectangle(0,0,475,325), null);


(lib.cause_mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// fb
	this.fb_txt = new cjs.Text("", "1px 'Arial Narrow'", "#F2F2F2");
	this.fb_txt.name = "fb_txt";
	this.fb_txt.textAlign = "center";
	this.fb_txt.lineHeight = 0;
	this.fb_txt.lineWidth = 6;
	this.fb_txt.alpha = 0.00784314;
	this.fb_txt.parent = this;
	this.fb_txt.setTransform(147,32);

	this.timeline.addTween(cjs.Tween.get(this.fb_txt).wait(1));

	// correctIndicator
	this.correct_txt = new cjs.Text("", "1px 'Arial Narrow'", "#F2F2F2");
	this.correct_txt.name = "correct_txt";
	this.correct_txt.textAlign = "center";
	this.correct_txt.lineHeight = 0;
	this.correct_txt.lineWidth = 6;
	this.correct_txt.alpha = 0.00784314;
	this.correct_txt.parent = this;
	this.correct_txt.setTransform(147,32);

	this.timeline.addTween(cjs.Tween.get(this.correct_txt).wait(1));

	// desc
	this.cause_txt = new cjs.Text("", "12px 'Arial'", "#333333");
	this.cause_txt.name = "cause_txt";
	this.cause_txt.lineHeight = 13;
	this.cause_txt.lineWidth = 147;
	this.cause_txt.parent = this;
	this.cause_txt.setTransform(4.7,4.4);

	this.timeline.addTween(cjs.Tween.get(this.cause_txt).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("AroDhQgoAAAAgtIAAlnQAAgtAoAAIXSAAQAnAAAAAtIAAFnQAAAtgnAAg");
	this.shape.setTransform(78.5,22.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.cause_mc, new cjs.Rectangle(0,0,157,45), null);


(lib.backbone_mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// txt
	this.effect_txt = new cjs.Text("", "bold 16px 'Arial'");
	this.effect_txt.name = "effect_txt";
	this.effect_txt.lineHeight = 18;
	this.effect_txt.lineWidth = 134;
	this.effect_txt.parent = this;
	this.effect_txt.setTransform(315.2,-17.4);

	this.timeline.addTween(cjs.Tween.get(this.effect_txt).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("A39BkQgPAAgBgQIAAioQAAgOANgBMAwBAAAQANABAAAOIAACoQgBAQgPAAg");
	this.shape.setTransform(155,10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.backbone_mc, new cjs.Rectangle(0,-19.4,451.4,80), null);


(lib.wrongFb_mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// button
	this.ok_btn = new lib.ok_button();
	this.ok_btn.name = "ok_btn";
	this.ok_btn.parent = this;
	this.ok_btn.setTransform(406,30,0.8,0.8,0,0,0,42.5,25);
	new cjs.ButtonHelper(this.ok_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.ok_btn).wait(1));

	// txt
	this.feedback_txt = new cjs.Text("", "13px 'Arial'", "#FFFFFF");
	this.feedback_txt.name = "feedback_txt";
	this.feedback_txt.lineHeight = 17;
	this.feedback_txt.lineWidth = 359;
	this.feedback_txt.parent = this;
	this.feedback_txt.setTransform(7,7);

	this.timeline.addTween(cjs.Tween.get(this.feedback_txt).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3300").s().p("EgiHAEsQgpAAAAg4IAAnnQAAg4ApAAMBEOAAAQAqAAAAA4IAAHnQAAA4gqAAg");
	this.shape.setTransform(222.5,30);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.wrongFb_mc, new cjs.Rectangle(0,0,445,60), null);


(lib.doneMsg_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.ok_btn = new lib.ok_button();
	this.ok_btn.name = "ok_btn";
	this.ok_btn.parent = this;
	this.ok_btn.setTransform(195,156.5);
	new cjs.ButtonHelper(this.ok_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.ok_btn).wait(1));

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNBaIAAgjIAbAAIAAAjgAgHAsIgHhaIAAgrIAdAAIAAArIgHBag");
	this.shape.setTransform(443.5,127.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAyBCIAAhJQAAgTgDgHQgEgGgIAAQgJAAgGAJQgGAJAAAZIAAA+IgbAAIAAhGQAAgVgCgGQgDgIgKAAQgGAAgFAEQgFAEgDAIQgCAIAAASIAAA/IgcAAIAAiAIAaAAIAAARQAHgKAIgFQAIgFAKAAQAKAAAIAFQAGAFAFAKQAHgKAIgFQAIgFAJAAQALAAAIAFQAIAFAEAKQAEAJAAAUIAABSg");
	this.shape_1.setTransform(430.9,130.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgnA5QgKgKAAgRQAAgMAEgIQAEgIAHgEQAIgFAQgDQASgFAIgEQAAgLgBgDQgCgDgEgCQgEgDgHAAQgHAAgEAEQgFADgCAKIgagGQAFgUAKgIQALgJAUAAQARAAAJAFQAKAFAEAJQAEAIAAAXIgBAnQAAARACAIQABAIAEAKIgcAAIgEgOQgHAIgIAFQgHAEgKAAQgPAAgKgLgAAAAIQgNADgEAEQgEAEAAAHQAAAIAFAFQAEAFAHAAQAFAAAGgFQAGgEACgFQACgGAAgPIAAgHIgQAGg");
	this.shape_2.setTransform(416.2,130.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgiBCIAAiAIAaAAIAAASQAIgNAEgEQAFgEAHAAQAJAAAKAGIgJAeQgIgGgGAAQgGAAgEAFQgEAEgBALQgDAMAAAdIAAAog");
	this.shape_3.setTransform(407.3,130.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaBYQgKgFgGgJQgFgJAAgMIAAgFIAgAGQABAGAEAEQADACAHAAQAKAAAFgCQAEgDADgFQACgFAAgNIAAgTQgHAKgIAGQgHAFgJAAQgSAAgMgQQgOgTAAgeQAAghANgQQANgSATABQAJAAAIAEQAIAGAHALIAAgSIAaAAIAABzQAAAbgFANQgFANgLAHQgLAFgTAAQgQABgLgFgAgPg4QgHAJAAAVQAAAUAHAJQAGAJAJAAQAKAAAHgKQAHgIAAgTQAAgVgHgJQgHgKgKAAQgJgBgGAKg");
	this.shape_4.setTransform(396,132.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgnA5QgKgKAAgRQAAgMAEgIQAEgIAHgEQAIgFAQgDQASgFAIgEQAAgLgBgDQgCgDgEgCQgEgDgHAAQgHAAgEAEQgFADgCAKIgagGQAFgUAKgIQALgJAUAAQARAAAJAFQAKAFAEAJQAEAIAAAXIgBAnQAAARACAIQABAIAEAKIgcAAIgEgOQgHAIgIAFQgHAEgKAAQgPAAgKgLgAAAAIQgNADgEAEQgEAEAAAHQAAAIAFAFQAEAFAHAAQAFAAAGgFQAGgEACgFQACgGAAgPIAAgHIgQAGg");
	this.shape_5.setTransform(384.3,130.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgNBaIAAiBIAbAAIAACBgAgNg4IAAghIAbAAIAAAhg");
	this.shape_6.setTransform(375.8,127.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgmBJQgNgRAAgiQAAggANgQQANgSATABQAIgBAIAFQAHAEAHAKIAAhBIAcAAIAACyIgaAAIAAgTQgHALgIAFQgJAGgJAAQgRAAgOgSgAgPgIQgHAJAAAUQAAARADAJQADAIAFAEQAGAFAGAAQAJAAAHgKQAHgKAAgVQAAgWgHgIQgGgKgLAAQgIgBgHAKg");
	this.shape_7.setTransform(366.4,127.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgiA0QgPgSAAghQAAggAQgTQANgRAUAAQAWAAANARQAPATAAAlIAAAEIhGAAQAAAPAHAJQAHAIAIAAQAOAAAEgSIAcAFQgFAUgMAJQgMAKgRAAQgXAAgNgQgAgNghQgGAIAAAPIApAAQgBgPgGgIQgGgIgIAAQgIAAgGAIg");
	this.shape_8.setTransform(348.9,130.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAUBCIAAhCQAAgTgCgHQgBgGgEgEQgFgDgFAAQgGAAgGAEQgFAFgDAIQgDAIABAVIAAA7IgcAAIAAiAIAaAAIAAATQAHgLAIgGQAIgFAKAAQANAAAJAGQAIAGADALQADAKAAATIAABPg");
	this.shape_9.setTransform(337.1,130.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgmAyQgQgSAAghQAAgTAIgQQAHgPAMgIQANgIAOAAQAaAAAPAUQAOAUAAAbQAAATgIAQQgHARgNAIQgMAIgPAAQgXAAgPgSgAgSgdQgHAKAAATQAAAUAHAKQAJAKAJAAQALAAAHgKQAIgLAAgTQAAgTgIgKQgIgKgKAAQgKAAgIAKg");
	this.shape_10.setTransform(324.6,130.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgKBVQgIgFgHgLIAAATIgaAAIAAiyIAcAAIAABBQAHgKAIgEQAHgFAIABQATgBANASQANARAAAfQAAAigNARQgOASgRAAQgJAAgJgGgAgQgIQgHAIAAAVQAAAQADAJQADAJAGAEQAGAFAGAAQAJAAAHgKQAGgKAAgVQAAgWgGgIQgHgKgKAAQgJgBgHAKg");
	this.shape_11.setTransform(312.3,127.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAVBaIAAhFQAAgXgEgGQgEgIgKAAQgKAAgGAJQgGAHAAAZIAABBIgdAAIAAizIAdAAIAABCQAGgKAJgEQAHgFAKAAQAMAAAIAHQAJAGAEAMQACAKABAUIAABNg");
	this.shape_12.setTransform(299.6,127.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgfA6QgNgLgEgTIAcgFQADAUASAAQALAAAEgEQAFgEABgGQAAgEgDgDQgCgCgHgCQgigJgJgJQgMgJAAgSQAAgSAMgLQALgLAWAAQAUAAALAIQALAIAEASIgbAGQgDgPgQAAQgKAAgEADQgEADgBAEQAAAFAFADQAEACATAGQAYAHAJAJQAHAJABAQQAAASgNANQgNAMgXAAQgTAAgNgKg");
	this.shape_13.setTransform(287.4,130.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgNBaIAAiBIAbAAIAACBgAgNg4IAAghIAbAAIAAAhg");
	this.shape_14.setTransform(279.1,127.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgUBbIAAhmIgPAAIAAgaIAPAAIAAgKQAAgSAEgIQADgIAIgEQAGgFAMAAQALAAAMAFIgEAXQgGgCgHAAQgGAAgCADQgDAEAAAKIAAAKIAVAAIAAAaIgVAAIAABmg");
	this.shape_15.setTransform(273.3,127.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgiA0QgPgSAAghQAAggAQgTQANgRAUAAQAWAAANARQAPATAAAlIAAAEIhGAAQAAAPAHAJQAHAIAIAAQAOAAAEgSIAcAFQgFAUgMAJQgMAKgRAAQgXAAgNgQgAgNghQgGAIAAAPIApAAQgBgPgGgIQgGgIgIAAQgIAAgGAIg");
	this.shape_16.setTransform(257.9,130.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAUBaIAAhFQABgXgEgGQgEgIgLAAQgJAAgGAJQgGAHAAAZIAABBIgcAAIAAizIAcAAIAABCQAHgKAHgEQAIgFAJAAQANAAAJAHQAIAGAEAMQACAKAAAUIAABNg");
	this.shape_17.setTransform(246.1,127.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgHBUQgGgFgDgKQgBgHAAgVIAAg4IgNAAIAAgbIANAAIAAgaIAbgUIAAAuIATAAIAAAbIgTAAIAAAzQAAARABADQACAFAFAAQAEAAAHgDIACAaQgJAFgNAAQgJAAgHgFg");
	this.shape_18.setTransform(236.4,128.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgmBJQgNgRAAgiQAAggANgQQANgSATABQAIgBAIAFQAHAEAHAKIAAhBIAcAAIAACyIgaAAIAAgTQgHALgIAFQgJAGgJAAQgRAAgOgSgAgPgIQgHAJAAAUQAAARADAJQADAIAFAEQAGAFAGAAQAJAAAHgKQAHgKAAgVQAAgWgHgIQgGgKgLAAQgIgBgHAKg");
	this.shape_19.setTransform(220.8,127.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgiA0QgPgSAAghQAAggAQgTQANgRAUAAQAWAAANARQAPATAAAlIAAAEIhGAAQAAAPAHAJQAHAIAIAAQAOAAAEgSIAcAFQgFAUgMAJQgMAKgRAAQgXAAgNgQgAgNghQgGAIAAAPIApAAQgBgPgGgIQgGgIgIAAQgIAAgGAIg");
	this.shape_20.setTransform(209,130.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgHBUQgGgFgDgKQgBgHAAgVIAAg4IgNAAIAAgbIANAAIAAgaIAbgUIAAAuIATAAIAAAbIgTAAIAAAzQAAARABADQACAFAFAAQAEAAAHgDIACAaQgJAFgNAAQgJAAgHgFg");
	this.shape_21.setTransform(200,128.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgiA0QgPgSAAghQAAggAQgTQANgRAUAAQAWAAANARQAPATAAAlIAAAEIhGAAQAAAPAHAJQAHAIAIAAQAOAAAEgSIAcAFQgFAUgMAJQgMAKgRAAQgXAAgNgQgAgNghQgGAIAAAPIApAAQgBgPgGgIQgGgIgIAAQgIAAgGAIg");
	this.shape_22.setTransform(190.8,130.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgNBaIAAizIAbAAIAACzg");
	this.shape_23.setTransform(182.4,127.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgzBbIAAiyIAaAAIAAATQAGgKAIgGQAJgGAJAAQATAAANARQANARAAAhQAAAggNARQgNATgTgBQgHAAgHgDQgIgFgIgLIAABCgAgQg2QgHAKAAATQAAAXAHAJQAHAKAJAAQAKABAHgLQAGgIAAgVQAAgWgHgJQgGgKgKAAQgJAAgHAJg");
	this.shape_24.setTransform(173.6,132.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAyBCIAAhJQAAgTgDgHQgEgGgIAAQgJAAgGAJQgGAJAAAZIAAA+IgbAAIAAhGQAAgVgCgGQgDgIgKAAQgGAAgFAEQgFAEgDAIQgCAIAAASIAAA/IgcAAIAAiAIAaAAIAAARQAHgKAIgFQAIgFAKAAQAKAAAIAFQAGAFAFAKQAHgKAIgFQAIgFAJAAQALAAAIAFQAIAFAEAKQAEAJAAAUIAABSg");
	this.shape_25.setTransform(157.8,130.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgmAyQgQgSAAghQAAgTAHgQQAJgPALgIQANgIAOAAQAaAAAPAUQAOAUAAAbQAAATgHAQQgJARgMAIQgMAIgPAAQgXAAgPgSgAgSgdQgHAKAAATQAAAUAHAKQAJAKAJAAQALAAAHgKQAIgLAAgTQAAgTgIgKQgHgKgLAAQgKAAgIAKg");
	this.shape_26.setTransform(142.6,130.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AglAwQgMgUAAgcQAAggAOgRQAOgSAWAAQATAAAMAKQAMAKAFAVIgcAGQgDgUgQAAQgKAAgGAJQgGAJAAAVQAAAWAGAJQAGAKAKAAQAIAAAFgGQAFgFACgOIAcAGQgIAvgpAAQgZAAgNgUg");
	this.shape_27.setTransform(130.7,130.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgiA0QgPgSAAghQAAggAQgTQANgRAUAAQAWAAANARQAPATAAAlIAAAEIhGAAQAAAPAHAJQAHAIAIAAQAOAAAEgSIAcAFQgFAUgMAJQgMAKgRAAQgXAAgNgQgAgNghQgGAIAAAPIApAAQgBgPgGgIQgGgIgIAAQgIAAgGAIg");
	this.shape_28.setTransform(113.4,130.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgLBBIgriBIAdAAIAUBBIAFAWIAGgWIAVhBIAcAAIgqCBg");
	this.shape_29.setTransform(102,130.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgnA5QgKgKAAgRQAAgMAEgIQAEgIAHgEQAIgFAQgDQASgFAIgEQAAgLgBgDQgCgDgEgCQgEgDgHAAQgHAAgEAEQgFADgCAKIgagGQAFgUAKgIQALgJAUAAQARAAAJAFQAKAFAEAJQAEAIAAAXIgBAnQAAARACAIQABAIAEAKIgcAAIgEgOQgHAIgIAFQgHAEgKAAQgPAAgKgLgAAAAIQgNADgEAEQgEAEAAAHQAAAIAFAFQAEAFAHAAQAFAAAGgFQAGgEACgFQACgGAAgPIAAgHIgQAGg");
	this.shape_30.setTransform(90.7,130.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAVBaIAAhFQgBgXgDgGQgEgIgKAAQgKAAgGAJQgGAHAAAZIAABBIgdAAIAAizIAdAAIAABCQAGgKAJgEQAHgFAKAAQAMAAAIAHQAJAGAEAMQACAKABAUIAABNg");
	this.shape_31.setTransform(78.8,127.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgfA9QgIgGgEgKQgEgKAAgTIAAhRIAcAAIAAA7QAAAZABAHQACAGAEAEQAEAEAHAAQAGAAAGgFQAFgFACgIQACgHAAgaIAAg2IAcAAIAACAIgaAAIAAgTQgGAKgJAGQgJAGgKAAQgKAAgJgFg");
	this.shape_32.setTransform(60.5,130.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgmAyQgQgSAAghQAAgTAHgQQAIgPAMgIQANgIAOAAQAaAAAPAUQAOAUAAAbQAAATgHAQQgJARgMAIQgMAIgPAAQgXAAgPgSgAgSgdQgHAKAAATQAAAUAHAKQAJAKAJAAQALAAAHgKQAIgLAAgTQAAgTgIgKQgHgKgLAAQgKAAgIAKg");
	this.shape_33.setTransform(48.1,130.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgOBaIAAhMIg2hnIAjAAIAiBIIAihIIAhAAIg2BoIAABLg");
	this.shape_34.setTransform(35,127.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bg
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(0,0,0,0.749)").s().p("Eg0LAjoMAAAhHPMBoXAAAMAAABHPg");
	this.shape_35.setTransform(237.5,162.5,0.711,0.713);

	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(1));

}).prototype = getMCSymbolPrototype(lib.doneMsg_mc, new cjs.Rectangle(0,0,475,325), null);


(lib.correctFb_mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// button
	this.ok_btn = new lib.ok_button();
	this.ok_btn.name = "ok_btn";
	this.ok_btn.parent = this;
	this.ok_btn.setTransform(406.1,30,0.8,0.8,0,0,0,42.6,25);
	new cjs.ButtonHelper(this.ok_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.ok_btn).wait(1));

	// txt
	this.feedback_txt = new cjs.Text("", "13px 'Arial'", "#FFFFFF");
	this.feedback_txt.name = "feedback_txt";
	this.feedback_txt.lineHeight = 17;
	this.feedback_txt.lineWidth = 359;
	this.feedback_txt.parent = this;
	this.feedback_txt.setTransform(7,7);

	this.timeline.addTween(cjs.Tween.get(this.feedback_txt).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009933").s().p("EgiHAEsQgpAAAAg4IAAnmQAAg5ApAAMBEOAAAQAqAAAAA5IAAHmQAAA4gqAAg");
	this.shape.setTransform(222.5,30);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.correctFb_mc, new cjs.Rectangle(0,0,445,60), null);


// stage content:
(lib.fishbone = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{overview:0,diagram:1});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
			self.stop();
			self.intro_txt.text = intro;
			self.ok_btn.on( "click", function() {
				self.gotoAndStop( "diagram" );
			} );
	}
	this.frame_1 = function() {
		var self = this;
		var causeDragables = [
			{
				obj: self.causeOne_mc,
				id: self.causeOne_mc.id,
				x: self.causeOne_mc.x,
				y: self.causeOne_mc.y
			},
			{
				obj: self.causeTwo_mc,
				id: self.causeTwo_mc.id,
				x: self.causeTwo_mc.x,
				y: self.causeTwo_mc.y
			},
			{
				obj: self.causeThree_mc,
				id: self.causeThree_mc.id,
				x: self.causeThree_mc.x,
				y: self.causeThree_mc.y
			},
			{
				obj: self.causeFour_mc,
				id: self.causeFour_mc.id,
				x: self.causeFour_mc.x,
				y: self.causeFour_mc.y
			},
			{
				obj: self.causeFive_mc,
				id: self.causeFive_mc.id,
				x: self.causeFive_mc.x,
				y: self.causeFive_mc.y
			},
			{
				obj: self.causeSix_mc,
				id: self.causeSix_mc.id,
				x: self.causeSix_mc.x,
				y: self.causeSix_mc.y
			},
		];
		var textboxes = [self.textbox1, self.textbox2, self.textbox3];
		var totalCorrect = 0;
		var numCorrect = 0;
		var completed = false;
		var originX = 0;
		var originY = 0;
		var hitAreaWidth = 475;
		var hitAreaHeight = 325;
		var hit = new createjs.Shape();
			hit.graphics.beginFill( "#000" ).drawRect( -( hitAreaWidth / 2 ), -( hitAreaHeight / 2 ), hitAreaWidth, hitAreaHeight );
		var hitArea = self.hitarea_mc;
			hitArea.setBounds( self.hitarea_mc.x - ( hitAreaWidth / 2 ), self.hitarea_mc.y - ( hitAreaHeight / 2 ), hitAreaWidth, hitAreaHeight);
			hitArea.hitArea = hit;
		
		var correctFb = self.correctFb_mc;
			correctFb.visible = false;
			correctFb.ok_btn.on( "click", hide );
		var wrongFb = self.wrongFb_mc;
			wrongFb.visible = false;
			wrongFb.ok_btn.on( "click", hide );
			
		// enable touch events
		createjs.Touch.enable( stage );
			
		// display the effect text content
		self.backbone_mc.effect_txt.text = effect;
		
		// shuffle the causes array for random placing of bones/causes
		shuffle( causes );
		
		// display the causes content to the dragable objects
		for ( var i in causeDragables ) {
			
			var obj = causeDragables[i].obj;
			var x = causeDragables[i].x;
			var y = causeDragables[i].y;
			var width = 157;
			var height = 45;
			
			obj.cause_txt.text = causes[i].cause;
			obj.fb_txt.text = causes[i].feedback;
			
			if ( causes[i] == undefined ) {
				break;
			}
			
			if ( causes[i].correct ) {
				
				obj.correct_txt.text = 1;
				totalCorrect += 1;
				
			} else {
				
				obj.correct_txt.text = 0;
				
			}
			
			obj.cursor = "pointer";
			obj.mouseChildren = false;
			obj.setBounds( x, y, width, height );
			obj.addEventListener( "pressmove", handleDrag );
			obj.addEventListener( "pressup", handleDrop );
			
		}
		
		
		// dragging the dragable objects
		function handleDrag( evt ) {
			
			var target = evt.currentTarget;
			var pos = stage.globalToLocal( evt.stageX, evt.stageY );
				
			target.x = pos.x;
			target.y = pos.y;
		
			stage.update();
			
		}
		
		// droping the dragable objects
		function handleDrop( evt ) {
			
			var target = evt.currentTarget;
			var txtBoxHeight = 60;
			var txtBoxYThreshold = 257;
			var pos = hitArea.globalToLocal( evt.stageX, evt.stageY );
			
			if ( hitArea.hitTest( pos.x, pos.y ) ) {
		
				for ( var i in textboxes ) {
					
					var txtBox = textboxes[i];
					
					if ( txtBox.text.length == 0 ) {
						
						if ( target.correct_txt.text == "0" ) {
							
							wrongFb.feedback_txt.text = target.fb_txt.text;
							wrongFb.visible = true;
							correctFb.visible = false;
							revertPos( evt );
							
						} else {
							
							txtBox.text = target.cause_txt.text;
							correctFb.feedback_txt.text = target.fb_txt.text;
							correctFb.visible = true;
							wrongFb.visible = false;
							target.visible = false;
							numCorrect += 1;
							
							if ( txtBox.y < txtBoxYThreshold ) {
								
								if ( txtBox.getMeasuredHeight() < txtBoxHeight ) {
									txtBox.y = (txtBox.y + txtBoxHeight) - txtBox.getMeasuredHeight();
								}
								
							}
							
						}
						
						break;
						
					}
		
				} // end loop
		
			} else {
				
				revertPos( evt );
				
			} // end hit test
		
			stage.update( evt );
		
			if ( numCorrect == totalCorrect ) {
				
				completed = true;
				
				for ( var i in causeDragables ) {
					
					var obj = causeDragables[i].obj;
						obj.cursor = "default";
						obj.removeEventListener("pressmove", handleDrag);
						obj.removeEventListener("pressup", handleDrop);
					
				}
		
			}
			
		}
		
		// reverting dragables to return to their origin position
		function revertPos( evt ) {
			
			var target = evt.currentTarget;
			
			for ( var i in causeDragables ) {
				
				var obj = causeDragables[i];
				
				if ( obj.id == target.id ) {
					
					originX = obj.x;
					originY = obj.y;
					break;
					
				}
		
			}
		
			target.x = originX;
			target.y = originY;
			
		}
		
		// hide feedback (for the okay buttons
		function hide( evt ) {
			
			evt.target.parent.visible = false;
			
			if ( completed ) {
				
				self.doneMsg_mc.visible = true;
				self.doneMsg_mc.ok_btn.on( "click", function() {
					self.doneMsg_mc.visible = false;
				} );
				
			}
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// done
	this.doneMsg_mc = new lib.doneMsg_mc();
	this.doneMsg_mc.name = "doneMsg_mc";
	this.doneMsg_mc.parent = this;
	this.doneMsg_mc.setTransform(334.1,263.2,1,1,0,0,0,334.1,228.2);
	this.doneMsg_mc._off = true;
	this.doneMsg_mc.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.doneMsg_mc).wait(1).to({_off:false},0).wait(1));

	// intro
	this.ok_btn = new lib.ok_btn();
	this.ok_btn.name = "ok_btn";
	this.ok_btn.parent = this;
	this.ok_btn.setTransform(319.9,317.6,1,1,0,0,0,85,27.6);
	new cjs.ButtonHelper(this.ok_btn, 0, 1, 1);

	this.intro_txt = new cjs.Text("", "16px 'Arial'", "#333333");
	this.intro_txt.name = "intro_txt";
	this.intro_txt.lineHeight = 19;
	this.intro_txt.lineWidth = 606;
	this.intro_txt.parent = this;
	this.intro_txt.setTransform(17,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.intro_txt},{t:this.ok_btn}]}).to({state:[]},1).wait(1));

	// feedback
	this.wrongFb_mc = new lib.wrongFb_mc();
	this.wrongFb_mc.name = "wrongFb_mc";
	this.wrongFb_mc.parent = this;
	this.wrongFb_mc.setTransform(334.6,76.9,1,1,0,0,0,319.6,31.9);

	this.correctFb_mc = new lib.correctFb_mc();
	this.correctFb_mc.name = "correctFb_mc";
	this.correctFb_mc.parent = this;
	this.correctFb_mc.setTransform(334.6,76.9,1,1,0,0,0,319.6,31.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.correctFb_mc},{t:this.wrongFb_mc}]},1).wait(1));

	// hitarea
	this.hitarea_mc = new lib.hitarea_mc();
	this.hitarea_mc.name = "hitarea_mc";
	this.hitarea_mc.parent = this;
	this.hitarea_mc.setTransform(335,263.2,1,1,0,0,0,335,228.2);
	this.hitarea_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.hitarea_mc).wait(1).to({_off:false},0).wait(1));

	// sidebar
	this.causeSix_mc = new lib.cause_mc();
	this.causeSix_mc.name = "causeSix_mc";
	this.causeSix_mc.parent = this;
	this.causeSix_mc.setTransform(479,310,1,1,0,0,0,0.2,0.1);

	this.causeFive_mc = new lib.cause_mc();
	this.causeFive_mc.name = "causeFive_mc";
	this.causeFive_mc.parent = this;
	this.causeFive_mc.setTransform(479,260.6,1,1,0,0,0,0.2,0.2);

	this.causeFour_mc = new lib.cause_mc();
	this.causeFour_mc.name = "causeFour_mc";
	this.causeFour_mc.parent = this;
	this.causeFour_mc.setTransform(479,211.1,1,1,0,0,0,0.2,0.2);

	this.causeThree_mc = new lib.cause_mc();
	this.causeThree_mc.name = "causeThree_mc";
	this.causeThree_mc.parent = this;
	this.causeThree_mc.setTransform(479,161.5,1,1,0,0,0,0.2,0.1);

	this.causeTwo_mc = new lib.cause_mc();
	this.causeTwo_mc.name = "causeTwo_mc";
	this.causeTwo_mc.parent = this;
	this.causeTwo_mc.setTransform(479,112,1,1,0,0,0,0.2,0.1);

	this.causeOne_mc = new lib.cause_mc();
	this.causeOne_mc.name = "causeOne_mc";
	this.causeOne_mc.parent = this;
	this.causeOne_mc.setTransform(479,62.6,1,1,0,0,0,0.2,0.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZAkQgKgHgDgLIAWgDQABAGAFADQAEADAHABQAIgBAFgCQACgDAAgEQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgCgCgFgCQgagFgHgFQgKgGAAgMQAAgKAJgIQAIgHASgBQAQABAIAFQAJAGADALIgVAEQgBgFgEgDQgEgDgGABQgIgBgEADQgDABAAAEQAAAAAAABQABAAAAABQAAAAABAAQAAABABAAQADACAQAFQASAEAHAFQAHAFAAALQAAALgKAIQgKAJgSAAQgQAAgKgIg");
	this.shape.setTransform(593.8,49.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdAdQgJgLAAgSQAAgTALgMQALgLAQgBQASAAALANQAKAMAAAZIg2AAQAAAJAFAFQAFAGAHAAQAFAAADgDQAEgCACgHIAWAEQgFAMgJAGQgJAGgNABQgVAAgKgPgAgKgUQgFAFAAAJIAgAAQAAgKgFgEQgFgGgGAAQgGAAgFAGg");
	this.shape_1.setTransform(585,49.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZAkQgKgHgDgLIAWgDQABAGAFADQAEADAHABQAIgBAFgCQACgDAAgEQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgCgCgFgCQgagFgHgFQgKgGAAgMQAAgKAJgIQAIgHASgBQAQABAIAFQAJAGADALIgVAEQgBgFgEgDQgEgDgGABQgIgBgEADQgDABAAAEQAAAAAAABQABAAAAABQAAAAABAAQAAABABAAQADACAQAFQASAEAHAFQAHAFAAALQAAALgKAIQgKAJgSAAQgQAAgKgIg");
	this.shape_2.setTransform(576,49.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYAmQgHgDgDgHQgDgGAAgMIAAg0IAWAAIAAAnQAAAQABAEQACAEADADQADACAFAAQAFAAAEgDQAFgDABgFQACgEAAgSIAAgjIAWAAIAABTIgVAAIAAgNQgEAGgIAEQgGAFgIAAQgJAAgGgFg");
	this.shape_3.setTransform(566.8,49.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfAkQgHgHAAgKQAAgHAEgFQADgGAGgCQAGgDALgCQAPgDAGgCIAAgDQAAgGgDgDQgDgCgIgBQgGABgDACQgEACgCAGIgTgDQADgNAIgFQAIgHAQAAQAOABAHADQAIAEACAFQAEAFAAAPIgBAYIABAQQABAGADAGIgVAAIgCgHIgBgCQgGAFgHACQgFAEgHAAQgNAAgIgIgAAAAFQgJACgCACQgFADAAAFQAAAEADAEQAEADAFAAQAFAAAGgEQAEgDABgEQABgDAAgIIAAgFIgNAEg");
	this.shape_4.setTransform(557.5,49.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiAsQgPgQAAgbQAAgcAPgPQAPgQAWAAQAWAAANAMQAHAIAFANIgYAGQgCgJgGgFQgHgFgJAAQgLAAgIAJQgIAJAAAUQAAAVAHAJQAJAJALAAQAJAAAHgFQAGgGADgNIAXAHQgFATgMAJQgMAJgTAAQgVAAgPgPg");
	this.shape_5.setTransform(547.3,47.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgVA7IAbh1IAQAAIgbB1g");
	this.shape_6.setTransform(534.8,47.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgZAkQgKgHgDgLIAWgDQABAGAFADQAEADAHABQAIgBAFgCQACgDAAgEQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgCgCgFgCQgagFgHgFQgKgGAAgMQAAgKAJgIQAIgHASgBQAQABAIAFQAJAGADALIgVAEQgBgFgEgDQgEgDgGABQgIgBgEADQgDABAAAEQAAAAAAABQABAAAAABQAAAAABAAQAAABABAAQADACAQAFQASAEAHAFQAHAFAAALQAAALgKAIQgKAJgSAAQgQAAgKgIg");
	this.shape_7.setTransform(523.5,49.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdAdQgJgLAAgSQAAgTALgMQALgLAQgBQASAAALANQAKAMAAAZIg2AAQAAAJAFAFQAFAGAHAAQAFAAADgDQAEgCACgHIAWAEQgFAMgJAGQgJAGgNABQgVAAgKgPgAgKgUQgFAFAAAJIAgAAQAAgKgFgEQgFgGgGAAQgGAAgFAGg");
	this.shape_8.setTransform(514.7,49.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAQArIAAgrQAAgMgCgEQgBgEgDgDQgDgBgFgBQgFAAgEADQgFAEgBAFQgCAFAAANIAAAmIgWAAIAAhTIAUAAIAAANQALgOAQgBQAHAAAGADQAGADADAEQADAEACAFIABAPIAAAzg");
	this.shape_9.setTransform(505.5,49.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgVAmQgKgFgFgKQgGgKAAgNQAAgLAGgLQAFgJAKgGQAKgFALgBQATAAAMANQAMAMAAASQAAATgMAMQgNANgSAAQgKgBgLgFgAgNgSQgGAHAAALQAAAMAGAHQAFAGAIABQAJgBAFgGQAGgHAAgMQAAgLgGgHQgFgGgJgBQgIABgFAGg");
	this.shape_10.setTransform(495.8,49.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgvA5IAAhxIAuAAIATABQAHABAGAEQAFADADAGQADAGABAIQgBAIgEAGQgEAHgIADQALADAGAHQAFAHAAAKQAAAIgEAHQgDAIgHAEQgGAEgJABQgGABgVAAgAgYAmIAWAAIAPgBQAFgBADgDQADgEABgGQgBgFgCgEQgDgDgEgCQgFgCgPAAIgTAAgAgYgLIAPAAIARAAQAFgBADgDQAEgEAAgFQAAgFgDgEQgDgDgGgBIgSAAIgOAAg");
	this.shape_11.setTransform(485.3,47.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AroW2QgoABAAguIAAloQAAgtAoAAIXSAAQAnAAAAAtIAAFoQAAAugngBgAroPHQgoABAAguIAAloQAAgtAoAAIXSAAQAnAAAAAtIAAFoQAAAugngBgAroHYQgoABAAguIAAloQAAgtAoAAIXSAAQAnAAAAAtIAAFoQAAAugngBgArogWQgoABAAguIAAloQAAgtAoAAIXSAAQAnAAAAAtIAAFoQAAAugngBgArooFQgoABAAguIAAloQAAgtAoAAIXSAAQAnAAAAAtIAAFoQAAAugngBgArov0QgoABAAguIAAloQAAgtAoAAIXSAAQAnAAAAAtIAAFoQAAAugngBg");
	this.shape_12.setTransform(557.3,208.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("As4ZZMAAAgyxIZxAAMAAAAyxgAsSSRIAAFoQAAAtAoAAIXSAAQAnAAAAgtIAAloQAAgtgnAAI3SAAQgoAAAAAtgAsSKiIAAFoQAAAtAoAAIXSAAQAnAAAAgtIAAloQAAgtgnAAI3SAAQgoAAAAAtgAsSCzIAAFoQAAAtAoAAIXSAAQAnAAAAgtIAAloQAAgtgnAAI3SAAQgoAAAAAtgAsSk7IAAFnQAAAtAoAAIXSAAQAnAAAAgtIAAlnQAAgtgnAAI3SAAQgoAAAAAtgAsSsqIAAFoQAAAtAoAAIXSAAQAnAAAAgtIAAloQAAgtgnAAI3SAAQgoAAAAAtgAsS0ZIAAFoQAAAtAoAAIXSAAQAnAAAAgtIAAloQAAgtgnAAI3SAAQgoAAAAAtg");
	this.shape_13.setTransform(557.5,197.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.causeOne_mc},{t:this.causeTwo_mc},{t:this.causeThree_mc},{t:this.causeFour_mc},{t:this.causeFive_mc},{t:this.causeSix_mc}]},1).wait(1));

	// bones
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#333333").ss(2,1,1).p("ACInnIOfAAIGCGDA2onnIOfAAIGCGDApbHoIOeAAIGCmD");
	this.shape_14.setTransform(159.9,204.2);
	this.shape_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1).to({_off:false},0).wait(1));

	// backbone
	this.backbone_mc = new lib.backbone_mc();
	this.backbone_mc.name = "backbone_mc";
	this.backbone_mc.parent = this;
	this.backbone_mc.setTransform(335.3,204.3,1,1,0,0,0,320.3,10.2);
	this.backbone_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.backbone_mc).wait(1).to({_off:false},0).wait(1));

	// header
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AAxA1IAAg7QAAgPgDgEQgEgGgIAAQgGAAgFAEQgFADgCAHQgCAGAAAOIAAAyIgbAAIAAg4QAAgPgBgEQgCgFgDgCQgDgCgFAAQgGAAgGAEQgFADgCAGQgCAGAAAOIAAAzIgbAAIAAhmIAZAAIAAANQANgQATAAQAKAAAHAEQAHAEAEAIQAHgIAIgEQAIgEAJAAQAMAAAHAFQAIAEAEAJQADAHAAAPIAABBg");
	this.shape_15.setTransform(182.4,20);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgmAtQgKgIAAgOQAAgIAFgHQAEgHAHgDQAIgDAOgDQASgEAIgDIAAgDQAAgIgEgDQgEgDgKAAQgHAAgEADQgEACgDAIIgZgFQAEgPALgHQAKgHAUAAQARAAAJAEQAJAEAEAHQAEAHAAASIgBAfQAAANACAHQABAGAEAIIgbAAIgDgIIgBgEQgHAHgIAEQgHADgJAAQgQAAgJgJgAAAAGQgLADgEACQgFAEAAAGQAAAFAEAFQAEAEAHAAQAGAAAHgFQAFgEACgFIABgOIAAgFIgQAEg");
	this.shape_16.setTransform(168,20.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AghA1IAAhmIAaAAIAAAOQAGgLAFgCQAFgEAHAAQAJAAAJAFIgJAYQgHgEgGAAQgGAAgEADQgDADgCAIQgCAJAAAZIAAAgg");
	this.shape_17.setTransform(159.3,20);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AgjBBQgLgJAAgOIAAgDIAfADQABAGADACQAEADAHAAQALAAAFgDQAEgDACgEQABgDAAgJIAAgQQgMARgSAAQgVAAgMgSQgKgNAAgVQAAgaANgNQANgOASAAQASAAANARIAAgOIAaAAIAABcQAAASgDAJQgDAJgGAFQgFAFgJADQgKADgOAAQgZAAgLgJgAgPgtQgGAIAAAQQAAARAGAGQAGAIAJAAQAKAAAHgIQAHgHAAgQQAAgPgHgIQgHgIgKAAQgJAAgGAHg");
	this.shape_18.setTransform(148.3,22.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgmAtQgKgIAAgOQAAgIAFgHQAEgHAHgDQAIgDAOgDQASgEAIgDIAAgDQAAgIgEgDQgEgDgKAAQgHAAgEADQgEACgDAIIgZgFQAEgPALgHQAKgHAUAAQARAAAJAEQAJAEAEAHQAEAHAAASIgBAfQAAANACAHQABAGAEAIIgbAAIgDgIIgBgEQgHAHgIAEQgHADgJAAQgQAAgJgJgAAAAGQgLADgEACQgFAEAAAGQAAAFAEAFQAEAEAHAAQAGAAAHgFQAFgEACgFIABgOIAAgFIgQAEg");
	this.shape_19.setTransform(136.9,20.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AgNBIIAAhnIAbAAIAABngAgNguIAAgYIAbAAIAAAYg");
	this.shape_20.setTransform(128.6,18.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("Ag7BIIAAiOIA1AAQAQAAAKACQANAEAJAJQAIAKAFANQAFAOAAAUQAAARgFANQgFAQgKAJQgIAIgMADQgJADgQABgAgeAwIAWAAQALgBAFgBQAHgCAEgEQAFgEADgJQADgLAAgQQAAgQgDgIQgDgJgFgGQgGgEgHgCQgGgCgRAAIgNAAg");
	this.shape_21.setTransform(118.8,18.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AglAkQgKgOAAgVQAAgZANgPQAOgOAUAAQAWAAAOAPQANAPgBAfIhDAAQAAAMAGAHQAHAHAIAAQAHAAAEgEQAEgDADgIIAbAEQgFAPgMAIQgLAIgRAAQgaAAgNgSgAgNgaQgGAHAAALIAoAAQAAgMgGgGQgGgGgIAAQgIAAgGAGg");
	this.shape_22.setTransform(100.1,20.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AAUA1IAAg1QAAgQgCgEQgCgGgDgCQgEgDgGAAQgGAAgGAEQgFAEgCAGQgDAGAAARIAAAvIgbAAIAAhmIAZAAIAAAOQAOgRAUAAQAJAAAHAEQAIACAEAGQADAFACAGQABAHAAAMIAAA/g");
	this.shape_23.setTransform(88.6,20);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AgaAwQgNgHgHgMQgHgNAAgRQAAgNAHgNQAHgNAMgHQANgGAOAAQAYAAAPAPQAOAPAAAXQAAAXgOAQQgQAPgXAAQgNAAgNgGgAgRgXQgIAIABAPQgBAPAIAJQAHAIAKAAQALAAAHgIQAHgJAAgPQAAgPgHgIQgHgIgLAAQgKAAgHAIg");
	this.shape_24.setTransform(76.4,20.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AgJBEQgJgEgGgJIAAAPIgaAAIAAiOIAcAAIAAA0QANgPAQAAQATAAAMAOQANAOAAAYQAAAbgNAOQgNAPgSAAQgIAAgIgFgAgQgGQgGAHAAAPQAAAQAFAIQAHALALAAQAJAAAGgIQAHgIAAgQQAAgSgHgHQgGgIgKAAQgJAAgHAIg");
	this.shape_25.setTransform(64.4,18.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AAUBIIAAg4QAAgQgCgDQgBgFgEgCQgEgCgGgBQgGABgGADQgFADgDAGQgCAHAAANIAAA0IgbAAIAAiOIAbAAIAAA0QAOgPARAAQAJgBAIAEQAHADAFAGQAEAGABAGIABAUIAAA9g");
	this.shape_26.setTransform(52,18.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AgfAuQgMgJgFgPIAcgEQACAIAGAEQAEAEAKAAQAKAAAFgEQAEgCAAgFQAAgDgCgCQgCgCgHgCQgggHgJgGQgMgIAAgOQgBgOALgJQALgJAWAAQAUAAALAHQAKAHAEANIgaAFQgBgGgFgDQgFgEgIAAQgKAAgFADQgDADAAADQAAADADACQADADAWAFQAVAFAJAHQAJAGAAANQgBAPgLAKQgNAKgWAAQgVAAgMgIg");
	this.shape_27.setTransform(40.1,20.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AgNBIIAAhnIAbAAIAABngAgNguIAAgYIAbAAIAAAYg");
	this.shape_28.setTransform(32,18.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AgwBIIAAiOIBhAAIAAAXIhEAAIAAAiIA7AAIAAAYIg7AAIAAA9g");
	this.shape_29.setTransform(23.4,18.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CCCCCC").s().p("Egx/ACyIAAljMBj/AAAIAAFjg");
	this.shape_30.setTransform(320,17.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]}).wait(2));

	// textboxes
	this.textbox3 = new cjs.Text("", "16px 'Arial'");
	this.textbox3.name = "textbox3";
	this.textbox3.lineHeight = 20;
	this.textbox3.lineWidth = 126;
	this.textbox3.parent = this;
	this.textbox3.setTransform(101.5,259.7);

	this.textbox2 = new cjs.Text("", "16px 'Arial'");
	this.textbox2.name = "textbox2";
	this.textbox2.lineHeight = 20;
	this.textbox2.lineWidth = 126;
	this.textbox2.parent = this;
	this.textbox2.setTransform(179.5,92.2);

	this.textbox1 = new cjs.Text("", "16px 'Arial'");
	this.textbox1.name = "textbox1";
	this.textbox1.lineHeight = 20;
	this.textbox1.lineWidth = 126;
	this.textbox1.parent = this;
	this.textbox1.setTransform(17,92.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.textbox1},{t:this.textbox2},{t:this.textbox3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(320,180,640,346);
// library properties:
lib.properties = {
	id: '010B0D3C2140C94798A86887AF075FAF',
	width: 640,
	height: 360,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['010B0D3C2140C94798A86887AF075FAF'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;