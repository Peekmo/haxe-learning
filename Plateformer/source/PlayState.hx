package;

import flixel.FlxG;
import flixel.FlxSprite;
import flixel.FlxState;
import flixel.text.FlxText;
import flixel.ui.FlxButton;
import flixel.util.FlxMath;
import flixel.tile.FlxTilemap;
import openfl.Assets;

/**
 * A FlxState which can be used for the actual gameplay.
 */
class PlayState extends FlxState
{
	private var map : FlxTilemap;

	private var player : FlxSprite;

	/**
	 * Function that is called up when to state is created to set it up. 
	 */
	override public function create():Void
	{
		this.map = new FlxTilemap();
		this.map.loadMap(Assets.getText("assets/data/map.txt"), "assets/images/tiles.png");
		this.add(map);

		this.player = new FlxSprite();
		this.player.x = 40;
		this.player.y = 70;
		this.player.maxVelocity.set(80, 100);
		this.player.loadGraphic("assets/images/player.png", true, true, 25, 34);
		this.add(player);
		this.player.acceleration.y = 100;
		this.player.drag.x = 100;

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
		if (FlxG.keys.pressed.LEFT) {
			this.player.velocity.x = -70;
		}

		if (FlxG.keys.pressed.RIGHT) {
			this.player.velocity.x = 70;
		}

		if (FlxG.keys.pressed.UP) {
			this.player.velocity.y = -130;
		}

		FlxG.collide(this.map, this.player);
	}	
}