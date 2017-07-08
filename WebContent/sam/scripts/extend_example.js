var obj = { policyNo : "A16010101"};

obj = $.extend(obj, {policyNo:'A170101'}, {contractNo:'B170101'})


////////////////////////////

var obj1 = {
		policyInfo:{policyNo:'A160101', carNo:'50나1990'}
		,contractNo:'B170101'
};
var obj2 = {
		policyInfo:{carTypeCd:'2A'}
		,contractNo:'B170101'
};
var obj3 = $.extend(obj1, obj2);
var obj4 = $.extend(true, obj1, obj2);

