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
        imageFluid: false,
    },
    {
        title: 'Play Monopoly',
        description: 'A web aplication to play monopoly that allows you to make transactions in real time.',
        repository: 'https://github.com/interns-gdl/play-monopoly',
        link: 'https://play-monopoly.web.app/',
        image: 'https://i.pinimg.com/originals/b0/b2/48/b0b248f91cefb344ec92b272eadd860b.png',
        imageFluid: true,
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
        projectIndex = projects.length -1
    }

    showProject();
}

function showProject(){
    project = projects[projectIndex];

    document.getElementById('projectTitle').innerHTML = project.title;
    document.getElementById('projectDescription').innerHTML = project.description;
    document.getElementById('projectRepository').setAttribute('href', project.repository);

    let projectImage = document.getElementById('projectImage')
    projectImage.setAttribute('src', project.image);

    let projectLinkBtn = document.getElementById('projectLink');
    if(project.link){
        projectLinkBtn.setAttribute('href', project.link);
        projectLinkBtn.classList.remove('d-none');
    }else{
        projectLinkBtn.classList.add('d-none');
    }
    
}