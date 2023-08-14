assignYear();
displayCertificates();

document.getElementById('contact-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    const formData = new FormData(this);

    // Access form data
    const from_name = formData.get('name');
    const from_email = formData.get('email');
    const message = formData.get('message');

    if (!(from_name && from_email && message)) {
        return window.alert('Please fill up all fields.')
    }

    try {
        await onMessage({ from_name, from_email, message })
        this.reset();
        window.alert('Mesage has been sent successfully.')
    } catch (error) {
        console.error('____________________Email failed to send:', error);
    }

});

function assignYear() {
    const element = document.getElementById('copy-right-year');
    const date = new Date();
    element.innerHTML = date.getFullYear()
}

async function onMessage(email) {
    return emailjs.send("service_y4fekhi", "template_pwz50pa", email, 'eJe_c2_1zcjXnxKP5')
        .then(function (response) {
            return;
            // Handle success
        }, function (error) {
            console.error('____________________Email failed to send:', error);
            // Handle error
        });
}

function displayCertificates() {
    const certs = fetchLinkedInCertificates();
    const certs_container = document.querySelector(`.certificates`);

    certs.map((v, i) => {
        const img_container = document.createElement('div');
        img_container.style.display = 'none'
        const h5 = document.createElement('h5');
        const img_dev = document.createElement('div');
        const des_dev = document.createElement('div');
        const des_p = document.createElement('p');
        img_container.setAttribute('class', 'img-container');
        img_dev.setAttribute('class', 'cert');
        des_dev.setAttribute('class', 'description');

        h5.textContent = 'Certificate';

        const image = new Image();
        image.src = v.url.replace('e={time}&', '');
        image.alt = v.title
        img_dev.appendChild(image);


        des_p.innerHTML = `<strong>${i + 1}/${certs.length}</strong> ${v.title}`;
        des_dev.appendChild(des_p);

        img_container.appendChild(h5)
        img_container.appendChild(img_dev)
        img_container.appendChild(des_dev)

        certs_container.appendChild(img_container)
    })


    let count = 0
    createCertElements(count)

    setInterval(() => {
        count = count >= certs.length - 3 ? 0 : count + 2;
        console.log({ count })
        createCertElements(count)
    }, 3 * 1000, 0);
}

function createCertElements(start_index) {
    const imgContainers = document.querySelectorAll('.img-container');
    imgContainers
    imgContainers.forEach(each => each.style.display = 'none')


    if (imgContainers[start_index]) {
        imgContainers[start_index].style.display = 'block'
    }
    if (imgContainers[start_index + 1]) {
        imgContainers[start_index + 1].style.display = 'block'
    }
}

function fetchLinkedInCertificates() {
    const certificates = [
        {
            title: 'JavaScript Essential Training',
            source: 'linkedin',
            url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1674718527404.png'
        },
        {
            title: 'Angular Essential Training',
            source: 'linkedin',
            url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1676782114382.png'
        },
        {
            title: 'Node.js Essential Training',
            source: 'linkedin',
            url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1675241522202.png'
        },
        {
            title: 'Introduction to MongoDB (2022)',
            source: 'linkedin',
            url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1676427260983.png'
        },
        {
            title: 'CSS Essential Training',
            source: 'linkedin',
            url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1674584633303.png'
        },
        {
            title: 'HTML Essential Training',
            source: 'linkedin',
            url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1674544439954.png'
        },
        // {
        //     title: 'Advance your Node.js Skills',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1676131245738.jpg'
        // },
        {
            title: 'Advanced Express',
            source: 'linkedin',
            url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1675832759379.png'
        },
        {
            title: 'Advanced Node.js',
            source: 'linkedin',
            url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1676128239057.png'
        },
        {
            title: 'Advanced npm',
            source: 'linkedin',
            url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1675614139774.png'
        },
        {
            title: 'Career Essentials in Software by Microsoft & LinkedIn',
            source: 'microsoft',
            url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1673621205352.png'
        },
        // {
        //     title: 'MERN Essential Training',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1676265915801.png'
        // },
        {
            title: 'JSON Essential Training',
            source: 'linkedin',
            url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1674925122843.png'
        },
        // {
        //     title: 'React.js Essential Training',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1676351822856.png'
        // },
        // {
        //     title: 'React Native Essential Training',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1677058974816.png'
        // },
        // {
        //     title: 'SQL Essential Training (2019)',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1676702489999.png'
        // },
        // {
        //     title: 'Docker Essential Training: 1 Installation and Configuration',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1676300446888.png'
        // },
        // {
        //     title: 'Advanced Node.js: Scaling Applications',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1675442690957.png'
        // },
        // {
        //     title: 'Angular: Cloud-Powered Apps with Firebase',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1676824936068.png'
        // },
        // {
        //     title: 'Angular: Creating and Hosting a Full-Stack Site ',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1676279467435.png '
        // },
        // {
        //     title: 'Angular: Maintaining Applications',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1676828575215.png'
        // },
        // {
        //     title: 'Angular: Routing',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1676801040570.png'
        // },
        // {
        //     title: 'Angular: Testing and Debugging',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1676816825691.png'
        // },
        // {
        //     title: 'Angular: Workflows',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1676795200788.png'
        // },
        // {
        //     title: 'Become a Full-Stack Web Developer',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1676720592274.jpg'
        // },
        // {
        //     title: 'Become a React Native Developer',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1677079083728.jpg'
        // },
        // {
        //     title: 'Building Modern Projects with React',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1676874596486.png'
        // },
        // {
        //     title: 'Building RESTful APIs with Node.js and Express',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1676374075866.png'
        // },
        // {
        //     title: 'Building a Website with Node.js and Express.js',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1676391413992.png'
        // },
        // {
        //     title: 'Create a CRM Mobile Application with React Native',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1677072005061.png'
        // },
        // {
        //     title: 'Databases for Node.js Developers',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1676618944426.png'
        // },
        // {
        //     title: 'Introduction to Career Skills in Software Development',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1673621205352.png'
        // },
        // {
        //     title: 'DevOps Foundations',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1676630317158.png'
        // },

        // {
        //     title: 'Docker Essential Training: 2 Orchestration',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1676558082122.png'
        // },
        // {
        //     title: 'Docker Essential Training: 3 Image, Management, & Registry',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1676564377115.png'
        // },
        // {
        //     title: 'Docker Essential Training: 4 Storage and Volumes',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1676606217451.png'
        // },
        // {
        //     title: 'Docker Essential Training: 5 Networking',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1676567721418.png'
        // },
        // {
        //     title: 'Explore App Development with the MERN Stack',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1676470090434.jpg'
        // },
        // {
        //     title: 'Explore React.js Development',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1676955952316.jpg'
        // },
        // {
        //     title: 'Explore Web Development with Angular',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1676828557125.jpg'
        // },
        // {
        //     title: 'Explore Web Development with Node.js',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1676720932314.jpg'
        // },
        // {
        //     title: 'Express Essentials: Powerful Web Apps with Node.js',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1675676741400.png'
        // },
        // {
        //     title: 'From React to React Native',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1677075711882.png'
        // },
        // {
        //     title: 'Git Essential Training: The Basics (2019)',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1676720664144.png'
        // },
        // {
        //     title: 'JavaScript on the Go: Async',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1676722337130.png'
        // },
        {
            title: 'JavaScript: Web Workers',
            source: 'linkedin',
            url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1676961125162.png'
        },
        // {
        //     title: 'Learning Angular',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1676734592463.png'
        // },
        // {
        //     title: 'Learning Full-Stack Development: MongoDB, Node, and React ',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1676470070325.png '
        // },
        {
            title: 'Learning Koa',
            source: 'linkedin',
            url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1675535169197.png'
        },
        {
            title: 'Learning REST APIs',
            source: 'linkedin',
            url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1676707209794.png'
        },
        // {
        //     title: 'Learning React Native',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1677078910216.png'
        // },
        // {
        //     title: 'Learning npm the Node Package Manager (2018)',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1675615862770.png'
        // },
        // {
        //     title: 'Learning the Angular CLI',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1676816752477.png'
        // },
        {
            title: 'Learning webpack 4',
            source: 'linkedin',
            url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1676178115852.png'
        },
        {
            title: 'MEAN Stack: Development Techniques',
            source: 'linkedin',
            url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1676978120787.png'
        },
        // {
        //     title: 'Node.js Essential: Web Servers, Tests, and Deployment',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1675358184042.png'
        // },
        // {
        //     title: 'Node.js: Debugging and Performance Tuning',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1676128170114.png'
        // },
        // {
        //     title: 'Node.js: Deploying Applications',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1675579390272.png'
        // },
        // {
        //     title: 'Node.js: Design Patterns',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1675602184764.png'
        // },
        {
            title: 'Node.js: Microservices',
            source: 'linkedin',
            url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1675609025183.png'
        },
        {
            title: 'Node.js: Real-Time Web with Socket.IO',
            source: 'linkedin',
            url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1676617610129.png'
        },
        // {
        //     title: 'Node.js: Securing RESTful APIs',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1675608640503.png'
        // },
        // {
        //     title: 'Node.js: Security',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1675842785525.png'
        // },
        // {
        //     title: 'Node.js: Testing and Code Quality',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1676131284718.png'
        // },
        // {
        //     title: 'Node: Authentication',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1676618800372.png'
        // },
        // {
        //     title: 'React Hooks',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1676875180072.png'
        // },
        // {
        //     title: 'React Native Ecosystem and Workflow',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1677079059595.png '
        // },
        // {
        //     title: 'React: Accessibility',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1676824141262.png'
        // },
        // {
        //     title: 'React: Authentication',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1676946976352.png'
        // },
        // {
        //     title: 'React: Creating and Hosting a Full-Stack Site',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1676822819144.png'
        // },
        // {
        //     title: 'React: Design Patterns',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1676364513136.png'
        // },
        // {
        //     title: 'React: Securing Applications',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1676377953201.png'
        // },
        // {
        //     title: 'React: Server-Side Rendering',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1676955988930.png'
        // },
        // {
        //     title: 'WebSocket Communications with Node and Angular',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1676819299548.png'
        // },
        // {
        //     title: 'Become a JavaScript Developer',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1674988416270.jpg'
        // },
        // {
        //     title: 'Developing for Web Performance',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1674988353161.png'
        // },
        // {
        //     title: 'ESLint: Checking for Syntax and Logic Errors',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1674543877505.png'
        // },
        // {
        //     title: 'ESLint: Integrating with Your Workflow',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1674543946209.png'
        // },
        // {
        //     title: 'Hands-On Introduction: JavaScript',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1674543987891.png'
        // },
        // {
        //     title: 'JavaScript: Ajax and Fetch',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1674917042347.png'
        // },
        // {
        //     title: 'JavaScript: Classes',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1674768794365.png'
        // },
        // {
        //     title: 'JavaScript: Closures',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1674769055104.png'
        // },
        // {
        //     title: 'JavaScript: Prototypes',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1674919603674.png'
        // },
        // {
        //     title: 'JavaScript: Scope',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1674753296351.png'
        // },
        // {
        //     title: 'Learning App Building with Vanilla JavaScript',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1674807912105.png'
        // },
        {
            title: 'Learning ECMAScript 6+ (ES6+)',
            source: 'linkedin',
            url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1674765581401.png'
        },
        // {
        //     title: 'Learning the JavaScript Language (2019)',
        //     source: 'linkedin',
        //     url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1674749812133.png'
        // },
        {
            title: 'Programming Foundations: Beyond Fundamentals',
            source: 'linkedin',
            url: 'https://raw.githubusercontent.com/safi7/portfolio/master/assets/certificates/1673619539945.png'
        },
    ]
    return certificates;
}


