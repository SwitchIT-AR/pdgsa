// App.tsx
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Counter from './components/Counter';
import BrandSection from './components/BrandSection';
import Neighborhoods from './components/Neighborhoods';
import Footer from './components/Footer';
import Slider from './components/Slider';
import ContactForm from './components/ContactForm';
import { fetchData } from './api';
import MapSection from './components/MapSection';
import MasterPlanSection from './components/MasterPlanSection';
import SpecsSection from './components/SpecsSection';
import Youtube from "./components/Youtube.tsx";
import HouseModelSection from './components/HouseModelSection';
import InteriorSection from './components/InteriorSection';
import SocialMedia from './components/SocialMedia';
import BrochureSection from './components/BrochureSection';
import { Data } from './types/globalTypes';
import WhatsappButton from './components/WhatsappButton.tsx';

const driveUrl = "https://lh3.googleusercontent.com/d/";

const App: React.FC = () => {
    const [data, setData] = useState<Data | null>(null);
    const [loading, setLoading] = useState(true);

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

    return (
        <div style={{ position: 'relative'}}>
            <WhatsappButton />
            <Header data={data} driveUrl={driveUrl} />
            <Slider data={data} driveUrl={driveUrl} />
            <Youtube data={data} driveUrl={driveUrl} />
            <About data={data} driveUrl={driveUrl} />
            <MapSection data={data} driveUrl={driveUrl} />
            <Neighborhoods data={data}  />
            <MasterPlanSection data={data} driveUrl={driveUrl} />
            <SpecsSection data={data}  />
            <BrandSection data={data} driveUrl={driveUrl} />
            <HouseModelSection data={data} driveUrl={driveUrl} />
            <Counter data={data} driveUrl={driveUrl} />
            <InteriorSection data={data} driveUrl={driveUrl} />
            <BrochureSection data={data} driveUrl={driveUrl} />
            <ContactForm data={data} driveUrl={driveUrl} />
            <SocialMedia data={data} driveUrl={driveUrl} />
            <Footer data={data} driveUrl={driveUrl} />
        </div>
    );
};

export default App;
