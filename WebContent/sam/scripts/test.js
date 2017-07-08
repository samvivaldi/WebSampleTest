var test =
{
	src : 'https://gs.saro.me',
	out : function()
	{
		// 일반함수
		(function()
		{
			console.log('일반함수');
			// 문제발생 일반함수의 this는 이 함수 그 자체를 가리킨다.
			console.log(this.src + ":" + this);
			
		})();
		
		// 일반함수 + 바인드
		(function()
		{
			console.log('일반함수 + 바인드');
			// 실행은 되지만 bind는 여러번 사용할 수 없다.
			console.log(this.src + ":" + this);
		//}).bind(this)();
		}).call(this);
		
		// 화살표함수
		(() => 
		{
			console.log('화살표함수');
			// 화살표 함수는 이 상위객체 즉 out의 this를 가리킨다.
			console.log(this.src+ ":" + this);
			// apply 카피 가아닌 call 참고 라는걸 보여주기위해
			this.text = '가리사니 개발자공간';
		})();
	}
};
var functionCaller = function(func)
{
	func();
};

//Attribute (cellpadding) is obsolete. Its use is discouraged in HTML5 documents.	1195909_1410.html	/www_internet_mobile/www_internet_mobile/AsianPlatformInternet/html/axacms/cs/notice	line 118	HTML Problem