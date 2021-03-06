package;

import flixel.FlxG;
import flixel.FlxSprite;
import flixel.FlxState;
import flixel.text.FlxText;
import flixel.ui.FlxButton;
import flixel.util.FlxMath;

/**
 * A FlxState which can be used for the actual gameplay.
 */
class PlayState extends FlxState
{
	private var map : flixel.tile.FlxTilemap;

	private var player : Player;

	/**
	 * Function that is called up when to state is created to set it up. 
	 */
	override public function create():Void
	{
		this.map = new flixel.tile.FlxTilemap();
		this.map.width = 300;
		this.map.height = 300;

		this.add(map);

		this.player = new Player(10, 10);
		this.player.loadGraphic("assets/images/soldier.png", true, false, 64, 64);
		this.player.initAnimations();
		this.add(player);

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
	}	
}