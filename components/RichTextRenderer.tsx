import React from "react";

interface RichTextRendererProps {
  content: string;
}

const RichTextRenderer: React.FC<RichTextRendererProps> = ({ content }) => {
  return (
    <article
      className="rich-text"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default RichTextRenderer;
