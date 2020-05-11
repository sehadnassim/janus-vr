
var port=localStorage.getItem('containerPort')
   console.log(localStorage.getItem('containerPort'))
var stream_config = {
	ws_url: "ws://127.0.0.1:3030/ws",
	realm: "remote_stream",
	local_mode: true,
	//stream_url: "rtmp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov",
	stream_url: "rtmp://82.128.135.199/live/test",
	nb_samples: 20,
}


try {
	module.exports = stream_config;
} catch(e) {

}
