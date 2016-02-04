# hoverDelay
jQuery – 鼠标经过(hover)事件的延时处理/hover的多次执行处理
基于jquery的hover事件函数
借鉴网上大牛的，在此做个记录

参数：
hoverDuring 变量：移入时延时时长
outDuring 变量：移出时延时时长
hoverEvent  函数：移入时执行事件
outEvent  函数：移出时执行事件

介绍：
$.noop(); 预留执行空函数

调用:
<script type="text/javascript" src="../js/jquery-1.10.1.min.js"></script>
<script type="text/javascript" src="../js/hoverDelay.js"></script>
<script type="text/javascript">
		$(function(){
		  $("#test").hoverDelay({
		      hoverDuring:1000,
		      outDuring:1000,
          hoverEvent: function(){
            alert("移入");
          },
          outEvent: function(){
            alert('移出')
          }
      });
		});
</script>
