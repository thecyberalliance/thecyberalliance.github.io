﻿function createNav(activePage, fixed) {
    let text = `
        <nav class="navbar navbar-expand-md navbar-dark  bg-dark mb-0 radius-0 ` + fixed + `" style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
            <a href="index.html" class="navbar-brand">The Cyber Alliance</a>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ml-auto">
                    <a href="index.html" class="nav-item nav-link ` + activePage[0] + ` px-3"><i class="fa fa-home"></i> Home</a>
                    <a href="about.html" class="nav-item nav-link ` + activePage[1] + ` px-3 "> <i class="fa fa-info"></i> About TCA</a>
                    <a href="events.html" class="nav-item nav-link ` + activePage[2] + ` px-3 "><i class="fa fa-calendar"></i> Events</a>
                    <a href="news.html" class="nav-item nav-link ` + activePage[3] + ` px-3 "><i class="fa fa-bolt"></i> Awareness</a>
                    <a href="code-of-conduct.html" class="nav-item nav-link ` + activePage[4] + ` px-3  "><i class="fa fa-terminal"></i> Code of Conduct</a>
                    <a href="team-tca.html" class="nav-item nav-link ` + activePage[5] + ` px-3  "><i class="fa fa-users"></i> Team TCA</a>
                </div>
            </div>
        </nav>
    `;

    $("header").append(text);
    $("head").append(`<link rel="icon" type="image/png" href="assets/images/backgrounds/favicon.png">`);
}

function createSubNav(activePage, fixed) {
    let text = `
    <nav class="navbar navbar-expand-md navbar-dark  bg-dark mb-0 radius-0 " style="font-family: 'Inten', -apple-system, BltnkMacSystemFont, 'Segoe UI', sans-serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse1">
        <span class="navbar-toggler-icon"></span>
      </button>
    <div class="collapse navbar-collapse" id="navbarCollapse1">
        <div class="navbar-nav ml-auto">
            <a href="news.html" class="nav-item nav-link ` + activePage[0] + ` px-3"><i class="fa fa-newspaper-o"></i> News</a>
            <a href="blog.html" class="nav-item nav-link ` + activePage[1] + ` px-3"> <i class="fa fa-rss-square"></i> Blog</a>
            <a href="tools.html" class="nav-item nav-link ` + activePage[2] + ` px-3"><i class="fa fa-wrench"></i> Tools</a>
            <a href="security-practices.html" class="nav-item nav-link ` + activePage[3] + ` px-3"><i class="fa fa-shield"></i> Security Practices</a>
            <a class="nav-item nav-link disabled` + activePage[4] + ` px-3" data-toggle="tooltip" data-placement="bottom" title="Coming Soon" ><i class="fa fa-question"></i> Quiz</a>
        </div>
    </div>
</nav>
    `;

    $("#awareness").append(text);

    // $("head").append(`<link rel="icon" type="assets/images/team/png" href="assets/images/backgrounds/favicon.png">`);
}

function createNav1(activePage, fixed) {
    let text = `
        <nav class="navbar navbar-expand-md navbar-dark  bg-dark mb-0 radius-0 ` + fixed + `" style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ml-auto">
                    <a href="news.html" class="nav-item nav-link ` + activePage[0] + ` px-3"><i class="fa fa-newspaper-o"></i> News</a>
                    <a href="blog.html" class="nav-item nav-link ` + activePage[1] + ` px-3"> <i class="fa fa-rss-square"></i> Blog</a>
                    <a href="tools.html" class="nav-item nav-link ` + activePage[2] + ` px-3"><i class="fa fa-wrench"></i> Tools</a>
                    <a href="security-practices.html" class="nav-item nav-link ` + activePage[3] + ` px-3"><i class="fa fa-shield"></i> Security Practices</a>
                    <a href="quiz.html" class="nav-item nav-link ` + activePage[4] + ` px-3"><i class="fa fa-question"></i> Quiz</a>
                </div>
            </div>
        </nav>
    `;

    if (activePage[0] === "active") {
        $("header").append(text);
    } else {
        $("header").append(text);
    }

    $("head").append(`<link rel="icon" type="assets/images/team/png" href="assets/images/backgrounds/favicon.png">`);
}

function createFooter() {
    $("footer").append(`
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;margin: 20px 0;text-align: center;color: rgb(255, 255, 255, 0.8);">
            A Student Run Club at <a href="https://rru.ac.in/school-of-it-artificial-intelligence-and-cyber-security-sitaics/">SITAICS</a> of <a href="https://rru.ac.in/">Rashtriya Raksha University</a><br />
        </div>
    `);
}

function createEvent() {
    let events = [{
            status: "Past Event",
            topic: "Introducing The Cyber Alliance",
            date: "17-10-2020",
            time: "10:00 AM - 12:00 PM",
            by: "The Cyber Alliance",
            description: "A perfect kickstart for your learning adventure...",
            image: "assets/images/events/event1.jpg",
            link: "#",
            disabled: "disabled"
        },
        {
            status: "Past Event",
            topic: "Introduction to Linux and Shell",
            date: "22nd November, 2020",
            time: "10:00 AM Onwards",
            by: "Viral Parmar",
            description: "Basic Linux and Shell Programming for absolute beginners...",
            image: "assets/images/events/event2.png",
            link: "",
            leaderboard: "assets/images/events/intro_to_linux_and_shell_contest_leaderboard.pdf",
            disabled: ""
        },
        {
            status: "Past Event",
            topic: "Introduction to CTF",
            date: "TBD",
            time: "TBD",
            by: "TBD",
            description: "Getting started with playing CTF for absolute beginners...",
            image: "assets/images/events/1.png",
            link: "#",
            leaderboard: "",
            disabled: ""
        },
    ];

    var text = "";

    events.forEach(event => {
        text += `
            <li>
                <div class="card">
                    <div class="card-header text-center">
                        ` + event.status + `
                    </div>
                    <div>                        
                        <div>
                            <img src="` + event.image + `" />
                            <!--<h4 class="card-title">` + event.topic + `</h4>
                            <h5 class="card-subtitle mb-2 text-white-50">` + event.by + `</h5>
                            <p class="card-text">` + event.description + `</p> -->
                            <a href="` + (event.link === "" ? event.leaderboard : event.link) + `" target="_blank" class="btn btn-primary middle ` + event.disabled + `">` + (event.link === "" ? `View Leaderboard` : `Register Now`) + `</a>                            
                        </div>
                    </div>
                </div>
            </li>
        `;
    });
    $("#target>ul").append(text);
}

function createUpcomingEvents() {
    let events = [
        // Add some upcoming events here if needed
        // {
        //     topic: "Introduction to CTF",
        //     day: "11",
        //     month: "Jan",
        //     year: "2025",
        //     description: "Introduction to CTF (Capture The Flag) and CTF Live demonstration Week 01.",
        //     image: "assets/images/events/Introduction_to_CTF.png",
        //     link: "#"
        // }
    ];

    var text = "";
    
    if (events.length === 0) {
        text = `
        <div class="col-md-12 text-center">
            <p class="text-muted">No upcoming events at the moment. Stay tuned!</p>
        </div>
        `;
    } else {
        events.forEach(event => {
            text += `
            <div class="col-md-4 on-hover">
                <div class="card border-0 mb-4">
                    <a href="${event.link}"><img class="card-img-top" src="${event.image}" alt="Event"></a>
                    <div class="date-pos bg-info-gradiant p-2 d-inline-block text-center rounded text-white position-absolute">${event.month}<span class="d-block">${event.day}</span>${event.year}</div>
                    <h5 class="font-weight-medium mt-3 ml-2 mr-2"><a href="${event.link}" class="text-decoration-none link">${event.topic}</a></h5>
                    <p class="text-grey mt-3 ml-2 mr-2">${event.description}</p>
                </div>
            </div>
            `;
        });
    }

    $("#upcoming-events").html(text);
}

function createPastEvents() {
    let events = [
        {
            topic: "The Art of Bug Hunting",
            day: "22",
            month: "Mar",
            year: "2025",
            description: "The Art of Bug Hunting by Ms. Aksha Chudasma.",
            image: "assets/images/events/The_Art_of_Bug_Hunting.png",
            link: "https://www.linkedin.com/posts/the-cyber-alliance_cybersecurity-bugbounty-techtalk-activity-7304079275249352705-hiZ8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEdt6kABMW8Rz8FTP_8_C2zMtwNqGv2IaTk"
        },
        {
            topic: "Introduction to CTF",
            day: "11",
            month: "Jan",
            year: "2025",
            description: "Introduction to CTF (Capture The Flag) and CTF Live demonstration Week 01.",
            image: "assets/images/events/Introduction_to_CTF.png",
            link: "https://www.linkedin.com/posts/the-cyber-alliance_cybersecurity-studentclub-rru-activity-7283848972849270784-TDpN?utm_source=share&utm_medium=member_desktop"
        },
        {
            topic: "Introduction to The Cyber Alliance 2025",
            day: "09",
            month: "Jan",
            year: "2025",
            description: "A perfect kickstart for your learning adventure...",
            image: "assets/images/events/event1.jpg",
            link: "https://www.linkedin.com/posts/the-cyber-alliance_cybersecurity-studentclub-rru-activity-7283059846273208320-yRlX?utm_source=share&utm_medium=member_desktop"
        },
        {
            topic: "Hands-On CTF Session",
            day: "02",
            month: "May",
            year: "2021",
            description: "Learn Basic Cryptography based CTF challenges.",
            image: "assets/images/events/1.png",
            link: "#"
        },
        {
            topic: "Introduction to CTF",
            day: "10",
            month: "Apr",
            year: "2021",
            description: "Getting started with playing CTF for absolute beginners...",
            image: "assets/images/events/event4.png",
            link: "#"
        },
        {
            topic: "Introduction to Cyber Security",
            day: "13",
            month: "Dec",
            year: "2020",
            description: "An introductory session for absolute beginners in Cyber Security.",
            image: "assets/images/events/event3.png",
            link: "#"
        },
        {
            topic: "Introduction to Linux and Shell",
            day: "22",
            month: "Nov",
            year: "2020",
            description: "Basic Linux and Shell Programming for absolute beginners...",
            image: "assets/images/events/event2.png",
            link: "https://www.youtube.com/watch?v=xPAJf-tc80c"
        },
        {
            topic: "Introducing The Cyber Alliance",
            day: "17",
            month: "Oct",
            year: "2020",
            description: "A perfect kickstart for your learning adventure...",
            image: "assets/images/events/event1.jpg",
            link: "https://www.youtube.com/watch?v=GMWN6GJG7Og"
        }
    ];

    var text = "";

    events.forEach(event => {
        text += `
        <div class="col-md-4 on-hover">
            <div class="card border-0 mb-4">
                <a href="${event.link}"><img class="card-img-top" src="${event.image}" alt="Event"></a>
                <div class="date-pos bg-info-gradiant p-2 d-inline-block text-center rounded text-white position-absolute">${event.month}<span class="d-block">${event.day}</span>${event.year}</div>
                <h5 class="font-weight-medium mt-3 ml-2 mr-2"><a href="${event.link}" class="text-decoration-none link">${event.topic}</a></h5>
                <p class="text-grey mt-3 ml-2 mr-2">${event.description}</p>
            </div>
        </div>
        `;
    });
    $("#past-events").append(text);
}


function createTools() {
    let tools = [{
            title: "Nmap",
            desc: "Nmap is a free and open-source network scanner created by Gordon Lyon. Nmap is used to discover hosts and services on a computer network by sending packets and analyzing the responses. Nmap provides a number of features for probing computer networks, including host discovery and service and operating system detection.",
            image: "assets/images/backgrounds/tools/nmap.png",
            link: "https://nmap.org/",
        },
        {
            title: "No More Ransom",
            desc: "No More Ransom aims to help victims recover their encrypted files, raise awareness of the ransomware threat, and provide ransomware victims and the general public with direct links to report attacks.",
            image: "assets/images/backgrounds/tools/NoMoreRansom.png",
            link: "https://www.nomoreransom.org/en/index.html",
        },
        {
            title: "Autopsy",
            desc: "Autopsy analyzes major file systems (NTFS, FAT, ExFAT, HFS+, Ext2/Ext3/Ext4, YAFFS2) by hashing all files, unpacking standard archives (ZIP, JAR etc.), extracting any EXIF values and putting keywords in an index. Some file types like standard email formats or contact files are also parsed and cataloged.",
            image: "assets/images/backgrounds/tools/Autopsy.png",
            link: "https://www.sleuthkit.org/autopsy",
        },
        {
            title: "Maltego",
            desc: "Maltego is software used for open-source intelligence and forensics, developed by Paterva from Pretoria, South Africa. Maltego focuses on providing a library of transforms for discovery of data from open sources, and visualizing that information in a graph format, suitable for link analysis and data mining",
            image: "assets/images/backgrounds/tools/Maltego.png",
            link: "https://www.maltego.com/",
        },
        {
            title: "Wireshark",
            desc: "Wireshark is open-source network software that can efficiently analyze network protocols and enhance security in real-time. Since it is a console-based password auditing and packet sniffer tool, you can use this security software to sniff the network and monitor your network traffic in real-time. Security professionals use this efficient software to capture data packets and inspect the features that particular data packets exhibit, which further helps to identify the weaknesses in network security.",
            image: "assets/images/backgrounds/tools/Wireshark.jpg",
            link: "https://www.wireshark.org/",
        },
        {
            title: "Metalsploit",
            desc: "Metasploit is one of the best security software that contains various tools for executing penetration testing services. Professionals use this tool to attain varying security goals such as discovering vulnerabilities in the system, strengthening computer system security, weaving cyber defense strategies, and maintaining complete security assessments. These penetration testing tools can examine the different security systems, including web-based apps, servers, networks, and so on. Metasploit can instantly identify all the new security vulnerabilities as soon as they occur, thus maintaining top-notch security all the time.",
            image: "assets/images/backgrounds/tools/metasploit.png",
            link: "https://www.metasploit.com/",
        },
        {
            title: "Nikto",
            desc: "Nikto is an open-source security software used to detect web vulnerabilities and take appropriate actions accordingly. The software contains a database that includes around 6400 different threats. Security professionals keep updating this database so that the users may easily identify the new vulnerabilities.",
            image: "assets/images/backgrounds/tools/Nikto.png",
            link: "https://github.com/sullo/nikto",
        },
        {
            title: "Veracrypt",
            desc: "VeraCrypt is a security tool for disk encryption. It runs on Windows, Mac OSX and Linux and creates a virtual encrypted disk within a file before mounting it as a real disk.",
            image: "assets/images/backgrounds/tools/veracrypt.png",
            link: "https://www.veracrypt.fr/en/Home.html",
        },
        {
            title: "OSSEC",
            desc: "OSSEC is an open source, scalable and multi-platform Host-based Intrusion Detection System (HIDS), whose creators want to keep free for the foreseeable future.",
            image: "assets/images/backgrounds/tools/ossec.png",
            link: "https://www.ossec.net/",
        },
    ];

    var text = "";

    tools.forEach(tool => {
        text += `
        <div class="item mb-5 p-3 row">
            <div class="media card bg-dark p-5 col-md-6 col-sm-12">
                <div class="media-body mr-5">
                    <h3 class="title mb-2">` + tool.title + `</h3>
                    <div class="intro mb-4 text-justify">` + tool.desc + `</div>
                    <a class="btn btn-outline-primary" target="_blank" rel="noreferrer" href="` + tool.link + `">Read more →</a>
                </div>
            </div>
            <div class="col-md-6 col-sm-12 d-flex justify-content-center align-items-center mt-sm-2">
                <img class="img-fluid post-thumb rounded" src="` + tool.image + `" alt="image" style="max-height: 300px; object-fit: contain;">
            </div>
        </div>
        `;
    });
    $("#tools").append(text);
}


function createBlogs() {
    let blogs = [{
            title: "CYBER KILL CHAIN",
            desc: "The Cyber kill chain, also known as CKC which is a phase-based cybersecurity model developed by Lockheed Martin in 2011.Similar in concept to the militaryâ€™s model, it defines the steps used by cyber attackers in todayâ€™s cyber-based attacks. The theory is that by understanding each of these stages, defenders can better identify and stop attackers at each of the respective stages.The kill chain helps us understand and combat ransomware, security breaches, and advanced persistent attacks (APTs).",
            posted_on: "10-11-2021",
            link: "#",
        },
        {
            title: "RED TEAM & BLUE TEAM",
            desc: "A red team/blue team exercise is a cybersecurity assessment technique that uses simulated attacks to gauge the strength of the organizationâ€™s existing security capabilities and identify areas of improvement in a low-risk environment.A red team that uses real-world adversary tradecraft in an attempt to compromise the environment.A blue team that consists of incident responders who work within the security unit to identify, assess and respond to the intrusion.Red team/blue team simulations play an important role in defending the organization against a wide range of cyberattacks from todayâ€™s sophisticated adversaries.",
            posted_on: "10-11-2021",
            link: "#",
        },
    ];

    var text = "";

    blogs.forEach(blog => {
        text += `
        <div class="item mb-3 row">
            <div class="media card bg-dark p-3 col-12">
                <div class="media-body mr-5">
                    <h3 class="title mb-2">` + blog.title + `</h3>
                    <hr>
                    <div class="intro mb-4 text-justify ellipsis">` + blog.desc + `</div>
                    <a class="btn btn-outline-primary" target="_blank" rel="noreferrer" data-toggle="tooltip" data-placement="top" title="Coming Soon">Read more â†’</a>
                </div>
            </div>
            <div class="card-footer small">
        ` + blog.posted_on + `
            </div>
        </div>
        `;
    });
    $("#blogs").append(text);
}

