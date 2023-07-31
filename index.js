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
        image.src = v.url;
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
    const start_index = count % (certs.length - 1);
    createCertElements(start_index)
    count += 2;

    setInterval(() => {
        const start_index = count % (certs.length - 1);
        count += 2;
        createCertElements(start_index)
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
            url: 'https://media.licdn.com/dms/image/C561FAQHrBniP9VdtIw/feedshare-document-cover-images_1280/0/1674718527404?e=1691305200&v=beta&t=1cpxk_F7y5h7Ci6go1E3JTuUT5CiOd-zyrwWN4jClIM'
        },
        {
            title: 'Angular Essential Training',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQGierERdikbSQ/feedshare-document-cover-images_1280/0/1676782114382?e=1691334000&v=beta&t=XpALcNh8wc7iZRwUKyD4-9ATN5tVAKfNReAZMNnIfqc'
        },
        {
            title: 'Node.js Essential Training',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQF-IFVMhD7CBQ/feedshare-document-cover-images_1280/0/1675241522202?e=1691305200&v=beta&t=-61vF1M8b7VB08Rwqk7MQd5Fo5VE4MWrjKZFLFDco9Q'
        },
        {
            title: 'Introduction to MongoDB (2022)',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C4D1FAQF4jakRttqJdA/feedshare-document-cover-images_1280/0/1676427260983?e=1691269200&v=beta&t=CBoSBgZj0zCNveKaTYFthf8ApoNJXEgjxl4AR7omnI8'
        },
        {
            title: 'CSS Essential Training',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQGeGlJjDLKaSA/feedshare-document-cover-images_1280/0/1674584633303?e=1691305200&v=beta&t=mKYHLeifKxnfHQkrRTNNB3-umD800FJh6VwgmrosJ7o'
        },
        {
            title: 'HTML Essential Training',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQE5AWz-NPIW7g/feedshare-document-cover-images_1280/0/1674544439954?e=1691305200&v=beta&t=uKYMYmVs059OkWEtUTj5mwMwBlN28A2F1Y3JbNoMSRo'
        },
        {
            title: 'Advance your Node.js Skills',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQG-MKaw8xpWLw/feedshare-document-cover-images_1280/0/1676131245738?e=1691334000&v=beta&t=XxoV--7ea6UNadEQYCeXPIKgavRBCRek1OP-7eoPDHw'
        },
        {
            title: 'Advanced Express',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQFIEoAxuH7uhQ/feedshare-document-cover-images_1280/0/1675832759379?e=1691334000&v=beta&t=350JTFAO0U09hhUEtlAECKde-lymNVxzUHIq_bqnOZ8'
        },
        {
            title: 'Advanced Node.js',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQFVUJnE-fQnxA/feedshare-document-cover-images_1280/0/1676128239057?e=1691334000&v=beta&t=xrJaMzi7tQCfh42PVSBStccbKVUtqEUwrHjkNyLTk6o'
        },
        {
            title: 'Advanced npm',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQHA2Ut7wIEsBg/feedshare-document-cover-images_1280/0/1675614139774?e=1691334000&v=beta&t=Y8XC6Nvrghe86Ibftc-3DOjg0DjCgW8PJ_s_w0Jachw'
        },
        {
            title: 'Career Essentials in Software Dev by Microsoft & LinkedIn',
            source: 'microsoft',
            url: 'https://media.licdn.com/dms/image/C561FAQEjr6k4tE0Dgw/feedshare-document-cover-images_1280/0/1673621205352?e=1691305200&v=beta&t=n9KegBCE0U_iokXr4VYwC_lImPQ9mH5uC8CaxDgnrAs'
        },
        {
            title: 'MERN Essential Training',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQER-O6JlP18TQ/feedshare-document-cover-images_1280/0/1676265915801?e=1691305200&v=beta&t=9r3LiqNvMC1XukHQMNQO6wBedvtFlxAmfh-waa_z75c'
        },
        {
            title: 'JSON Essential Training',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQG_1J7eG5CBaA/feedshare-document-cover-images_1280/0/1674925122843?e=1691305200&v=beta&t=alNzRwwfuKzN0A3Igu3VnpUbv-gEsz619-Cehp4GzIw'
        },
        {
            title: 'React.js Essential Training',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C4D1FAQGbEVJoM0zTmw/feedshare-document-cover-images_1280/0/1676351822856?e=1691305200&v=beta&t=RZEAsOyT6kv2bwBoVEzpE442v1rPVSByMrvbblHyhrY'
        },
        {
            title: 'React Native Essential Training',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQH2jZaDtPrW4Q/feedshare-document-cover-images_1280/0/1677058974816?e=1691305200&v=beta&t=OdXCO3-_3nYu_etJAJ891o6g7lj_jA_9r5f7Er0KrqU'
        },
        {
            title: 'SQL Essential Training (2019)',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C4D1FAQH9QloEHM8o-A/feedshare-document-cover-images_1280/0/1676702489999?e=1691305200&v=beta&t=fTk_6PT0QGMq0L1F3ddwUgPMDs1_LjXgM73_I9LUgyQ'
        },
        {
            title: 'Docker Essential Training: 1 Installation and Configuration',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQFYswEBl8kIdg/feedshare-document-cover-images_1280/0/1676300446888?e=1691334000&v=beta&t=3gdyXEl4WRJZz1cAHih-oDhkBOR-gSRbx68fdeojcK0'
        },
        {
            title: 'Advanced Node.js: Scaling Applications',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQET_Dqkkh4M8Q/feedshare-document-cover-images_1280/0/1675442690957?e=1691334000&v=beta&t=PtNQqiruMo6HXxZDpzjNT4L10Cu6nuNqtvFcdj9s2XU'
        },
        {
            title: 'Angular: Cloud-Powered Apps with Firebase',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQGMLX4NLFAAAg/feedshare-document-cover-images_1280/0/1676824936068?e=1691334000&v=beta&t=xdyjTPX-ijvlQAjghD2PcOogcucaG1uZZ25NCGOK6RM'
        },
        {
            title: 'Angular: Creating and Hosting a Full-Stack Site ',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQFx66-p05lM5w/feedshare-document-cover-images_1280/0/1676279467435?e=1691334000&v=beta&t=AJwWBbnLEUIwOMcE6WNTfK5I--wO0uE3F6T19ERYtuU '
        },
        {
            title: 'Angular: Maintaining Applications',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQFstycm2kRTYQ/feedshare-document-cover-images_1280/0/1676828575215?e=1691334000&v=beta&t=ZgGKaFWxMt-fdqSjHaVno9NTwnOVvYGsKMeiCaevRN8'
        },
        {
            title: 'Angular: Routing',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQE5712c4CxRgg/feedshare-document-cover-images_1280/0/1676801040570?e=1691334000&v=beta&t=tnKlt58bJiiExw3PIp-z0xMUOxPhJETgdxna_vYXwRk'
        },
        {
            title: 'Angular: Testing and Debugging',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQGtR8CUGeLQsA/feedshare-document-cover-images_1280/0/1676816825691?e=1691334000&v=beta&t=XaHLbzTIT6ZVaRQ3czLSEOICNZ_e4FFA4OUYzLDZdCs'
        },
        {
            title: 'Angular: Workflows',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQGuIJKcUWcTpg/feedshare-document-cover-images_1280/0/1676795200788?e=1691334000&v=beta&t=LODOxraOrggR7ljeM5t99xXjCRkpeKntZjIDQznVgOA'
        },
        {
            title: 'Become a Full-Stack Web Developer',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQEDpc69wmkrYg/feedshare-document-cover-images_1280/0/1676720592274?e=1691334000&v=beta&t=mOKfAf5NOJ-AuNuDceMKEsT7NBV0mbTe1azT5zWq880'
        },
        {
            title: 'Become a React Native Developer',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C4D1FAQH3nUewFRLd4Q/feedshare-document-cover-images_1280/0/1677079083728?e=1691334000&v=beta&t=ekxh9LTBkUyzNniHYVQyKuLH6de4uZFm084DCrrb92g'
        },
        {
            title: 'Building Modern Projects with React',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQHHqcDcbkic3w/feedshare-document-cover-images_1280/0/1676874596486?e=1691334000&v=beta&t=R7U9RDxdy6r6BuReJTqiwgzRYhs6lIyQilcpRDZdqbs'
        },
        {
            title: 'Building RESTful APIs with Node.js and Express',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQGeeS-PV5oxVw/feedshare-document-cover-images_1280/0/1676374075866?e=1691334000&v=beta&t=dAWwDpPyb65P40155t4_cTzMK21gnnPT3eCvlkQ9c-A'
        },
        {
            title: 'Building a Website with Node.js and Express.js',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C4D1FAQH_pNINZF-WKg/feedshare-document-cover-images_1280/0/1676391413992?e=1691334000&v=beta&t=CbW_7fTt15s0mzynG2DeiPl-4d2h5qD6rYSMFmllNFo'
        },
        {
            title: 'Create a CRM Mobile Application with React Native',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQHcDWi2aoTvRQ/feedshare-document-cover-images_1280/0/1677072005061?e=1691334000&v=beta&t=yhyKLuFc9sS5FuiwSdXYn8fLzHLVRO566fNUN653qew'
        },
        {
            title: 'Databases for Node.js Developers',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQEA1wsilSyAjg/feedshare-document-cover-images_1280/0/1676618944426?e=1691334000&v=beta&t=bA9j8EyePXWG66U2XzG7eW5s_ttGavy5XidlZSxr5-s'
        },
        {
            title: 'Introduction to Career Skills in Software Development',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQEjr6k4tE0Dgw/feedshare-document-cover-images_1280/0/1673621205352?e=1691334000&v=beta&t=HFISdeZpKShWqvJdKEFKOZ0kIPl6rJpciJ0Vq42eLx8'
        },
        {
            title: 'DevOps Foundations',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQHZxZR2sBzICg/feedshare-document-cover-images_1280/0/1676630317158?e=1691334000&v=beta&t=T8hoDslJUFSdjRTwEdE6BJQwEsf1unMUMa00UbMDSIc'
        },

        {
            title: 'Docker Essential Training: 2 Orchestration',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQHKyYDDvCBmQw/feedshare-document-cover-images_1280/0/1676558082122?e=1691334000&v=beta&t=iZpxW0mfeNTuW9DcBulOXguShlHrl8RSqHnBinHiP8E'
        },
        {
            title: 'Docker Essential Training: 3 Image, Management, & Registry',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQHW6Cc_TAsR-w/feedshare-document-cover-images_1280/0/1676564377115?e=1691269200&v=beta&t=sLZfTe8YVS2QANhY6M3x4MEbR15da5sNvQHGlWoZ9Ks'
        },
        {
            title: 'Docker Essential Training: 4 Storage and Volumes',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQHlrDm2IF81CA/feedshare-document-cover-images_1280/0/1676606217451?e=1691269200&v=beta&t=b15VqmFAkBl6TzypgXMyv1x6rzqt_EWibtxThpW73Ug'
        },
        {
            title: 'Docker Essential Training: 5 Networking',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQHCm71lkh65Mw/feedshare-document-cover-images_1280/0/1676567721418?e=1691269200&v=beta&t=hlIymvxlFJ5RLmVJ_nMhxq-KtnOTQpRsX85V-2ZttnI'
        },
        {
            title: 'Explore App Development with the MERN Stack',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQEBnS3XNDwA0A/feedshare-document-cover-images_1280/0/1676470090434?e=1691269200&v=beta&t=IZdV3zryxxoqB77jZsIK3p3ScXRJr0yCN0K_94lZCdc'
        },
        {
            title: 'Explore React.js Development',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C4D1FAQG66DvxE-qwIg/feedshare-document-cover-images_1280/0/1676955952316?e=1691269200&v=beta&t=Lc03PqQAiil3DN903yrpz9tB5UPmQB8g1vunhSR37I4'
        },
        {
            title: 'Explore Web Development with Angular',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQEyMCnmG8hLjw/feedshare-document-cover-images_1280/0/1676828557125?e=1691269200&v=beta&t=7w8PTjClaPC9INrzSEjyqMAFvlmsaPNkhz4m33jW-Sg'
        },
        {
            title: 'Explore Web Development with Node.js',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQFMnjxq9XRDvA/feedshare-document-cover-images_1280/0/1676720932314?e=1691269200&v=beta&t=UPhk0UZtnd3wUVJNbraZisZ5MCACyV7UKrHVCnGYRQg'
        },
        {
            title: 'Express Essentials: Powerful Web Apps with Node.js',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQGQiqdWsom7Xg/feedshare-document-cover-images_1280/0/1675676741400?e=1691269200&v=beta&t=Lhyb2RY2c69QxtI0YGO2zctMoImQ2FJWTdIZbNqSw4M'
        },
        {
            title: 'From React to React Native',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C4D1FAQEoiqazS_2KZA/feedshare-document-cover-images_1280/0/1677075711882?e=1691269200&v=beta&t=pZWotnJUuhCtTNI0EhEfNtwa1EeTVmBgJ3paS5QLwVs'
        },
        {
            title: 'Git Essential Training: The Basics (2019)',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQEOZHt9iwpfUA/feedshare-document-cover-images_1280/0/1676720664144?e=1691269200&v=beta&t=69skIbSHG4Xedlfm0ADH7cVsRgbSOV9dXVPphaSKsJE'
        },
        {
            title: 'JavaScript on the Go: Async',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQFy3wm_VJxi5w/feedshare-document-cover-images_1280/0/1676722337130?e=1691269200&v=beta&t=HjF8hIePxNJvL7eSzG4Ktj48Q9UCCAYGxhpqhmxaTs8'
        },
        {
            title: 'JavaScript: Web Workers',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C4D1FAQHDx_ZCvr4oVg/feedshare-document-cover-images_1280/0/1676961125162?e=1691269200&v=beta&t=lwc7-tNfLfDN8I8IyFnxQqZyFZmeCP4B1oeQmzg3NfI'
        },
        {
            title: 'Learning Angular',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQFRtBCwat8WHw/feedshare-document-cover-images_1280/0/1676734592463?e=1691269200&v=beta&t=iBDTugEHIkfXBo9c4owCZsGST6JUz6Y5n2bjbBCRV2E'
        },
        {
            title: 'Learning Full-Stack Development: MongoDB, Node, and React ',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQFsco3NFQdsJQ/feedshare-document-cover-images_1280/0/1676470070325?e=1691269200&v=beta&t=Gn6FrfjGraMRJ4hyge6GQmYaIiRnmeN_gvElPOQKExM '
        },
        {
            title: 'Learning Koa',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQF8NQlEwUziTw/feedshare-document-cover-images_1280/0/1675535169197?e=1691269200&v=beta&t=ztT8gjuelY7ex0J9uuyRa4TYjkRLxPt-HY7eRMcoXHE'
        },
        {
            title: 'Learning REST APIs',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQE7CQ8szCDnxA/feedshare-document-cover-images_1280/0/1676707209794?e=1691269200&v=beta&t=0WLWPgdrz1V8o2GbL847XNs9ICCOF6luC4h4PdQj-IA'
        },
        {
            title: 'Learning React Native',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C4D1FAQEz4c6NB5ojhA/feedshare-document-cover-images_1280/0/1677078910216?e=1691269200&v=beta&t=OfK1NoagGwp5stVUJYxvHE62AmJ6zO6DRpBbXG8jYKk'
        },
        {
            title: 'Learning npm the Node Package Manager (2018)',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQF_hmSbzvV-cA/feedshare-document-cover-images_1280/0/1675615862770?e=1691269200&v=beta&t=bZBWP3fC3DrZ4LvbE77Ut4kc3CZpQCBxX7Egy5wS81o'
        },
        {
            title: 'Learning the Angular CLI',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQF7q31UnYfHLw/feedshare-document-cover-images_1280/0/1676816752477?e=1691269200&v=beta&t=1Ea1xCc7L4uVibmwfBM0dEig7YcRxFRRRp2oBUSwGtQ'
        },
        {
            title: 'Learning webpack 4',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQEhtfUlBtyAIg/feedshare-document-cover-images_1280/0/1676178115852?e=1691269200&v=beta&t=K0YlyAFoXxa9L560vgo0oFFxFUnNhpFVwhQclSFlWU4'
        },
        {
            title: 'MEAN Stack and MongoDB: Development Techniques',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQFr5lASni3OaA/feedshare-document-cover-images_1280/0/1676978120787?e=1691269200&v=beta&t=khl88j2GKMxYjSDV-XXh6tyyJ1MQx3lbSV7UcF3koz4'
        },
        {
            title: 'Node.js Essential: Web Servers, Tests, and Deployment',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQEwXRJ0rs3l8g/feedshare-document-cover-images_1280/0/1675358184042?e=1691305200&v=beta&t=mYhJ7ZxMJAxECrVSuIuG3bMyEltCd0L3HlbC-1hADz8'
        },
        {
            title: 'Node.js: Debugging and Performance Tuning',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQF0uGF_VrDp0Q/feedshare-document-cover-images_1280/0/1676128170114?e=1691305200&v=beta&t=78XYJ4C-xcWevg1zZdKJO6EkQt3XFi-kvxegrHcnQ3A'
        },
        {
            title: 'Node.js: Deploying Applications',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQG7SJjhg8jeNw/feedshare-document-cover-images_1280/0/1675579390272?e=1691305200&v=beta&t=mzMmPzrgTbHC2fEU5ZkCNv-feSvCIQrYKOLr2rz-5YA'
        },
        {
            title: 'Node.js: Design Patterns',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQFO7xHwirCdFQ/feedshare-document-cover-images_1280/0/1675602184764?e=1691305200&v=beta&t=K8G4hus6hOweLqPbG56CDJ1vTtq00nqBKuC79x64XDU'
        },
        {
            title: 'Node.js: Microservices',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQFTNuGwsR9YVQ/feedshare-document-cover-images_1280/0/1675609025183?e=1691305200&v=beta&t=tfztKprdrVwumuZ_ncfcTg3yicR1ii7my1ov7n_49gA'
        },
        {
            title: 'Node.js: Real-Time Web with Socket.IO',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQHoewlhNW3tGg/feedshare-document-cover-images_1280/0/1676617610129?e=1691305200&v=beta&t=DGa_gQ76GKbZMfiyZ5e3dD8KRBtNjZRGugymmY4ACsA'
        },
        {
            title: 'Node.js: Securing RESTful APIs',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQHijL3736YgLw/feedshare-document-cover-images_1280/0/1675608640503?e=1691305200&v=beta&t=VExUJgYuCKePO2WzajbN3y7gjTY6PvHi7OSj_nfM2NU'
        },
        {
            title: 'Node.js: Security',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQFwWdJkYzWhXw/feedshare-document-cover-images_1280/0/1675842785525?e=1691305200&v=beta&t=M6OJPipy8t1uj8UDKvaNF3Vrr5pucI7dyCcWzjUQaSc'
        },
        {
            title: 'Node.js: Testing and Code Quality',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQGrYW6txXmbDA/feedshare-document-cover-images_1280/0/1676131284718?e=1691305200&v=beta&t=BdIPzw-c8oezxQiDz5TchBqPlWTXy5DokIE2HJstbrk'
        },
        {
            title: 'Node: Authentication',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQHQQu27WmCMvA/feedshare-document-cover-images_1280/0/1676618800372?e=1691305200&v=beta&t=FlYPSw9S5cVQyXydX549dwHPqehcr9IBPhZm9QMez0Y'
        },
        {
            title: 'React Hooks',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQGgzBxW4vo6pw/feedshare-document-cover-images_1280/0/1676875180072?e=1691305200&v=beta&t=jXPIkvfkRLd4qgotrh_dlyMSUBWHF3MNceyBZAGJ9b8'
        },
        {
            title: 'React Native Ecosystem and Workflow',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C4D1FAQGZfZRpYMGMTQ/feedshare-document-cover-images_1280/0/1677079059595?e=1691305200&v=beta&t=TrjkEgocz0q0cLzIqorYxyfbvQsefiqc1Lt2Hr58KVE '
        },
        {
            title: 'React: Accessibility',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQFN34TADvnhdg/feedshare-document-cover-images_1280/0/1676824141262?e=1691305200&v=beta&t=VACOhgf2X-1wzanmHeCVCToqHKkmnPeIhuGUiWQS9vw'
        },
        {
            title: 'React: Authentication',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQE2y3Nh9tF3AA/feedshare-document-cover-images_1280/0/1676946976352?e=1691305200&v=beta&t=YKQyju6fBzrgwUlzRremPEmDIQg43JseShjBu4sOxDY'
        },
        {
            title: 'React: Creating and Hosting a Full-Stack Site',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQHeXe_DdJr9UQ/feedshare-document-cover-images_1280/0/1676822819144?e=1691305200&v=beta&t=U7yfnIs324fskZvfO0IdPGo-xJPXmOJLqCylJh_wwvI'
        },
        {
            title: 'React: Design Patterns',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQGQ_E7FIWNSSw/feedshare-document-cover-images_1280/0/1676364513136?e=1691305200&v=beta&t=w86XZ3QzXit0SCJSiZZJWz_JzA80vLroOaWvWl61X8k'
        },
        {
            title: 'React: Securing Applications',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQFR1jMfkGlTTg/feedshare-document-cover-images_1280/0/1676377953201?e=1691305200&v=beta&t=BMTp_tMgpBjOvOQ8Q5lxrGnh7KXQl1K7CXHFYqdWimU'
        },
        {
            title: 'React: Server-Side Rendering',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C4D1FAQHjRTrP5jpaJA/feedshare-document-cover-images_1280/0/1676955988930?e=1691305200&v=beta&t=MZrd-NTzqdOgFFw5RKiqgUflVeVZGF3gT3dagYR-u-w'
        },
        {
            title: 'WebSocket Communications with Node and Angular',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQFEtw8Dj4tpOg/feedshare-document-cover-images_1280/0/1676819299548?e=1691305200&v=beta&t=kTgNXI3VDNT0Ajo11He1fOgnPDibj5tMq50ALjp6xy8'
        },
        {
            title: 'Become a JavaScript Developer',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQFy6kllitjJmA/feedshare-document-cover-images_1280/0/1674988416270?e=1691305200&v=beta&t=4-gnoxEM8r6AiLSkr4nkbh-dOrznr4QKgkH2Sn0UXgA'
        },
        {
            title: 'Developing for Web Performance',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQGK3UzHLqwtaQ/feedshare-document-cover-images_1280/0/1674988353161?e=1691305200&v=beta&t=UcQJo5u1H5-qUgCe6hlMk0lsi7syQHbBVKFXeKh5DVc'
        },
        {
            title: 'ESLint: Checking for Syntax and Logic Errors',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQFiIDZB8HrsVA/feedshare-document-cover-images_1280/0/1674543877505?e=1691305200&v=beta&t=sLECeZsH08gBrrk1-ydZ-GgcaaBfaddGjn4-rGqGin4'
        },
        {
            title: 'ESLint: Integrating with Your Workflow',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQGbnIva-ZVVcw/feedshare-document-cover-images_1280/0/1674543946209?e=1691305200&v=beta&t=N5J-tPDHEJZsQ635uzw3Vu_pVYVgmDavc2SoQAveBdY'
        },
        {
            title: 'Hands-On Introduction: JavaScript',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQGrNJiB44W9fQ/feedshare-document-cover-images_1280/0/1674543987891?e=1691305200&v=beta&t=iGt6XK3mUzY2dovCirKsoBFpC-Ra3xPi6f5OOiTGSk4'
        },
        {
            title: 'JavaScript: Ajax and Fetch',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQG2abLpbv6R9w/feedshare-document-cover-images_1280/0/1674917042347?e=1691305200&v=beta&t=Jx2AdFYR2ZyQuXD6EJib3e2eAyGFr_hN33DXsAxRnUg'
        },
        {
            title: 'JavaScript: Classes',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQEYIJCWOSC1zg/feedshare-document-cover-images_1280/0/1674768794365?e=1691305200&v=beta&t=EwEuyv-icbgpJas32ni2KJkhDLaC3BBMZk7zkkrOCUw'
        },
        {
            title: 'JavaScript: Closures',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQE2H0H8pDx11A/feedshare-document-cover-images_1280/0/1674769055104?e=1691305200&v=beta&t=tnjko1WirIAbKKp8c-V5zDg0lO5p2JTsBepEqBrwTdI'
        },
        {
            title: 'JavaScript: Prototypes',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQG0a3Xpzl4lWg/feedshare-document-cover-images_1280/0/1674919603674?e=1691305200&v=beta&t=6jKfVBnc_YrC7ANdjLeaoe36Z0J4-C0A5i3aXItQPVg'
        },
        {
            title: 'JavaScript: Scope',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQF51Fokv4v-IA/feedshare-document-cover-images_1280/0/1674753296351?e=1691305200&v=beta&t=BA20JCHQ22Mqu2tT0JQ4ixF0BpjYgiNNQWWDgO7AOkI'
        },
        {
            title: 'Learning App Building with Vanilla JavaScript',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQGmMdzZ3mtR8Q/feedshare-document-cover-images_1280/0/1674807912105?e=1691305200&v=beta&t=IFWZiAzrbdCteM2W6tl2hXPcSmBJopTUYhimY39iZjM'
        },
        {
            title: 'Learning ECMAScript 6+ (ES6+)',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQGZWsY93psQ4Q/feedshare-document-cover-images_1280/0/1674765581401?e=1691305200&v=beta&t=TKqOpzibCexj9Oqy1PjBk8lkfM4qJQ8bVkbOW8PW97w'
        },
        {
            title: 'Learning the JavaScript Language (2019)',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQFfD1ZfJnTYsA/feedshare-document-cover-images_1280/0/1674749812133?e=1691305200&v=beta&t=TVrFWwAoOZW7MEpQ-7cn4Z-wKzsK7DOS-m2KpsKghb0'
        },
        {
            title: 'Programming Foundations: Beyond the Fundamentals',
            source: 'linkedin',
            url: 'https://media.licdn.com/dms/image/C561FAQEsC0qnqNM12Q/feedshare-document-cover-images_1280/0/1673619539945?e=1691305200&v=beta&t=WyPZrdEB-sSQ0dVslABM0IvPYSZKetWCdpNO-zX5hsg'
        },
    ]
    return certificates;
}


