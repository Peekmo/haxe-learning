#ifndef INCLUDED_Hello
#define INCLUDED_Hello

#ifndef HXCPP_H
#include <hxcpp.h>
#endif

HX_DECLARE_CLASS0(Hello)


class HXCPP_CLASS_ATTRIBUTES  Hello_obj : public hx::Object{
	public:
		typedef hx::Object super;
		typedef Hello_obj OBJ_;
		Hello_obj();
		Void __construct();

	public:
		static hx::ObjectPtr< Hello_obj > __new();
		static Dynamic __CreateEmpty();
		static Dynamic __Create(hx::DynamicArray inArgs);
		~Hello_obj();

		HX_DO_RTTI;
		static void __boot();
		static void __register();
		void __Mark(HX_MARK_PARAMS);
		void __Visit(HX_VISIT_PARAMS);
		::String __ToString() const { return HX_CSTRING("Hello"); }

		static Void main( );
		static Dynamic main_dyn();

};


#endif /* INCLUDED_Hello */ 
