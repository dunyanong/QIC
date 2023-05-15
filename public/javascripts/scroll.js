// To scroll down to the explore-section after button is pressed
function scrollToExploreSection() {
    const section = document.getElementById("explore-section");
    section.scrollIntoView({ behavior: "smooth" });
}

// To scroll down to the contact page after button is pressed
function scrollToContactUs() {
    const contactSection = document.getElementById('contact-us-section');
    contactSection.scrollIntoView({ behavior: 'smooth' });
}