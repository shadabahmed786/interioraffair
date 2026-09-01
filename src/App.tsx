import React, { useState, useEffect } from 'react';
import { ActivePage, Product, MoodType, ProductCategory, Project } from './types';
import { PRODUCTS } from './data/products';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { ConsultationModal, WhatsAppButton } from './components/ConsultationModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CustomCursor } from './components/CustomCursor';
import { SplashScreen } from './components/SplashScreen';
import { ProjectLightboxModal } from './components/ProjectLightboxModal';

// Views
import { HomeView } from './views/HomeView';
import { ServicesView } from './views/ServicesView';
import { SpacesView } from './views/SpacesView';
import { ProjectsView } from './views/ProjectsView';
import { ProcessView } from './views/ProcessView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';
import { QuoteView } from './views/QuoteView';
import { GreyStructureView } from './views/GreyStructureView';
import { CollectionsView } from './views/CollectionsView';
import { CustomFurnitureView } from './views/CustomFurnitureView';
import { ShowroomView } from './views/ShowroomView';
import { DesignWizard } from './components/DesignWizard';
import { BudgetPlanner } from './components/BudgetPlanner';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedProjectLightbox, setSelectedProjectLightbox] = useState<Project | null>(null);

  const [savedProductIds, setSavedProductIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('ia_saved_pieces');
      return stored ? JSON.parse(stored) : ['lahori-sofa', 'karachi-lounge'];
    } catch {
      return ['lahori-sofa', 'karachi-lounge'];
    }
  });

  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [wishlistDrawerOpen, setWishlistDrawerOpen] = useState(false);
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [consultationProduct, setConsultationProduct] = useState<Product | null>(null);
  const [consultationSpace, setConsultationSpace] = useState<string | null>(null);

  const [initialMoodFilter, setInitialMoodFilter] = useState<MoodType | null>(null);
  const [initialCategoryFilter, setInitialCategoryFilter] = useState<ProductCategory | 'all'>('all');

  // Section 28 SEO BASICS — Page titles & metadata update
  useEffect(() => {
    let pageTitle = 'Interior Affairs | Complete Turnkey Interior Solutions Nationwide';
    let metaDesc = 'Interior Affairs provides complete turnkey interior solutions nationwide across Pakistan, from grey structure to finished space — including kitchens, wardrobes, designer walls, flooring, ceilings, blinds, wallpapers and more.';

    switch (activePage) {
      case 'home':
        pageTitle = 'Interior Affairs | Complete Turnkey Interior Solutions Nationwide';
        break;
      case 'services':
        pageTitle = 'Complete Interior Services Nationwide | Interior Affairs';
        break;
      case 'spaces':
        pageTitle = 'Transformed Spaces | Interior Affairs';
        break;
      case 'our-work':
      case 'projects':
        pageTitle = 'Our Work & Projects | Interior Affairs';
        break;
      case 'our-process':
        pageTitle = 'Our 6-Step Process | Interior Affairs';
        break;
      case 'about':
      case 'our-story':
        pageTitle = 'About Us | Interior Affairs';
        break;
      case 'contact':
        pageTitle = 'Contact Us | Interior Affairs Nationwide';
        break;
      case 'quote':
        pageTitle = 'Get a Quote | Interior Affairs';
        break;
      case 'grey-structure':
        pageTitle = 'Grey Structure Services Nationwide | Interior Affairs';
        break;
      case 'design-wizard':
        pageTitle = 'Interactive Design Wizard | Interior Affairs';
        break;
      case 'budget-planner':
      case 'budget':
        pageTitle = 'Interactive Budget Planner | Interior Affairs';
        break;
      default:
        pageTitle = 'Interior Affairs | Complete Turnkey Interior Solutions Nationwide';
    }

    document.title = pageTitle;

    // Update meta description tag
    const metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (metaDescriptionTag) {
      metaDescriptionTag.setAttribute('content', metaDesc);
    }
  }, [activePage]);

  // Persist saved pieces
  useEffect(() => {
    try {
      localStorage.setItem('ia_saved_pieces', JSON.stringify(savedProductIds));
    } catch (e) {
      console.warn('Storage unavailable', e);
    }
  }, [savedProductIds]);

  const toggleWishlist = (productId: string) => {
    setSavedProductIds((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  const handleOpenConsultation = (product?: Product | null, space?: string | null) => {
    setConsultationProduct(product || null);
    setConsultationSpace(space || null);
    setConsultationModalOpen(true);
  };

  const handleWhatsAppEnquiry = (customMsg?: string) => {
    const text =
      customMsg ||
      'Hi Interior Affairs, I am visiting your website and would like to speak with a design consultant regarding my space.';
    const url = `https://wa.me/923008504499?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const savedProducts = savedProductIds
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter((p): p is Product => Boolean(p));

  return (
    <div className="w-full overflow-x-hidden min-h-screen flex flex-col bg-[#F5F2EC] text-[#24221F] selection:bg-[#24221F] selection:text-[#F5F2EC]">
      {/* Brand Splash Screen on Initial Load */}
      <SplashScreen />

      {/* Interactive Desktop Custom Cursor */}
      <CustomCursor />

      {/* Global Navigation */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        wishlistCount={savedProductIds.length}
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenWishlist={() => setWishlistDrawerOpen(true)}
        onOpenConsultation={() => handleOpenConsultation()}
        onNavigateQuote={() => {
          setActivePage('quote');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        isDarkHero={activePage === 'home'}
      />

      {/* Main Page Body */}
      <main className={`flex-1 ${activePage === 'home' ? '' : 'pt-20 sm:pt-24'}`}>
        {activePage === 'home' && (
          <HomeView
            setActivePage={setActivePage}
            onOpenConsultation={() => handleOpenConsultation()}
            onOpenProjectLightbox={(project) => setSelectedProjectLightbox(project)}
            onWhatsAppEnquiry={handleWhatsAppEnquiry}
          />
        )}

        {activePage === 'services' && (
          <ServicesView
            setActivePage={setActivePage}
            onOpenConsultation={() => handleOpenConsultation()}
            onWhatsAppEnquiry={handleWhatsAppEnquiry}
          />
        )}

        {activePage === 'spaces' && (
          <SpacesView
            setActivePage={setActivePage}
            onOpenConsultation={() => handleOpenConsultation()}
            onWhatsAppEnquiry={handleWhatsAppEnquiry}
          />
        )}

        {(activePage === 'our-work' || activePage === 'projects') && (
          <ProjectsView
            setActivePage={setActivePage}
            onOpenConsultation={() => handleOpenConsultation()}
            onOpenProjectLightbox={(project) => setSelectedProjectLightbox(project)}
          />
        )}

        {activePage === 'our-process' && (
          <ProcessView
            setActivePage={setActivePage}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {(activePage === 'about' || activePage === 'our-story') && (
          <AboutView
            setActivePage={setActivePage}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {activePage === 'contact' && (
          <ContactView
            setActivePage={setActivePage}
            onOpenConsultation={() => handleOpenConsultation()}
            onWhatsAppEnquiry={handleWhatsAppEnquiry}
          />
        )}

        {activePage === 'quote' && (
          <QuoteView
            setActivePage={setActivePage}
            onOpenConsultation={() => handleOpenConsultation()}
            onWhatsAppEnquiry={handleWhatsAppEnquiry}
          />
        )}

        {activePage === 'grey-structure' && (
          <GreyStructureView
            setActivePage={setActivePage}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {activePage === 'collections' && (
          <CollectionsView
            onSelectProduct={(p) => setSelectedProduct(p)}
            savedProductIds={savedProductIds}
            onToggleWishlist={toggleWishlist}
            initialMood={initialMoodFilter}
            initialCategory={initialCategoryFilter}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {activePage === 'design-wizard' && (
          <div className="py-12 sm:py-16 px-6 sm:px-10 lg:px-16 max-w-[1560px] mx-auto">
            <DesignWizard
              onSelectProduct={(p) => setSelectedProduct(p)}
              onOpenConsultation={() => handleOpenConsultation()}
              onWhatsAppEnquiry={handleWhatsAppEnquiry}
            />
          </div>
        )}

        {(activePage === 'budget' || activePage === 'budget-planner') && (
          <div className="py-12 sm:py-16 px-6 sm:px-10 lg:px-16 max-w-[1560px] mx-auto">
            <BudgetPlanner
              onSelectProduct={(p) => setSelectedProduct(p)}
              onOpenConsultation={() => handleOpenConsultation()}
              onWhatsAppEnquiry={handleWhatsAppEnquiry}
            />
          </div>
        )}

        {activePage === 'custom' && (
          <CustomFurnitureView
            onOpenConsultation={() => handleOpenConsultation()}
            onWhatsAppEnquiry={handleWhatsAppEnquiry}
          />
        )}

        {activePage === 'showroom' && (
          <ShowroomView
            onOpenConsultation={() => handleOpenConsultation()}
            onWhatsAppEnquiry={handleWhatsAppEnquiry}
          />
        )}
      </main>

      {/* Global Architectural Footer */}
      <Footer
        setActivePage={setActivePage}
        onOpenConsultation={() => handleOpenConsultation()}
        onWhatsAppEnquiry={handleWhatsAppEnquiry}
      />

      {/* Floating WhatsApp Action */}
      <WhatsAppButton onOpenContextualChat={handleWhatsAppEnquiry} />

      {/* Project Lightbox Modal */}
      <ProjectLightboxModal
        project={selectedProjectLightbox}
        onClose={() => setSelectedProjectLightbox(null)}
        onOpenConsultation={() => {
          setSelectedProjectLightbox(null);
          handleOpenConsultation();
        }}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        isSaved={selectedProduct ? savedProductIds.includes(selectedProduct.id) : false}
        onToggleWishlist={toggleWishlist}
        onOpenConsultationWithProduct={(p) => {
          setSelectedProduct(null);
          handleOpenConsultation(p);
        }}
        onSelectMatchingProduct={(match) => setSelectedProduct(match)}
        onWhatsAppEnquiry={handleWhatsAppEnquiry}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectProduct={(p) => setSelectedProduct(p)}
        onNavigateCategory={(cat) => {
          if (cat === 'custom') {
            setActivePage('custom');
          } else {
            setActivePage('services');
          }
        }}
      />

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={wishlistDrawerOpen}
        onClose={() => setWishlistDrawerOpen(false)}
        savedProducts={savedProducts}
        onRemoveFromWishlist={toggleWishlist}
        onSelectProduct={(p) => setSelectedProduct(p)}
        onOpenConsultation={() => {
          setWishlistDrawerOpen(false);
          handleOpenConsultation();
        }}
        onWhatsAppEnquiry={handleWhatsAppEnquiry}
      />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        initialProduct={consultationProduct}
        initialSpace={consultationSpace || undefined}
        onWhatsAppDirect={handleWhatsAppEnquiry}
      />
    </div>
  );
}
