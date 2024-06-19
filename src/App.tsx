import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Counter from "./components/Counter.tsx";
import Services from './components/Services';
import Brand from './components/Brand';
import Apartments from './components/Apartments';
import Neighborhoods from './components/Neighborhoods';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Slider from './components/Slider';
import ChooseArea from './components/ChooseArea';
import ContactForm from './components/ContactForm';
import { fetchData } from './api';
import YouTubeEmbed from "./components/Youtube.tsx";

interface Data {
    [key: string]: string | string[];
}

const App: React.FC = () => {
    const [data, setData] = useState<Data | null>(null);
    const [loading, setLoading] = useState(true);
const driveUrl = "https://lh3.googleusercontent.com/d/"
    const fetchDataAsync = async () => {
        try {
            const result = await fetchData();

            if (result && typeof result === 'object') {
                setData(result);
            } else {
                console.error('Unexpected data format:', result);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDataAsync();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!data) {
        return <div>Error loading data</div>;
    }
//             <ChooseArea data={data} />
    //          <Services data={data} />
    //         <ContactForm data={data} />
    //       <Footer data={data} />
    return (
        <div>
            <Header data={data}  driveUrl={driveUrl}/>
            <Slider data={data} driveUrl={driveUrl}/>
            <YouTubeEmbed data={data}></YouTubeEmbed>
           <About data={data} driveUrl={driveUrl}/>
            <Counter data={data} driveUrl={driveUrl}/>
            <Apartments data={data}  driveUrl={driveUrl}/>

        </div>
    );
};

export default App;
