    import  './style.css';  
    import { greet1 } from './modules/foo';
    import { greet2 } from './modules/bar';
     
    function component() {
      const divElem = document.createElement('div');
      const p1 = document.createElement('p');
      p1.textContent = greet1();
      divElem.appendChild(p1);
      const p2 = document.createElement('p');
      p2.textContent = greet2();
      divElem.appendChild(p2);
      return divElem;
    }
     
    document.body.appendChild(component());