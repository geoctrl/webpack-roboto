/**
 * Embed
 * @param fonts {Array}
 */

module.exports = {

	embed(fonts) {
		if (fonts == undefined) {
			require('./sass/roboto.scss');
		} else if (fonts.constructor == Array) {

			if (fonts.length == 0) {
				require('./sass/roboto.scss');
			} else {
				for (var font in fonts) {
					require('./sass/roboto-'+ fonts[font] +'.scss');
				}
			}
		} else {
			console.error('[webpack-roboto] Invalid Argument - Unable to embed font -- Only [Array] and [empty] are allowed');
		}
	}
};


