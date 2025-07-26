import React from 'react';
import { CogIcon } from '@heroicons/react/24/outline';
import { VideoSettings as VideoSettingsType } from '../types/video';

interface VideoSettingsProps {
  settings: VideoSettingsType;
  onChange: (settings: VideoSettingsType) => void;
}

const VideoSettings: React.FC<VideoSettingsProps> = ({ settings, onChange }) => {
  const updateSetting = (key: keyof VideoSettingsType, value: any) => {
    onChange({ ...settings, [key]: value });
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
      <div className="flex items-center space-x-2 mb-6">
        <CogIcon className="h-5 w-5 text-purple-400" />
        <h3 className="text-lg font-semibold text-white">Video Settings</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Duration
          </label>
          <select
            value={settings.duration}
            onChange={(e) => updateSetting('duration', Number(e.target.value))}
            className="w-full bg-black/20 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value={5}>5 seconds</option>
            <option value={10}>10 seconds</option>
            <option value={15}>15 seconds</option>
            <option value={30}>30 seconds</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Style
          </label>
          <select
            value={settings.style}
            onChange={(e) => updateSetting('style', e.target.value)}
            className="w-full bg-black/20 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="cinematic">Cinematic</option>
            <option value="realistic">Realistic</option>
            <option value="animated">Animated</option>
            <option value="artistic">Artistic</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Aspect Ratio
          </label>
          <select
            value={settings.aspectRatio}
            onChange={(e) => updateSetting('aspectRatio', e.target.value)}
            className="w-full bg-black/20 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="16:9">16:9 (Landscape)</option>
            <option value="9:16">9:16 (Portrait)</option>
            <option value="1:1">1:1 (Square)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Quality
          </label>
          <select
            value={settings.quality}
            onChange={(e) => updateSetting('quality', e.target.value)}
            className="w-full bg-black/20 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="SD">SD (480p)</option>
            <option value="HD">HD (720p)</option>
            <option value="FHD">Full HD (1080p)</option>
            <option value="4K">4K (2160p)</option>
          </select>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-300">Add Voice Over</span>
          <button
            onClick={() => updateSetting('voiceOver', !settings.voiceOver)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              settings.voiceOver ? 'bg-purple-600' : 'bg-gray-600'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                settings.voiceOver ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-300">Background Music</span>
          <button
            onClick={() => updateSetting('music', !settings.music)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              settings.music ? 'bg-purple-600' : 'bg-gray-600'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                settings.music ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoSettings;