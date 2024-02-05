let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}
let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
}
document.querySelectorAll('a').forEach(links =>{
    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }
    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }
})
<script>
    document.addEventListener("DOMContentLoaded", function () {
    // Sample testimonial data (you can replace this with real data from your backend)
    const testimonialsData = [
        {
            name: "John Doe",
            occupation: "CEO, XYZ Company",
            testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "avatar1.jpg" // Replace with the actual image path
        },
        {
            name: "Jane Smith",
            occupation: "Marketing Manager, ABC Inc.",
            testimonial: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: "avatar2.jpg" // Replace with the actual image path
        }
    ];

    // Function to dynamically populate testimonials
    function renderTestimonials() {
        const testimonialContainer = document.getElementById("testimonialContainer");

        testimonialsData.forEach(testimonial => {
            const testimonialDiv = document.createElement("div");
            testimonialDiv.classList.add("testimonial");

            testimonialDiv.innerHTML = `
                <img src="${testimonial.image}" alt="${testimonial.name}">
                <div>
                    <p>${testimonial.testimonial}</p>
                    <cite>${testimonial.name}, <span>${testimonial.occupation}</span></cite>
                </div>
            `;

            testimonialContainer.appendChild(testimonialDiv);
        });
    }

    // Call the function to render testimonials
    renderTestimonials();
});
</script>


<script>{
let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName("testimonial");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.transform = translateX(${(i - slideIndex) * 100}%);
        }
        slideIndex++;
        if (slideIndex >= slides.length) { slideIndex = 0; }
        setTimeout(showSlides, 3000); // Change slide every 3 seconds
    }

    function moveSlider(direction) {
        slideIndex += direction;
        showSlides();
    }
</script>
<script>
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName("testimonial");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.transform = 'translateX(${(i - slideIndex) * 100}%)`;
        }
        slideIndex++;
        if (slideIndex >= slides.length) { slideIndex = 0; }
        setTimeout(showSlides, 3000); // Change slide every 3 seconds
    }

    function moveSlider(direction) {
        slideIndex += direction;
        showSlides();
    }
}
</script>