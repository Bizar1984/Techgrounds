const template = document.createElement('template')
template.innerHTML = `
<style>
.user-card {
      font-family: 'Arial', sans-serif;
      background: orange;
      width: 400px;
      height: 200px;
      display: grid;
      grid-template-columns: 1fr 2fr;
      grid-gap: 10px;
      margin-bottom: 15px;
      border: 1px solid black;
      
  }

  .user-card h3 {
      margin-top: 10px;
  }

  .user-card img {
      width: 100%;
      
  }

  .user-card button {
      cursor: pointer;
      background: darkorchid;
      color: #fff;
      border: 0;
      border-radius: 5px;
      padding: 5px 5px;
  }
</style>

    <div class="user-card">
        <img />
        <div>    
            <h3></h3>
            <div class="info"> 
            <p><slot name="email" /></p>
            <p><slot name="hobby" /</p>
            
            </div>
            <button id="toggle-info">Hide Info</button>

        </div>
    </div>

`;

class UserCard extends HTMLElement {
    constructor() {
        super();

        this.showInfo = true;

        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.
        cloneNode(true));
        this.shadowRoot.querySelector('h3').innerText =
        this.getAttribute('name');
        this.shadowRoot.querySelector('img').src = 
        this.getAttribute('avatar');
    }

    toggleInfo() {
        this.showInfo = !this.showInfo;

        const info = this.shadowRoot.querySelector('.info');
        const toggleBtn = this.shadowRoot.querySelector('#toggle-info');

        if(this.showInfo) {
            info.style.display = 'block';
            toggleBtn.innerText = 'Hide Info'
        } else {
            info.style.display = 'none';
            toggleBtn.innerText = 'Show Info'

        }
    }

    connectedCallback() {
        this.shadowRoot.querySelector('#toggle-info').
        addEventListener('click', () => this.toggleInfo());
    }

    disconnectedCallback() {
        this.shadowRoot.querySelector('#toggle-info').
        removeEventListener();

    }
}

window.customElements.define('user-card', UserCard);


// example to output something to the DOM
class School {
    constructor(highschool) {
        this.highschool = highschool;
    }
    present() {
        return 'Yearbook of: ' + this.highschool;
    }
}

class Year extends School {
    constructor(highschool, type) {
        super(highschool);
        this.type = type;
    }
    show() {
        return this.present() + '; class  ' + this.type;
    }
}

myProgrammingLanguage = new Year("Piter Jelles Aldlan", "2s");
document.getElementById("super_keyword").innerHTML = myProgrammingLanguage.show();