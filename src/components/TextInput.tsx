import React from 'react';
import { PencilIcon } from '@heroicons/react/24/outline';

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const TextInput: React.FC<TextInputProps> = ({ value, onChange, placeholder }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
      <div className="flex items-center space-x-2 mb-4">
        <PencilIcon className="h-5 w-5 text-purple-400" />
        <h3 className="text-lg font-semibold text-white">Describe Your Video</h3>
      </div>
      
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full h-32 bg-black/20 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
        maxLength={500}
      />
      
      <div className="flex justify-between items-center mt-2">
        <p className="text-sm text-gray-400">
          Be specific and descriptive for better results
        </p>
        <span className="text-sm text-gray-400">
          {value.length}/500
        </span>
      </div>
    </div>
  );
};

export default TextInput;