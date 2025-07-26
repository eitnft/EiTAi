import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import TextInput from './TextInput';
import VideoSettings from './VideoSettings';
import VideoPreview from './VideoPreview';
import GenerateButton from './GenerateButton';
import { VideoSettings as VideoSettingsType } from '../types/video';

const VideoGenerator: React.FC = () => {
  const [text, setText] = useState('');
  const [settings, setSettings] = useState<VideoSettingsType>({
    duration: 10,
    style: 'cinematic',
    aspectRatio: '16:9',
    quality: 'HD',
    voiceOver: false,
    music: true,
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedVideo, setGeneratedVideo] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!text.trim()) {
      toast.error('Please enter some text to generate a video');
      return;
    }

    setIsGenerating(true);
    toast.loading('Generating your video...', { id: 'generating' });

    try {
      // Simulate video generation process
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // For demo purposes, we'll use a placeholder video
      const demoVideoUrl = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
      setGeneratedVideo(demoVideoUrl);
      
      toast.success('Video generated successfully!', { id: 'generating' });
    } catch (error) {
      toast.error('Failed to generate video. Please try again.', { id: 'generating' });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Transform Your Words Into
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {' '}Stunning Videos
          </span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Harness the power of AI to create professional videos from your text descriptions. 
          Perfect for content creators, marketers, and storytellers.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <TextInput
            value={text}
            onChange={setText}
            placeholder="Describe the video you want to create... For example: 'A serene sunset over a mountain lake with gentle waves and flying birds'"
          />
          
          <VideoSettings
            settings={settings}
            onChange={setSettings}
          />
          
          <GenerateButton
            onClick={handleGenerate}
            isGenerating={isGenerating}
            disabled={!text.trim()}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <VideoPreview
            videoUrl={generatedVideo}
            isGenerating={isGenerating}
            settings={settings}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default VideoGenerator;