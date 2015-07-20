enchant();

window.onload = function() {
	var core = new Core(320, 320);
	core.preload("./img/chara5.png");
	core.onload = function() {
		var knight = new Sprite(32, 32);
		knight.image = core.assets["./img/chara5.png"];
		knight.x = 50;
		knight.y = 50;
		core.rootScene.addChild(knight);
	}
	core.start();
};