 
import '@/styles/index.scss'

let player = videojs('my-audio', {})
console.log(player)
function playStory() {
  alert("点击切换按钮")
}
function play() {
  alert("点击播放按钮")
  // player.requestFullscreen()
}
window.playStory = playStory
window.play = play
