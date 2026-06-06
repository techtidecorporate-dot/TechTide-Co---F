export function BlogStyles() {
  return (
    <style dangerouslySetInnerHTML={{ __html: `
      .blog-content-container p {
        margin-bottom: 1.25rem;
        line-height: 1.8;
        color: #4b5563;
        font-size: 1.125rem;
      }
      .blog-content-container h2, .blog-content-container h3 {
        color: #191a23;
        font-weight: 700;
        margin-top: 2rem;
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .blog-content-container h2::before {
        content: "";
        display: block;
        width: 5px;
        height: 1.3em;
        background-color: #453abc;
        border-radius: 99px;
      }
      .blog-content-container h2 { font-size: 1.875rem; }
      .blog-content-container h3 { font-size: 1.5rem; }
      .blog-content-container img {
        width: 100%;
        border-radius: 2rem;
        margin: 1.5rem 0;
        display: block;
      }
      .blog-content-container ul, .blog-content-container ol {
        margin-bottom: 1.5rem;
        padding-left: 1.5rem;
        color: #4b5563;
      }
      .blog-content-container ul {
        list-style-type: disc;
      }
      .blog-content-container ol {
        list-style-type: decimal;
      }
      .blog-content-container li {
        margin-bottom: 0.5rem;
        padding-left: 0.5rem;
      }
      .blog-content-container blockquote {
        border-left: 4px solid #453abc;
        padding: 1.25rem 2rem;
        background: #f9fafb;
        border-radius: 0 1rem 1rem 0;
        margin: 2rem 0;
        font-style: italic;
        font-size: 1.25rem;
        color: #374151;
      }
    ` }} />
  );
}
