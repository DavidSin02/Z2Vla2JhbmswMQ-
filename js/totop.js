$(window).scroll(function() {
    $(window).scrollTop() > 500 ? $("#rocket").addClass("show") : $("#rocket").removeClass("show");
});
$("#rocket").click(function() {
    $("#rocket").addClass("launch");
    $("html, body").animate({
        scrollTop: 0
    }, 500, function() {
        $("#rocket").removeClass("show launch");
    });
    return false;
});

$("#secondary > section:nth-child(2) > ul > li > a.image.featured > img").jqthumb({
    classname      : 'featured',
    width          : '200px',
    height         : '150px'
});

/**/
function setClipboardText(event){
            event.preventDefault();//阻止元素發生默認的行為（例如，當點擊提交按鈕時阻止對錶單的提交）。
            var node = document.createElement('div');
            //對documentfragment不熟，不知道怎麼獲取裡面的內容，用了一個比較笨的方式
            node.appendChild(window.getSelection().getRangeAt(0).cloneContents());
            //getRangeAt(0)返回對基於零的數字索引與傳遞參數匹配的選擇對像中的範圍的引用。對於連續選擇，參數應為零。
            var htmlData = '<div>'
                + node.innerHTML
                + '<br/><br/>著作權歸作者所有。 <br/>'
                + '商業轉載請聯繫作者獲得授權，非商業轉載請註明出處。 <br/>'
                + '來源：www.geekbank.cf<br/>鏈接：<a href="https://www.geekbank.cf" >www.geekbank.cf</a><br/>'
                + '</div>';
            var textData = window.getSelection().getRangeAt(0)
                + '\n\n著作權歸作者所有。 \n'
                + '商業轉載請聯繫作者獲得授權，非商業轉載請註明出處。 \n'
                + '來源：www.geekbank.cf\n\n';
            if(event.clipboardData){
                event.clipboardData.setData("text/html", htmlData);
                //setData(剪貼板格式, 數據) 給剪貼板賦予指定格式的數據。返回 true 表示操作成功。
                event.clipboardData.setData("text/plain",textData);
            }
            else if(window.clipboardData){ //window.clipboardData的作用是在頁面上將需要的東西複製到剪貼板上，提供了對於預定義的剪貼板格式的訪問，以便在編輯操作中使用。
                return window.clipboardData.setData("text", textData);
            }
        };
     
        document.addEventListener('copy',function(e){
            setClipboardText(e);
});