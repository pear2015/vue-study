<template>
  <div class="video_box">
      zzzzzzzzzzzzzzzzzzz
    <!-- <video ref="videoPlayer" class="video-js" :src="this.videoSrc"></video> -->
     <video ref="videoPlayer" class="video-js"  width="100%" height="100%" src="https://swsdl.vivo.com.cn/appstore/developer/uploadfile/20180323/20180323183010837.mp4"></video>
  </div>
</template>

<script>
export default {
  name: "VideoPlayer",
  data() {
    return {
       videoSrc:"../video/test1.mp4",
    };
  },
  mounted() {
      //this.videoSrc="E:\\vue-project\\demo\\src\\asset\\test.mp4";
  }
};
</script>