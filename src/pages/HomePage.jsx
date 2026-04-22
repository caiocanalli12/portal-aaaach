import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import ContentSection from '../components/home/ContentSection';
import Calendar from '../components/home/Calendar';
import ManagementSection from '../components/home/ManagementSection';
import FloatingMenu from '../components/ui/FloatingMenu';
import FloatingInstagram from '../components/ui/FloatingInstagram';

const HomePage = () => {
    return (
        <MainLayout>
            <ContentSection />
            <Calendar />
            <ManagementSection />
            <FloatingMenu />
            <FloatingInstagram />
        </MainLayout>
    );
};

export default HomePage;
