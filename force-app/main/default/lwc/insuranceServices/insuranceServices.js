import { LightningElement } from 'lwc';
import NewDigital from '@salesforce/resourceUrl/NewDigital';
import PartnershipHospitals from '@salesforce/resourceUrl/ReadMorePartnershipwithLeadingHospitalsAnnouncedHealth';
import CustomerServiceAward from '@salesforce/resourceUrl/ReadMoreExcellenceinCustomerServiceAwardAwards';
import AutoDiscounts from '@salesforce/resourceUrl/ReadMoreNewAutoInsuranceDiscountsAvailableAuto';

export default class ServicesNews extends LightningElement {
    
    // ========== SERVICES HANDLERS ==========
    
    handleAgencesClick() {
        // Navigate to agencies page
        // Example: this[NavigationMixin.Navigate]({...})
        console.log('Navigate to Agencies');
    }

    handleGaragesClick() {
        // Navigate to garages page
        console.log('Navigate to Garages');
    }

    handleCliniquesClick() {
        // Navigate to clinics page
        console.log('Navigate to Clinics');
    }

    handleAssistanceClick() {
        // Show assistance modal or navigate
        console.log('Show Assistance Details');
    }
    
    // ========== NEWS DATA ==========
    
    get newsArticles() {
        return [
            {
                id: '1',
                title: 'New Digital Insurance Platform Launched',
                excerpt: 'We are excited to announce the launch of our new digital platform that makes managing your insurance policies easier than ever. Access your documents, file claims, and get support 24/7.',
                category: 'Innovation',
                date: 'Feb 10, 2026',
                imageUrl: NewDigital
            },
            {
                id: '2',
                title: 'Partnership with Leading Hospitals Announced',
                excerpt: 'We are proud to announce our new partnership with major medical facilities across Morocco, expanding our health insurance network and providing better care for our members.',
                category: 'Health',
                date: 'Feb 8, 2026',
                imageUrl: PartnershipHospitals
            },
            {
                id: '3',
                title: 'Excellence in Customer Service Award',
                excerpt: 'Recognized as the leading insurance provider for customer satisfaction and service excellence in 2025. Thank you to all our valued customers for your trust.',
                category: 'Awards',
                date: 'Feb 5, 2026',
                imageUrl: CustomerServiceAward
            },
            {
                id: '4',
                title: 'New Auto Insurance Discounts Available',
                excerpt: 'Take advantage of our new safe driver discounts and multi-vehicle policies. Save up to 25% on your auto insurance premiums starting this month.',
                category: 'Auto',
                date: 'Feb 1, 2026',
                imageUrl: AutoDiscounts
            }
        ];
    }
    
    get hasNews() {
        return this.newsArticles && this.newsArticles.length > 0;
    }

    handleNewsClick(event) {
        const articleId = event.currentTarget.dataset.id;
        console.log('Article clicked:', articleId);
    }

    handleViewAllNews() {
        console.log('Navigate to all news');
    }
    
    connectedCallback() {
        // Debug: Log image URLs to console
        console.log('News Articles:', this.newsArticles);
    }
}