// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
 $(".saveBtn").on("click",function(){
  var userentry= $(this).siblings("textarea").val()
  var currentTime= $(this).parent().attr("id")
  console.log (userentry, currentTime)
  localStorage.setItem(currentTime, userentry)
 })
 var today= dayjs().hour()
 console.log(today)
 for(let i=9;i<=17;i++){
  var localstorageentry= localStorage.getItem("hour-"+i)
  $("#hour-"+i).children("textarea").val(localstorageentry)
  if(i<today){
    $("#hour-"+i).addClass("past")
  }else if(i==today){
    $("#hour-"+i).addClass("present")
  }else{
    $("#hour-"+i).addClass("future")
  }
 }
});

