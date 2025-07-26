import React from 'react';
import { motion } from 'framer-motion';
import { PlayIcon, DownloadIcon, ShareIcon } from '@heroicons/react/24/outline';
import { VideoSettings } from '../types/video';

interface VideoPreviewProps {
  videoUrl: string | null;
  isGenerating: boolean;
  settings: VideoSettings;
}

const VideoPreview: React.FC<VideoPreviewProps> = ({ videoUrl, isGenerating, settings }) => {
  const handleDownload = () => {
    if (videoUrl) {
      const link = document.createElement('a');
      link.href = videoUrl;
      link.download = 'generated-video.mp4';
      link.click();
    }
  };

  const handleShare = () => {
    if (navigator.share && videoUrl) {
      navigator.share({
        title: 'Check out my AI-generated video!',
        url: videoUrl,
      });
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
      <h3 className="text-lg font-semibold text-white mb-6">Video Preview</h3>
      
      <div className="aspect-video bg-black/40 rounded-lg overflow-hidden relative">
        {isGenerating ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 border-4 border-purple-400 border-t-transparent rounded-full mx-auto mb-4"
              />
              <p className="text-white text-sm">Generating your video...</p>
              <p className="text-gray-400 text-xs mt-1">This may take a few moments</p>
            </div>
          </div>
        ) : videoUrl ? (
          <video
            src={videoUrl}
            controls
            className="w-full h-full object-cover"
            poster="https://images.pexels.com/photos/1144275/pexels-photo-1144275.jpeg?auto=compress&cs=tinysrgb&w=800"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <PlayIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-400">Your generated video will appear here</p>
            </div>
          </div>
        )}
      </div>

      {videoUrl && !isGenerating && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 flex space-x-3"
        >
          <button
            onClick={handleDownload}
            className="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-colors"
          >
            <DownloadIcon className="w-4 h-4" />
            <span>Download</span>
          </button>
          <button
            onClick={handleShare}
            className="flex-1 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-colors"
          >
            <ShareIcon className="w-4 h-4" />
            <span>Share</span>
          </button>
        </motion.div>
      )}

      <div className="mt-6 p-4 bg-black/20 rounded-lg">
        <h4 className="text-sm font-medium text-white mb-3">Current Settings</h4>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="text-gray-400">Duration: <span className="text-white">{settings.duration}s</span></div>
          <div className="text-gray-400">Style: <span className="text-white">{settings.style}</span></div>
          <div className="text-gray-400">Ratio: <span className="text-white">{settings.aspectRatio}</span></div>
          <div className="text-gray-400">Quality: <span className="text-white">{settings.quality}</span></div>
        </div>
      </div>
    </div>
  );
};

export default VideoPreview;