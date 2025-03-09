import './index.css';
import React from 'react';
import { useState  } from 'react'; 
import ReactDOM from 'react-dom/client';
import data from './data';

const root = ReactDOM.createRoot(document.getElementById('root'));

let activeIndex = 0
function changeSlide(){
    setInterval(() => {
        activeIndex++
        if (activeIndex > data.length-1) activeIndex = 0
        console.log("active index", activeIndex)

        const Wrapper = Container( )
        root.render(<Wrapper />);
    }, 2000)
}
changeSlide()
                    

const Container = () => {
    let activeSlide = data.at(activeIndex)
    console.log("activeSlide", activeSlide)

    return (
        <section className="section">
            <div className="title">
                <h2>{activeSlide.img}</h2>
                <div className="underline"></div>
                <h3>{activeSlide.categoria}</h3>
            </div>
            <div className="section-center">{Carousel()}</div>
        </section>
    )
}

const Carousel = () => {
    // const [index, setIndex] = useState(0)
    // let activeSlide = data.at(activeIndex)
    let prevIndex = activeIndex-1 < 0 ? data.length-1 : activeIndex-1;
    // let nextIndex = activeIndex+1 > data.length-1 ? 0 : activeIndex+1;

    return (
        <div className="carousel">
        {
            Array.from(data).map((item, i) => {
                let slideState = 'nextSlide'
                if (i == activeIndex) slideState = 'activeSlide'
                if (i == prevIndex) slideState = 'lastSlide'

                return (
                    <article key={item.id} className={slideState}>
                        <img src={item.src} alt={item.img} className="person-img"/>
                        <h4>{item.title}</h4>
                    </article>
                )
            })
        }
        </div>
    )
}


