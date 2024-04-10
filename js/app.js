const projects = [
    {
        title: "Estate",
        githubLink: "https://github.com/otabekfronted/estate",
        vercelLink: "https://estate-theta-one.vercel.app/",
    },
    {
        title: "Uzbekistan",
        githubLink: "https://github.com/otabekfronted/uzbekistan",
        vercelLink: "https://uzbekistan-theta.vercel.app/",
    },
    {
        title: "AnsorMed",
        githubLink: "https://github.com/otabekfronted/Ansormed",
        vercelLink: "https://ansormed-5va2.vercel.app/",
    },
    {
        title: "Parelax",
        githubLink: "https://github.com/otabekfronted/parelax",
        vercelLink: "https://americanparelax.vercel.app/",
    },
    {
        title: "Akademnashr",
        githubLink: "https://github.com/otabekfronted/Akademnashr",
        vercelLink: "https://akademnashr-six.vercel.app/",
    },
    {
        title: "American about",
        githubLink: "https://github.com/otabekfronted/American-about",
        vercelLink: "https://american-about.vercel.app/",
    },
    {
        title: "John Website",
        githubLink: "https://github.com/otabekfronted/johnwebsite",
        vercelLink: "https://johnwebsite.vercel.app/",
    },
    {
        title: "Getting Up",
        githubLink: "https://github.com/otabekfronted/gettin-up",
        vercelLink: "https://gettin-up.vercel.app/",
    },
    {
        title: "Github and Vercal",
        githubLink: "https://github.com/otabekfronted/GitHub-and-Vercal",
        vercelLink: "https://git-hub-and-vercal.vercel.app/",
    },
    {
        title: "Pixer web site",
        githubLink: "https://github.com/otabekfronted/Pixer-web-site",
        vercelLink: "https://pixer-web-site-plum.vercel.app/",
    },
    {
        title: "Qr code web site",
        githubLink: "https://github.com/otabekfronted/qr-code-component",
        vercelLink: "https://qr-code-component-plum-iota.vercel.app/",
    },
    {
        title: "Social links profile",
        githubLink: "https://github.com/otabekfronted/social-links-profile",
        vercelLink: "https://social-links-profile-iota-one.vercel.app/",
    },
    {
        title: "Blog preview card",
        githubLink: "https://github.com/otabekfronted/blog-preview-card",
        vercelLink: "https://social-links-profile-bzld.vercel.app/",
    },
    {
        title: "Intro section with dropdown navigator",
        githubLink:
            "https://github.com/otabekfronted/intro-section-with--dropdown-navigation",
        vercelLink:
            "https://intro-section-with-dropdown-navigation-fawn.vercel.app/",
    },
    {
        title: "Product preview card",
        githubLink: "https://github.com/otabekfronted/product-preview-card",
        vercelLink: "https://product-preview-card-eight-khaki.vercel.app/",
    },
    {
        title: "Product preview card",
        githubLink: "https://github.com/otabekfronted/product-preview-card",
        vercelLink: "https://product-preview-card-eight-khaki.vercel.app/",
    },
    {
        title: "Tip calculator",
        githubLink: "https://github.com/otabekfronted/tip-calculator",
        vercelLink: "https://tip-calculator-virid-ten.vercel.app/",
    },
    {
        title: "Tip calculator",
        githubLink: "https://github.com/otabekfronted/tip-calculator",
        vercelLink: "https://tip-calculator-virid-ten.vercel.app/",
    },
    {
        title: "American bg video parelax",
        githubLink: "https://github.com/otabekfronted/america-bg-video-parelax",
        vercelLink: "https://america-bg-video-parelax.vercel.app/",
    },
    {
        title: "Castway",
        githubLink: "https://github.com/otabekfronted/Castway-website",
        vercelLink: "https://castway-website.vercel.app/",
    },
    {
        title: "Crowdfunding web site",
        githubLink: "https://github.com/otabekfronted/crowdfunding-web-site",
        vercelLink: "https://crowdfunding-web-site.vercel.app/",
    },
    {
        title: "My team web site. Exam",
        githubLink: "https://github.com/otabekfronted/My-team-web-site.-Exam",
        vercelLink: "https://my-team-web-site-exam.vercel.app/",
    },
    {
        title: "YouTube Createx Marathon",
        githubLink: "https://github.com/otabekfronted/YouTube-Createx-Marathon",
        vercelLink: "https://you-tube-createx-marathon.vercel.app/",
    },
];

const template = document.querySelector("template");
const worksList = document.querySelector(".works__list");

projects.forEach((project) => {
    const clone = template.content.cloneNode(true);

    const title = clone.querySelector(".works__list__title");
    const linkGithub = clone.querySelector(".works__list__link__github");
    const linkVercel = clone.querySelector(".works__list__link__vercel");

    title.textContent = project.title;
    linkGithub.href = project.githubLink;
    linkVercel.href = project.vercelLink;

    worksList.appendChild(clone);
});
