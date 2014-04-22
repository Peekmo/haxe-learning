package;

import flixel.FlxG;
import flixel.FlxSprite;
import flixel.FlxState;
import flixel.text.FlxText;
import flixel.ui.FlxButton;
import flixel.util.FlxMath;
import flixel.tile.FlxTilemap;
import openfl.Assets;
import flixel.group.FlxGroup;
import flixel.FlxObject;

/**
 * A FlxState which can be used for the actual gameplay.
 */
class PlayState extends FlxState
{
	private var map : FlxTilemap;

	private var player : FlxSprite;

	private var isJumping : Bool = false;

	private var bananas : FlxGroup;

	private var text : FlxText;

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
		this.player.acceleration.y = 100;
		this.player.drag.x = 100;

		this.player.loadGraphic("assets/images/player.png", true, true, 25, 34);
		this.player.animation.add("default", [0,1], 3);
		this.player.animation.add("jump", [2]);
		this.player.animation.play("default");

		this.add(player);

		this.bananas = new FlxGroup();
		this.add(this.bananas);
		
		for (i in 0...10) {
			var banana : FlxSprite = new FlxSprite(Math.random() * this.map.width, Math.random() * this.map.height);
			banana.loadGraphic("assets/images/collectible.png");
			this.bananas.add(banana);
		}

		this.text = new FlxText(0, 0, 50, "- Welcome -");
		this.add(this.text);

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
		FlxG.collide(this.map, this.player);
		FlxG.overlap(this.player, this.bananas, function(playerRef: FlxObject, collectibleRef: FlxObject) : Void {
			this.bananas.remove(collectibleRef);
		});

		if (FlxG.keys.pressed.LEFT) {
			this.player.velocity.x = -70;
			this.player.facing = flixel.FlxObject.LEFT;
		}

		if (FlxG.keys.pressed.RIGHT) {
			this.player.velocity.x = 70;
			this.player.facing = flixel.FlxObject.RIGHT;
		}

		if (0 == this.player.velocity.y && FlxG.keys.pressed.UP) {
			this.player.velocity.y = -130;
			this.player.animation.play("jump");
			this.isJumping = true;
		}

		if (this.isJumping && this.player.velocity.y == 0) {
			this.isJumping = false;
			this.player.animation.play("default");
		}
	}	
}