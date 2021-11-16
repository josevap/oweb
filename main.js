
var btn = document.getElementById('btn');
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
function Toggle() {
    if(btn.classList.contains ("far")) {
    btn.classList.remove("far");
    btn.classList.add("fas");
                                        }
                    }

                    var likecount = document.querySelector('#likecount');
                    var likecount1 = document.querySelector('#likecount1');
                    var likecount2 = document.querySelector('#likecount2');
                    function count() {
                        likecount.value = parseInt(likecount.value) + 1;
                    }

                    function Toggle1() {
    if(btn1.classList.contains ("far")) {
    btn1.classList.remove("far");
    btn1.classList.add("fas");
                                        }
                    }

                    function count1() {
                        likecount1.value = parseInt(likecount1.value) + 1;
                    }

                    function Toggle2() {
    if(btn2.classList.contains ("far")) {
    btn2.classList.remove("far");
    btn2.classList.add("fas");
                                        }
                    }

                    function count2() {
                        likecount2.value = parseInt(likecount2.value) + 1;
                    }

// -------------------------- Komentar ------------------------
let newcommentForm1 = document.getElementById('newcommen1')
let newcommentForm2 = document.getElementById('newcommen2')
let newcommentForm3 = document.getElementById('newcommen3')
let postedComment1 = document.getElementById('postedComment1')
let postedComment2 = document.getElementById('postedComment2')
let postedComment3 = document.getElementById('postedComment3')


newcommentForm1.addEventListener('submit', function(e) {
    e.preventDefault();
    let commName1 = document.getElementById('commName1').value
    let txcomment1 = document.getElementById('txcomment1').value

    html = `<div class="commentStyle">
    <h5>${commName1}</h5>
    <p>${txcomment1}</p>
</div>`
    postedComment1.innerHTML += html
})

newcommentForm2.addEventListener('submit', function(e) {
    e.preventDefault();
    let commName2 = document.getElementById('commName2').value 
    let txcomment2 = document.getElementById('txcomment2').value

    html = `<div class="commentStyle">
    <h5>${commName2}</h5>
    <p>${txcomment2}</p>
</div>`
    postedComment2.innerHTML += html
})
newcommentForm3.addEventListener('submit', function(e) {
    e.preventDefault();
    let commName3 = document.getElementById('commName3').value
    let txcomment3 = document.getElementById('txcomment3').value

    html = `<div class="commentStyle">
    <h5>${commName3}</h5>
    <p>${txcomment3}</p>
</div>`
    postedComment3.innerHTML += html
})

