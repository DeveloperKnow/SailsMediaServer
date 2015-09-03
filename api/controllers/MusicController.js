/**
 * MusicController
 *
 * @description :: Server-side logic for managing Musics
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 var path = require('path');
 var fs = require('fs');
 var ms = require('mediaserver');

module.exports = {
	'index': function (request, response) {
  	var params = request.params.all();
		var AUDIOFILE = path.join('assets//Music//',params.song);
		ms.pipe(request,response,path.resolve(AUDIOFILE));
	}
};
