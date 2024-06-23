// App.tsx
import React, { useEffect, useState } from 'react';
import Header from './components/header/Header.tsx';
import About from './components/about/About.tsx';
import Counter from './components/Counter';
import BrandSection from './components/BrandSection';
import Neighborhoods from './components/Neighborhoods';
import Footer from './components/Footer';
import Slider from './components/slider/Slider.tsx';
import ContactForm from './components/contact/ContactForm.tsx';
import { fetchData } from './api';
import MapSection from './components/MapSection';
import MasterPlanSection from './components/MasterPlanSection';
import SpecsSection from './components/SpecsSection';
import Youtube from "./components/youtube/Youtube.tsx";
import HouseModelSection from './components/houseModel/HouseModelSection.tsx';
import InteriorSection from './components/InteriorSection';
import SocialMedia from './components/SocialMedia';
import BrochureSection from './components/brochure/BrochureSection.tsx';
import { Data } from './types/globalTypes';
import WhatsappButton from './components/WhatsappButton.tsx';

// import classes from './components/General.module.css';
import './components/styles/globalVariables.css';
import LoadingPage from './components/loading/LoadingPage.tsx';

const driveUrl = "https://lh3.googleusercontent.com/d/";

const App: React.FC = () => {
    const [data, setData] = useState<Data>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const updatePrimaryColor = (newColor: string) => {
        document.documentElement.style.setProperty('--main-color', newColor);
        console.log()
    };

    const fetchDataAsync = async () => {
        try {
            setLoading(true);
            const result = await fetchData();
            if (result && typeof result === 'object') {
                setData(result);
                updatePrimaryColor(result.mainColor);
            } else {
                console.error('Unexpected data format:', result);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setError(error as Error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDataAsync();
    }, []);

    if (loading) {
        return(
            <LoadingPage />
        )
    }

    if (!data) {
        return <div>Error loading data</div>;
    }

    console.log('error:', error);
    console.log('loading', loading);
    console.log('data', data);
    return (
        <div style={{ position: 'relative'}}>
            <WhatsappButton data={data} driveUrl={driveUrl} />
            <Header data={data} driveUrl={driveUrl} />
            <Slider data={data} driveUrl={driveUrl} />
            <Youtube data={data} driveUrl={driveUrl} />
            <About data={data} driveUrl={driveUrl} />
            <MapSection data={data} driveUrl={driveUrl} />
            <Neighborhoods data={data}  />
            <MasterPlanSection data={data} driveUrl={driveUrl} />
            <SpecsSection data={data} driveUrl={driveUrl} />
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
