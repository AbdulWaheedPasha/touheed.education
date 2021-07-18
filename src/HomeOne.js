import React, { Component } from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import IconBox from './components/IconBox';
import AboutUs from './components/AboutUs';
import CourseFilter from './components/CourseFilter';
import TestimonialSlider from './components/TestimonialSlider';
import FaqEvent from './components/FaqEvent';
import TeamSlider from './components/TeamSlider';
import HelpArea from './components/HelpArea';
import HomeBlog from './components/HomeBlog';
import CampusTour from './components/CampusTour';
import NewsletterForm from './components/NewsletterForm';
import Footer from './components/Footer';
import ServiceBox from './components/ServiceBox';
import AboutUsTwo from './components/AboutUsTwo';

export default class HomeOne extends Component {
    render() {
        return (
            <div className="main-wrapper" >

                {/* Header */}
                < Header />

                {/* Hero Slider */}
                < HeroSlider />

                {/* Icon Box */}
                < IconBox />

                {/* About Area */}
                < AboutUs />

                {/* About Us 2 */}
                <AboutUsTwo />

                {/* Service Box */}
                <ServiceBox />
                
                {/* Course Filter */}
                {/* < CourseFilter /> */}

                {/* Testimonial Slider */}
                < TestimonialSlider />

                {/* Blog Area */}
                < HomeBlog />

                {/* Faq & Event Area */}
                {/* < FaqEvent /> */}

                {/* Team Slider */}
                {/* < TeamSlider /> */}

                {/* Help Area */}
                {/* < HelpArea /> */}


                {/* Campus Tour */}
                < CampusTour />

                {/* Newsletter Form */}
                {/* < NewsletterForm /> */}

                {/* Footer */}
                < Footer />

            </div >
        )
    }
}
