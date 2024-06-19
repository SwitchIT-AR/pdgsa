import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Counter from "./components/Counter.tsx";
import BrandSection from './components/BrandSection';
import Neighborhoods from './components/Neighborhoods';
import Footer from './components/Footer';
import Slider from './components/Slider';
import ContactForm from './components/ContactForm';
import { fetchData } from './api';
import MapSection from './components/MapSection.tsx';
import MasterPlanSection from './components/MasterPlanSection.tsx';
import SpecsSection from './components/SpecsSection.tsx';
import YouTubeEmbed from "./components/Youtube.tsx";
import HouseModelSection from './components/HouseModelSection.tsx';
import InteriorSection from './components/InteriorSection.tsx';
import SocialMedia from "./components/SocialMedia.tsx";
import BrochureSection from './components/BrochureSection.tsx';
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


    return (
        <div>
            <Header data={data} driveUrl={driveUrl} />
            <Slider data={data} driveUrl={driveUrl}  />
            <YouTubeEmbed data={data}  driveUrl={driveUrl} ></YouTubeEmbed>
            <About data={data}  driveUrl={driveUrl}  />
            {/* <Apartments data={data}  driveUrl={driveUrl} /> */}
            <MapSection data={data} driveUrl={driveUrl}  />
            <Neighborhoods data={data}  driveUrl={driveUrl} />
            <MasterPlanSection data={data}  driveUrl={driveUrl} />
            <SpecsSection data={data}  driveUrl={driveUrl} />
            <BrandSection data={data}  driveUrl={driveUrl} />
            <HouseModelSection data={data}  driveUrl={driveUrl} />
            <Counter data={data}  driveUrl={driveUrl} />
            <InteriorSection data={data}  driveUrl={driveUrl} />
            <BrochureSection data={data}  driveUrl={driveUrl} />
            <ContactForm data={data} driveUrl={driveUrl}/>
            <SocialMedia data={data} driveUrl={driveUrl}></SocialMedia>
            <Footer data={data} driveUrl={driveUrl} />
        </div>
    );
};

export default App;
