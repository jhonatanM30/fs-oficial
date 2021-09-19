import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/scss/styles.css';
import CrudApp from '../src/components/CrudApp';


const { render } = ReactDOM;
const divRoot = document.getElementById( 'root' )


render(<CrudApp />, divRoot);

