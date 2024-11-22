import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { Features } from './components/home/Features';
import { BTSPreview } from './components/home/BTSPreview';
import { VocabularySection } from './components/vocabulary/VocabularySection';
import { ProfilePage } from './components/profile/ProfilePage';
import { FriendsList } from './components/profile/FriendsList';
import { SettingsPage } from './components/settings/SettingsPage';
import { SupportPage } from './components/support/SupportPage';
import { PremiumPage } from './components/premium/PremiumPage';
import { EventsPage } from './components/events/EventsPage';
import { ChatPage } from './components/chat/ChatPage';
import { MemberChat } from './components/chat/MemberChat';
import { AvatarShop } from './components/shop/AvatarShop';
import { MissionsPage } from './components/missions/MissionsPage';
import { MemberProfile } from './components/profile/MemberProfile';
import { VoiceChatList } from './components/voice/VoiceChatList';
import { VoiceChatRoom } from './components/voice/VoiceChatRoom';
import { VoiceChatPreview } from './components/home/VoiceChatPreview';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
        <Toaster />
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
              <BTSPreview />
              <VocabularySection />
              <VoiceChatPreview />
              <Footer />
            </>
          } />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/friends" element={<FriendsList />} />
          <Route path="/member/:id" element={<MemberProfile />} />
          <Route path="/chat/:id" element={<MemberChat />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/premium" element={<PremiumPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/missions" element={<MissionsPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/shop" element={<AvatarShop />} />
          <Route path="/voice" element={<VoiceChatList />} />
          <Route path="/voice/room/:id" element={<VoiceChatRoom />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;