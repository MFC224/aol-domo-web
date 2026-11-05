import React, { useEffect } from 'react';
import { X } from 'lucide-react';

/**
 * Global reusable Lightbox Modal for high-res images and documents.
 * Standardizes keyboard shortcuts (ESC), background locking, and accessibility.
 */
export default function ImageLightbox({ isOpen, onClose, src, title, subtitle, footerText }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !src) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/95 backdrop-blur-md animate-fade"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full max-h-[92vh] bg-obsidian-950 rounded-2xl overflow-hidden border border-white/20 shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {(title || subtitle) && (
          <div className="p-4 bg-obsidian-900 border-b border-white/10 flex items-center justify-between gap-4">
            <div>
              {title && (
                <h4 className="font-display font-bold text-sm sm:text-base text-white line-clamp-1">
                  {title}
                </h4>
              )}
              {subtitle && (
                <p className="text-xs text-amberGold line-clamp-1">
                  {subtitle}
                </p>
              )}
            </div>
            <button
              onClick={onClose}
              className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors flex-shrink-0"
              aria-label="Cerrar visor"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}

        <div className="p-2 sm:p-4 bg-black flex-1 overflow-auto flex items-center justify-center min-h-[300px] max-h-[78vh]">
          <img
            src={src}
            alt={title || "Vista ampliada"}
            className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg"
          />
        </div>

        {footerText && (
          <div className="p-3 bg-obsidian-900 border-t border-white/10 text-center text-xs text-slate-400">
            {footerText}
          </div>
        )}
      </div>
    </div>
  );
}
