/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useEffect, useRef } from 'react';
import { Artifact } from '../types';
import { RetryIcon } from './Icons';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface ArtifactCardProps {
    artifact: Artifact;
    isFocused: boolean;
    onClick: () => void;
    onRetry: () => void;
}

const ArtifactCard = React.memo(({ 
    artifact, 
    isFocused, 
    onClick,
    onRetry
}: ArtifactCardProps) => {
    const codeRef = useRef<HTMLPreElement>(null);

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging
    } = useSortable({ id: artifact.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    // Auto-scroll logic for this specific card
    useEffect(() => {
        if (codeRef.current) {
            codeRef.current.scrollTop = codeRef.current.scrollHeight;
        }
    }, [artifact.html]);

    const isBlurring = artifact.status === 'streaming';

    return (
        <div 
            ref={setNodeRef}
            style={style}
            className={`artifact-card ${isFocused ? 'focused' : ''} ${isBlurring ? 'generating' : ''} ${isDragging ? 'dragging' : ''}`}
            onClick={onClick}
            {...attributes}
            {...listeners}
        >
            <div className="artifact-header">
                <span className="artifact-style-tag">{artifact.styleName}</span>
            </div>
            <div className="artifact-card-inner">
                {isBlurring && (
                    <div className="generating-overlay">
                        <pre ref={codeRef} className="code-stream-preview">
                            {artifact.html}
                        </pre>
                    </div>
                )}
                
                {artifact.status === 'error' && (
                    <div className="error-overlay">
                        <div className="error-content">
                            <span className="error-message">{artifact.errorMessage}</span>
                            <button 
                                className="retry-button" 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onRetry();
                                }}
                            >
                                <RetryIcon /> Retry
                            </button>
                        </div>
                    </div>
                )}

                <iframe 
                    srcDoc={artifact.html} 
                    title={artifact.id} 
                    sandbox="allow-scripts allow-forms allow-modals allow-popups allow-presentation allow-same-origin"
                    className="artifact-iframe"
                />
            </div>
        </div>
    );
});

export default ArtifactCard;