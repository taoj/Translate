angular
	.module('common',[])

	.constant('endpoints',{
		getTranslateUrl: function (source, target, text) {
			return 'https://translate.googleapis.com/translate_a/single?client=gtx&sl='
				+ source + "&tl=" + target  + "&dt=t&q=" + encodeURI(text);
		}
	})