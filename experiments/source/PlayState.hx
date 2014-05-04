package;

import flixel.FlxG;
import flixel.FlxSprite;
import flixel.FlxState;
import flixel.text.FlxText;
import flixel.ui.FlxButton;
import flixel.util.FlxMath;
import flixel.tile.FlxTilemap;
import openfl.Assets;
import flixel.addons.nape.FlxNapeSprite;
import flixel.addons.nape.FlxNapeState;
import flixel.effects.particles.FlxEmitterExt;
import flixel.effects.particles.FlxParticle;
import flash.filters.GlowFilter;
import flixel.effects.FlxSpriteFilter;

/**
 * A FlxState which can be used for the actual gameplay.
 */
class PlayState extends FlxState
{
	private var map : FlxTilemap;

	private var sprite : FlxSprite;

	private var particles : FlxEmitterExt; 

	/**
	 * Function that is called up when to state is created to set it up. 
	 */
	override public function create():Void
	{
		super.create();

		this.map = new FlxTilemap();
		this.map.loadMap(Assets.getText("assets/data/base.csv"), "assets/images/base.png", 50, 50);
		this.add(this.map);

		this.set_bgColor(0xFFFFFFFF);

		this.sprite = new FlxSprite(200, 200);
		this.sprite.loadGraphic("assets/images/sprite.png", true, 30, 30);
		this.sprite.velocity.y = 500;
		this.sprite.velocity.x = 500;
		this.sprite.acceleration.y = 400;
		this.add(this.sprite);

		var filter = new GlowFilter(0xFF0000, 0.9, 30, 30, 1.5, 1);
		var sprFilter = new FlxSpriteFilter(this.sprite, 30, 30);
		sprFilter.addFilter(filter);

		this.sprite.setSize(35, 35);

		this.particles = new FlxEmitterExt();
		this.particles.setMotion(0, 5, 0.9, 360, 50, 0.3);
		this.particles.maxSize = 500;
		this.particles.setAlpha(0.4, 0.6, 0.1, 0.1);
		// this.particles.gravity = 300;

		var particle : FlxParticle = null;
		for (i in 0...this.particles.maxSize) {
			particle = new FlxParticle();
			particle.makeGraphic(2, 2, flixel.util.FlxColor.BROWN);
			this.particles.add(particle);
		}

		// this.particles.makeParticles(particle, 50, 0, true, 0);
		this.add(this.particles);
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
		FlxG.collide(this.sprite, this.map);

		if (this.sprite.velocity.y == 0 && this.sprite.isTouching(flixel.FlxObject.FLOOR)) {
			this.sprite.velocity.y = -500;
			this.particles.x = this.sprite.x;
			this.particles.y = this.sprite.y;
			this.particles.start(true, 5, 0, 50);
			this.particles.update();
		}

		if (this.sprite.velocity.y == 0 && this.sprite.isTouching(flixel.FlxObject.UP)) {
			this.sprite.velocity.y = 500;
			this.particles.x = this.sprite.x;
			this.particles.y = this.sprite.y;
			this.particles.start(true, 5, 0, 50);
			this.particles.update();
		}

		if (this.sprite.velocity.x == 0 && this.sprite.isTouching(flixel.FlxObject.LEFT)) {
			this.sprite.velocity.x = 500;
			this.particles.x = this.sprite.x;
			this.particles.y = this.sprite.y;
			this.particles.start(true, 5, 0, 50);
			this.particles.update();
		}

		if (this.sprite.velocity.x == 0 && this.sprite.isTouching(flixel.FlxObject.RIGHT)) {
			this.sprite.velocity.x = -500;
			this.particles.x = this.sprite.x;
			this.particles.y = this.sprite.y;
			this.particles.start(true, 5, 0, 50);
			this.particles.update();
		}
	}	
}