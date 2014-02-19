package haxe.root;
import haxe.root.*;

@SuppressWarnings(value={"rawtypes", "unchecked"})
public  class Fun_397c624c<T> extends haxe.lang.Function
{
	public    Fun_397c624c(haxe.root.Array<java.lang.Object> i, haxe.root.Array<haxe.root.Array> _g)
	{
		super(0, 0);
		this.i = i;
		this._g = _g;
	}
	
	
	@Override public   java.lang.Object __hx_invoke0_o()
	{
		T[] __temp_stmt26 = ((haxe.root.Array<T>) (((haxe.root.Array) (this._g.__get(0)) )) ).__a;
		int __temp_stmt27 = 0;
		{
			int __temp_arrIndex15 = 0;
			int __temp_arrVal13 = ((int) (haxe.lang.Runtime.toInt(this.i.__get(__temp_arrIndex15))) );
			int __temp_arrRet14 = __temp_arrVal13++;
			int __temp_expr28 = ((int) (haxe.lang.Runtime.toInt(this.i.__set(__temp_arrIndex15, __temp_arrVal13))) );
			__temp_stmt27 = __temp_arrRet14;
		}
		
		return __temp_stmt26[__temp_stmt27];
	}
	
	
	public  haxe.root.Array<java.lang.Object> i;
	
	public  haxe.root.Array<haxe.root.Array> _g;
	
}


