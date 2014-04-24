import flixel.FlxSprite;

class Player extends FlxSprite
{
	public function new(x: Int, y: Int) : Void
	{
		super();

		this.x = x;
		this.y = y;
	}

	public function initAnimations() : Void
	{
		this.animation.add("Face", [19]);
		this.animation.play("Face");
	}
}