import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CrudApp from '../src/components/CrudApp';
import 'bootstrap/dist/css/bootstrap.min.css'


const { render } = ReactDOM;
const divRoot = document.getElementById( 'root' )


render(<CrudApp />, divRoot);

