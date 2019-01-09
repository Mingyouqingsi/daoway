/**
 * Created by liqingguo on 2019/1/9.
 */
$(function(){
  //头部动画逻辑
  $(window).scroll(function(){
    if($(window).scrollTop()>= $('.content').offset().top){
      $('.header').addClass('active')
    }
    if($(window).scrollTop()< $('.content').offset().top){
      $('.header').removeClass('active')
    }
  })
  //商家信息
    init(20);
    function init(page){
//在这里需要去获取你要加载的数据，并且获得数据的总量，比如说总量为Count
//接着你要更具这个总量去初始化这个控件
      $.getJSON('./mock/comment.json',function(data){
    //     $(data).each(function(index,item){
    //       $('.navx').append(` <div class="commen">
    //   <ul class="userlist">
    //     <li>
    //       <img src="${item.iconUrl}" alt="">
    //       <span class="usertitle">
    //         ${item.nick}}
    //       </span>
    //       <div class="middle">
    //         <span class="span1">
    //           <img src="http://www.daoway.com/pcimages/red_star@2x.png" alt="">
    //           <img src="http://www.daoway.com/pcimages/red_star@2x.png" alt="">
    //           <img src="http://www.daoway.com/pcimages/red_star@2x.png" alt="">
    //           <img src="http://www.daoway.com/pcimages/red_star@2x.png" alt="">
    //           <img src="http://www.daoway.com/pcimages/red_star@2x.png" alt="">
    //         </span>
    //       </div>
    //       <div class="content1">${item.comment}</div>
    //     </li>
    //   </ul>
    //
    // </div>`)
    //     })
      })
      // $("#page").initPage(10,page,init);//这句话好好理解下，应该不难的，讨论下，这里面的数据怎么来，Count你后台获取到的数据，page当前页，可能当页面加载的时候的值，也可能是控件回调用init函数传给它的页码值

      }
  const pageSize = 10 // 默认页码大小
  const dataCount = 95 // 测试数据数量
  const pager = new Pagination('.page-container', {
    pageSize: pageSize,
    autoLoad: true,
    unit: '条',
    toPage: function(index, _pageSize) {
      // 设置记录总数，用于生成分页HTML内容
      if (index === 0 || _pageSize) this.updateCount(dataCount, _pageSize)

      // 根据页码以及分页大小生成html内容
      let pageListHtml = ''
      for (var i = 0; i < (_pageSize || pageSize); i++) {
        pageListHtml += `
          <div class="col-md-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Card - ${index *
        (_pageSize || pageSize) +
        i +
        1}</h5>
                <p class="card-text">card-text,card-text,card-text,card-text</p>
              </div>
            </div>
          </div>
        `
      }
      $('.page-list').html(pageListHtml)
    }
  })
})