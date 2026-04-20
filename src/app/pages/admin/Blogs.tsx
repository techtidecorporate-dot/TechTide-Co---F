import React, { useState, useEffect, useRef, useMemo } from "react";
import { blogAPI, BlogPost } from "@/api";
import {
  Plus,
  Edit2,
  Trash2,
  X,
  Save,
  Search,
  User,
  Calendar,
  Image as ImageIcon,
  Loader2,
  FileText,
  Globe,
  Tag,
  Clock,
  Layout,
  Type
} from "lucide-react";
import { toast } from "sonner";
import { sendNewBlogNotification } from "@/app/utils/newsletterService";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import imageCompression from 'browser-image-compression';

// Quill modules configuration
const quillModules = {
  toolbar: {
    container: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['link', 'image', 'code-block'],
      ['clean']
    ],
  }
};

const quillFormats = [
  'header',
  'bold', 'italic', 'underline', 'strike',
  'list', 'bullet',
  'link', 'image', 'code-block'
];

export default function BlogManagement() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [uploadingImage, setUploadingImage] = useState(false);
  const quillRef = useRef<ReactQuill>(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    author: "",
    readTime: "",
    uploadedDate: "",
    image: "", // This is the thumbnail
    tags: "",
    slug: "",
    seoTitle: "",
    seoDescription: "",
    seoKeywords: "",
    metaTags: "",
  });

  const [imagePreview, setImagePreview] = useState<string>("");

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const { data } = await blogAPI.getAll();
      setBlogs(data);
    } catch (error) {
      toast.error("Failed to fetch blogs");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContentChange = (value: string) => {
    setFormData(prev => ({ ...prev, content: value }));
  };

  const generateSlugFromTitle = (title: string) =>
    title
      .toString()
      .toLowerCase()
      .trim()
      .replace(/[\s\W-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  // Image handling logic for RTDB (Base64)
  const compressAndConvertToBase64 = async (file: File) => {
    const options = {
      maxSizeMB: 0.3,
      maxWidthOrHeight: 1200,
      useWebWorker: true,
    };

    try {
      const compressedFile = await imageCompression(file, options);
      return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(compressedFile);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = error => reject(error);
      });
    } catch (error) {
      console.error("Compression/Base64 error:", error);
      throw error;
    }
  };

  const handleThumbnailUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploadingImage(true);
      const base64 = await compressAndConvertToBase64(file);
      setFormData(prev => ({ ...prev, image: base64 }));
      setImagePreview(base64);
      toast.success("Thumbnail optimized and stored!");
    } catch (error) {
      toast.error("Failed to process thumbnail");
    } finally {
      setUploadingImage(false);
    }
  };

  const imageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;

      try {
        setUploadingImage(true);
        toast.info("Optimizing image for database...");
        const base64 = await compressAndConvertToBase64(file);
        
        const quill = quillRef.current?.getEditor();
        if (quill) {
          const range = quill.getSelection();
          if (range) {
            quill.insertEmbed(range.index, 'image', base64);
            quill.setSelection(range.index + 1, 0);
          }
        }
        toast.success("Image embedded!");
      } catch (error) {
        toast.error("Failed to process content image");
      } finally {
        setUploadingImage(false);
      }
    };
  };

  // Memoize modules to avoid re-renders
  const modules = useMemo(() => {
    return {
      ...quillModules,
      toolbar: {
        ...quillModules.toolbar,
        handlers: {
          image: imageHandler
        }
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const finalSlug =
      formData.slug?.trim() || generateSlugFromTitle(formData.title || "blog-post");

    const payload = { 
      ...formData, 
      slug: finalSlug,
      tags: formData.tags.split(',').map(t => t.trim()).filter(Boolean),
      seoKeywords: formData.seoKeywords.split(',').map(k => k.trim()).filter(Boolean)
    };

    try {
      if (editingBlog) {
        await blogAPI.update(editingBlog.id, payload);
        toast.success("Blog post updated");
      } else {
        const createdBlog = await blogAPI.create(payload);
        toast.success("Blog post published");

        // Use the proper data structure for notifications
        try {
          const summary = await sendNewBlogNotification(createdBlog.data as any);
          if (summary.successCount > 0) {
            toast.success(`Newsletter sent to ${summary.successCount} subscribers.`);
          }
        } catch (emailError) {
          console.error("Notification error:", emailError);
        }
      }
      setIsModalOpen(false);
      resetForm();
      fetchBlogs();
    } catch (error) {
      toast.error("Operation failed");
    }
  };

  const handleEdit = (blog: BlogPost) => {
    setEditingBlog(blog);
    const contentString =
      typeof blog.content === "string"
        ? blog.content
        : Array.isArray(blog.content)
        ? blog.content
            .map((block) => block.paragraph || block.content || block.text || "")
            .filter((t) => t)
            .join("\n\n")
        : "";

    setFormData({
      title: blog.title,
      description: blog.description || "",
      content: contentString,
      author: blog.author,
      readTime: blog.readTime || "",
      uploadedDate: blog.uploadedDate
        ? new Date(blog.uploadedDate).toISOString().split("T")[0]
        : "",
      image: blog.image || "",
      tags: (blog.tags || []).join(", "),
      slug: blog.slug || "",
      seoTitle: blog.seoTitle || "",
      seoDescription: blog.seoDescription || "",
      seoKeywords: blog.seoKeywords
        ? Array.isArray(blog.seoKeywords)
          ? blog.seoKeywords.join(", ")
          : blog.seoKeywords
        : "",
      metaTags: blog.metaTags || "",
    });
    setImagePreview(blog.image || "");
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        await blogAPI.delete(id);
        toast.success("Blog removed");
        fetchBlogs();
      } catch (error) {
        toast.error("Delete failed");
      }
    }
  };

  const resetForm = () => {
    setEditingBlog(null);
    setFormData({
      title: "",
      description: "",
      content: "",
      author: "",
      readTime: "",
      uploadedDate: "",
      image: "",
      tags: "",
      slug: "",
      seoTitle: "",
      seoDescription: "",
      seoKeywords: "",
      metaTags: "",
    });
    setImagePreview("");
  };

  const filteredBlogs = blogs.filter(
    (b) =>
      b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.author.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <FileText className="text-[#453abc]" />
            Blog Management
          </h2>
          <p className="text-gray-400">Total posts: {blogs.length}</p>
        </div>
        <button
          onClick={() => {
            resetForm();
            setIsModalOpen(true);
          }}
          className="flex items-center gap-2 bg-[#453abc] hover:bg-[#5a4fee] text-white px-6 py-3 rounded-xl transition-all shadow-lg shadow-[#453abc]/20"
        >
          <Plus size={20} />
          <span>New Post</span>
        </button>
      </div>

      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
          <Search size={20} />
        </span>
        <input
          type="text"
          placeholder="Search by title or author..."
          className="w-full pl-12 pr-4 py-3 bg-[#16161a] border border-white/5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#453abc]/50"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <div className="col-span-full py-20 flex flex-col items-center justify-center text-gray-500 gap-4">
            <Loader2 className="animate-spin text-[#453abc]" size={40} />
            <p>Fetching your stories...</p>
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="col-span-full py-20 text-center text-gray-500 border border-dashed border-white/10 rounded-3xl">
            No blog posts found. Time to write something!
          </div>
        ) : (
          filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-[#16161a] border border-white/5 rounded-2xl overflow-hidden shadow-xl hover:border-[#453abc]/30 transition-all flex flex-col group"
            >
              <div className="h-48 bg-white/5 relative overflow-hidden">
                {blog.image ? (
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full  group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-700 bg-[#0d0d0f]">
                    <ImageIcon size={32} />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(blog)}
                      className="p-2 bg-[#453abc] rounded-lg text-white hover:bg-[#5a4fee] transition-all"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(blog.id)}
                      className="p-2 bg-red-500/80 rounded-lg text-white hover:bg-red-500 transition-all"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex gap-2 mb-3 flex-wrap">
                  {(blog.tags || []).slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-[#453abc]/10 text-[#60c3e3] rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-[#453abc] transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-3 mb-6">
                  {blog.description}
                </p>
                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <User size={14} className="text-[#453abc]" />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-[#453abc]" />
                    <span>
                          {blog.createdAt
                            ? new Date(blog.createdAt).toLocaleDateString()
                            : "N/A"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="bg-[#0d0d0f] w-full max-w-5xl rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 flex flex-col max-h-[95vh]">
            <div className="flex items-center justify-between p-8 border-b border-white/5 bg-[#16161a]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#453abc]/20 flex items-center justify-center">
                  {editingBlog ? <Edit2 className="text-[#453abc]" size={20} /> : <Plus className="text-[#453abc]" size={20} />}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">
                    {editingBlog ? "Edit Masterpiece" : "New Story"}
                  </h3>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-medium">TechTide Editorial Suite</p>
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 text-gray-500 hover:text-white hover:bg-white/10 transition-all"
              >
                <X size={20} />
              </button>
            </div>

            <form
              onSubmit={handleSubmit}
              className="p-8 space-y-8 overflow-y-auto custom-scrollbar"
            >
              {/* Header Info */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-[#453abc] font-bold flex items-center gap-2">
                      <Type size={12} />
                      Headline
                    </label>
                    <input
                      name="title"
                      required
                      value={formData.title}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#453abc]/50 text-xl font-bold placeholder:text-gray-700 transition-all"
                      placeholder="Enter a compelling title..."
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold flex items-center gap-2">
                        <User size={12} />
                        Author Name
                      </label>
                      <input
                        name="author"
                        required
                        value={formData.author}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#453abc]/50 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold flex items-center gap-2">
                        <Clock size={12} />
                        Read Time
                      </label>
                      <input
                        name="readTime"
                        value={formData.readTime}
                        onChange={handleChange}
                        placeholder="5 min read"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#453abc]/50 transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold flex items-center gap-2">
                    <ImageIcon size={12} />
                    Thumbnail Image
                  </label>
                  <div 
                    className="relative w-full aspect-video rounded-2xl overflow-hidden border-2 border-dashed border-white/10 flex items-center justify-center group cursor-pointer hover:border-[#453abc]/50 transition-all"
                    onClick={() => document.getElementById('thumbnail-upload')?.click()}
                  >
                    {imagePreview ? (
                      <>
                        <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                           <Edit2 className="text-white" size={24} />
                           <span className="text-white font-bold text-sm">Change Image</span>
                        </div>
                      </>
                    ) : (
                      <div className="text-center p-6">
                        <ImageIcon className="mx-auto mb-2 text-gray-600" size={32} />
                        <p className="text-xs text-gray-500 font-medium">Click to upload thumbnail</p>
                        <p className="text-[10px] text-gray-600 mt-1 uppercase tracking-tighter">Optimized automatically</p>
                      </div>
                    )}
                    {uploadingImage && (
                      <div className="absolute inset-0 bg-[#0d0d0f]/80 flex items-center justify-center z-10">
                        <Loader2 className="animate-spin text-[#453abc]" size={32} />
                      </div>
                    )}
                    <input 
                      id="thumbnail-upload"
                      type="file" 
                      accept="image/*"
                      onChange={handleThumbnailUpload}
                      className="hidden"
                    />
                  </div>
                </div>
              </div>

              {/* Rich Text Editor */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-xs uppercase tracking-[0.2em] text-[#453abc] font-black flex items-center gap-2">
                    <Layout size={14} />
                    Content Experience
                  </label>
                  {uploadingImage && (
                    <div className="flex items-center gap-2 text-[10px] text-[#60c3e3] animate-pulse uppercase tracking-widest font-bold">
                       <Loader2 size={12} className="animate-spin" />
                       Processing Image...
                    </div>
                  )}
                </div>
                <div className="quill-premium-wrapper">
                  <ReactQuill
                    ref={quillRef}
                    theme="snow"
                    value={formData.content}
                    onChange={handleContentChange}
                    modules={modules}
                    formats={quillFormats}
                    placeholder="Tell your story. Add images, formatting, and rich content..."
                    className="bg-white/5 rounded-3xl overflow-hidden border border-white/5 min-h-[400px]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                 {/* Card Details */}
                <div className="space-y-6 bg-white/5 p-6 rounded-3xl border border-white/5">
                  <h4 className="text-[10px] uppercase font-black tracking-[0.3em] text-gray-500 mb-2">Display Meta</h4>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Exerpt (Short Summary)</label>
                    <textarea
                      name="description"
                      required
                      rows={3}
                      value={formData.description}
                      onChange={handleChange}
                      className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#453abc]/50 resize-none transition-all"
                      placeholder="Brief summary for the blog listing card..."
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold flex items-center gap-2">
                        <Tag size={12} />
                        Tags
                      </label>
                      <input
                        name="tags"
                        value={formData.tags}
                        onChange={handleChange}
                        placeholder="AI, Future, Dev..."
                        className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#453abc]/50 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold flex items-center gap-2">
                        <Globe size={12} />
                        Slug (URL)
                      </label>
                      <input
                        name="slug"
                        value={formData.slug}
                        onChange={handleChange}
                        placeholder="my-great-post"
                        className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#453abc]/50 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* SEO Optimization */}
                <div className="space-y-6 bg-[#453abc]/5 p-6 rounded-3xl border border-[#453abc]/10">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-[10px] uppercase font-black tracking-[0.3em] text-[#60c3e3]">Search Visibility</h4>
                    <span className="text-[8px] bg-[#60c3e3]/20 text-[#60c3e3] px-2 py-0.5 rounded-full font-bold">SEO ENGINE v2.0</span>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">SEO Title</label>
                    <input
                      name="seoTitle"
                      value={formData.seoTitle}
                      onChange={handleChange}
                      className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#453abc]/50 transition-all"
                      placeholder="Target Keyword | Site Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Meta Description</label>
                    <textarea
                      name="seoDescription"
                      rows={2}
                      value={formData.seoDescription}
                      onChange={handleChange}
                      className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#453abc]/50 resize-none transition-all text-sm"
                      placeholder="Engaging snippet for Google results..."
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Keywords</label>
                    <input
                      name="seoKeywords"
                      value={formData.seoKeywords}
                      onChange={handleChange}
                      placeholder="keyword1, keyword2..."
                      className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#453abc]/50 transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4 sticky bottom-0 bg-[#0d0d0f] py-4 border-t border-white/5 z-20">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-6 py-4 border border-white/10 rounded-2xl font-medium hover:bg-white/5 transition-all text-gray-400"
                >
                  Discard Changes
                </button>
                <button
                  type="submit"
                  disabled={uploadingImage}
                  className="flex-[2] px-6 py-4 bg-[#453abc] rounded-2xl font-bold hover:bg-[#5a4fee] shadow-xl shadow-[#453abc]/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {uploadingImage ? (
                    <Loader2 className="animate-spin" size={20} />
                  ) : (
                    <Save size={20} />
                  )}
                  <span>{editingBlog ? "Save & Update Post" : "Finalize & Publish Post"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        .quill-premium-wrapper .ql-toolbar {
          border: none !important;
          background: #16161a !important;
          border-bottom: 1px solid rgba(255,255,255,0.05) !important;
          padding: 1rem !important;
        }
        .quill-premium-wrapper .ql-container {
          border: none !important;
          font-family: 'Inter', sans-serif !important;
          font-size: 1.1rem !important;
        }
        .quill-premium-wrapper .ql-editor {
          min-height: 400px !important;
          color: #e2e8f0 !important;
          padding: 2rem !important;
        }
        .quill-premium-wrapper .ql-editor.ql-blank::before {
          color: #4b5563 !important;
          font-style: normal !important;
          left: 2rem !important;
        }
        .quill-premium-wrapper .ql-snow .ql-stroke {
          stroke: #94a3b8 !important;
        }
        .quill-premium-wrapper .ql-snow .ql-fill {
          fill: #94a3b8 !important;
        }
        .quill-premium-wrapper .ql-snow .ql-picker {
          color: #94a3b8 !important;
        }
        .quill-premium-wrapper .ql-snow.ql-toolbar button:hover .ql-stroke,
        .quill-premium-wrapper .ql-snow.ql-toolbar button:hover .ql-fill,
        .quill-premium-wrapper .ql-snow.ql-toolbar .ql-picker-label:hover {
          color: #453abc !important;
          stroke: #453abc !important;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255,255,255,0.1);
        }
      ` }} />
    </div>
  );
}
