import React from 'react';
import { Bell, Moon, Volume2, Globe, Lock, Shield, Smartphone, Monitor } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { useViewMode } from '../../hooks/useViewMode';

export function SettingsPage() {
  const { theme, toggleTheme } = useTheme();
  const { viewMode, toggleViewMode } = useViewMode();

  return (
    <div className="min-h-screen pt-20 px-4 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8 dark:text-white">Settings</h1>
        
        <div className="space-y-6">
          <SettingsSection
            icon={Monitor}
            title="Display Settings"
            description="Customize your viewing experience"
          >
            <div className="space-y-4">
              <ToggleSetting
                label="Dark Mode"
                description="Switch between light and dark themes"
                enabled={theme === 'dark'}
                onToggle={toggleTheme}
                icon={Moon}
              />
              <ToggleSetting
                label="Mobile View"
                description="Optimize for mobile devices"
                enabled={viewMode === 'mobile'}
                onToggle={toggleViewMode}
                icon={Smartphone}
              />
            </div>
          </SettingsSection>

          <SettingsSection
            icon={Bell}
            title="Notifications"
            description="Manage your notification preferences"
          >
            <div className="space-y-4">
              <ToggleSetting
                label="Practice Reminders"
                description="Daily reminders to practice Korean"
              />
              <ToggleSetting
                label="Event Notifications"
                description="Updates about new events and challenges"
              />
              <ToggleSetting
                label="Achievement Alerts"
                description="Notifications when you earn achievements"
              />
            </div>
          </SettingsSection>

          <SettingsSection
            icon={Volume2}
            title="Audio Settings"
            description="Customize your learning experience"
          >
            <div className="space-y-4">
              <ToggleSetting
                label="Auto-play Pronunciation"
                description="Automatically play word pronunciations"
              />
              <ToggleSetting
                label="Background Music"
                description="Play BTS music while learning"
              />
            </div>
          </SettingsSection>

          <SettingsSection
            icon={Lock}
            title="Privacy"
            description="Manage your privacy settings"
          >
            <div className="space-y-4">
              <ToggleSetting
                label="Public Profile"
                description="Allow others to see your progress"
              />
              <ToggleSetting
                label="Show Online Status"
                description="Display when you're active"
              />
            </div>
          </SettingsSection>
        </div>
      </div>
    </div>
  );
}

function SettingsSection({ icon: Icon, title, description, children }: {
  icon: any;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
      <div className="flex items-center space-x-3 mb-4">
        <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
          <Icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
        </div>
        <div>
          <h2 className="text-xl font-semibold dark:text-white">{title}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
        </div>
      </div>
      {children}
    </div>
  );
}

function ToggleSetting({ 
  label, 
  description, 
  enabled, 
  onToggle,
  icon: Icon 
}: { 
  label: string; 
  description: string;
  enabled?: boolean;
  onToggle?: () => void;
  icon?: any;
}) {
  const [isEnabled, setIsEnabled] = React.useState(enabled ?? false);

  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    }
    setIsEnabled(!isEnabled);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        {Icon && (
          <Icon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        )}
        <div>
          <h3 className="font-medium dark:text-white">{label}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
        </div>
      </div>
      <button
        onClick={handleToggle}
        className={`w-14 h-7 rounded-full transition-colors ${
          isEnabled ? 'bg-purple-600' : 'bg-gray-200 dark:bg-gray-700'
        }`}
      >
        <div
          className={`w-5 h-5 rounded-full bg-white transform transition-transform ${
            isEnabled ? 'translate-x-8' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );
}