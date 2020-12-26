<template>
  <div class="video_box">
    <video ref="videoPlayer" class="video-js vjs-big-play-centered" width="100%" height="100%"></video>
    <div class="menu">
      <input type="button" value="上一首" @click="pre" />
      <input type="button" value="下一首" @click="next" />
    </div>
  </div>
</template>

<script>
import Video from "video.js";
import "video.js/dist/video-js.css";
export default {
  name: "VideoPlayer",
  data() {
    return {
      //  videoSrc:"../video/test1.mp4",
      playIndex: 0,
      myPlayer: null,
      videoList: [
        {
          src:
            "https://swsdl.vivo.com.cn/appstore/developer/uploadfile/20180323/20180323183010837.mp4",
          type: "video/mp4"
        },
        {
          src:
            "http://ips.ifeng.com/video19.ifeng.com/video09/2020/07/22/p36622473-102-9987636-103737/index.m3u8?ifsign=1",
          type: "application/x-mpegURL"
        },
        {
          src:
            "http://ips.ifeng.com/video19.ifeng.com/video09/2020/08/17/p36946568-102-9987636-154925/index.m3u8?ifsign=1",
          type: "application/x-mpegURL"
        }
      ]
    };
  },
  mounted() {
    this.initVideo();
  },
  methods: {
    initVideo() {
      //初始化视频方法
      //  handleManifestRedirect 设置为true 可处理跨域
      this.myPlayer = Video(this.$refs.videoPlayer, {
        //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
        controls: true,
        //自动播放属性,muted:静音播放
        //autoplay: "true",
        //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
        preload: "auto",
        //设置视频播放器的显示宽度（以像素为单位）
        width: "800px",
        //设置视频播放器的显示高度（以像素为单位）
        height: "400px"
      });
      this.myPlayer.src(this.videoList[this.playIndex]);
    },
    pre() {
      this.playIndex = this.playIndex - 1 < 0 ? 0 : this.playIndex - 1;
      this.initVideo();
      this.myPlayer.load(this.videoList[this.playIndex]);
    },
    next() {
      this.playIndex =
        this.playIndex + 1 > this.videoList.length - 1 ? 0 : this.playIndex + 1;
      this.initVideo();
      this.myPlayer.load(this.videoList[this.playIndex]);
    }
  }
};
</script>
<style scoped>
.video_box {
  width: 100%;
}
.video_box .video-js {
  margin-bottom: 52px;
  width: 100%;
}
.menu {
  display: flex;
  justify-content: space-evenly;
}
.menu input {
  width: 150px;
  height: 60px;
}
.video_box >>> .vjs-big-play-button {
  font-size: 4.5em;
  line-height: 2.3em;
  height: 2.5em;
  width: 2.5em;
  border-radius: 2.5em;
  background-color: rgba(115, 133, 159, 0.5);
  border-width: 0.12em;
  margin-top: -1.25em;
  margin-left: -1.75em;
}
</style>