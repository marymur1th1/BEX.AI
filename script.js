lucide.createIcons();
const monthlyBtn = document.getElementById("monthlyBtn");
const yearlyBtn = document.getElementById("yearlyBtn");

monthlyBtn.addEventListener("click", () => {

    monthlyBtn.classList.add("active");
    yearlyBtn.classList.remove("active");

    document.getElementById("starterPrice").innerHTML = "KSH. 7,999";
    document.getElementById("starterContent").innerHTML = `
        <p>Exclusion of custom set up fee</p>
        <ul>
            <li>AI call assistant</li>
            <li>Virtual business number</li>
            <li>WhatsApp summaries</li>
            <li>Includes 150 minutes monthly</li>
        </ul>
    `;

    document.getElementById("businessPrice").innerHTML = "KSH. 14,999";
    document.getElementById("businessContent").innerHTML = `
        <p>Exclusion of custom set up fee</p>
        <ul>
            <li>Includes 400 minutes monthly</li>
            <li>CRM integrations</li>
            <li>Advanced workflows</li>
            <li>Priority support</li>
        </ul>
    `;

    document.getElementById("enterprisePrice").innerHTML = "Custom";
    document.getElementById("enterpriseContent").innerHTML = `
        <p>For multi-location teams, custom workflows, and complex integrations.</p>
        <ul>
            <li>Custom AI workflows</li>
            <li>Dedicated support</li>
            <li>Multi-agent systems</li>
            <li>Custom integrations</li>
        </ul>
    `;
});

yearlyBtn.addEventListener("click", () => {

    yearlyBtn.classList.add("active");
    monthlyBtn.classList.remove("active");

    document.getElementById("starterPrice").innerHTML = "KSH. 76,999";
    document.getElementById("starterContent").innerHTML = `
        <p>Yearly. Best value for teams starting with an AI receptionist and predictable follow-up.</p>
    `;

    document.getElementById("businessPrice").innerHTML = "KSH. 142,999";
    document.getElementById("businessContent").innerHTML = `
        <p>Yearly. Save while scaling call automation, CRM workflows, and priority support.</p>
    `;

    document.getElementById("enterprisePrice").innerHTML = "Custom";
    document.getElementById("enterpriseContent").innerHTML = `
        <p>Yearly enterprise agreements for multi-agent systems, dedicated support, and custom integrations.</p>
    `;
});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const button = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    button.addEventListener("click", () => {

        const isOpen = answer.style.maxHeight;

        document.querySelectorAll(".faq-answer").forEach(a => {
            a.style.maxHeight = null;
        });

        if (!isOpen) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        }

    });

});
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});
document.querySelectorAll("#nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});
// =========================
// EMAILJS CONTACT FORM
// =========================

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_nfxylw5",
        "template_rkyui66",
        this
    ).then(() => {

        alert("Thank you! Your demo request has been sent successfully. We'll get back to you soon.");

        contactForm.reset();

    }).catch((error) => {

        console.error(error);

        alert("Something went wrong. Please try again.");

    });

});