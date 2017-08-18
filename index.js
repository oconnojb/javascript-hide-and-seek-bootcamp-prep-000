function getFirstSelector(selector){
  var first = document.querySelector(selector)
  return first
}

function nestedTarget(){
  var sec = document.querySelector('#nested .target')
  return sec
}

function deepestChild(){
  const lis = document.getElementById('grand-node').querySelectorAll('div')
  var n=lis.length
  return lis[n-1]
}

function increaseRankBy(n){
  const lis = document.querySelectorAll('.ranked-list')

for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = (+ n).toString()
}
}
