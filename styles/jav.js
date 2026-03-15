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


document.addEventListener('click', function (e) {
    if (!e.target || !e.target.classList) return
    if (e.target.classList.contains('JSeditB')) { // Sets the edit button card
        const target = e.target.closest('.box1') // find the card to change things
        let CurrentT = target.querySelector('h2').innerHTML // Finds and reads text inside h2, which is the title of card
        let CurrentD = target.querySelector('p').innerHTML // Finds and reads current description that is p
        let CurrentDu = target.querySelector('.CardDu').innerHTML
        let CurrentP = target.querySelector('.CardP').innerHTML
        console.log(CurrentD, CurrentT, CurrentDu, CurrentP) // querySelector = Find, innerHTML = Read

        htmlchange('cardTitleInptC').value = CurrentT
        htmlchange('cardDesInptC').value = CurrentD
        htmlchange('cardDueInptC').value = CurrentDu
        htmlchange('cardPriorInptC').value = CurrentP

        htmlchange('contentC').replaceWith(htmlchange('contentC').cloneNode(true))

        htmlchange('contentC').addEventListener('click', function () {
            const NewT = htmlchange('cardTitleInptC').value
            const NewD = htmlchange('cardDesInptC').value
            const NewDu = htmlchange('cardDueInptC').value
            const NewP = htmlchange('cardPriorInptC').value
            console.log(NewT, NewD, NewDu, NewP);

            target.querySelector('h2').innerHTML = NewT
            target.querySelector('p').innerHTML = NewD
            target.querySelector('.CardDu').innerHTML = `Due: ${NewDu}`
            target.querySelector('.CardP').innerHTML = `Priority: ${NewP}⭐️`

            bootstrap.Modal.getInstance(htmlchange('staticBackdrop')).hide() // BUG: NOT HIDING
        })
    }
    if (e.target.classList.contains('JSdeleteB')) {
        const target = e.target.closest('.box1') // find the card to change things
        target.remove();
        console.log('Task deleted successfully!');
    }
    if (e.target.classList.contains('JSdoneB')) {
        const target = e.target.closest('.box1') // find the card to change thingss
        // Data retrive scripts
        console.log('Datas retrived successfuly!')
        target.remove();
        console.log('Task removed successfully!')
    }
})

function ThemeButton() {
    htmlchange("BackGnd").classList.toggle("darkM");
    htmlchange("navB").classList.toggle("navDark");
    document.querySelectorAll(".boxD").forEach(function (box) {
        box.classList.toggle("box2");
    });
}

async function cardinput() {
    const Ctitle = htmlchange('cardTitleInpt').value
    const Cdes = htmlchange('cardDesInpt').value
    const Cdue = htmlchange('cardDueInpt').value
    const CPrior = htmlchange('cardPriorInpt').value

    let Tlength = Ctitle.length
    let Dlength = Cdes.length
    if (Ctitle === '' || Cdes === '') {
        console.log("Invalid letters")
    } else if (Tlength >= 50 || Dlength >= 100) {
        console.log("Text too long")
    } else {
        console.log('Request Sent Succesfully')
        CardsADD(Ctitle, Cdes, Cdue, CPrior) // ⬇️
    }
}

function CardsADD(Ctitle, Cdes, Cdue, CPrior) {
    const card = document.createElement("div")
    const dataid = Date.now()
    card.classList.add('col-auto', 'box1', 'bgT1');
    card.dataset.id = dataid
    card.dataset.id
    console.log(`Current Id: ${card.dataset.id}`);

    // BUG: SAVING ONE OPTION WITHOUT TOUCHING THE OTHER ONE REWRITES THE OTHER OPTION MAKING THE THAT TAG EMPTY
    card.innerHTML = `
        <div class="dropdown" style="position: relative;">
            <a class="dropdown-toggle kebabB d-flex justify-content-end mt-1 mb-1 cardBA"
                href="#" role="button" id="dropdownMenuLink1" data-bs-toggle="dropdown"
                aria-expanded="false">
                <img src="/images/three-dots-vertical.svg">
            </a>
            <div class="dropdown-menu dropdown-menu-end"
                aria-labelledby="dropdownMenuLink1">
                <a class="dropdown-item JSeditB" href="#" data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop">
                    Edit
                </a>
                <a class="dropdown-item JSdeleteB" href="#">Delete</a>
                <a class="dropdown-item" href="#">Something else here</a>
            </div>
        </div>
        <h2 class="me-3">${Ctitle}</h2>
        <p>${Cdes}</p>
        <div class="row mb-2">
            <div class="col-md-6 ms-1 duetab">
                <p class="overf1 CardDu">Due: ${Cdue}</p> <!-- NEED CHANGE HERE -->
            </div>
            <div class="col-md-6 ms-1 prioritytab">
                <p class="CardP">Priority: ${CPrior}⭐️</p>
            </div>
        </div>
        <a data-bs-toggle="modal" data-bs-target="#Progressbarmodal">
            <div class="progress" role="progressbar" aria-label="Example with label"
                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" style="width: 25%">25%</div>
            </div>
        </a>
        <div class="row justify-content-center">
            <img style="width: auto; height: 100px;" src="/images/AdminLogo.png"
                alt="template.png"><br> <!-- NEED CHANGE HERE -->
        </div>
        <div class="row justify-content-end">
            <button type="button"
                class="btn btn-success w-50 text-center me-1 mb-1 JSdoneB">Done</button>
        </div>
    `
    htmlchange('cardA').append(card);
}


function CardsDELETE() {

}