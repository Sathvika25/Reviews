const reviews = [
    {
        id:1,
        person: "Sherlin",
        role: "UI Designer",
        img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        about: "I’m an established design leader with over a decade of experience. I oversee diverse interdisciplinary teams, fostering relationships with both designers and stakeholders to establish design practices that people want to work with and be a part of."

    },
    {
        id:2,
        person:"Charles",
        role: "Software Engineer",
        img:"https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
        about:"Motivated, proactive, and hands-on developer with 5+ years' experience developing and managing information systems for software development and cloud-based companies."
    },
    {
        id:3,
        person:"Monica",
        role:"CA",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpIk-yiDGSA2AMrykU31HrJamu1Xs9lV7MVgHcVHkD9g&s",
        about:"As a Chartered Accountant with over 10 years of experience, I have expertise in auditing, financial analysis, tax planning, and advisory services for diverse industries, ensuring compliance and strategic growth."
    },
    {
        id:1,
        person:"George",
        role:"Architect",
        img:"https://m.media-amazon.com/images/M/MV5BOGQ0N2YzM2YtZGU3NC00ZGZlLTgyYmMtNzBjZTI5YTViN2UwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
        about:"As an architect with 15 years of experience, I specialize in designing sustainable, innovative structures, managing complex projects, and collaborating with multidisciplinary teams to create functional and aesthetically pleasing spaces."
    }
]
const image = document.getElementById("image")
const name = document.getElementById("name")
const role = document.getElementById("role")
const about = document.getElementById("about")

const prevBtn = document.getElementById("left-btn")
const nextBtn = document.getElementById("right-btn")
const surpriseBtn = document.getElementById("surprise-btn")
let CurrentItem = 0
window.addEventListener("DOMContentLoaded",function(){
    showPerson(CurrentItem);
})
function showPerson(person){
    let item = reviews[person]
    image.src = item.img;
    name.textContent =  item.person;
    role.textContent = item.role;
    about.textContent = item.about;
}
prevBtn.addEventListener("click",function(){
    CurrentItem--;
    if(CurrentItem < 0){
        CurrentItem = reviews.length - 1
    }
    showPerson(CurrentItem)
})
nextBtn.addEventListener("click",function(){
    CurrentItem++;
    if(CurrentItem > reviews.length-1){
        CurrentItem = 0
    }
    showPerson(CurrentItem)
})
surpriseBtn.addEventListener("click",function(){
    let rand = random();
    showPerson(rand)
})
function random(){
    return Math.floor(Math.random() * reviews.length)
}