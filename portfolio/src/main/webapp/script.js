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
 * Adds a random greeting to the page.
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

var projectIndex = 0;

function nextProject() {
    projectIndex++;
    projectIndex%=projects.length;
    showProject();
}

function previousProject() {
    projectIndex--;

    if(projectIndex < 0){
        projectIndex = projects.length -1;
    }

    showProject();
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