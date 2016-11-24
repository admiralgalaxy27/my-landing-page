"use strict";


class App{
	constructor(){
		this.media = [
			{
				"img" : "https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg",
				"alignment" : "center-align",
				"caption": "WELCOME TO OUR DEAREST GUESTS",
				"slogan": "Getting Started"
			},
			{
				"img" : "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111-1500x1000.jpg",
				"alignment" : "center-align",
				"caption": "MULTI-PURPOSE",
				"slogan": "Club Registration, Tournament Registration, Enrollment Registration, etc..."
			},
			{
				"img" : "http://all4desktop.com/data_images/original/4239396-nature.jpg",
				"alignment" : "right-align",
				"caption": "USER-FRIENDLY",
				"slogan": "Easy to use"
			},
			{
				"img" : "http://homelandagro.com/images/naturegallery/clairvoyantnaturenature5.jpg",
				"alignment" : "left-align",
				"caption": "EFFECTIVE AND EFFICIENT",
				"slogan": "No cost needed and provides quick transactions"
			}
		];
	}
	render(html, component){

		component.innerHTML += html;
	}

	reRender(html, component){

		component.innerHTML = html;
	}
}

class Component extends App{
	constructor(){

		super();
	}

	ueLayout(){
		let html = `
			 <nav>
			    <div class="nav-wrapper yellow darken-2">
			      <a href="#" class="brand-logo blue-text ">USER-REGISTRATION FORM</a>
			      <ul id="nav-mobile" class="right hide-on-med-and-down">
			        <li><a href="#" class="light black-text text-darken-4">Forms</a></li>
			        <li><a href="#" class="light black-text text-darken-4">Add</a></li>
			      </ul>
			    </div>
			  </nav>


			  <div class="slider">
			    <ul class="slides">

			    `;

			   for(let i=0;i<this.media.length;i++){
					html += `
					      <li>
					        <img src="${this.media[i].img}"> <!-- random image -->
					        <div class="caption ${this.media[i].alignment}">
					          <h3 class="light black-text text-darken-4">${this.media[i].caption}</h3>
					          <h5 class="light black-text text-darken-4">${this.media[i].slogan}</h5>
					        </div>
					      </li>
					    
					 `;
					}


			 html += `

					</ul>
				  </div>
				<footer class="page-footer red darken-1">		          
		          <div class="footer-copyright">
		            <div class="container">
		            © 2016 Copyright
		            Ylarde Productions
		            <a class="black-text text-lighten-4 right" href="#!">Here's a quick sneak peek!</a>
		            </div>
		          </div>
		        </footer>			  
		`;

		this.reRender(`
			${html}
			`,document.getElementById("app"));
	}
}

let component = new Component();
component.ueLayout();

