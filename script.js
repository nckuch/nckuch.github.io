/*global $, jQuery, alert*/

function change_surroundings(index, dir) {
    "use strict";
    var road = ["大學路", "勝利路", "育樂街", "長榮路", "東寧路"];
    var paragraph, len = parseInt(dir, 10) * 350;
    switch (index) {
        case 0:
            paragraph = "<h1>大學路</h1><p>後火車站一出來看到的第一條路就是大學路了! 一路走到底，左手邊分別是光復、成功、自強校區，而在成功校區對面的是勝利校區。這條路上的店家多不勝數(很多東西都可以在這附近買啦~)。在光復校區門口(俗稱光口)附近的這一段路有很多影印店、飲料店，光口對面更是有一條育樂街，想不到要吃什麼就到這裡吧~有很多東西可以吃的啊!<br><br>再繼續往前走左手邊是成功校區，右手邊是勝利校區。這裡有九乘九文具店，康是美，成大會館。在成大會館後方(勝利路接大學路附近)也有很多餐廳，不過價格就偏高一些了。去九乘九買東西一定要辦個會員卡的啦! 只要十塊而已買東西就可以打折囉!<br><br>再往前走有麥當勞(24hr)和肯德基(非24hr)。如果要討論報告，麥當勞也是個不錯的選擇喔。在肯德基的附近有兩條巷子(18巷、22巷)，裡面也有很多餐廳，價位也偏高，如果手頭充裕的話也是不錯的選擇。(台南有很多巷子，裡面都有很多驚喜!)</p>";

            break;
        case 1:
            paragraph = "<h1>勝利路</h1><p>勝利路上最有名的就是勝利早點(勝早)啦!<br><br> 當宵夜或早餐不知道吃什麼的話這裡也是個好選擇。他有一個隱藏版菜單，成大的學生俗稱為勝早全餐，畢業前一定要去試一次(不過最好找多一點人啦哈哈)。<br><br>另外這裡還有一家老丘早餐店(勝利路靠近大學路右手邊)，他的蔥抓餅還蠻推薦的喔!</p>";
            break;
        case 2:
            paragraph = "<h1>育樂街</h1><p>在光口的對面有一條街成大學生都知道，那就是育樂街! 育樂街分為前育樂街和後育樂街。<br><br>\
                         前育樂街呈現T字型，裡面除了吃的以外還有一些影印店、飲料店和水果店。在後面私心推薦個人覺得比較好吃的東西，雷店就不方便說了，之後可以問學長姐XD<br><br>\
	                     後育樂街的東西比較偏高價一點(一百附近或以上)，不過相對的食物就比較精緻一些。</p>";
            break;
        case 3:
            paragraph = "<h1>長榮路</h1><p>長榮路上有蠻多冰店的，特別的是大部分台南的冰店都還會賣鍋燒意麵喔!<br><br> 晚上這裡也可以來這裡吃宵夜呢。</p>";
            break;
        case 4:
            paragraph = "<h1>東寧路</h1><p>這裡是勝利校區後方，所以成大學生俗稱勝後，有許多連鎖店、服飾店等，可以滿足勝利校區同學的生活所需。<br><br><p>";
            break;
        case 5:
            paragraph = "<h1>小東路</h1><p>位在光復校區和成杏校區中間的一條路，男生的敬業宿舍也是在這條路上。<br><br>小東公園的對面有「很多」宵夜，包括有名的一點刈包和大水餃都在這裡喔!</p>";
            break;
    }

    $("#content-intro").fadeOut(500, function() {
        $("#content-intro").html(paragraph).fadeIn(500);
    });
    $("#map").fadeOut(500, function() {
        $("#map").attr("src", "./image/nckuMap/nckuMap" + index + ".jpg").fadeIn(500);
    });
    $("#left_btn").html("上一個:" + road[index - 1 < 0 ? 4 : index - 1]);
    $("#right_btn").html("下一個:" + road[index + 1 > 4 ? 0 : index + 1]);


    $("body").scrollTop($("#nckuMapImg").offset().top);
}

function toggleFloatUp(status) {
    if (status == true) {
        if ($("#float-up").css("visibility") == "visible") {
            $("#float-up").css({ visibility: "visible", opacity: "0" })
        }
        $("#float-up").css("visibility", "visible");
        $("#float-up").animate({
            opacity: "1"
        }, 700);
    } else {
        $("#float-up").animate({
            opacity: "0"
        }, 700, function() { $("#float-up").css("visibility", "hidden") });
    }
}

function showGeneralCourse(title) {

    var titleArr = ["基礎國文", "外國語言", "領域通識", "融合通識"];
    var index = titleArr.indexOf(title);
    var paragraph;
    toggleFloatUp(true);
    switch (index) {
        case 0:
            title = "基礎國文";
            paragraph = "中文系不用修，但是要用該系的選修(4學分)代替。";
            break;
        case 1:
            title = "外國語言";
            paragraph = "外國語言: 外文系不用修，但是要用該系的選修(4學分)代替。";
            break;
        case 2:
            title = "領域通識";
            paragraph = "領域通識分成五類: 人文學、社會科學、自然與工程科學、生命科學與健康、科技整合。<br><br>\
                        上面五個領域至少要修習三個領域，至少14學分。<br>\
                        <b class='float-up'>自己系上可能會不承認某些課程或是領域的學分喔! 要仔細看系上的說明!</b><br><br>\
	                    <b class='float-up'>*可以修其他科系的科目再轉成通識，但是可能有其他規範，還要在學期初向系上和通識中心申請喔!(像是日文就可以轉成人文學通識)</b>\
                        ";
            break;
        case 3:
            title = "融合通識";
            paragraph = "有「通識領袖論壇」、「臺灣綜合大學通識巡迴講座」、「通識專題講座」、「通識教育生活實踐」。<br>至少應修習1學分，最多6學分。<br>融合通識的學分是用點數來換的，像是前面提到的參加講座寫心得都會有點數喔! 9點換一學分<br><br>\
            (其他的規定可以參考「<a href='http://cge.ncku.edu.tw/files/13-1024-7830.php##105' class='float-up'>通識選修要點</a>」、「<a href='http://cge.ncku.edu.tw/files/15-1024-61554,c4915-1.php' class='float-up'>通識教育生活實踐</a>」)";
            break;
        default:
            title = "好棒呢!"
            paragraph = "太優秀了ㄅ<br>那就來總結一下吧!<br><br><b class='float-up'>語言要拿到8學分，領域通識(14~19學分，至少修過三領域)+融合通識(1~6學分)至少要拿到20學分</b>"
    }
    $(".float-up #title").html(title);
    $(".float-up #text").html(paragraph);
}

function showNounExplain(title) {
    var titleArr = ["通識", "補改選(棄選)", "退選", "二一", "搶課", "加簽"];
    var index = titleArr.indexOf(title);
    var paragraph;

    toggleFloatUp(true);
    switch (index) {
        case 0:
            paragraph = "和本科系比較無關的學分，但是畢業前學分數要達到要求<br><br>\
                       <b class='float-up'>語言要拿到8學分<br>領域通識(14~19學分，至少修過三領域)+融合通識(1~6學分)至少要拿到20學分</b>";
            break;
        case 1:
            paragraph = "開始上課後會有一段時間讓你決定要不要選這堂課，或是再加選其他課";
            break;
        case 2:
            paragraph = "補改選可以退學分費，成績單也不會有紀錄。退選不退學分費，也會有紀錄。<br>發現期中考太爛學期一定過不了的話，又有二一的危機，有些人就會去退選以免被二一";
            break;
        case 3:
            paragraph = "所有的學分加起來被當掉二分之一以上<br>(成大只要被雙二一就會被退學喔QQQ)";
            break;
        case 4:
            paragraph = "<b class='float-up'>不是所有的課都要搶喔!</b><br>\
                       初選一開始都是用抽籤的，想多修一點課可以在補改選的時候找還有餘額的課程(有人放棄有人搶的概念)";
            break;
        case 5:
            paragraph = "選課選不到(或是額滿了)，拿單子給教授看他還收不收學生(填加簽單)。";
            break;
    }
    $(".float-up #title").html(title);
    $(".float-up #text").html(paragraph);
}
$("document").ready(function() {

    $(".navbar button").click(function() {
        var pos = $('#' + this.value).offset().top;
        $("body").animate({
            scrollTop: pos
        }, 900);
    });

    $("#return").click(function() {
        $("body").animate({
            scrollTop: 0
        }, 900);
    });

    $("#show-work").hover(function() {
        $("#show-work-area").css("visibility", "visible");
    }, function() {
        $("#show-work-area").css("visibility", "hidden");
    });

    $(".mapBtn button").click(function() {
        var current_val = parseInt($("#content-intro").attr("value"), 10);
        current_val += parseInt(this.value, 10);
        if (current_val > 5) current_val = 0;
        else if (current_val < 0) current_val = 5;

        $("#content-intro").attr("value", current_val);

        change_surroundings(current_val, this.value);
    });

    $("#general-course-button button").click(function(e) {
        showGeneralCourse(this.innerHTML);
        e.stopPropagation();
    });
    $("#noun-explain-button button").click(function(e) {
        showNounExplain(this.innerHTML);
        e.stopPropagation();
    });

    $("body").click(function(e) {
        if (!$(e.target).hasClass("float-up")) {
            toggleFloatUp(false);
        }
    });
});

function updateClock() {
    var now = new Date();
    var month = now.getMonth() + 1;
    var date = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var timeVal = month * 100000000 + date * 1000000 + hour * 10000 + minute * 100 + second;
    $(".course-time-clock #time").html('現在時間:   ' + month + '/' + date + '  ' + hour + ':' + minute + ':' + second);

    var interval = "",
        intro = "",
        note = "";
    if (824090000 <= timeVal && timeVal <= 829170000) { //開始選課
        interval = "期限: ~ 8/29 17:00";
        intro = "課程全部內定，可以抽<b>通識</b>、<b>國文</b>、<b>軍訓</b>";
        note = "注意事項: <br>\
                &emsp;1.一年級經濟、心理、交管、工資、企管等 5 系微 積分不內定，要自己選課。<br>\
                &emsp;2. I5 014(課程代碼) 限醫學院大一新生選修，也要自己選課。<br>\
                &emsp;3.教育學程 8/24 開始選課。<br>\
                &emsp;<b>4.如果看到餘額是0的話也沒關係，選下去就對了。</b><br>";
    } else if (914130000 <= timeVal && timeVal <= 916130000) {
        interval = "期限: ~ 9/16 13:00";
        intro = "選英文囉!記得按照模組來選課喔!";
        note = "注意事項:<br> \
                &emsp;1.上下學期的英文課程名稱不能相同";
    } else if (918000000 <= timeVal && timeVal < 923000000) {
        interval = "期限: ~ 8/29 17:00";
        intro = "外文系可以加選模組三課程";
        note = "注意事項: <br>\
               &emsp;1.	完全沒抽中通識 ->這階段可以選。<br>\
               &emsp;2.	加簽A1英文。";
    } else if (925090000 <= timeVal && timeVal <= 928170000) {
        interval = "期限: ~ 9/28 17:00";
        intro = "A9通識以外的課可以直接棄補選<br>\
                通識可以直接棄選，補選的話要抽籤(現在看到額滿也可以選，可能有人退)<br>\
	           <b>＊棄選可以退學分費，退選不行喔!!!</b>";
        note = "注意事項:<br> \
                &emsp;1.若想修外系的課但人數已滿，可至各系領取加簽單，經該科授課教授簽名同意後，至各學系選課承辦人登陸選課（9/30 ~ 10/3）。";
    } else if (1006000000 <= timeVal && timeVal <= 1012000000) {
        interval = "期限: ~ 8/29 17:00";
        intro = "記得選課確認喔!";
        note = "注意事項: <br>\
                無";
    } else if (1006090000 <= timeVal && timeVal <= 1201170000) {
        interval = "期限: ~ 12/1 17:00";
        intro = "嗚嗚撐不下去就退選吧....";
        note = "注意事項: <br>\
                無";
    } else {
        intro = "沒有事情可以做:b~~~";
        note = "注意事項: <br>\
                無";
    }
    $(".course-time-clock #interval").html(interval);
    $(".course-time-clock #intro").html(intro);
    $(".course-time-clock #note").html(note);
}
setInterval(updateClock, 1000);