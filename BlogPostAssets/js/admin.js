/* 用于获得文章信息便于管理
var pages = [];

function getPages() {
    var boxes = document.getElementById('mainContent').getElementsByClassName('boxes');
    for (let i = 0; i < boxes.length; i ++) {
        pages.push({});
        pages[i].title = boxes[i].getElementsByTagName('a')[0].innerHTML;
        pages[i].link = boxes[i].getElementsByTagName('a')[0].getAttribute('href');
        pages[i].tag = boxes[i].getElementsByClassName('tag')[0].innerHTML;
        pages[i].tag_link = boxes[i].getElementsByClassName('tag')[0].parentNode.getAttribute('href');
        let temp = [];
        for (let j = 0; j < boxes[i].getElementsByClassName('tag').length; j ++) {
            temp.push(boxes[i].getElementsByClassName('tag')[j].innerHTML);
        }
        pages[i].tags = temp;
        temp = '';
        for (let j = 0; j < boxes[i].getElementsByTagName('p').length; j ++) {
            temp += boxes[i].getElementsByTagName('p')[j].outerHTML;
        }
        pages[i].brief = temp;
    }
    console.log(pages);
}
*/

var pages = [
    {
        "title": "题解 P4016 【负载平衡问题】",
        "link": "../article/tj-p4016.html",
        "tags": [
            "题解",
            "贪心",
        ],
        "tags_link": [
            "../tags/tag-ti-jie.html",
            "../tags/tag-tan-xin.html",
        ],
        "brief": "<p><a href=\"https://www.luogu.org/problem/P4016\">原题链接</a></p><p>这玩意出自“网络流24题”？可是。。。好像是贪心啊。</p>"
    },
    {
        "title": "题解 P1951 收费站_NOI导刊2009提高（2）",
        "link": "../article/tj-p1951.html",
        "tags": [
            "最短路",
            "二分"
        ],
        "tags_link": [
            "../tags/tag-sssp.html",
            "../tags/tag-er-fen.html"
        ],
        "brief": "<p><a href=\"https://www.luogu.org/problem/P1951\">原题链接</a></p><p>二分答案+SSSP</p>"
    },
    {
        "title": "二分图匹配项目进一步开发！",
        "link": "../article/eft-plus.html",
        "tags": [
            "二分图匹配",
            "网络流"
        ],
        "tags_link": [
            "../tags/tag-eft.html",
            "../tags/tag-net-flow.html"
        ],
        "brief": "<p>浅谈进阶二分图匹配</p>"
    },
    {
        "title": "题解 P3355 【骑士共存问题】",
        "link": "../article/tj-p3355.html",
        "tags": [
            "题解",
            "网络流"
        ],
        "tags_link": [
            "../tags/tag-ti-jie.html",
            "../tags/tag-net-flow.html"
        ],
        "brief": "<p><a href=\"https: //www.luogu.org/problemnew/show/P3355\">原题链接</a></p>"
    },
    {
        "title": "题解 P2891 【[USACO07OPEN]吃饭Dining】",
        "link": "../article/tj-p2891.html",
        "tags": [
            "题解",
            "网络流"
        ],
        "tags_link": [
            "../tags/tag-ti-jie.html",
            "../tags/tag-net-flow.html"
        ],
        "brief": "<p><a href=\"https: //www.luogu.org/problemnew/show/P2891\">原题链接</a></p><p>看了一下题解，里面的大佬之气极为强烈……于是我决定从一个萌新的角度来解释这道题</p>"
    },
    {
        "title": "二分图匹配项目研制顺利进行！",
        "link": "../article/eft-pi-pei.html",
        "tags": [
            "二分图匹配"
        ],
        "tags_link": [
            "../tags/tag-eft.html"
        ],
        "brief": "<p>浅谈简单的二分图匹配</p>"
    },
    {
        "title": "我军IO优化装备完成！",
        "link": "../article/io-you-hua.html",
        "tags": [
            "实用工具"
        ],
        "tags_link": [
            "../tags/tag-gong-ju.html"
        ],
        "brief": "<p>详解（初级）IO优化</p><p>众所周知，在某些数据结构题当中，IO量极大。而输入和输出有需要一定的时间。这个时候，我们的程序运行起来就会出现如下的情况：留给那位大人的时间不多了</p><p>所以这时候，我们就需要一个叫做IO优化的东西。（OI需要IO优化）</p>"
    },
    {
        "title": "2019绵中会战取得伟大胜利！",
        "link": "../article/mz-zong-jie.html",
        "tags": [
            "总结"
        ],
        "tags_link": [
            "../tags/tag-zong-jie.html"
        ],
        "brief": "<p>2019年绵中夏令营游记</p><p>这已经是我第三次去绵中了……第一次是数竞，第二次和这一次都是信竞。每次来都有一些奇怪的经历（绵中大瀑布回来了可还行）。</p>"
    },
    {
        "title": "我军对拍器研制成功",
        "link": "../article/dui-pai-qi.html",
        "tags": [
            "实用工具"
        ],
        "tags_link": [
            "../tags/tag-gong-ju.html"
        ],
        "brief": "<p>在OI中，我们常常需要将正解和暴力优势互补，暴力慢，正解的正确性有时懒得证，于是我们干脆直接将它们对比。</p><p>但是</p><p>一组一组手敲数据真的慢，还不一定查得出来</p><p>所以，我们就需要<strong>对拍</strong></p>"
    },
    {
        "title": "大佬思想重要载体：《大佬选集》",
        "link": "../article/dalao-yu-lu.html",
        "tags": [
            "鬼畜区"
        ],
        "tags_link": [
            "../tags/tag-gui-chu.html"
        ],
        "brief": "<p>JF大佬语录</p><p>orz</p>"
    },
    {
        "title": "工人运动前动员讲话",
        "link": "../article/sc-fa-yan-gao.html",
        "tags": [
            "总结"
        ],
        "tags_link": [
            "../tags/tag-zong-jie.html"
        ],
        "brief": "<p>2019年main中夏令营开营仪式讲话</p><p>非常荣幸步lyc大佬、cch大佬之后尘来做此次开营仪式的学生代表。</p><p>开营讲话也算是对以前经验的总结嘛</p>"
    },
    {
        "title": "题解 P1902 【刺杀大使】",
        "link": "../article/tj-p1902.html",
        "tags": [
            "题解",
            "二分",
            "bfs",
            "生成树"
        ],
        "tags_link": [
            "../tags/tag-ti-jie.html",
            "../tags/tag-er-fen.html",
            "../tags/tag-bfs.html",
            "../tags/tag-mst.html"
        ],
        "brief": "<p>这是你没有见过的船新解法。</p><p>请自动忽略算法标签。</p>"
    },
    {
        "title": "题解 【XR-2】奇迹",
        "link": "../article/tj-xr2-t2.html",
        "tags": [
            "题解",
            "暴力枚举"
        ],
        "tags_link": [
            "../tags/tag-ti-jie.html",
            "../tags/tag-mei-ju.html"
        ],
        "brief": "<p>此题解非正解</p><p>而且很慢</p>"
    },
    {
        "title": "题解 UVA721 Invitation Cards",
        "link": "../article/tj-uva721.html",
        "tags": [
            "题解",
            "最短路"
        ],
        "tags_link": [
            "../tags/tag-ti-jie.html",
            "../tags/tag-sssp.html"
        ],
        "brief": "<p>裸的SSSP。</p>"
    },
    {
        "title": "CMD命令大全",
        "link": "../article/cmd.html",
        "tags": [
            "实用工具"
        ],
        "tags_link": [
            "../tags/tag-gong-ju.html"
        ],
        "brief": "<p>太菜了吧还在学CMD</p><p>感谢GSC大佬提供的资料</p>"
    },
    {
        "title": "蒟蒻的六学模拟器",
        "link": "../article/sim-six.html",
        "tags": [
            "实用工具"
        ],
        "tags_link": [
            "../tags/tag-gong-ju.html"
        ],
        "brief": "<p>搬运Luogu Blog时发现的黑历史QωQ</p>"
    },
    {
        "title": "题解 P2194 【HXY烧情侣】",
        "link": "../article/tj-p2194.html",
        "tags": [
            "题解",
            "缩点"
        ],
        "tags_link": [
            "../tags/tag-ti-jie.html",
            "../tags/tag-gong-ju.html"
        ],
        "brief": "<p>遇到这种<del>鬼迷日眼</del>的题目要学会翻译成现代汉语。</p>"
    },
    {
        "title": "题解 P1262 【间谍网络】",
        "link": "../article/tj-p1262.html",
        "tags": [
            "题解",
            "缩点"
        ],
        "tags_link": [
            "../tags/tag-ti-jie.html",
            "../tags/tag-gong-ju.html"
        ],
        "brief": "<p>这题不难，主要是细节</p>"
    },
    {
        "title": "题解 P1325 【雷达安装】",
        "link": "../article/tj-p1325.html",
        "tags": [
            "题解",
            "贪心"
        ],
        "tags_link": [
            "../tags/tag-ti-jie.html",
            "../tags/tag-tan-xin.html"
        ],
        "brief": "<p>考试题，只有一人当场AC<p>"
    },
    {
        "title": "题解 UVA644 【Immediate Decodability】",
        "link": "../article/tj-uva644.html",
        "tags": [
            "题解",
            "Trie"
        ],
        "tags_link": [
            "../tags/tag-ti-jie.html",
            "../tags/tag-trie.html"
        ],
        "brief": "<p>Trie初学者练手模板题<p>"
    },
    {
        "title": "题解 P1717 【钓鱼】",
        "link": "../article/tj-p1717.html",
        "tags": [
            "题解",
            "贪心",
            "堆"
        ],
        "tags_link": [
            "../tags/tag-ti-jie.html",
            "../tags/tag-tan-xin.html",
            "../tags/tag-heap.html"
        ],
        "brief": "<p>这是一道<strong>堆在贪心中的应用</strong>的例题，当然用贪心来做。</p><p>（自从某次用 \(STL\) 的优先队列\(T\)飞之后就只敢用手写堆了）</p>"
    },
    {
        "title": "题解 P1230 【智力大冲浪】",
        "link": "../article/tj-p1230.html",
        "tags": [
            "题解",
            "贪心",
            "堆",
            "并查集"
        ],
        "tags_link": [
            "../tags/tag-ti-jie.html",
            "../tags/tag-tan-xin.html",
            "../tags/tag-heap.html",
            "../tags/tag-union-find.html"
        ],
        "brief": "<p>本题是一道贪心，下面谈谈本题的策略以及优化</p>"
    },
];

function loadPages(page = 1, step = 10) {
    if (page < 1 || page > Math.ceil(pages.length / step)) return;
    page --;
    let mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = '';
    for (let i = page * step; i < (page+1) * step && i < pages.length; i ++) {
        let box = document.createElement('div');
        mainContent.appendChild(box);
        box.setAttribute('class', 'boxes');
        box.innerHTML = '' +
        '<h1><a href="' + pages[i].link + '">' + pages[i].title + '</a></h1>' + pages[i].brief;
        for (let j = 0; j < pages[i].tags.length; j ++) {
            box.innerHTML += '<a href="' + pages[i].tags_link[j] + '"><div class="tag">' + pages[i].tags[j] + '</div></a>';
        }
    }
    page ++;
    let page_turning = document.createElement('div');
    let first = 1, last = Math.ceil(pages.length / step);
    mainContent.appendChild(page_turning);
    page_turning.setAttribute('id', 'page-turning');
    page_turning.innerHTML += '<a href="javascript: loadPages(' + first.toString() + ', ' + step.toString() + ');"><div class="button"><b>&lt;&lt;</b></div></a>';
    page_turning.innerHTML += '<a href="javascript: loadPages(' + (page-1).toString() + ', ' + step.toString() + ');"><div class="button"><b>&lt;</b></div></a>';
    let st, ed;
    if(page <= 2) st = 1, ed = Math.min(Math.ceil(pages.length / step), 5);
    else if(page >= Math.ceil(pages.length / step) - 1) st = Math.max(1, Math.ceil(pages.length / step) - 4), ed = Math.ceil(pages.length / step);
    else st = page - 2, ed = page + 2;
    for (let i = st; i < page; i ++) {
        page_turning.innerHTML += '<a href="javascript: loadPages(' + i.toString() + ', ' + step.toString() + ');"><div class="button">' + i.toString() + '</div></a>';
    }
    page_turning.innerHTML += '<a href="javascript: loadPages(' + page.toString() + ', ' + step.toString() + ');"><div class="button" style = "background-color: rgba(25, 0, 255, 0.7);">' + page.toString() + '</div></a>';
    for (let i = page + 1; i <= ed; i ++) {
        page_turning.innerHTML += '<a href="javascript: loadPages(' + i.toString() + ', ' + step.toString() + ');"><div class="button">' + i.toString() + '</div></a>';
    }
    page_turning.innerHTML += '<a href="javascript: loadPages(' + (page+1).toString() + ', ' + step.toString() + ');"><div class="button"><b>&gt;</b></div></a>';
    page_turning.innerHTML += '<a href="javascript: loadPages(' + last.toString() + ', ' + step.toString() + ');"><div class="button"><b>&gt;&gt;</b></div></a>';
}

function loadTag(name) {
    let mainContent = document.getElementById('mainContent');
    /*mainContent.innerHTML = '';*/
    for (let i = 0; i < pages.length; i++) {
        /*for (let j = 0; j < pages[i].tags.length; j++) {
            if(pages[i].tags[j] != name) continue;
            let box = document.createElement('div');
            mainContent.appendChild(box);
            box.setAttribute('class', 'boxes');
            box.innerHTML = '' + '<h2><a href="' + pages[i].link + '">' + pages.title + '</a><h1>';
            box.outerHTML += '<br>';
        }*/
        if (pages[i].tags.indexOf(name) != -1) {
            let box = document.createElement('div');
            mainContent.appendChild(box);
            box.setAttribute('class', 'boxes');
            box.innerHTML = '' + '<h2><a href="' + pages[i].link + '">' + pages[i].title + '</a><h1>';
        }
    }
}