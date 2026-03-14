const htmlchange = document.getElementById.bind(document); // Get id


function updT() {
    const daytime = new Date().getHours();
    if (daytime < 8 && daytime > 0) {
        htmlchange("timechange").innerHTML = "Early Mornings, Jailen Pan";
        htmlchange("bgC").classList.add("bgEM");
    }
    else if (daytime >= 8 && daytime < 12) {
        htmlchange("timechange").innerHTML = "Good Morning, Jailen Pan";
        htmlchange("bgC").classList.add("bgM");
    }
    else if (daytime === 12) {
        htmlchange("timechange").innerHTML = "It's Mid Day, Jailen Pan";
        htmlchange("bgC").classList.add("bgN");
    }
    else if (daytime > 12 && daytime < 18) {
        htmlchange("timechange").innerHTML = "Good Afternoon, Jailen Pan";
        htmlchange("bgC").classList.add("bgAN");
    }
    else if (daytime >= 18 && daytime < 21) {
        htmlchange("timechange").innerHTML = "Good Evening, Jailen Pan";
        htmlchange("bgC").classList.add("bgEN");
    }
    else if (daytime >= 21 || daytime === 0) {
        htmlchange("timechange").innerHTML = "Late Nights, Jailen Pan";
        htmlchange("bgC").classList.add("bgLN");
    }
    else {
        htmlchange("timechange").innerHTML = "Oops, something went wrong!"
    }
}

updT()
setInterval(updT, 60000)

htmlchange("themes").addEventListener("click", ThemeButton); // Light/Dark Mode
htmlchange("cardS").addEventListener("click", cardinput); // Can save tasks

document.querySelectorAll('[data-bs-toggle="popover"]').forEach(el => {
    new bootstrap.Popover(el)
})

function ThemeButton() {
    htmlchange("BackGnd").classList.toggle("darkM");
    htmlchange("navB").classList.toggle("navDark"); y
    document.querySelectorAll(".boxD").forEach(function (box) {
        box.classList.toggle("box2");
    });
}

async function cardinput() {
    const Ctitle = htmlchange('cardTitleInpt').value
    const Cdes = htmlchange('cardDesInpt').value

    let Tlength = Ctitle.length
    let Dlength = Cdes.length
    if (Ctitle === '' || Cdes === '') {
        console.log("Invalid letters")
    } else if (Tlength >= 50 || Dlength >= 100) {
        console.log("Text too long")
    } else {
        console.log('Request Sent Succesfully')
        CardsADD(Ctitle, Cdes)
    }
}

function CardsADD(Ctitle, Cdes) {
    const card = document.createElement("div")
    const title = document.createElement("h2")
    const desc = document.createElement("p")
    const img = document.createElement("img")

    card.classList.add('col-auto', 'box1', 'bgT1');
    title.innerHTML = Ctitle
    desc.innerHTML = Cdes
    img.src = '/images/AdminLogo.png'
    img.alt = 'taskimg.img'
    card.append(title, desc, img);
    htmlchange('cardA').append(card);
}

/* 
<div id="cardA" class="row flex-nowrap gap8">
    <div class="col-auto box1 bgT1">
        <div class="dropdown" style="position: relative;">
            <a class="dropdown-toggle kebabB d-flex justify-content-end mt-1 mb-1"
                style="position: absolute; top:0; right: 0; height: 0; overflow: visible; display: flex; align-items: flex-start;"
                href="#" role="button" id="dropdownMenuLink1" data-bs-toggle="dropdown"
                aria-expanded="false">
                <img src="/images/three-dots-vertical.svg">
            </a>
            <div class="dropdown-menu dropdown-menu-end"
                aria-labelledby="dropdownMenuLink1">
                <a class="dropdown-item" href="#" data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop">
                    Edit
                </a>
                <a class="dropdown-item" href="#">Delete</a>
                <a class="dropdown-item" href="#">Something else here</a>
            </div>
        </div>
        <h2>Task 123</h2>
        <p>Do this and that and this xyz</p>
        <div class="row mb-2">
            <div class="col-md-6 ms-1" style="background-color: rgb(255, 84, 84); color: rgb(255, 255, 255); border-radius: 10px; height:22px; width: 50%; font-size: 13px;">
                <p style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Due: Next Month</p>
            </div>
            <div class="col-md-6 ms-1" style="background-color: rgba(74, 74, 74, 0.646); color: rgb(255, 255, 255); border-radius: 10px; height:22px; width: 40%; text-align: center; font-size: 13px;">
                <p>Priority: 5⭐️</p>
            </div>
        </div>
        <img src="/images/AdminLogo.png" alt="template.png">
    </div>
</div>
*/


function CardsDELETE() {

}