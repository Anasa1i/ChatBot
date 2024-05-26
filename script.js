var list = document.getElementById("list")
var typing = document.getElementById("typing")

function sendMessage() {
    // console.log(event)
    // console.log(event.keyCode)
    if (event.keyCode === 13) {
        // console.log(hello)
        // console.log(event.target.value)
        var elem = event.target;
        list.innerHTML += "<li class='right-side'>" + elem.value + "</li>"


        // if(elem.value.toLowerCase() === 'hi' || elem.value.toLowerCase() === 'hey'|| elem.value.toLowerCase() === 'hy' || elem.value.toLowerCase() === 'heyy' || elem.value.toLowerCase() === 'hii'|| elem.value.toLowerCase() === 'hello')

            //typing style
            typing.style.display = 'block'

        if (['hi', 'hy', 'heyy', 'hii', 'hello', 'hey'].indexOf(elem.value.toLowerCase()) !== -1) {

            setTimeout(function () {
                list.innerHTML += "<li class='left-side'> Khush aamdeed Smit chatbot mein apka, mein aapki  sirf Saylani se related sawal poochne se madad karskhta hun. <br> </li>"

                

            }, 1500)


            setTimeout(function () {
                list.innerHTML += "<li class='left-side'>1.saylani kia kaam krta hai?<br>2. saylani ka ceo kon hai? <br> 3.saylani mass it training kabse shuru huwa or kis vision se huwa?<br>4. saylani mass it training mei kia courses kiye jate hain or inki kia time duration hai. <br>5.saylani ka headoffice khn located hai? <br> <br> ap sirf innhe sawal ke jawab sun skhty kyun ke yeh predifined words hai. </li>";

                typing.style.display = 'none'

            }, 2000)


            //         // mein yhn button show krwana chahta hun

            // setTimeout(function(run){
            // list.innerHTML += "<li class='left-side-btn'><button value='hello'>1.saylani kia kaam krta hai?</li> </button> <li class='left-side-btn'><button value='hello'>2. saylani ka ceo kon hai?</li> </button> <li class='left-side-btn'><button value='hello'>3.saylani mass it training kabse shuru huwa or kis vision se huwa?</li> </button> <li class='left-side-btn'><button value='hello'>4. saylani mass it training mei kia courses kiye jate hain or inki kia time duration hai.</li> <li class='left-side-btn' ><button value='hello'>5.saylani ka headoffice khn located hai?</li> </button>"
            //      typing.style.display = 'none'
            //         },1800)    

            
        }

        // Ssylani =
        else if (['saylani welfare trust', 'saylani kia kaam krta hai', 'saylani kia kaam krta hai?', 'saylani', 'theek hai saylani ka btao mujhe', 'saylani ka batao',].indexOf(elem.value.toLowerCase()) !== -1) {


            setTimeout(function () {
                list.innerHTML += "<li class='left-side'>Saylani Welfare International Trust ek Pakistan ki non-profit welfare organization hai jo 1999 mein shuru ki gayi thi. Iska maqsad gareebon aur mustahiq logon ki madad karna hai. Ye organization various areas mein operate karta hai, including</li>"

            }, 1500)


            setTimeout(function () {
                list.innerHTML += "<li class='left-side'>1. Education Programs: Saylani Education Program ke zariye, wo logon ko vocational training provide karte hain taake unki skills develop ho aur wo apne liye rozgar hasil kar sakein. </li>"

            }, 2000)

            setTimeout(function () {
                list.innerHTML += "<li class='left-side'>2. Food Distribution: Saylani Food Distribution Program gareeb logon ko khana muhaiya karta hai. Har saal Ramadan mein, ye program particularly active hota hai.  </li>"

            }, 2500)

            setTimeout(function () {
                list.innerHTML += "<li class='left-side'>3. Healthcare Services: Saylani Health Program ke zariye, medical facilities aur healthcare services gareebon tak pohanchai jati hain. </li>"

            }, 3000)

            setTimeout(function () {
                list.innerHTML += "<li class='left-side'>4. Disaster Relief: Saylani Disaster Relief Program disaster struck areas mein immediate relief provide karta hai, including food, shelter, aur medical aid. </li>"

            }, 3500)

            setTimeout(function () {
                list.innerHTML += "<li class='left-side'>5. Masjid Construction: Saylani Masajid Construction Program masajid ki tameer ko support karta hai. </li>"

            }, 4000)

            setTimeout(function () {
                list.innerHTML += "<li class='left-side'>6. Saylani Welfare International Trust ke efforts ne bohot se logon ki zindagiyan behtar banai hain aur unhein support diya hai. Ye organization primarily donations aur volunteers ki madad se chalta hai. </li>";

                typing.style.display = 'none'

            }, 4500)
        }

        // SMIT COURSES
        else if (['3.saylani mass it training kabse shuru huwa or kis vision se huwa?', '4. saylani mass it training mei kia courses kiye jate hain or inki kia time duration hai.', 'smit', 'saylani mass it training', 'courses'].indexOf(elem.value.toLowerCase()) !== -1) {

            setTimeout(function () {
                list.innerHTML += "<li class='left-side'>Saylani Mass IT Training Program ek initiative hai jo Saylani Welfare International Trust ne launch kiya tha. Iska maqsad Pakistan mein IT skills ko promote karna aur youth ko employment opportunities provide karna hai. Is program ke through, thousands of students ko advanced IT training di jaati hai taake wo apne careers ko behtar bana sakein.</li>"

            }, 1500)


            setTimeout(function () {
                list.innerHTML += "<li class='left-side'>1.Web Development <br> Duration: 6 months <br> Content: Android Development, iOS Development</li>"

            }, 2000)

            setTimeout(function () {
                list.innerHTML += "<li class='left-side'>2.Mobile App Development <br> Duration: 6 months <br> Content: HTML, CSS, JavaScript, PHP, MySQL</li>"

            }, 2500)

            setTimeout(function () {
                list.innerHTML += "<li class='left-side'>3.Graphics Designing <br>Duration: 6 months <br> Content: Adobe Photoshop, Illustrator, CorelDRAW</li>"

            }, 3000)

            setTimeout(function () {
                list.innerHTML += "<li class='left-side'>4.Digital Marketing <br>Duration: 3 months <br> Content: SEO, Social Media Marketing, Google Ads, Content Marketing</li>"

            }, 3500)

            setTimeout(function () {
                list.innerHTML += "<li class='left-side'>5.Artificial Intelligence and Machine Learning <br>Duration: 6 months <br> Content: Python, Data Science, Machine Learning Algorithms</li>"

            }, 4000)

            setTimeout(function () {
                list.innerHTML += "<li class='left-side'>6.E-commerce and Freelancing <br> Duration: 6 months <br> Content: Amazon, eBay, Fiverr, Upwork</li>"

            }, 4500)
            setTimeout(function () {
                list.innerHTML += "<li class='left-side'>Vision and Goals<br> Saylani Mass IT Training Program ka vision aur goals kuch is tarah hain:</li>"

            }, 5000)
            setTimeout(function () {
                list.innerHTML += "<li class='left-side'>Empowerment through Education: <br> Pakistan ke youth ko modern IT skills mein train karna taake wo international aur local job markets mein compete kar sakein.</li>"

            }, 5500)
            setTimeout(function () {
                list.innerHTML += "<li class='left-side'>Economic Growth:  <br> IT sector mein skilled professionals ko introduce karna jo mulk ki economic growth mein contribute kar sakein.</li>"

            }, 6000)
            setTimeout(function () {
                list.innerHTML += "<li class='left-side'>Community Development:  <br> Technology aur education ke zariye communities ko uplift karna aur unhein behtar future provide karna.</li>"

            }, 6500)
            setTimeout(function () {
                list.innerHTML += "<li class='left-side'>Bridging the Digital Divide: <br> Modern IT skills ko accessible banana taake har tabqay ke log technology aur internet se faida utha sakein.</li>"
            }, 7000)
            setTimeout(function () {
                list.innerHTML += "<li class='left-side'>Saylani Mass IT Training Program ne bohot se logon ko high-demand skills mein proficient banaya hai aur unhein naukriyon aur freelancing mein kaamyabi hasil karne mein madad ki hai.</li>";

                typing.style.display = 'none'
            }, 7500)
        }

        // BASHIR FAROOQUI
        else if (['2. saylani ka ceo kon hai?', 'moulana bashir farooqui', 'saylani ceo', 'saylani owner', 'saylani ka ceo kon hai ', 'saylani ka ceo kon hai?'].indexOf(elem.value.toLowerCase()) !== -1) {

            setTimeout(function () {
                list.innerHTML += "<li class='left-side'> Saylani Welfare International Trust ke CEO Maulana Bashir Farooq Qadri hain. </li>"

            }, 1500)


            setTimeout(function () {
                list.innerHTML += "<li class='left-side'> Biography  <br> Early Life <br>Maulana Bashir Farooq Qadri ka paidaishi naam Muhammad Bashir Farooq hai. Woh Karachi ke ek mohtaram gharane mein paida hue. Bachpan se hi unhon ne deen aur dunia donon ka ilm hasil kiya. Unka taluq ek religious family se hai, isliye dini taleem par unka ziyada zor raha.</li>"

            }, 2000)
            setTimeout(function () {
                list.innerHTML += "<li class='left-side'>Career and Founding Saylani Welfare <br>Maulana Bashir Farooq Qadri ne apne career ka aghaz ek religious scholar aur spiritual guide ke tor par kiya. Unhon ne bohot se logon ko deen aur dunia mein rahnumai faraham ki. Saylani Welfare International Trust ka aghaz 1999 mein unhon ne Karachi se kiya.</li>"

            }, 2500)
            setTimeout(function () {
                list.innerHTML += "<li class='left-side'>Vision and Mission <br>Saylani Welfare International Trust ka mission gareeb aur zarooratmand logon ki madad karna hai. Maulana Bashir Farooq Qadri ne apni zindagi is mission ke liye waqf kar di hai. Unka vision hai ke Pakistan aur duniya bhar mein gareebi, bhook, aur jahalat ka khatma ho aur har shakhs ko izzat aur insaf milay.</li>";

                typing.style.display = 'none'

            }, 3000)
        }

        // LOCATED
        else if (['5.saylani ka headoffice khn located hai?', 'saylani ka headoffice khn located hai', 'saylani ka headoffice khn located hai?', 'location', 'saylani kahan hai', 'saylani headoffice'].indexOf(elem.value.toLowerCase()) !== -1) {

            setTimeout(function () {
                list.innerHTML += "<li class='left-side'>Saylani Welfare International Trust Head Office <br> A-25, Bahadurabad Chowrangi, Karachi, Pakistan</li>"

                typing.style.display = 'none'

            }, 1500)
            elem.value = "";
        }


        else{
            setTimeout(function(){
                list.innerHTML += "<li class='left-side'> yeh word meri list mei shamil nh jo options diye pls usmein se select kryn thank you! </li>";

                typing.style.display = 'none'

            }, 2000)
        }
    }
    elem.value = "";
}

// setime function example
// function abc(){
//     console.log("time hogya")
// }

// setTimeout(abc,2000)

