import join from 'lodash-es/join';
import './app.scss';
import React from 'react';
import ReactDOM from 'react-dom';

 class Example extends React.Component {
     render() {
         return (
             <div className="border">
                 {join(['Hello','webpack'], ' ')}
             </div>
         );
     }
 }

 ReactDOM.render(
     <Example />,
     document.getElementById('root')
 );
