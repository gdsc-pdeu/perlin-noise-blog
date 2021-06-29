import React, {Fragment} from 'react';
import "./App.css";
import BlogHeader from './components/BlogHeader';
import BlogContent from './components/BlogContent';

function App() {
    return (
        <Fragment>
            <BlogHeader />
            <br/><br/><br/>
            <BlogContent/>
        </Fragment>
    );
}

export default App;