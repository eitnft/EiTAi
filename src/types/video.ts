export interface VideoSettings {
  duration: number;
  style: 'cinematic' | 'realistic' | 'animated' | 'artistic';
  aspectRatio: '16:9' | '9:16' | '1:1';
  quality: 'SD' | 'HD' | 'FHD' | '4K';
  voiceOver: boolean;
  music: boolean;
}

export interface GeneratedVideo {
  id: string;
  url: string;
  thumbnail: string;
  prompt: string;
  settings: VideoSettings;
  createdAt: Date;
  duration: number;
}