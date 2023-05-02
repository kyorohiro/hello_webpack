import './style.css';
import m from 'mithril';


// Child component
const ChildComponent = {
  view: (vnode) => {
    return m('p', `Hello, ${vnode.attrs.name}!`);
  },
};

// Parent component
const ParentComponent = {
  view: () => {
    return m('div', [
      m('h1', 'Parent Component'),
      m(ChildComponent, { name: 'Alice' }),
      m(ChildComponent, { name: 'Bob' }),
      m(ChildComponent, { name: 'Carol' }),
    ]);
  },
};

// Mount the parent component on the page
m.mount(document.body, ParentComponent);