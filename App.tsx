import React from 'react';
import { ProfileCard } from './components/ProfileCard';

export default function App() {
  return (
    // Removed the flex/center/bg-gray wrapper. The ProfileCard now handles the full layout.
    <ProfileCard />
  );
}