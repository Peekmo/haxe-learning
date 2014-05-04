package;

import flixel.FlxG;
import flixel.FlxSprite;
import flixel.FlxState;
import flixel.text.FlxText;
import flixel.ui.FlxButton;
import flixel.util.FlxMath;
import flash.filters.GlowFilter;
import flash.display.BitmapData;
import flixel.effects.FlxSpriteFilter;

/**
 * A FlxState which can be used for the actual gameplay.
 */
class PlayState extends FlxState
{
	var map : flixel.tile.FlxTilemap;

	var player : FlxSprite;

	var filter : GlowFilter;

	var sprFilter : flixel.effects.FlxSpriteFilter;

	/**
	 * Function that is called up when to state is created to set it up. 
	 */
	override public function create():Void
	{

		this.map = new flixel.tile.FlxTilemap();
		map.loadMap(openfl.Assets.getText("assets/data/map.csv"), "assets/images/tile.png", 30, 30);

		this.add(map);

		this.set_bgColor(0xcccc9999);

		// var pplayer = new FlxSprite(55, 110, "assets/images/sprite.png");
		this.player = new FlxSprite(55, 110, "assets/images/sprite.png");
		this.add(player);
		filter = new GlowFilter(0xFF0000, 1, 50, 50, 1.5, 1);
		
		sprFilter = new FlxSpriteFilter(this.player, 50, 50);
		sprFilter.addFilter(filter);

		// this.player.loadGraphic(, true, 50, 50);
		this.player.animation.add("defaut", [0]);
		this.player.animation.add("action", [1]);

		this.player.acceleration.y = 100;
		this.player.drag.x = 1200;

		this.player.alpha = 0.5;

		
		// var grid = FlxGridOverlay.create(10, 10, Std.int(this.map.width), Std.int(this.map.height), false, 0x09999999, 0x10999999);
		// this.add(grid);

		super.create();
	}
	
	/**
	 * Function that is called when this state is destroyed - you might want to 
	 * consider setting all objects this state uses to null to help garbage collection.
	 */
	override public function destroy():Void
	{
		super.destroy();
	}

	/**
	 * Function that is called once every frame.
	 */
	override public function update():Void
	{
		super.update();
		if (FlxG.collide(this.player, this.map)) {
			this.player.acceleration.y = 0;
			this.player.animation.play("default");
		}

		if (FlxG.keys.pressed.RIGHT) {
			this.player.velocity.x = 70;
			this.player.animation.play("action");
			this.player.facing = flixel.FlxObject.RIGHT;
		}

		if (FlxG.keys.pressed.LEFT) {
			this.player.velocity.x = -70;
			this.player.animation.play("action");
			this.player.facing = flixel.FlxObject.LEFT;
		}

		if (this.player.velocity.x == 0) {
			this.player.animation.play("default");
		}
	}	
}
