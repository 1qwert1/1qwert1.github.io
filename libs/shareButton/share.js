
!(function(c,f,b,g){c(b).ready(function(){var d=c('meta[property="og:description"]').attr("content")||"",e=c('meta[property="og:image"]').attr("content")||"";goodshare={init:function(a,l){var h=goodshare,k=c.extend({type:"vk",url:location.href,title:b.title,text:d,image:e},c(a).data(),l);if(null!==h.popup(link=h[k.type](k)))return!1},vk:function(a){a=c.extend({url:location.href,title:b.title,text:d,image:e},a);return"http://vk.com/share.php?url="+encodeURIComponent(a.url)+"&title="+encodeURIComponent(a.title)+
    "&description="+encodeURIComponent(a.text)+"&image="+encodeURIComponent(a.image)},ok:function(a){a=c.extend({url:location.href,title:b.title},a);return"http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1&st.comments="+encodeURIComponent(a.title)+"&st._surl="+encodeURIComponent(a.url)},fb:function(a){a=c.extend({url:location.href,title:b.title},a);return"http://www.facebook.com/sharer.php?u="+encodeURIComponent(a.url)},lj:function(a){a=c.extend({url:location.href,title:b.title,text:d},a);return"http://livejournal.com/update.bml?subject="+
    encodeURIComponent(a.title)+"&event="+encodeURIComponent('<a href="'+a.url+'">'+a.title+"</a> "+a.text)},tw:function(a){a=c.extend({url:location.href,title:b.title},a);return"http://twitter.com/share?url="+encodeURIComponent(a.url)+"&text="+encodeURIComponent(a.title)},gp:function(a){a=c.extend({url:location.href},a);return"https://plus.google.com/share?url="+encodeURIComponent(a.url)},mr:function(a){a=c.extend({url:location.href,title:b.title,text:d,image:e},a);return"http://connect.mail.ru/share?url="+
    encodeURIComponent(a.url)+"&title="+encodeURIComponent(a.title)+"&description="+encodeURIComponent(a.text)+"&imageurl="+encodeURIComponent(a.image)},li:function(a){a=c.extend({url:location.href,title:b.title,text:d},a);return"http://www.linkedin.com/shareArticle?url="+encodeURIComponent(a.url)+"&text="+encodeURIComponent(a.title)+"&summary="+encodeURIComponent(a.text)+"&mini=true"},tm:function(a){a=c.extend({url:location.href,title:b.title,text:d},a);return"https://www.tumblr.com/widgets/share/tool?canonicalUrl="+
    encodeURIComponent(a.url)+"&title="+encodeURIComponent(a.title)+"&caption="+encodeURIComponent(a.text)+"&posttype=link"},bl:function(a){a=c.extend({url:location.href,title:b.title},a);return"https://www.blogger.com/blog-this.g?u="+encodeURIComponent(a.url)+"&n="+encodeURIComponent(a.title)},pt:function(a){a=c.extend({url:location.href,title:b.title,image:c('meta[property="og:image"]').attr("content")},a);return"https://www.pinterest.com/pin/create/button/?url="+encodeURIComponent(a.url)+"&media="+
    encodeURIComponent(a.image)+"&description="+encodeURIComponent(a.title)},en:function(a){a=c.extend({url:location.href,title:b.title,text:d},a);return"https://www.evernote.com/clip.action?url="+encodeURIComponent(a.url)+"&title="+encodeURIComponent(a.title)+"&body="+encodeURIComponent(a.text+'<br/><a href="'+a.url+'">'+a.title+"</a>")},di:function(a){a=c.extend({url:location.href,title:b.title},a);return"http://digg.com/submit?url="+encodeURIComponent(a.url)+"&title="+encodeURIComponent(a.title)},
    rd:function(a){a=c.extend({url:location.href,title:b.title},a);return"http://www.reddit.com/submit?url="+encodeURIComponent(a.url)+"&title="+encodeURIComponent(a.title)},de:function(a){a=c.extend({url:location.href,title:b.title},a);return"https://delicious.com/save?url="+encodeURIComponent(a.url)+"&title="+encodeURIComponent(a.title)},su:function(a){a=c.extend({url:location.href,title:b.title},a);return"http://www.stumbleupon.com/submit?url="+encodeURIComponent(a.url)+"&title="+encodeURIComponent(a.title)},
    po:function(a){a=c.extend({url:location.href,title:b.title},a);return"https://getpocket.com/save?url="+encodeURIComponent(a.url)+"&title="+encodeURIComponent(a.title)},sb:function(a){a=c.extend({url:location.href,title:b.title,text:d},a);return"http://surfingbird.ru/share?url="+encodeURIComponent(a.url)+"&title="+encodeURIComponent(a.title)+"&description="+encodeURIComponent(a.text)},lr:function(a){a=c.extend({url:location.href,title:b.title},a);return"http://www.liveinternet.ru/journal_post.php?action=n_add&cnurl="+
        encodeURIComponent(a.url)+"&cntitle="+encodeURIComponent(a.title)},bf:function(a){a=c.extend({url:location.href,title:b.title},a);return"https://buffer.com/add?url="+encodeURIComponent(a.url)+"&text="+encodeURIComponent(a.title)},ip:function(a){a=c.extend({url:location.href,title:b.title},a);return"https://www.instapaper.com/edit?url="+encodeURIComponent(a.url)+"&title="+encodeURIComponent(a.title)},ra:function(a){a=c.extend({url:location.href},a);return"http://www.readability.com/save?url="+encodeURIComponent(a.url)},
    xi:function(a){a=c.extend({url:location.href},a);return"https://www.xing.com/spi/shares/new?url="+encodeURIComponent(a.url)},wp:function(a){a=c.extend({url:location.href,title:b.title,text:d,image:e},a);return"https://wordpress.com/wp-admin/press-this.php?u="+encodeURIComponent(a.url)+"&t="+encodeURIComponent(a.title)+"&s="+encodeURIComponent(a.text)+"&i="+encodeURIComponent(a.image)+"&v=2"},bd:function(a){a=c.extend({url:location.href,title:b.title,text:d},a);return"http://cang.baidu.com/do/add?it="+
        encodeURIComponent(a.title)+"&iu="+encodeURIComponent(a.url)+"&dc="+encodeURIComponent(a.text)+"&fr=ien"},rr:function(a){a=c.extend({url:location.href,title:b.title},a);return"http://share.renren.com/share/buttonshare.do?link="+encodeURIComponent(a.url)+"&title="+encodeURIComponent(a.title)},wb:function(a){a=c.extend({url:location.href,title:b.title},a);return"http://service.weibo.com/share/share.php?url="+encodeURIComponent(a.url)+"&title="+encodeURIComponent(a.title)},tg:function(a){a=c.extend({url:location.href,
        title:b.title},a);return"tg://msg?text="+encodeURIComponent(a.title+" "+a.url)},vi:function(a){a=c.extend({url:location.href,title:b.title},a);return"viber://forward?text="+encodeURIComponent(a.title+" "+a.url)},wa:function(a){a=c.extend({url:location.href,title:b.title},a);return"whatsapp://send?text="+encodeURIComponent(a.title+" "+a.url)},ln:function(a){a=c.extend({url:location.href,title:b.title},a);return"line://msg/text/"+encodeURIComponent(a.title+" "+a.url)},popup:function(a){return f.open(a,
        "","left="+(screen.width-630)/2+",top="+(screen.height-440)/2+",toolbar=0,status=0,scrollbars=0,menubar=0,location=0,width=630,height=440")}};c.fn.getCount=function(){var a=function(a){return 999<a&&999999>=a?a/1E3+"k":999999<a?">1M":a},b=function(a){return 0<c(a).length};b('[data-counter="vk"]')&&(c.getJSON("https://vk.com/share.php?act=count&index=1&url="+encodeURIComponent(location.href)+"&callback=?",function(a){}),f.VK||(VK={}),VK.Share={count:function(b,d){c('[data-counter="vk"]').text(a(d))}});
    b('[data-counter="fb"]')&&c.getJSON("https://graph.facebook.com/?id="+encodeURIComponent(location.href)+"&callback=?",function(b){b.shares===g?c('[data-counter="fb"]').text("0"):c('[data-counter="fb"]').text(a(b.shares))});b('[data-counter="ok"]')&&(c.getJSON("https://connect.ok.ru/dk?st.cmd=extLike&uid=1&ref="+encodeURIComponent(location.href)+"&callback=?",function(a){}),f.ODKL||(ODKL={}),ODKL.updateCount=function(b,d){c('[data-counter="ok"]').text(a(d))});b('[data-counter="gp"]')&&c.ajax({type:"POST",
        url:"https://clients6.google.com/rpc",processData:!0,contentType:"application/json",data:JSON.stringify({method:"pos.plusones.get",id:location.href,params:{nolog:!0,id:location.href,source:"widget",userId:"@viewer",groupId:"@self"},jsonrpc:"2.0",key:"p",apiVersion:"v1"}),success:function(b){c('[data-counter="gp"]').text(a(b.result.metadata.globalCounts.count))}});b('[data-counter="mr"]')&&c.getJSON("https://connect.mail.ru/share_count?url_list="+encodeURIComponent(location.href)+"&callback=1&func=?",
        function(b){var d=encodeURIComponent(location.href);for(d in b)if(b.hasOwnProperty(d)){var e=b[d].shares;break}c.isEmptyObject(b)?c('[data-counter="mr"]').text("0"):c('[data-counter="mr"]').text(a(e))});b('[data-counter="li"]')&&c.getJSON("https://www.linkedin.com/countserv/count/share?url="+encodeURIComponent(location.href)+"&callback=?",function(b){c('[data-counter="li"]').text(a(b.count))});b('[data-counter="tm"]')&&c.getJSON("https://api.tumblr.com/v2/share/stats?url="+encodeURIComponent(location.href)+
        "&callback=?",function(b){c('[data-counter="tm"]').text(a(b.response.note_count))});b('[data-counter="pt"]')&&c.getJSON("https://api.pinterest.com/v1/urls/count.json?url="+encodeURIComponent(location.href)+"&callback=?",function(b){c('[data-counter="pt"]').text(a(b.count))});b('[data-counter="rd"]')&&c.getJSON("https://www.reddit.com/api/info.json?url="+encodeURIComponent(location.href)+"&jsonp=?",function(b){b=b.data.children;0===b.length?c('[data-counter="rd"]').text("0"):c('[data-counter="rd"]').text(a(b[0].data.score))});
    b('[data-counter="su"]')&&c.getJSON("https://query.yahooapis.com/v1/public/yql?q="+encodeURIComponent('select * from html where url="http://www.stumbleupon.com/services/1.01/badge.getinfo?url='+location.href+'" and xpath="*"')+"&format=json&callback=?",function(b){b=c.parseJSON(b.query.results.html.body);b.result.views===g?c('[data-counter="su"]').text("0"):c('[data-counter="su"]').text(a(b.result.views))});b('[data-counter="po"]')&&c.getJSON("https://query.yahooapis.com/v1/public/yql?q="+encodeURIComponent('select * from html where url="https://widgets.getpocket.com/v1/button?count=horizontal&url='+
            location.href+'" and xpath="*"')+"&format=json&callback=?",function(b){c('[data-counter="po"]').text(a(b.query.results.html.body.div.a.span.em.content))});b('[data-counter="bf"]')&&c.getJSON("https://api.bufferapp.com/1/links/shares.json?url="+encodeURIComponent(location.href)+"&callback=?",function(b){c('[data-counter="bf"]').text(a(b.shares))});b('[data-counter="xi"]')&&c.getJSON("https://query.yahooapis.com/v1/public/yql?q="+encodeURIComponent('select * from html where url="https://www.xing-share.com/app/share?op=get_share_button;counter=top;url='+
            location.href+'" and xpath="*"')+"&format=json&callback=?",function(b){c('[data-counter="xi"]').text(a(b.query.results.html.body.div[0].div[0].span.content))})};c(b).on("click",".goodshare",function(a){a.preventDefault();goodshare.init(this)});c(b).getCount()})})(jQuery,window,document);
