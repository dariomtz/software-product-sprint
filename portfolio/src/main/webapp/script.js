// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds scrolling through projects and experience functionality
 */
const projects = [
    {
        title: 'Interns GDL Website',
        description: 'A website built with React.js that uses the Blogger Rest API v3 as a Content Manager System.',
        repository: 'https://github.com/interns-gdl/Interns-GDL-Website',
        link: 'https://interns-gdl.web.app/',
        image: 'https://1.bp.blogspot.com/-bsCfc6qwAiA/YAWTsa7W6aI/AAAAAAAAhaQ/7w3Cy4q0desSkg3wrYgtbhP8k9dFHRFugCLcBGAsYHQ/w400-h400/INTERNS%2BGDL.png',
    },
    {
        title: 'Blogger Components',
        description: 'An object that makes it simple to use a Blogger as a Content Manager System through Blogger REST API v3 built with vanilla JavaScript.',
        repository: 'https://github.com/dariomtz/Blogger-components',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Blogger.svg/1200px-Blogger.svg.png',
    },
    {
        title: 'Front end router',
        description: 'An object that allows you to set up endpoints for your static web page in the front-end built with vanilla JavaScript.',
        repository: 'https://github.com/dariomtz/Front-end-Router',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png',
    },
    {
        title: 'Play Monopoly',
        description: 'A web aplication to play monopoly that allows you to make transactions in real time built with vanilla JavaScript using Firebase.',
        repository: 'https://github.com/interns-gdl/play-monopoly',
        link: 'https://play-monopoly.web.app/',
        image: 'https://i.pinimg.com/originals/b0/b2/48/b0b248f91cefb344ec92b272eadd860b.png',
    },
    {
        title: 'Open API Docs',
        description: 'A web app host and share Rest APIs Documentation built with JavaScript and JQuery.',
        repository: 'https://github.com/dariomtz/APIDOCS',
        image: 'https://avatars.githubusercontent.com/u/16343502?s=400&v=4',
    },
    {
        title: 'Classification and Clustering Java Library',
        description: 'A Classification and Clustering Library built in Java, with the goal of implementing classification and clustering models so that you don\'t have to.',
        repository: 'https://github.com/dariomtz/Classification-and-Clustering-Java-Library/',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Multi-Layer_Neural_Network-Vector-Blank.svg/1200px-Multi-Layer_Neural_Network-Vector-Blank.svg.png',
    },
    {
        title: 'Data Structures Programming language',
        description: 'A programming language that has some simple data structures built-in, with an easy to pick up syntax for new programmers. Built in C.',
        repository: 'http://github.com/dariomtz/Shrek-Programming-Language',
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/AST_binary_tree_arith_variables.svg',
    },
    {
        title: 'Neural Network to Identify types of animals',
        description: 'It is a single layer Artificial Neural Network that can guess if the animal is a mammal, bird, or fish. Built in Python using Numpy.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Single-Layer_Neural_Network-Vector-Blank.svg/1280px-Single-Layer_Neural_Network-Vector-Blank.svg.png',
    },
    {
        title: 'Treasure hunter game',
        description: 'A puzzle game developed in C using SDL and SDL image to render.',
        repository: 'https://github.com/dariomtz/treasure-hunter',
        image: 'https://1.bp.blogspot.com/-5H1iLhCqYfY/XU8EsDSPStI/AAAAAAAAY9o/EwTrhdHmhvUiu0KdWzzC1ZkdsOO_AOv_ACLcBGAs/s400/Screen%2BShot%2B2019-08-10%2Bat%2B12.48.50%2BPM.png',
    },
    {
        title: 'Snake web game',
        description: 'A Snake game that saves records. Built with Javascript using p5js for the game and Firebase for the record saving.',
        repository: 'https://glitch.com/edit/#!/swamp-chocolate',
        link: 'https://snake-dario.glitch.me/',
        image: 'https://1.bp.blogspot.com/-Fz5p-5Fnu-A/XU8EISdvPYI/AAAAAAAAY9c/hcwW02RgrGo7GIh_UOtQYzS_DK98Lw6jQCLcBGAs/s400/Screen%2BShot%2B2019-08-10%2Bat%2B12.44.54%2BPM%2B2.png',
    },
    {
        title: 'Flying pug game',
        description: 'A side-scrolling endless web game about a flying dog avoiding "chanclas". Built with Javascript using p5js.',
        repository: 'https://github.com/dariomtz/flying-pug',
        link: 'https://hunger-games-c7ab1.firebaseapp.com/',
        image: 'https://1.bp.blogspot.com/-vcpUjl-mONw/XU8Efd4LHBI/AAAAAAAAY9k/jz6sZjNM38sen27rqGdD2y5NCDzb_SbJgCLcBGAs/s1600/pug0001.png',
    },
];

const experiences = [
    {
        title: 'Google Software Product Sprint 2021',
        description: 'A program that brings together university students and Googlers for 11 weeks of virtual programming and community building.',
        link: 'https://buildyourfuture.withgoogle.com/programs/softwareproductsprint/',
        image: 'https://w7.pngwing.com/pngs/543/934/png-transparent-google-app-logo-google-logo-g-suite-google-text-logo-circle.png',
    },
    {
        title: 'Google Foobar',
        description: 'In 2020, I got an invitation to the secret hiring challenge and solved up to level 4 (out of five)',
        link: 'https://foobar.withgoogle.com/',
        image: 'https://miro.medium.com/max/1940/1*t6Fi14AQFsFMWrUlTxQoXg.gif',
    },
    {
        title: 'Competitive programming',
        description: 'In 2019, I joined a competitive programming club and started participating in online competitions in sites such as codeforces and Google\'s Coding Competitions.',
        link: 'https://codingcompetitions.withgoogle.com/',
        image: 'https://codingcompetitions.withgoogle.com/static/hashcode-fb.jpg',
    },
    {
        title: 'Handy.la Internship',
        description: 'After a year of mentouring, I did an internship as a software engineer at Handy.la on summer 2018.',
        link: 'https://www.handy.la/',
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAW8AAACJCAMAAADUiEkNAAAArlBMVEX///8AqsWhxRcAp8MAqMQApMGO0uCt4Oqj3OaJ0N+S1eKcwgAuts30+vwAo8EltMyn2uZVwdXG6/Hs89r9/vnr+fuEytrf9fgArsj3+u36/f610VS+5u7S7/Tm9/mgxQBpxdfr8tOryzXW5aXF24Hi7L7C2Xd0y9sAnLzc6LKuzUBHutDy9+PL34+30l3n8MvT46C91mq61GTJ3YumyCeryztzxNZGv9Pd6rez0FZhmjeIAAAMx0lEQVR4nO2d63raOBCGbSxzMsaB4OC4EGjaxNuQpptuN93e/40ttjlIoxlZBons9tH3M9iy9SJGc5AUz3NycnJycnJycnJycnL67bXsDnl1p+/9Qr+5+uOA13jw3i/0m6sX+LyC7nu/0G8ux/uycrwvq0vynhYDXsVC454FuGdp8f0uoUvy7ofi3DzUuGcg3hP2LL7fJXRR3uBZWrzBPY63vhxvG7xnH6lPHG8LvGdPr9RHjrd53rf30RP1meNtnPd1J+p0bokPHW/TvL+tOp1ORBlwx9sw7y/bwb3l/Yn42PE2y/vPCncnoiZMx9so78817k6HmjAdb4O8Z9/3uDurZ/wSx9sc79unA25ywnS8jfF+vj/i7kRf8Yscb1O8P3Y43J3VI36V422I98OqI+h+hl7meJvh/SkScXciPMJ0vI3w/gpxd6IH9ELH2wTvRwk3NWE63ufznv2ScXei7+i1l+GdLhe94bAoBv3hYrpMW/ZHaOiqOygGw950fsrt8Xw5nU6Xd+Jfz+TNu9280Ivt855fTTLGVTsDxrL11Sm47roj/9AOSwbt6tTb90h8Vr4J8/3kZhEfPjmP9/OPFYobnzAt854PsnHZP1HbXo+zLjnM4z9CXn/Uw3E+CcFzx4m2JUuHwnswPwjDyX4tAso7D8fCW4xZjrb8bYWP7k70D3a5Vd6LDUAk3BZOiAEaj4ULw/KLyQeh9LVtP0p01m948zX2HizM+tXH+PgGvfQD9FHXq4jijU6YFnkvNxgiocMFOsYR3ssR8cWF6zusCV5pEVDfejgqIeK855D3Gm399st3HDleU7PGOy5kOyIpyLBBI/NeMLKtIGtYPtzL6N+Yz4Iip+z3Bjwzi4kn3H56wUx4hF1ri/dU1UseJrL4F/KO+8ofinq+XofqFwiSmOB9Be4MFF8s4oB3omvkQku8hw29PCpcSzcD3kG/obGwT75qmjR+7cwvcN5pJn7LTH7TvWbo+MYmTDu8B9q4sREOePuNyMbUrDnPmm3a1qaAx+39wbX4ASMNyq5oCXl/vhTvbgvcW+Dw/rjV7SUJH/d0lr4GbkkH3lPwRYSkM/QB9VGwCdMG76bfP1QGvJTWvH22wd7zLmvbTqVjvJOAp6wJIM9ScrD2WJCUrAXeU9qZIDoI+gHtiU4TmAnXMSZYWwfeQ2BQfDzk2RflOcv98LhFjtXUzPPOwajYX3UIxJHPRHPQfnyjztpEz0OS3+bAG7rg1MrrH2B4r8o/PnyPvjTzHuRxk/IbJW8Yl1WXsKS4WkyXy+miP0kk5GCAnzC+kYHS1qodmzrmT4ALziYo7o9weP9V/x1bJduHk3PYLHiLwDuVcLMgG/DpqXw6kYgLFpzmXeW9cHOVgI7d4XMlq1NnKpPH8V5AFxw1KJ8hb8zxJnifIJG3NLyZ35d+6wtwTXjFf5rjvINg8zbsDwdvG8wohSAaWWMdY2G2HvT7/cE6o0MoPj8IvjTUoMyAOYk+0LjN84bDPxhhCY4lmInWjbxZcPyRpEPZJw/ehAdAX65SuDlkYePpmiLO8wahEGpQHuDwptYOWuEdLwaj8JggYiP8uWDqz4QmEN7BRviRxPJkyIT2JzLMYCROy/MNbuF53ktoUJAE2ysILlfUWmQrvEuliyLxK+bMJ2KyO7Ej4wbeQQEbKOCLCwYFcvJR1wvvvFBvGDX11buFvje5t4F+ZCvh+aL5ohj5oWiYOQGbEfITqswby4WO4DU8T8R6Y8HhEouIBN6ADxJYwVg++kZ0GWvvFJH5ufxuUVApBzDzC4NT5p0gzcAhzNvWFA5vxvDk3hLrD887hW6ONBvBYjGx0Gcnm7xVGoGJn8chzZd4aQWYaMbNAVewV+Q7LuT+i/XLNVM3BGP5vfNN6H145/D3ruaNz7nQOWbHuQyWCojaTCk5PBN5g6dIHooUyyucb+99eOd9qRihtCcBPgnkEOrB/ZDMCR6n1JJMuMhbSk8AgwJjeXJnWq1L887T3psve75q3sTiCTCKj/UXaCSUWaGe9OWI6yFgtkjMjEmxPJIz4XUx3nk6n/cG61EQYrG0er4kmnwDvA9WvgvzemShoBScEQHvuTKHAgtpkXK2vADvfL5cDIvJZpT5IZocrKTkDVMje8GRd+ANB/4b0UCtLvw1gPU+sDXBoEDc+Cq2oyTerFnavJe9Yos5qDkrk9En8QYx6tHMA5MMUytAc2i+AG9YTuYNihTL46tij4K8R5NmgRkE550v1qyM6/Vy/iJvYFHb8gaFXkXdsRb4eiDvXBHySCs11U86rd4AfoAY73nBGhb7WOQNghi82MYJuthw/SBwXsOjQbmFw5vYtXOUlXoxvn7scrzBDKc233J/IG8QyXKM4K6GiNgFeJQN3ki29LK8wd+lXFcDA2l9LDCgx/cBdXll5ht/1vm8443GQjarvKfkeMTVuB4ZPOiQXLsGmVhl5ruWcd5x84qm6qb/E++UgCTt2lFlvmsZ553oDO6AdcVgxao9aTqftNGewBl190Kzv8HwVma+8WedyxstGwpiQTDq3nlikd8q76b5EvpbMm+QtNplar61ynzXMsx7qlqEwMrdJMm6X5k/m7zBY/FVDEc1+YOlkcSugHV5dea7lmHeMBF6BD0OkslNfxnvM3UWeRuOd5AuVwniGTDezc63Z5o3Nry3Y/rnTW8KC60WeUvxvHpj1RzWhBHewKWvDMo/7TLftczyloq4fpAR28hs8oYZJrUDLm3UwfanbcRLyin4BTjfDZnvWkZ551INl97PZJM3XGdJbC3bqSEfW0vkVOaspFi+IfONtXMm7xTgZht6a+vEnj8oLfY5q96weyehX2WRR4rlNWZLw7ylVR+KXa2ZRd6xVC6mZ8y8oZ62F+/EVB7PPcBNHHgCZJR3U22V01K1HuJc3nK9mH4TZMpBefOuQFnZuD7B+fYM8+7pB9LA5zXMW7IR5JaqnoSb2s99NPNVfe4vwPsH3VdeZnlrNwbXMhjmncuDFp+4sY2dBO9jFFr6O9KiWB3n23sveyJtZDLMW7YSjGFVqB4WnhG87w5Nli8rxfKNme9aVudLRgQacPm3ed4whqnWM0OvMB+gmWPqfIi9R8XK9QKgLh/9aoK2k1Hed/DVM8xBieUpyjhvLG8Gg4EFkTmmeO8nhfLzW2hOtJxvzzDvWNoqFQzhoFqipwcY5z3HRm6Y9PcBQdpPqNQaxTveubBluQHG8j+aM9+1zMbza6mXgf/Wm8dxnudxnC76bxle2TTOG8Svh2vCZNIddNeJ6qAQ6ryZ+ndZlZ9hLK/nfHumeUO3w69zg8xPku3QD0PN9T4meKfUZleG70nk2qF413l1NJbXc74907xjopPMb7XexwRv7LvXE32eUpW0KpfhwkWx9xrUahnOfw/pn6lSFngjkaOeaN4lrGpr19NpzrdnnLecjdCTDd7e5jTgNO/S/wqxWF7T+fbM1y+VBTVawsZGU7xz6hAmtRTns21d8LJY9PmUzHct4/X5NkefEKxM8fbSk4AreC/CqnYBl52gJ7HhMr/ep9ADLiYughuuBWO89YAHG1C8UZw/mJWVNBjLr7Qy37UsrGfTAh6uxYUq/BYdc7y9eNL4MkESi2thVLwH5aas11Odb8/S+sHGPrJwAAo8AQ/JHG/P6zYcNhFuck+f97xAnG/yn6UhsrI+tulwtqDcfCq2wh+BYpS3t1QtsGNVh/V5e7G8wfVvDWQH2TqfTUE8CNZlFkP0ZHhYZnkrXoYFmyqh1oK3Jy+K/bMRGCdwKkt4Am/0kIp0SKQotrTrobwNuLk9KnzFC+wnYTRvYZsLuXfcS7vI8RssCDe7hOGbuFZAzfsZHk+g73xv1UtGvBL6KD+un+AevHSST8vkFHeyyxZqGJZLB3cq+E5m3CKoOBPaH/2k3gMQJHlvm+xtqpOZOdj+8f8AF0KHEvWYA7F89KK8+rK66w1+ZuPqoOFxmG1uesLerlzQCc3nbVqIFzcbf/cqyWS4POWBpWAs38L5vpDSdJ6mZxyyblLVu5zTANzgqp35djpJMJZv43w7tZa0KLaN8+3UWtD51lx24nSins5xvp3aSsp8u9nSquCyk+YNl05nSDo8qel4Aqez9HJG5tuptaSzqrAT7J1MSf6fizo7pJxO0wxut9RfpOnUVrPrrx2I+7+Yqvr/6/n18fH11z32L6R09hM7tdR1+Y8Y0H8/onH6hlNrwYjyqB9ueFsQydvFOlZE8XbOiR1RvJWn2DudLIK39oYdp3bCebtI3pZQ3jonVTmdJIy3KxLbk8w7ckU0i5J4R0/am9Gc2kvkHUX3X1xYaVN1/mSn1aMb25b1/PLrQ6mX168Prrzg5OTk5OTk5OTk5OQE9S8eueHo36HfzgAAAABJRU5ErkJggg==',
    },
    {
        title: 'Academic Excelence Scholarship',
        description: 'Awarded an academic excelence scholarship at ITESO, due to academic and extracurricular merits',
        link: 'https://www.iteso.mx/',
        image: 'https://pbs.twimg.com/profile_images/1190318352926990336/TcrIABnR_400x400.jpg',
    },
    {
        title: 'SV Links Immersion Program 2017',
        description: 'As the first place price on an innovation contest, I attended talks about innovation, entrepreneurship, and work culture at Google, Stanford University, and others.',
        link: 'https://svlinks.org/',
        image: 'https://pbs.twimg.com/profile_images/1184516809602621441/Xznslxm4_400x400.jpg',
    },
];

var projectIndex = 0;
var experienceIndex = 0;

function nextProject() {
    projectIndex++;
    projectIndex%=projects.length;
    showProject();
}

function nextExperience() {
    experienceIndex++;
    experienceIndex%=experiences.length;
    showExperience();
}

function previousProject() {
    projectIndex--;

    if(projectIndex < 0){
        projectIndex = projects.length -1;
    }

    showProject();
}

function previousExperience() {
    experienceIndex--;

    if(experienceIndex < 0){
        experienceIndex = experiences.length -1;
    }

    showExperience();
}

function showProject(){
    const project = projects[projectIndex];

    document.getElementById('projectTitle').textContent = project.title;
    document.getElementById('projectDescription').textContent = project.description;
    document.getElementById('projectImage').setAttribute('src', project.image);

    let projectRepoBtn = document.getElementById('projectRepository');
    if(project.repository){
        projectRepoBtn.setAttribute('href', project.repository);
        projectRepoBtn.classList.remove('d-none');
    }else{
        projectRepoBtn.classList.add('d-none');
    }
    
    let projectLinkBtn = document.getElementById('projectLink');
    if(project.link){
        projectLinkBtn.setAttribute('href', project.link);
        projectLinkBtn.classList.remove('d-none');
    }else{
        projectLinkBtn.classList.add('d-none');
    }
    
}

function showExperience(){
    const experience = experiences[experienceIndex];

    document.getElementById('experienceTitle').textContent = experience.title;
    document.getElementById('experienceDescription').textContent = experience.description;
    document.getElementById('experienceLink').setAttribute('href', experience.link);
    document.getElementById('experienceImage').setAttribute('src', experience.image);
}

var facts = null;

document.addEventListener("DOMContentLoaded", getRandomFacts);

async function getRandomFacts(){
    let request = await fetch('/random-fact');
    let text = await request.json();
    facts = text;
}

function randomInt(max){
    return Math.floor(max * Math.random());
}

function getRandomFact(){
    if (!facts){
        return;
    }
    let randomFact = facts[randomInt(facts.length)]
    let fact = document.getElementById('fact');
    fact.innerText = randomFact.text;

    let aboutDiv = document.getElementById('about');
    aboutDiv.style.backgroundImage = `url(${ randomFact.image })`;
}